---
title:
  Are your optimizations making any improvement? A simple setup to benchmark two
  branches with vitest and puppeteer
date: 2025-11-25
---

![](/media/doggo3.png)

## Background

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

## Part 1. Creating 'unit benchmarks' using `vitest bench`

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

```bash
#!/bin/bash

set -e

CURRENT_BRANCH=$(git branch --show-current)
BRANCH1="${1:-master}"
BRANCH2="${2:-$CURRENT_BRANCH}"

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Error: Uncommitted changes detected. Please commit or stash your changes first."
  exit 1
fi

rm -rf esm_branch1 esm_branch2

echo "Building $BRANCH1 branch..."
git checkout "$BRANCH1"
yarn
yarn build
mv esm esm_branch1
echo "$BRANCH1" >esm_branch1/branchname.txt

echo "Building $BRANCH2 branch..."
git checkout "$BRANCH2"
yarn
yarn build
mv esm esm_branch2
echo "$BRANCH2" >esm_branch2/branchname.txt

echo "Build complete!"
echo "$BRANCH1 build: esm_branch1/index.js"
echo "$BRANCH2 build: esm_branch2/index.js"
```

Then in your package.json you can have

```json
{
  "name": "yourpackage",
  "version": "0.0.0",
  "scripts": {
    "build": "yourbuild",
    "prebench": "./scripts/build-both-branches.sh $BRANCH1 $BRANCH2"
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

Then if you have a function in your code that you want to optimize, like this...

```typescript
// src/index.ts
export function pow(n: number, exp: number) {
  return Math.pow(n, exp)
}
```

Then you can make a new branch with a genius idea that plain multiplying in a
loop would be better

```typescript
// src/index.ts
export function pow(n: number, exp: number) {
  let total = n
  for (let i = 1; i < exp; i++) {
    total *= n
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

That benchmark code is a little more verbose than it needs to be, but it is
quite re-usable across projects

The resulting benchmark report clearly prints the branchname that is the fastest
with some nice statistics

An example of this is here https://github.com/cmdcolin/simple_benchmark_example

## Part 2. Creating 'end-to-end' benchmarks using Puppeteer

Creating end-to-end benchmarks are really IMO where the rubber hits the road.
You have spent all day making microoptimizations, now it's time to confirm it
makes an impact.

With puppeteer, you can test against live real builds of your webapp. I
recommend using production builds (not a dev server) and using localhost only
stuff to avoid network variability. Note that I also said 'simple' but this
setup is a little more involved generally

Here is an example setup I have used:

- You create multiple builds of your (web-) app
- Store each build in a separate sub-directory in the `builds/` folder
- Create this bash script, which runs hyperfine to measure the total time taken
  by the puppeteer script

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

## Sidenote: Agentically optimizing your code

Formulating tests and benchmarks like this can allow AI to start automatically
or agentically iterating to find faster solutions.

You can just ask Claude code to "find optimizations", and see if it comes up
with anything that actually works. It's not always that good at finding very
impactful optimizations, but with a human in the loop you can guide it towards
some interesting solutions.

You can even tell Claude to analyze .cpuprofile files that are generated from
`node --cpu-prof script.ts`. See footnote here
https://github.com/cmdcolin/simple_benchmark_example?tab=readme-ov-file#analyze-cpuprofile

## Happy thanksgiving

![](/media/turkey.jpg)

Wild turkeys can run up to 25 miles per hour

[1] It is probably not absolutely required to use the compiled artifacts to run
the benchmarks. The benchmarks by default for example can just read from the
'src' folder. However, using the compiled artifacts is a fairly 'simple' way to
avoid collisions otherwise encountered from checking out the code from each
branch.

[2] You might get errors if different sets of e.g. package.json libraries are
used on the branch and main. In that case, you can install the union of the
libraries on your branch temporarily (should only be needed on your "BRANCH2")

[3] I say this as someone that has superstitiously implemented hundreds of
microptimizations for it to have absolutely zero effect in a end-to-end
benchmark. Conversely, these branch comparison tests have allowed me to ratchet
back-to-back 5-10% improvements to achieve significant gains
