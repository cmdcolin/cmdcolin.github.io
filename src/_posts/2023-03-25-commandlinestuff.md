---
title: Command line productivity stuff
date: 2023-03-25T00:00:00.000Z
---

In 2016, I wrote a list of things that I found to be useful or interesting
information about the work I did at the time
https://cmdcolin.github.io/posts/2016-04-06

I thought it would be interesting to do the same now

## Aliases

I use many "double tap" aliases for lots of things. They are not very
'mnemonic', but I like the action of double tapping a key. Here is a list of
some of my favorites. I don't expect you will like the shortenings

- `qq` - runs `exit` to exit shell
- `ss` - runs `yarn start`
- `yy` - runs `yarn lint`
- `bb` - one of my favorite non-obvious ones, it lists all git branches recently
  used in a fzf window
  `git branch --sort=-committerdate| fzf --height=20% |xargs git checkout`
- `ccc` - runs `yarn test --maxWorkers=50%` - my audio glitches out without the
  maxWorkers
- `g` - `git status`. I will type out `git` for other subcommands, but I check
  git status a lot and didn't end up liking one letter `g` + subcommand added
- `gd` - `git diff`
- `gggg` - runs `git add . && git commit --amend --no-edit` so I can keep adding
  to the last commit instead of making new commits

Also recommend https://github.com/rupa/z, very quickly jump to commonly used
directories. I alias `z` to `p` because I try to type with my right hand.

## Neovim/editor stuff

I use neovim, I run lots of stuff off nightly, and my setup changes a lot just
as I like to tweak things, but here are some currently nice things I like about
my workflow

- Visual select block, use `gq` to wrap code comments in vim (or `gw` with lsp
  enabled, see reason why `gw` here
  https://vi.stackexchange.com/questions/39200/wrapping-comment-in-visual-mode-not-working-with-gq)

- Add `proseWrap: always` to your .prettierrc to wrap e.g. the lines in markdown
  files https://prettier.io/docs/en/options.html#prose-wrap

- Setting up "LSP support" in vim can be hard, but rewarding. I went through a
  whole gammut of using w0rp/ale, then coc.nvim, and then now 'built-in neovim
  LSP'. I like it, but it was to me not easy to set up. I recommend
  https://github.com/VonHeikemen/lsp-zero.nvim as it makes it easier

- Setup format on save. There are many ways to do it, but try to find out some
  way that works for you! For me, I use formatter.nvim to run prettier on most
  web dev filetypes. I use formatter.nvim and not a LSP-based format like
  null-ls because I just haven't gotten it to work with null-ls, but I don't
  think the formatter.nvim is a bad approach either -- formatter.nvim is a bit
  'simpler' compared to LSP based setups

- To search files in a current directory, I hit `,gg` (comma is my leader key)
  which triggers
  `map('n', '<leader>gg', '<cmd>Telescope git_files<cr>', default_opts)`, to
  search by text, I use `,ff` (comma is my leader key) which triggers
  `map('n', '<leader>ff', '<cmd>Telescope live_grep<cr>', default_opts)`

- I do not use a 'sidebar file browser' like nerdtree or similar. As mentioned
  above, I primarily navigate with `,gg` but I also use `vim-vinegar`, which
  let's me hit `-` and that opens a file browser of the current directory, and I
  can hop around and hit keys to rename (R), delete (D), create (%) new files in
  the directory. I often go back to the zsh shell to do more sophisticated
  operations

- Snippets: to `console.log`, I created a snippet where I can type `cl`, then it
  will popup an autocomplete window, which let's me choose to insert
  `console.log({|})` or `console.log(|)` where | indicates where the cursor goes
  after hitting enter. The `console.log({})` is very handy because if you fill
  in `console.log({variable})` then the output will be `{variable:5}` so you get
  the variable name and value easily (ref
  https://github.com/cmdcolin/dotfiles/blob/master/lua/snips.lua)

## Typescript

- Use `ts-expect-error` instead of `ts-ignore` -- probably a better intention
  most of the time

- Use type inference as much as possible -- personal opinion but even things
  like explicit function return type are often worse than the inferred type

## Web dev

- Try firefox profiler, it has built-in flamegraph style visualization. For
  Chrome profiler, you can use an external tool https://speedscope.app/ for
  similar

## Tmux

- `Ctrl+]` is my prefix in tmux. I use my right hand entirely to type it, then I
  split horizontally with `-` and vertically with `=`. My general coding
  generally has my screen split vertically with a horizontal on one or both
  sides

- Add the weather in your tmux footer I use
  `set -g status-left '#(curl "wttr.in/Albuquerque?u&format=3") ' `

- Enable truecolors in tmux! On my machine, I needed the following in my
  tmux.conf:

```
set -g default-terminal "tmux-256color"
set -ag terminal-overrides ",xterm-256color:RGB"
```

Without this, all the neovim color schemes I tried looked not just subtly off,
but significantly off, because it had only 256 colors without it (way less than
the millions with true color). Resources

https://gist.github.com/andersevenrud/015e61af2fd264371032763d4ed965b6
https://jdhao.github.io/2018/10/19/tmux_nvim_true_color/

## Music related

- `yda` - alias for getting a song from youtube
  `"youtube-dl -f 'bestaudio[ext=m4a]' "`
- `vaporwave` - a function to slow down the audio for a track with ffmpeg

```bash
function vaporwave() {
  ffmpeg -i "$1" -af "asetrate=44100*${2:-0.66},aresample=44100" "`basename $1 .m4a`.vaporwave.m4a"
}
```

example usage:

```
vaporwave file.mp3 # default slowdown factor of 0.66, outputs file.vaporwave.mp3
vaporwave file.mp3 0.5 # custom slowdown factor, outputs file.vaporwave.mp3
```

## Audio players

I worked on a couple projects to make custom music players to scratch my own
itch. I made a Rust one, to try to replace foobar2000, hoping to go back to the
days of yore when I used a desktop player, and then a web based one when I
realized I just listen to alot of youtube anyways now

- Rust+GTK4 app https://github.com/cmdcolin/fml9000
- Web based https://cmdcolin.github.io/ytshuffle/

Currently attempting to get the web based version approved by youtube compliance
because they give you quite a limited number of API requests, so unless I want
other users of my app to supply their own key, it seems prudent to get it
approved
