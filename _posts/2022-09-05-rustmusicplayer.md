---
title: Creating a music player using Rust/GTK4 - fml9000
date: 2022-09-05
---

I have started endeavoring to learn Rust. I did the rustlings exercises but I
knew the concepts would fade rapidly from my brain without some practice. I
have now started making a music player using Rust+GTK4.

I chose GTK4 is to have a linux native GUI to scratch the itch that I've had in
lacking foobar2000 on linux. I have a particular foobar2000 setup that uses
default UI with four quadrants. I have used foobar2000 under wine and it's not
terrible, but it has background CPU consumption of about 14% idle and is just a
little "off". I have also used a variety of other GUI (quodlibet) and CLI
(cmus) apps on linux, but they didn't really feel quite right.

My first hurdle was getting started with GTK and Rust. I started by attempting
with Relm4, which I may return to at some point, but trying to juggle learning
Relm4-style widgets, GTK, and rust all at once was a bit much. I stepped to
using gtk4-rs directly.

Then, I wanted to create a data grid showing to display e.g. a table with
artist, track, album, etc. I chose to use the
[Gtk::ColumnView](https://docs.gtk.org/gtk4/class.ColumnView.html) to drive
this. There was no example code for this so I stuggled with this (for a couple
days) before realizing that the ListView example in the gtk4-rs codebase has
similar concepts (factory to create grid cells, etc). I created a PR
(https://github.com/gtk-rs/gtk4-rs/pull/1111) to demonstrate simple ColumnView
usage.

After this hurdle was crossed, I felt much more comfortable in the GTK mindset.
I would just search for various components and they often already existed which
was great. There was even one called Gtk::MediaFile which should to be able to
play e.g. mp3s, making my job of making a media player much simpler, but it
produced an error ["GTK could not find a media module. Check your
installation."](https://www.google.com/search?q=%22GTK+could+not+find+a+media+module.+Check+your+installation.%22&oq=%22GTK+could+not+find+a+media+module.+Check+your+installation.%22&aqs=chrome..69i57.267j0j7&sourceid=chrome&ie=UTF-8)
which had very few references on the internet. So, I am trying out symphonia
(https://github.com/pdeljanov/Symphonia/), with the hope being that it is
easier to package these for consumers of the app.

The current work is at https://github.com/cmdcolin/fml9000

![](/media/fml9000_1.png)

Some stuff in the screenshot is mocked and not fully functional, but it has
been a great adventure
