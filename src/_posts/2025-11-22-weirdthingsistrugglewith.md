---
title: Weird problems I grapple with a lot
date: 2025-11-22
---

I solve a lot of problems that might share some semblence of universal struggle
that other people have, but also I am often off on a crazy mission that I'm not
sure anyone else would really care about

In any case, here are some struggles that I seem to grapple with a lot. Share
your own struggles. I may update this post over time with more detail or
examples

## Tension between web worker and main thread work

Web workers are cool. But they are really tough to grapple with. There is a
large serialization overhead and so you have to design complex systems for the
main thread and the web worker to communicate partial results

## Tension between making complex client side logic and simple HTML pages

If you're a React person thinking this guy is a damn fool, React is god's gift
to man, just know I have deeply invested years of my life into React, yet it
tends to enable us to make overly complicated apps, with tons of rope to hang
ourselves with

## Tension between trying to show big data in a web page and 'virtualizing'

People frequently talk about "virtualizing" when there's only like 100 items on
the page when using React. However, it is not a limitation of the DOM in most
cases, it is a React specific slowness you are experiencing. See
https://krausest.github.io/js-framework-benchmark/

Also, "virtualization" is generally a bad compromise with many negative user
experience consequences (janky scroll, ctrl+f not working, etc), and should not
be the first thing to reach for. Your users will notice the awkwardness of it
and you will have to invest a lot of engineering work to even make it passable

## Tension where in the system is best to cache

If you cache at too low of a level, how do you know how big the cache can be. If
you cache at a very high level, you have to wire that through every part of your
apps code? I don't use redis, I am thinking about caching client side js things.

## Tension where in the system is best to parallelize on

I have a system where data items go through a series of N processing steps

My first attempt at the system was to make N scripts, each performing the
processing on each item

However, now I try to synchronize with the remote, and I now literally re-run
every processing step on every data item on every update

You could think of other ways of doing this (a single script that runs all N
steps, and then only run the update on new files, but there is inertia from my
early choice to do things this way that makes it hard to change

## Other examples

Tension about what belongs in an application state (e.g. survives page refresh)
versus what is volatile and doesn't need persisting

- Tension about user preferences versus app level configuration
- Tension between assuming something can be resolved statically versus doing
  asynchronous lookup for everything
- Tension between designing abortability into synchronous computation heavy
  workflows
- Tension between designing abortability and caching
- Tension between building in a function vs relying on an external tool to do
  something
- Tension between seeing something measurably improve performance in a
  microbenchmark, but doing nothing at a automated end-to-end performance test
