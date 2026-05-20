---
title: Weird problems I grapple with a lot
date: 2025-11-22
---

I solve a lot of problems that might share some semblance of universal struggle
that other people have, but also I am often off on a crazy mission that I'm not
sure anyone else would really care about

In any case, here are some struggles that I seem to grapple with a lot. Share
your own struggles. I may update this post over time with more detail or
examples

## Tension between web worker and main thread work

Web workers are cool. But they are really tough to grapple with. There is a
large serialization overhead and so you have to design complex systems for the
main thread and the web worker to communicate partial results

Say you want to parse a large file in a web worker. You can send the whole
parsed result back, but if it's big, the serialization cost kills you. So you
start chunking results, streaming partial data back to the main thread, and now
you have a mini message-passing protocol to maintain. You also can't share
object references, so something like "give me row 50,000" means either
duplicating data on both sides or doing an async request/reply thing. And then
you realize the main thread still has to do work to render the results anyways,
so you haven't really decoupled the bottleneck, just moved part of it

## Tension between making complex client side logic and simple HTML pages

If you're a React person thinking this guy is a damn fool, React is god's gift
to man, just know I have deeply invested years of my life into React, yet it
tends to enable us to make overly complicated apps, with tons of rope to hang
ourselves with

The tradeoff shows up all the time: you need a little interactivity on a page,
so you reach for React, and suddenly you have a build step, a component tree,
state management, and a 200kb bundle for what could have been a `<details>` tag
and 10 lines of vanilla JS. But then you try to do something slightly more
complex in vanilla JS and you're manually wiring up event listeners, managing
DOM state, and wishing you had something. The sweet spot is always moving

## Tension between trying to show big data in a web page and 'virtualizing'

People frequently talk about "virtualizing" when there's only like 100 items on
the page when using React. However, it is not a limitation of the DOM in most
cases, it is a React specific slowness you are experiencing. See
https://krausest.github.io/js-framework-benchmark/

Also, "virtualization" is generally a bad compromise with many negative user
experience consequences (janky scroll, ctrl+f not working, etc), and should not
be the first thing to reach for. Your users will notice the awkwardness of it
and you will have to invest a lot of engineering work to even make it passable

I've seen people virtualize a list of 500 items in React when a plain `<table>`
with 500 rows renders instantly in raw HTML. The real question is: is your
rendering framework the bottleneck, or is the DOM actually the bottleneck?
Because if it's the former, maybe fix that instead of adding a complex
virtualization layer that breaks browser-native stuff like find-in-page

## Tension where in the system is best to cache

If you cache at too low of a level, how do you know how big the cache can be. If
you cache at a very high level, you have to wire that through every part of your
app's code? I don't use redis, I am thinking about caching client side JS things

Say you memoize a function itself: now every caller shares the same cache and
you can't bound its size without knowing how many unique inputs there will be.
Cache at the component level instead and you know when to invalidate, but now
every component that needs the result has to thread through the cache or manage
its own copy. There's no obviously right layer to put it at

## Tension where in the system is best to parallelize

I have a system where data items go through a series of N processing steps

My first attempt at the system was to make N scripts, each performing the
processing on each item

However, now I try to synchronize with the remote, and I now literally re-run
every processing step on every data item on every update

You could think of other ways of doing this (a single script that runs all N
steps, and then only run the update on new files), but there is inertia from my
early choice to do things this way that makes it hard to change

## Tension between what belongs in persistent state versus volatile state

Some state obviously survives a page refresh (the document you're editing) and
some obviously doesn't (whether a tooltip is open). But there's a huge gray
area. Does the scroll position persist? What about which tab is selected? Filter
settings? Zoom level? Every piece of state you persist is something you have to
migrate when the schema changes. But every piece you don't persist is something
the user loses on refresh

## Tension between static resolution and async lookup

You start with something known at build time: a config file, a schema, a plugin
list. It's a constant, everything is synchronous, life is simple. Then someone
needs it to be dynamic. Now every callsite that assumed a sync value needs a
promise, a loading state, and an error case. Refactoring from sync to async
touches everything. I've had this happen multiple times with configuration that
started as a static JSON file

## Other tensions

- Tension between user preferences versus app-level configuration. Is "color
  scheme" a user pref or an admin setting? What if both exist? You end up with a
  priority system (hardcoded default < app config < user preference < URL param)
  and each layer needs its own storage and merge logic
- Tension between abortability and synchronous computation. You want to abort a
  500ms computation when the user moves on, but JS is single-threaded. So either
  you restructure the computation to yield periodically (setTimeout chunking,
  generators, checking an abort signal), making the code way more complex, or you
  move it to a web worker and deal with all the web worker problems above. 99%
  of the time the computation finishes fast enough and the abort machinery is
  dead weight
- Tension between abortability and caching. If someone aborts an expensive
  operation midway, what do you cache? Nothing, and the next caller pays full
  cost? A partial result? Let it finish in the background to populate the cache
  even though nobody asked for it?
- Tension between building something in versus relying on an external tool.
  Should I use a JS library to parse this file format, or just call the
  canonical C tool as a subprocess? The JS library is more portable but often a
  partial reimplementation that doesn't handle the weird files. The external tool
  handles everything but now you have a system dependency and subprocess to
  manage
- Tension between microbenchmark wins and real-world performance. You optimize a
  hot path, microbenchmark shows 3x speedup, end-to-end test shows no
  difference. The hot path was 2% of total wall time. The reverse is also true:
  sometimes a change that looks negligible in a microbenchmark has a real impact
  because it reduces GC pressure or avoids a layout thrash
- Tension between making something configurable and just picking a reasonable
  default. Every config option is a decision you're pushing onto the user, plus
  code to maintain, document, and test. But hardcoding things means you'll get
  bug reports from people with different needs
- Tension between sharing code between projects and just copying it. A shared
  package means coordinated versioning, publishing, and breaking changes that
  ripple. Copy-pasting means divergence, but sometimes divergence is fine
  because the two uses evolve differently anyway
- Tension between being careful with memory and keeping code simple. You can
  null out references, use WeakRefs, pool objects, etc. But most of the time the
  GC handles it fine and the complexity isn't worth it. Until you hit the one
  case where it absolutely is
- Tension between handling errors locally versus bubbling them up. If you catch
  an error deep in the call stack, you can give a specific message but the
  caller never knows something went wrong. If you bubble it up, the caller can
  decide, but now every layer has to deal with the error case
