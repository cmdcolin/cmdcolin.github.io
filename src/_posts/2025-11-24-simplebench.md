---
title:
  Are your optimizations making any improvement? A simplified setup to benchmark
  two branches
date: 2025-11-25
---

![](/media/doggo.png)

So, you spend all day making "performance improvements" to make your code go
faster

But are you really making a difference? You might 'feel like it' but how can you
really tell? Ultimately systematically measuring the difference using a
benchmark is needed [3]. When you are doing optimization work, it is a level of
proof that is nearly as important as proving correctness of your code with
tests.

And, just like tests, you can have different levels of benchmarks

- unit benchmarks
- end-to-end benchmarks

Let's evaluate both of these scenarios

## Part 1 - 'unit benchmarks' using `vitest bench`

If you are already using vitest (it is a very popular test library), you might
be happy to know that there is a subtool called `vitest bench` that is built-in.

Simply make a file like `file.bench.ts` and it will be invoked by
`vitest bench`. API ref https://vitest.dev/api/#bench

But how do you create a `vitest bench` setup to compare two branches?

### A simple bash script to help

We can create a script to run the build process on two branches, defaulting to
current branch and main branch. I used bash, and it assumes that `yarn build`
outputs to a folder called "dist" [1] [2].

Then it renames the built output to `dist_branch1` and `dist_branch2` for each
branch. Then we can add these folders to our .gitignore easily.

It also puts the actual branchname in a .txt file in each folder, allowing the
benchmark itself to report the branchname in the report output.

It also tries to use "git stash" to help avoid issues with uncommitted changes,
but this can be a little tricky so be aware of it

```bash
#!/bin/bash

set -e

CURRENT_BRANCH=$(git branch --show-current)
BRANCH1="${1:-main}"
BRANCH2="${2:-$CURRENT_BRANCH}"

rm -rf dist_branch1 dist_branch2

echo "Building $BRANCH1 branch..."

STASH_OUTPUT=$(git stash)
if [[ "$STASH_OUTPUT" != "No local changes to save" ]]; then
  STASHED=1
else
  STASHED=0
fi

git checkout "$BRANCH1"
yarn
yarn build
mv dist dist_branch1
echo "$BRANCH1" >dist_branch1/branchname.txt

echo "Building $BRANCH2 branch..."
git checkout "$BRANCH2"
yarn
yarn build
mv dist dist_branch2
echo "$BRANCH2" >dist_branch2/branchname.txt

echo "Build complete!"
echo "$BRANCH1 build: dist_branch1/index.js"
echo "$BRANCH2 build: dist_branch2/index.js"

if [[ $STASHED -eq 1 ]]; then
  git stash pop
fi
```

Then in your package.json you can have

```json
{
  "name": "yourpackage",
  "version": "0.0.0",
  "scripts": {
    "build": "yourbuild",
    "prebench": "./scripts/build-both-branches.sh \"$BRANCH1\" \"$BRANCH2\""
    "bench": "vitest bench"
  }
}
```

Finally, you can run your benchmark like this:

```sh
# default: compare current branch against main
yarn bench

# or, set custom env variables to compare two arbitrary branches, branch1 and branch2
BRANCH1=branch1 BRANCH2=branch2 yarn bench
```

### An example script

Then if you have a function in your code like

```typescript
// src/index.ts
export function pow(n: number, exp: number) {
  return Math.pow(n, exp)
}
```

And you have the genius idea that plain multiplying in a loop would be better

```typescript
// src/index.ts
export function pow(n: number, exp: number) {
  let total = n
  for (let i = 1; i < exp; i++) {
    n *= exp
  }
}
```

Then you can make a benchmark like this

```typescript
import { readFileSync } from 'fs'
import { bench, describe } from 'vitest'

import { pow as pow1 } from '../dist_branch1/index.js'
import { pow as pow2 } from '../dist_branch2/index.js'

const branch1Name = readFileSync('dist_branch1/branchname.txt', 'utf8').trim()
const branch2Name = readFileSync('dist_branch2/branchname.txt', 'utf8').trim()

function benchPow({
  n,
  exp,
  name,
  opts,
}: {
  n: number
  exp: number
  name: string
  opts: {
    iterations?: number
    warmupIterations?: number
  }
}) {
  describe(name, () => {
    bench(
      branch1Name,
      () => {
        pow1(n, exp)
      },
      opts,
    )

    bench(
      branch2Name,
      () => {
        pow2(n, exp)
      },
      opts,
    )
  })
}

benchPow({
  name: 'pow',
  n: 2,
  exp: 10,
  opts: {
    warmupIterations: 100,
    iterations: 1000,
  },
})
```

The resulting benchmark report clearly prints the branchname that is the fastest
with some nice statistics

## Part 2 - Puppeteer end-to-end tests of your web app

The end-to-end tests are where the rubber hits the road. You have spent all f'n
day making microoptimizations, you are ready for it to make a difference. Time
to test in the real full build of your webapp

With puppeteer, you can test against live real builds of your webapp. I
recommend using production builds, no dev servers and localhost only stuff to
avoid network variability

Here is an example setup I have used:

- You create multiple builds of your (web-) app
- Store each build in a separate sub-directory in the `builds/` folder
- Create this bash script

