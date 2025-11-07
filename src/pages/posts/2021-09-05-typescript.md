---
title: >-
  Decrease your idle CPU usage when developing typescript apps with this one
  weird environment variable
date: 2021-09-05T00:00:00.000Z
layout: ../../layouts/MarkdownLayout.astro
---

TL;DR:

add this to your bashrc

```sh
export TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling
```

<hr/>

By default, the typescript watcher configuration e.g. tsc --watch or whatever is
run internally to a create-react-app typescript app (I see it in the process
manager as fork-ts-checker-webpack-plugin cpu usage) can have high idling (doing
nothing...) CPU usage

This is because the default configuration polls for file changes (constantly
asks the computer if there are changes every 250ms or so). There is an
alternative configuration for this to change it to a file watcher so it receives
file system notifications on file change. There is discussion here on this.

The main summary is that a env variable set to
TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling allows this

https://github.com/microsoft/TypeScript/issues/31048

The issue thread shows that it can go from roughly ~7% idle CPU usage to 0.2%.
This corresponds with what I see too after applying this! Detailed docs for
typescript discuss some of the reasoning being not making this the default

https://github.com/microsoft/TypeScript-Handbook/blob/master/pages/Configuring%20Watch.md#background

It claims that some OS specific behaviors of file watching could be harmful to
making it the default. For example, that (maybe?) on linux, it may use a large
number of file watchers which can exceed notify handles (this is a setting I
commonly have to increase in linux, guide here
https://dev.to/rubiin/ubuntu-increase-inotify-watcher-file-watch-limit-kf4)

PS: if you have a package.json of a `create-react-app --template typescript` or
something like this then you can edit the package.json to apply this
automatically

```
-"start": "react-scripts start"
+"start": "cross-env TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling react-scripts start"
```

Phew. I can already feel my laptop running cooler...or at least I can sleep more
soundly knowing that my readers adopt this and save some CPU cycles for planet
earth...and hopefully don't run into any of the caveats

Edit: It may be worth it to note, the 'UseFsEvents' part of this uses the
node.js fs.watch API and the polling based API is based on fs.watchFile

Fun table of how the watchers are implemented on different OSs
[[1](https://github.com/microsoft/TypeScript/issues/31048#issuecomment-495483957)]

```
On Linux systems, this uses inotify(7).
On BSD systems, this uses kqueue(2).
On macOS, this uses kqueue(2) for files and FSEvents for directories.
On SunOS systems (including Solaris and SmartOS), this uses event ports.
On Windows systems, this feature depends on ReadDirectoryChangesW.
On Aix systems, this feature depends on AHAFS, which must be enabled.
```

And in general, these should all respond more or less the same, but there are
small corner cases that are discussed
https://nodejs.org/docs/latest/api/fs.html#fs_availability

Disclaimer: it may be worth reading the reasons that typescript does not have
this enabled by default before pushing this into your dev environment and all
your teammates, but as far as I could tell, it seems ok!
