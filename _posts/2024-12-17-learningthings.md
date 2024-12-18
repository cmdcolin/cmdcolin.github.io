---
title: Continuous learning and change
date: 2024-12-17
---

I am person that likes to live on the bleeding edge. Yes I fritter away time
upgrading software but my hope is always that the updates will help me...not
hurt

I used lsp-zero for my neovim setup for a long time. I think it does a great job
of providing a very low-amount-of-boilerplate way to get a lot of good neovim
functionality. However, they declared that they were stopping maintenance.

## Looking for a new setup

I could have stuck with lsp-zero for some X amount of time but I took a day to
reflect on my setup

One thing that i started to feel from my lsp-zero is that I was making very
weird customizations and keymaps that were idiomatic to me, but it sorta ended
up being awkward and maybe even limiting

Also, I was trying to learn some new things like "nvim-surround" but I had
trouble with it. Was it just my setup? Maybe it was
<https://github.com/kylechui/nvim-surround/issues/354> but this led me into even
more of a rabbithole where I was like, do i want mini.surround instead? What do
I want?

Maybe I need a distro....Continuous

## Looking for a distro

I started to see about adopting a distro

I looked at kickstart.nvim which is not really a distro, but it is also NOT a
minimal amount of config.

In fact, kickstart.nvim could be characterized as an extensive collection tricks
to deeply customize neovim, all in verbose form, as a demonstration of all the
types of customization you can do. This didn't necessarily gel with my minimal
interests

The tricks are very cool, but it is kinda overwhelming, and it was some question
to me about whether these tricks were best practice or not. A lot of maintenance
might be needed to pare it down to a more minimal form.

## Lazyvim

Lazyvim is a proper "distro" that does A LOT of stuff. It is a bit overwhelming.
But I am giving it a try. I am learning the keymaps

## Leader

- My old leader: ","
- New leader: " "

### Inlay hints: toggle on and off

This is the grey 'virtual text' that shows e.g. inferred typescript types, param
names, etc.

- `<leader>uh`
