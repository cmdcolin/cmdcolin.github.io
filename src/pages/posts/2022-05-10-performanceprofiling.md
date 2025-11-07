---
title: Notes on performance profiling JS applications
date: 2022-05-10T00:00:00.000Z
layout: ../../layouts/MarkdownLayout.astro
---

Keeping your program fast is important for

- user satisfaction in everyday apps
- making certain things tractable

In our application, we visualize some large-ish datasets using the browser and
javascript

## The Chrome profiler

I use the Chrome DevTools "Performance" profiler, which is a
statistical/sampling profiler
https://en.wikipedia.org/wiki/Profiling_(computer_programming)#Statistical_profilers

This means it samples at some rate and see's where in the callstack the program
is executing.

- If you see large rectangles in the profiler, you may have a long running
  function
- If you see many small rectangles, your small function may be called many times

Note: sometimes your function may be so fast, it is rarely or never encountered
by the sampling. It is a good thing (TM) to be this fast, but I mention it to
note that the sampling profiler does not give us a complete log of all function
calls.

## Creating a flamegraph from the Chrome profiler results

Note: sometimes, it is also useful to see the results as a "flamegraph" (see
https://www.brendangregg.com/flamegraphs.html)

The website https://www.speedscope.app/ can create "flamegraph" style figures
for Chrome profiling results

Update: Firefox actually has the concept of flamegraph built into their
profiler. In 2022, I switched to using Firefox as my daily driver, so enjoy this
built-in feature.

## Stacking up many small optimizations

Working with large datasets, sometimes your program will take a long time to
complete. Especially if you work with javascript in the browser, it is a
challenge to make things go fast. But you can use micro optimizations to help
improve performance over time.

For example, say a program takes 30 seconds to run on a certain dataset

If you do profiling and find a couple microoptimizations that give you a 15%,
10% and 5% performance improvement, then you program now takes 20 seconds to
run. That is still not instantaneous, but it is saving users a good 10 seconds.

## Examples of micro optimizations

- Using `Map` instead of `Object` can often get small performance boosts
- Comparing value against `undefined` e.g. `if(val===undefined)` vs just
  comparing against falsy e.g. `if(!val)`
- Using `TypedArray`/`Uint8Array` natively instead of `Buffer` polyfill. This
  one is a kicker for me because we relied on `Buffer` polyfill, and webpack 5
  stopped bundling polyfills by default which made us wake up to this
- When converting `Uint8Array` to string, use `TextDecoder` for large strings,
  and just small string concatenations of `String.fromCharCode` for small ones.
  There is an inflection point for string size where one is faster
- Use `for` loops instead of `Array.prototype.forEach`/`Array.prototype.map`. I
  think similar to above, there is an inflection point (not where it gets faster
  in the `forEach`/`map` case, but where you can choose to care whether the
  small performance diff matters) based on number of elements in your array
- Pre-allocate an array with `new Array(N)` instead of just `[]` if possible

I have tried to keep track of more microoptimizations here, but they are pretty
specific to small examples and may not generalize across browsers or browser
versions https://gist.github.com/cmdcolin/ef57d2783e47b16aa07a03967fd870d8

## Examples of macro optimizations

Oftentimes, large scale re-workings of your code or "macro" optimizations are
the way to make progress.

A macro optimization may be revealed if you are looking at your performance
profiling result and you think: this entire section of the program could be
reworked to remove this overhead

In this case, it is hard to advise on because most of these will be very
specific to your particular app.

Just as a specific example of a macro optimization I undertook:

We use web workers, and had to serialize a lot of data from the web worker to
the main thread. I did a large re-working of the codebase to allow, in
particular examples, the main thread to request smaller snippets of data from
the web worker thread on-demand (the web worker is kept alive indefinitely)
instead of serializing all the web worker data and sending to the main thread.

This change especially pays off with large datasets, where all that
serialization/data duplication is computationally and memory expensive. Fun
fact: I remember sitting at a table at a conference in Jan 2020 talking with my
team at the Plant and Animal Genome conference, thinking that we should make
this change -- finally did it, just took 2 years. [1]

## End-to-end optimization testing

In order to comprehensively measure whether micro or macro optimizations are
actually improving your real world performance, it can be useful to create an
end-to-end test

For our app, I created a `puppeteer` based test where I loaded the website and
waited for a "DONE" condition. I created a variety of different tests which
allowed me to see e.g. some optimizations may only affect certain conditions.

Developing the end-to-end test suite tool awhile to develop (read: weeks to
mature, though some earlier result were available), but it let me compare the
current release vs experimental branches, and over time, the experimental
branches were merged and things got faster. [2]

## Note that memory usage can be very important to your programs performance.

Excessive allocations will increase "GC pressure" (the garbage collector will
invoke more Minor and Major GC, which you will see in your performance profiling
reuslts as yellow boxes)

## Conclusion

It is really important to look at the profiling to see what your program
actually is spending time on. You can make hypothetical optimizations all day
and dream of rewriting in rust but you may just have a slow hot path in your JS
code that, if optimized, can get big speedups.

Let me know about your favorite optimizations in the comments!

## Footnotes

[1] Note that things like SharedArrayBuffer also offer a means to share data
between worker and main thread, but these come with many security limitations
from the browser (and was even removed for a time while these security
implications were sussed out, due to Spectre/Meltdown vulnerabilities)

[2] I still have not found a good way to get automated memory usage profiling
via puppeteer. You can access window.process.memory in puppeteer, but this
variable does not provide info about webworker memory usage
https://github.com/puppeteer/puppeteer/issues/8258
