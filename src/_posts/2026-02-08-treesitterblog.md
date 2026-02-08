---
title: Using tree sitter for syntax highlighting on the blog
date: 2026-02-07
---

Owners of a programming blogs are obligated to make numerous frivolous tweaks
and modifications to their blog infrastructure in order to avoid actually
writing about things.

However, in certain cases, the blog authors can actually make posts about how
they modified their blog infrastructure in order to fulfill their blog posting
quota.

Here, I will describe an effort in this vein where I used arborium to achieve
tree-sitter based syntax highlighting for posts on this blog

## What is arborium

Arborium describes itself as "a tree-sitter distribution". It is a Rust based
effort to redistribute tree-sitter grammars for easy syntax highlighting and was
described here, with a large effort to add highlighting to even non-rust code on
docs.rs https://fasterthanli.me/articles/introducing-arborium

## Using the arborium NPM packages?

There are a number of NPM packages that arborium distributes, which might seem
like they make sense to use because I am using other js based infrastructure for
this blog, however assume the use of a 'window' object and are made for running
in the browser, while my goal was to statically generate the highlighted tags in
order to achieve that minimal javascript and dependencies

## Statically generating the tree-sitter based highlighting from markdown with the arborium CLI

Instead of using the NPM packages, we can use the arborium CLI

Note: I had claude code make a rehype (markdown pre-processor) plugin that runs
`arborium --lang X --html` for each fenced code block at build time. The CLI
reads source code from stdin and outputs HTML with custom elements.

The plugin parses that into HAST nodes that Astro serializes into the final
HTML.

## Language showcase

### TypeScript

```typescript
interface User {
  name: string
  email: string
  roles: readonly string[]
}

function greet(user: User): string {
  const { name, roles } = user
  if (roles.includes('admin')) {
    return `Welcome back, ${name}!`
  }
  return `Hello, ${name}.`
}

const users: Map<string, User> = new Map()
```

### TSX (TypeScript React)

```tsx
import { useState, useEffect } from 'react'

interface Todo {
  id: number
  text: string
  done: boolean
}

export default function TodoList({ initialItems }: { initialItems: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialItems)
  const [input, setInput] = useState('')

  useEffect(() => {
    document.title = `${todos.filter(t => !t.done).length} remaining`
  }, [todos])

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }])
      setInput('')
    }
  }

  return (
    <div className="todo-app">
      <h1>Todos</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
```

### Rust

```rust
use std::collections::HashMap;

#[derive(Debug)]
struct Config {
    values: HashMap<String, String>,
}

impl Config {
    fn new() -> Self {
        Config {
            values: HashMap::new(),
        }
    }

    fn get(&self, key: &str) -> Option<&str> {
        self.values.get(key).map(|s| s.as_str())
    }
}

fn main() {
    let mut config = Config::new();
    config.values.insert("theme".into(), "dark".into());

    match config.get("theme") {
        Some(theme) => println!("Using theme: {theme}"),
        None => println!("No theme set"),
    }
}
```

### Python

```python
from dataclasses import dataclass
from typing import Iterator

@dataclass
class Point:
    x: float
    y: float

    def distance_to(self, other: "Point") -> float:
        return ((self.x - other.x) ** 2 + (self.y - other.y) ** 2) ** 0.5

def fibonacci() -> Iterator[int]:
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

points = [Point(i, i * 2.5) for i in range(5)]
for p in points:
    print(f"{p} -> distance to origin: {p.distance_to(Point(0, 0)):.2f}")
```

### Go

```go
package main

import (
	"fmt"
	"sync"
)

func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
	defer wg.Done()
	for j := range jobs {
		fmt.Printf("worker %d processing job %d\n", id, j)
		results <- j * 2
	}
}

func main() {
	jobs := make(chan int, 100)
	results := make(chan int, 100)

	var wg sync.WaitGroup
	for w := 1; w <= 3; w++ {
		wg.Add(1)
		go worker(w, jobs, results, &wg)
	}

	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs)

	wg.Wait()
	close(results)
}
```

### HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example</title>
    <style>
      body {
        font-family: system-ui, sans-serif;
        color-scheme: light dark;
      }
    </style>
  </head>
  <body>
    <h1>Hello</h1>
    <ul id="list"></ul>
    <script>
      const items = ['Apple', 'Banana', 'Cherry']
      const list = document.getElementById('list')

      for (const item of items) {
        const li = document.createElement('li')
        li.textContent = item
        li.addEventListener('click', () => {
          li.classList.toggle('selected')
          const selected = document.querySelectorAll('.selected')
          console.log(`${selected.length} items selected`)
        })
        list.appendChild(li)
      }

      async function fetchData(url) {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        return response.json()
      }
    </script>
  </body>
</html>
```

### Bash

```bash
#!/bin/bash
set -euo pipefail

readonly LOG_DIR="/var/log/myapp"

rotate_logs() {
  local max_size=$((10 * 1024 * 1024))
  for log in "$LOG_DIR"/*.log; do
    if [[ $(stat -f%z "$log" 2>/dev/null || stat -c%s "$log") -gt $max_size ]]; then
      mv "$log" "${log}.$(date +%Y%m%d%H%M%S).bak"
      echo "Rotated: $log"
    fi
  done
}

rotate_logs
echo "Done at $(date)"
```

### CSS

```css
:root {
  --bg: #ffffff;
  --fg: #1a1a1a;
  --accent: #0055ff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0d1117;
    --fg: #e6edf3;
    --accent: #58a6ff;
  }
}

.card {
  background: var(--bg);
  color: var(--fg);
  border: 1px solid color-mix(in srgb, var(--fg) 20%, transparent);
  border-radius: 8px;
  padding: 1.5rem;

  & h2 {
    color: var(--accent);
    margin: 0 0 0.5rem;
  }

  &:hover {
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  }
}
```

### JSON

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "astro": "^6.0.0",
    "hast-util-to-string": "^3.0.1",
    "unist-util-visit": "^5.1.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build"
  }
}
```

### R

```r
library(ggplot2)

fibonacci <- function(n) {
  if (n <= 1) return(n)
  a <- 0
  b <- 1
  for (i in 2:n) {
    temp <- b
    b <- a + b
    a <- temp
  }
  b
}

fibs <- sapply(1:20, fibonacci)

df <- data.frame(
  n = 1:20,
  value = fibs,
  is_even = fibs %% 2 == 0
)

ggplot(df, aes(x = n, y = value, color = is_even)) +
  geom_point(size = 3) +
  geom_line(alpha = 0.5) +
  scale_y_log10() +
  labs(title = "Fibonacci Sequence", x = "n", y = "F(n)") +
  theme_minimal()
```

### TOML

```toml
[package]
name = "arborium-cli"
version = "0.1.0"
edition = "2021"

[dependencies]
arborium = { version = "2.12", features = ["cli"] }
clap = { version = "4", features = ["derive"] }

[[bin]]
name = "arborium"
path = "src/main.rs"
```

## Conclusion

I thought this might help users who google "tree sitter blog syntax
highlighting" and variations like this to have a potential solution

### Footnote 1

Why does @arborium/arborium not work outside the browser? Or, why does
@arborium/arborium require `window` and thus not work well in pure node.js
environments?

Claude code generated...reasoning...

- The npm package uses `window.arboriumHost` (in `loader.ts:278`) as a bridge
  for the Rust/WASM host to call back into JavaScript for grammar loading and
  parsing.
- The WASM host is compiled via `wasm-bindgen` expecting `window`, and grammars
  are fetched from a CDN at runtime, making it browser-only.

## Footnote 2

See also https://en.wikipedia.org/wiki/Tree_sitting
