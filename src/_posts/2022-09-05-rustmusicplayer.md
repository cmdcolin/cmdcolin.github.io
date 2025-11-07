---
title: Creating a music player using Rust/GTK4 - fml9000
date: 2022-09-05T00:00:00.000Z
---

I have started endeavoring to learn Rust. I did the rustlings exercises but I
knew the concepts would fade rapidly from my brain without some practice. I have
now started making a music player using Rust+GTK4.

I chose GTK4 to have a linux native GUI music player. Particularly, I have a
particular `foobar2000` setup that I wanted to emulate. I have used `foobar2000`
under wine (windows emulator on linux) and it's not terrible, but it has
background CPU consumption of about 15% idle and doesn't feel quite right
sometimes. I have used a variety of other linux music players such as
`quodlibet` (GUI/GTK based) and `cmus` (command line) but they didn't really
feel quite right.

### Choosing a tech stack

I started by attempting with `Relm4`, which I may return to at some point, but
trying to juggle learning Relm4-style widgets, GTK, and rust all at once was a
bit much. I stepped to using `gtk4-rs` directly.

### Create a "spreadsheet style" data grid of tracks with `ColumnView`

Then, I wanted to create a data grid showing to display e.g. a table with
artist, track, album, etc. I chose to use the GTK
[`ColumnView`](https://docs.gtk.org/gtk4/class.ColumnView.html) to drive this. I
stumbled around looking for example code, but there was none specifically for
the `ColumnView`. I also realized the `ListView` example from the `gtk4-rs`
examples with it's factory function had similar needs that the `ColumnView`.

I found out that I basically needed to create a `ListStore`. I thought if I
could make my own `GObject` subclass, it would solve everything, but I had
trouble getting making this work (rust doesn't have the concept of extending a
class for one thing, you implement various traits instead). Finally, I randomly
stumbled on this link using a `BoxedAnyObject` with a good example of storing
data in a ListStore
https://gtk-rs.org/gtk-rs-core/git/docs/glib/struct.BoxedAnyObject.html

The `BoxedAnyObject` is a `GObject`, so this was an good route to storing the
`ListView` items. There was no example code for connecting the `ListStore` with
the `ColumnView`, so I stuggled for awhile before realizing that the `ListView`
example in the `gtk4-rs` codebase has similar concepts.

See [1] for minimal usage of `ColumnView` that I contributed to the `gtk4-rs`
repo!

### Choosing an audio library

To actually play audio, I looked at a couple options. There was even one option
called GTK
[`MediaFile`](https://gtk-rs.org/gtk4-rs/git/docs/gtk4/struct.MediaFile.html)
which should to be able to play e.g. mp3s, making my job of making a media
player much simpler, but it produced an error
["GTK could not find a media module. Check your installation."](https://www.google.com/search?q=%22GTK+could+not+find+a+media+module.+Check+your+installation.%22&oq=%22GTK+could+not+find+a+media+module.+Check+your+installation.%22&aqs=chrome..69i57.267j0j7&sourceid=chrome&ie=UTF-8)
which had very few references on the internet. I figured this could be difficult
to solve or point to issues I could face later on making minimal executables for
users.

So, next I tried out `symphonia` (https://github.com/pdeljanov/Symphonia/).
Symphonia requires a lot more code to work (~1000 lines so far, copying from the
`symphonia-play` example) but it has broad file format support, pure-rust audio
stack, etc. I got confused about how to package it into an easy-to-use system
though, having to create a symphonia player on a separate thread, so I looked
elsewhere...

Next I turned to `rodio`. This works well, and automatically plays on a separate
thread, but I found two issues 1) I have to initialize the rodio player in "fn
main" and not anywhere else, or it would just play a short blip of audio
(https://github.com/RustAudio/rodio/issues/381). Then, it turned out that the
`rodio`
[`Sink`](https://docs.rs/rodio/0.14.0/rodio/struct.Sink.html#method.stop)
instance (which you pass audio to) cannot stop and then play new song xref
(https://github.com/RustAudio/rodio/issues/315). To workaround, I replace it
with a new `Sink`.

This required me to learn about `RefCell`. I googled probably about 50 things
just grasping at straws for awhile, but then landed on the solution of putting
the `Sink` in a `Rc<RefCell<Sink>>`, then that allows me to pass it into my
callback that handles double clicking the songs in the `ColumnView`, and then I
borrow the `RefCell` mutably to replace it with a new `Sink`.

### Reading audio metadata into an `sqlite` DB

I also wanted to have the option of reading and writing audio metadata.
Symphonia only reads metadata, so I found the `lofty` crate.

I also realized that reading tens of thousands of file's metadata at each app
startup would be slow, so I endeavored to store that data in an `sqlite`
database. I found that music players like `foobar2000` and `0xdeadbeef` have
databases of track metadata also (Example folder on `foobar2000` (1.x) for this
snap/foobar2000/433/foobar2000/profile/library/74E45640B1C695CC/meta-0001,
meta-0002, etc.)

I used the `walkdir` crate to walk a directory for files, `lofty` to read the
metadata, and then finally inserted the data into the `sqlite` db. I am still
working out the schema for the database but it provisionally associates data
with a primary key of filename.

### Learning about reference counting and move semantics

Originally I queried the sqlite database and stored a `Vec<Track>`, where
`Track` is a struct with artist, album, song title, etc. I realized that this
causes issues passing this around to different functions, and storing them in
the `BoxedAnyObject`, (example thread discussing issue
https://stackoverflow.com/questions/42954008/how-to-pass-one-vec-to-multiple-functions-in-rust)
so I changed functions to accept slices of the Vec, and to make it a
`Vec<Rc<Track>>` instead of just `Vec<Track>` (another related thread
https://users.rust-lang.org/t/self-has-an-anonymous-lifetime-but-it-needs-to-satisfy-a-static-lifetime-requirement/58641/3).

### Result

The current work is at https://github.com/cmdcolin/fml9000

![](/media/fml9000_1.png)

Screenshot shows the current look and feel. Some stuff in the screenshot is
mocked and not fully functional, but it has been a great learning experience
thus far

### Footnote 1: Creating a PR to the `gtk4-rs` repo to demonstrate example ColumnView usage

I created a PR (https://github.com/gtk-rs/gtk4-rs/pull/1111) to demonstrate
simple `ColumnView` usage. The code review that was given on the PR was
excellent. They explained how to simplify the code I submitted so that each grid
cell was very minimal (starting from a `gtk::Box` with a `gtk::Label` inside of
it, to just being a `gtk::Inscription` which is very fast). Big thanks to the
team for helping out with this!

After this hurdle was crossed, I felt much more comfortable in the GTK mindset,
and I quickly fleshed out some more UI for the app
