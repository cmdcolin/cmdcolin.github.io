---
title: Using find . -exec sed is dangerous in a git repo
date: 2022-05-04
---

You want to find and replace all instances of a string in your repo, so you
google "find replace directory linux command". You end up here

https://stackoverflow.com/a/6759339/2129219

They tell us

```sh
find ./ -type f -exec sed -i -e 's/apple/orange/g' {} \;
```

Ignoring the fact that this syntax is very long and hard to type, this command
is dangerous to use in a git repository. Specifically, this can corrupt your
.git contents.

## Why?

This command is dangerous because, find . will enumerate dotfiles, including the
.git directory, and then of course will run the find and replace inside them. We
can see this in the following session

```sh
> mkdir corruptme
> cd corruptme
> git init
> echo "# README" > README.md
> git add README.md
> git commit -m "Initial commit"
> echo "Hello world, it is a beautiful day. I sure hope someone doesn't corrupt this git repository" >> README.md
> git commit -am "Update README.md"
> find .
.
./README.md
./.git
./.git/branches
./.git/config
./.git/COMMIT_EDITMSG
...more stuff...good indication the next command might be dangerous....
> find ./ -type f -exec sed -i -e "s/README/CORRUPTME/g" {} \;
> git status
error: index uses md extension, which we do not understand
fatal: index file corrupt
```

In this case, you may be able to recover it e.g. with
https://stackoverflow.com/questions/1115854/how-to-resolve-error-bad-index-fatal-index-file-corrupt-when-using-git

If you happened to replace some random text that is actually in an object file
though e.g. .git/objects

```sh
> find ./ -type f -exec sed -i -e "s/VHTHJM/OOOOOO/g" {} \;
> git status
error: inflate: data stream error (incorrect data check)
error: corrupt loose object '26cfc5964dfa5355a1747eb6eec6250aab5212d5'
fatal: unable to read 26cfc5964dfa5355a1747eb6eec6250aab5212d5
```

## What is better?

My take: Use ruplacer https://github.com/dmerejkowsky/ruplacer

This tool won't try to replace stuff in your .git directory. It will also skip
anything in .gitignore including e.g. node_modules. I was delighted to discover
this tool so, just spreading the word

Addendum: Reddit /u/Snarwin also recommended using git ls-files instead of find

```sh
git ls-files | xargs sed -i -e 's/apple/orange/g'
```
