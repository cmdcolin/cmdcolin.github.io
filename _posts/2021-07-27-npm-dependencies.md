---
title: Do you understand your NPM dependencies?
date: 2021-07-27
---

You are writing a library...or you are writing an app and you want to publish
some of the components of it as a library...

Here are some questions in the form of comments

- Did you realize that your yarn.lock will be ignored for anyone who installs
  your libraries?

- Did you realize this means that your perfectly running test suite with your
  yarn.lock could be a failing case for consumers of your app unless you don’t
  use semver strings like ^1.0.0 and just hardcode it to 1.0.0?

- Did you realize the default of ^1.0.0 automatically gets minor version bumps
  which are often fairly substantial changes, e.g. even breaking possibly?

- Did you know that larger libraries like @material-ui/core don’t like to bump
  their major version all the time for example so large changes are often made
  to the minor version?

- Did you know if you run `yarn upgrade`, it may update what is in your
  yarn.lock file but will not update what is in your package.json?

- Did you realize that this means that if you depend on the results of running
  `yarn upgrade` e.g. it gave you a bugfix, you could be shipping buggy code to
  consumers of your library?

Just something to be aware of! You can always ride the dragon and accept these
minor breakages from semver bumps, but it can introduce some issues for your
consumers

Random fun thing: Adding a yarn package can even downgrade some other packages.
For example if you have ^6.0.0 in your package.json, you yarn upgrade it so in
the lockfile it says 6.1.0 but then later install another library that requires
a hard 6.0.1, yarn will decide to downgrade you to 6.0.1 (it will not have a
duplicate entry in yarn.lock, just that the 6.1.0 in the yarn.lock will
downgrade to 6.0.1)
