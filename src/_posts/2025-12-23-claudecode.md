---
title: My experiences with AI and Claude Code in 2025
date: 2025-12-23
---

I figured, for the history of the universe, that I would write down some of my
experiences with AI. I have this feeling that people think that talking about AI
usage is a little taboo. However, these tools have taken our field and the world
by storm. People should write more about their experiences with them, if only to
help people understand. I put the year 2025 in the title to make it more timely
for end-of-year wrap up posts, but I'll add some pre-2025 background also

## My (mostly pre-2025) impressions with AI

My first experience with AI was being incredibly skeptical. I really disliked
OpenAI...I still do not use any of their products, and I really dislike seeing
prose that I can tell was generated with it.

However, early on I started seeing projects everywhere on GitHub that require an
"OPENAI_API_KEY". I did not use these, and did not really feel like I needed to,
though there was clearly some "blood in the water" making everyone go crazy

My early feelings about AI also involved being upset that AI couldn't "cite its
sources". I had this idea in my head that AI was a galaxy brain...or should be a
galaxy brain... that could draw from an immense pool of knowledge. However, one
thing that shifted my thinking on this was reading "4.2 Gigabytes, or: How to
Draw Anything" https://debugti.me/posts/how-to-draw/

This made me realize AI are 'compressed representations' of a lot of
knowledge...weird!

## My early experiences with using AI chatbots

Despite my OpenAI stance, once Google came out with Bard, I started asking it
some questions. It was pretty interesting.

Some early experiences I had with Bard was trying to get it to convert code from
one language (python) to another (JS). It was very good at doing this, which was
wild to me. These language translations would take a lot of time to do by
hand... and it would spit it out in seconds!

## Early experience with text editor integration: Avante.nvim

My first experience with 'buying' into the AI was purchasing 20 bucks of API
tokens from Anthropic, and using it with Avante.nvim. I liked the minimalism of
Avante.nvim, and got stuck with the keybindings, and didn't really want to try
any others like CodeCompanion. You could launch a chat sidebar with `<leader>aa`
or get it to edit a block with visual select `<leader>ae`