```bash
#!/bin/bash


BASE_PORT=8000

rm -rf results
mkdir -p results
mkdir -p screenshots

## kill background scripts after finished
## https://spin.atomicobject.com/2017/08/24/start-stop-bash-background-process/
trap "exit" INT TERM
trap "kill 0" EXIT

X=$BASE_PORT
for i in builds/*; do
  npx http-server "$i" -p "$X" -s &
  echo "$X" "$i"
  X=$((X + 1))
done



declare -a commands=()
declare -a names=()
X=$BASE_PORT
for i in builds/*; do
  build_name=$(basename "$i")
  screenshot_path="screenshots/$build_name"
  commands+=("node scripts/profile_app.ts \"http://localhost:$X/\" \"$screenshot_path\"")
  names+=("-n" "$build_name")
  X=$((X + 1))
done

echo "Running hyperfine with the following commands:"
for cmd in "${commands[@]}"; do
  echo "  - $cmd"
done

hyperfine -i --export-json "$output_json.json" --warmup 1 --runs 8 "${names[@]}" "${commands[@]}"
echo -e "\n"

```

Then you can have your puppeteer script

```typescript
// profile_app.ts
import puppeteer from 'puppeteer'

const WAIT_TIMEOUT = 30_000 // 30 seconds

const url = process.argv[2]
const screenshotPath = process.argv[3]
const browser = await puppeteer.launch({
  args: ['--no-sandbox'], // needed on my linux setup, not ideal probably
})
const page = await browser.newPage()
await page.goto(url)

const params = new URL(url).searchParams
try {
  await page.waitForFunction(
    () =>
      document.querySelectorAll('[data-testid="thing_to_wait_for"]')
        .length === 1,
    {
      timeout: WAIT_TIMEOUT,
    },
  )
  // create screenshots to confirm visually
  await page.screenshot({
    path: screenshotPath + '.png',
  })


await browser.close()
```

This can be invoked directly as a .ts file with `node file.ts` (since node.js
automatically strips types now)! Optionally you can make puppeteer do user
actions like click around, etc. to test realistic scenarios. It is good to
confirm that you are visually testing the right thing by checking the outputted
screenshots.

## Sidenote: AI coding

Formulating tests and benchmarks like these can allow AI to start automatically
or agentically iterating to find faster solutions. You can just ask Claude code
to find optimizations, and see if it comes up with anything that actually
works.It's not always that good at finding very impactful optimizations, but
it's not terrible

You can even tell Claude to analyze cpuprofile files that are generated from
`node --cpu-prof script.ts`.

Here is a script that Claude made on the fly to analyze the .cpuprofile file

```typescript
import fs from 'fs'

const profileFile = process.argv[2] || fs.readdirSync('.').find(f => f.endsWith('.cpuprofile'))

if (!profileFile) {
  console.error('No .cpuprofile file found')
  process.exit(1)
}

console.log(`Analyzing: ${profileFile}\n`)

const profile = JSON.parse(fs.readFileSync(profileFile, 'utf8'))

// Build a map of node ID to node
const nodes = new Map()
for (const node of profile.nodes) {
  nodes.set(node.id, node)
}

// Calculate self time for each node
const selfTime = new Map()
const totalTime = new Map()

for (const sample of profile.samples) {
  const nodeId = sample
  if (!selfTime.has(nodeId)) {
    selfTime.set(nodeId, 0)
  }
  selfTime.set(nodeId, selfTime.get(nodeId) + 1)
}

// Get function names
function getFunctionName(node) {
  if (!node || !node.callFrame) return 'unknown'
  const funcName = node.callFrame.functionName || '(anonymous)'
  const url = node.callFrame.url || ''
  const fileName = url.split('/').pop() || url
  const location = fileName ? `${fileName}:${node.callFrame.lineNumber}` : 'native'
  return `${funcName} [${location}]`
}

// Build summary
const summary = []
for (const [nodeId, time] of selfTime.entries()) {
  const node = nodes.get(nodeId)
  if (!node) continue

  const funcName = getFunctionName(node)

  // Skip Node.js internals unless significant
  if (funcName.includes('internal/') && time < 50) continue

  summary.push({
    name: funcName,
    selfTime: time,
    percentage: (time / profile.samples.length) * 100
  })
}

// Sort by self time
summary.sort((a, b) => b.selfTime - a.selfTime)

console.log('Top time-consuming functions (by self time):\n')
console.log('Rank | Self Time | % Total | Function')
console.log('-----|-----------|---------|----------')

const top30 = summary.slice(0, 30)
for (let i = 0; i < top30.length; i++) {
  const item = top30[i]
  console.log(
    `${String(i + 1).padStart(4)} | ${String(item.selfTime).padStart(9)} | ${item.percentage.toFixed>
  )
}

console.log(`\nTotal samples: ${profile.samples.length}`)
console.log(`Duration: ${(profile.endTime - profile.startTime) / 1000000}ms`)


```

Alternatively, you can visually browse the cpuprofile yourself as a flamegraph
with e.g. `npx speedscope file.cpuprofile`

## Happy thanksgiving

![](/media/turkey.jpg)

[1] It is probably not absolutely required to use the compiled artifacts to run
the benchmarks. The benchmarks by default for example can just read from the
'src' folder. However, using the compiled artifacts is a fairly 'simple' way to
avoid collisions otherwise encountered from checking out the code from each
branch.

[2] One pitfall is if different sets of libraries are used on the branch and
main. In that case, you can install the union of the libraries on both branches
temporarily

[3] I say this as someone that has superstitiously implemented hundreds of
microptimizations for it to have absolutely zero effect in a end-to-end
benchmark
