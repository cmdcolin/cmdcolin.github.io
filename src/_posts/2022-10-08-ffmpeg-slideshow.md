---
title: Making an audio slideshow with ffmpeg
date: 2022-10-08T00:00:00.000Z
---

Inspired by a new trend of posting "playlists" on youtube with visual
accompaniment (https://www.youtube.com/watch?v=zG92ss_2Vjw&t=1937s), I wanted to
try to make my own with a slideshow. I used ffmpeg as the heavy lifting tool

## Step 1 - prepare your playlist

I like foobar2000, because it can combine multiple files into a single output
file.

Use right-click -> "Convert ..." in the foobar2000 playlist

![](/media/foobar1.png)

Use "Merge all tracks into one file" in the "Convert..." dialog

![](/media/foobar2.png)

Note: If you have a folder of mp3's only, you can directly concatenate them with
`cat *.mp3 > out.mp3` or use ffmpeg to concatenate them for a pure command-line
alternative.

## Step 2 - prepare the slideshow

Use 10 seconds per picture. Note the glob pattern is in quotes

```sh
ffmpeg -framerate 1/10 -pattern_type glob -i '*.jpg' pics.mp4
```

## Step 3 - combine the slideshow and playlist

```sh
ffmpeg -stream_loop -1 -i pics.mp4 -i playlist.wav -shortest -vcodec copy output.mp4
```

Using `-stream_loop -1` on pics.mp4 will loop the pics until playlist.wav ends,
but then limit itself to the length of the playlist.wav with `-shortest`

## Step 4 - upload to youtube

Done!

### Footnote 1: What if you just want a single picture?

Common for posting an album to youtube, you post the album art and some audio,
you can try searching from stackoverflow for options related to this

Example https://superuser.com/a/332867/415552

### Footnote 2: Distortion

The pictures may get distorted to fit the video frame, I haven't experimented
with options that modify this behavior