I had some pretty unique successes with Avante.nvim and Claude. It fixed some
bugs parsing a very complex file format (CRAM). I can't imagine it had much
'training' data on this, but it came up with a very successful solution to a
weird bug, and I posted a full chatlog on my early PRs using this (example Dec
2024, https://github.com/GMOD/cram-js/pull/150)

Around February 2025, Claude introduced 3.7 which added tool calling, which are
basically 'agentic' workflows. These were integrated with Avante.nvim but they
were not super reliable. I was pretty unhappy with the tool calling because it
seemed like it did not work well. I reported several bugs related to this on the
Avante.nvim github (e.g. "bug: Avante Gets stuck on tool calling and never
progresses past that point", "bug: Sonnet just runs in loops, reading the same
file over and over again", etc.). It also costs more in API tokens

In any case, one rainy day in May 2025 when Avante.nvim was really not working
and I felt very stuck. On reflection, I think that's when I realized that maybe
Avante.nvim was causing me more grief than help...see also Footnote 2

## Switching to Gemini CLI and Claude Code

Not sure what exact date, but eventually, I decided to try Claude Code. I
watched a video on YouTube almost right after it came out in February 2025,
https://www.youtube.com/watch?v=AJpK3YTTKZ4, and I immediately saw that Claude
Code could be very powerful, but I didn't actually jump in and try it. It still
seemed maybe "not for me" as I had my Avante.nvim integration.

However, I think once I saw Gemini CLI get released, I was like, ok I should try
that out. The Gemini CLI has a free tier. Gemini CLI did ok, but it seemed not
quite as powerful as Claude. I had also already used Claude via the Avante.nvim
integration, so I switched to Claude Code

I started making Claude Code do very challenging tasks, and it was quite
successful on many of them. One of the most mindboggling things it has done to
date for me, and there are many, is that it completely reached into a very
complex codebase called Bandage, a C++ codebase, and managed to compile it using
emscripten to WASM and use it in Javascript. This produced
https://github.com/cmdcolin/bandagejs It is a demo that I still need to work on,
but I was pretty mindblown by this

## Switching from API billing to subscription

I am not a big fan of subscriptions, but I also started burning through a lot of
API tokens. I'm talking like...it burned through 50+ bucks to do that bandageJS
project even though it only did it in a couple hours

The cost was high, but at the same time it would literally make breakthroughs
that I would (likely) never have done. To try to bring 'down the cost' I decided
to change to a subscription at some point.

I bought the basic 20 dollar tier of Claude, and ran out of it immediately. Then
I upgraded to Claude Max and now am at 100 bucks a month. That's where I am
"happily" sitting now.

I can sometimes 'max out' the Claude Max tier but it is probably the right level
for me. This is a weird thing to 'confess' but I buy the subscription myself,
and do not get it re-imbursed through my work. Might need to have that talk at
some point with my boss.

## How I use Claude Code

### Running multiple Claude Code sessions at once

I frequently have 2-3 Claude Code sessions going in different terminals, and I
assign them distinct tasks

I have seen some people use 'git worktrees' to enable parallel Claude Code
sessions, but I generally just use multiple separate clones of the repo

This is a little chaotic on the brain, as you have to mentally juggle multiple
distinct tasks, but it lets you literally solve like...2-3x the bugs

### Telling Claude Code to simplify and refactor repeatedly

After almost every question, I will ask it something like "now that we have a
working system, are there any simplifications or refactorings that you would
make"

Maybe there is more optimal wording but in general it can identify some
reasonable simplifications that are good-to-have

### Telling Claude Code to find optimizations

I work with 'big data', and being fast is important. A lot of the optimizations
that Claude Code recommends do not move the needle at all, but if you set up a
benchmark, as I wrote about previously
https://cmdcolin.github.io/posts/2025-11-24-simplebench/ you can start to
measurably achieve speed improvements

### Telling Claude Code to vendor entire NPM packages

Our app uses a variety of NPM packages, and some of them are quite old by now.

Sometimes this doesn't really matter, but when you start to 'ossify' and you can
only use version 1.0.x of some package because of reason Y, it is really
annoying. One way to plow through this is you can ask Claude Code to vendor the
entire package, and subsequently make bugfixes or improvements, update it to use
typescript, remove unused functionality, and more

I read this essay sometime in 2025 and it was influential to me regarding
vendoring: https://htmx.org/essays/vendoring/

I am a big fan of using libraries, but the open source library ecosystem
threatened by giant hacks like Shai-Halud
(https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem)

The reality though is you are now responsible for maintaining this 'dependency'
yourself but over time you basically do battle with almost every dependency you
take on at some level. See also
https://nolanlawson.com/2025/11/16/the-fate-of-small-open-source/

## Concluding thoughts

This is only a brief snapshot into my Claude Code usage. AI (applied to
everything these days) is scary, exciting, dystopian...it's a lot

AI coding is a superpower you can use, but it is also a superpower your
competition can use to leapfrog you and your work...

However, so much AI usage is derivative drivel that rips off what others create.
I think human-in-the-loop produces the best results.

In any event...Good luck out there, and happy holidays

## Footnote 1

The rabid anti-AI sentiment on Reddit (generally criticizing it for being
inadequate, which increasingly is not true), combined with increasing AI
generated text and rage/engagement bait made me completely quit Reddit and
social media in general in mid 2025.

Now, I just watch random YouTube videos if I need a dopamine hit. I feel bad
that I won't be able to help out random strangers that are asking Reddit
questions, but I have more time and don't have my brain halfway into a random
internet argument.

## Footnote 2

This was also a little bit of a harbinger of things to come. When the AI is not
working...or you run out of tokens...you don't have the wind behind your sails
anymore

## Footnote 3

This post was inspired by
https://nolanlawson.com/2025/12/22/how-i-use-ai-agents-to-write-code/

His post includes a note about customizing your CLAUDE.md

My ~/.claude/CLAUDE.md is fairly minimal. I instruct it not to run tests and
stuff because it can take a long time on the large-ish (100k LOC) codebase I
work on. Exact copy of my CLAUDE.md:

```
Please do not run tests, lint, format, or build manually. Just ask me to run
them and report results back. Use yarn v1 instead of npm

For typescript, avoid adding explicit return types and avoid using 'as' to cast
types where possible

We use noUncheckedIndexedAccess in most of our tsconfig, so be aware of this

Be minimal about commenting code, if the code is self explanatory it needs no
comment

Prefer node --experimental-strip-types over tsx or other solutions

I tend to not like "early return" style code

Do not use push(...list), it can cause stack overflow

If we are in the process of debugging an issue, please do not remove debug
logging unless instructed
```

## Footnote 4

Should you use compact? Probably only if you really feel like the conversation
previous to where you are at needs to be preserved
