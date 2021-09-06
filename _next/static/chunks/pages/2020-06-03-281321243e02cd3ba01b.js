(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||c[p]||a;return n?r.createElement(f,i(i({ref:t},h),{},{components:n})):r.createElement(f,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893);function o(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("div",{className:"blog",children:t})]})}},6358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(159),o=n(219),a=(n(7294),n(3905)),i=n(4995),s=["components"],l={},u=function(e){var t=e.children;return(0,a.kt)(i.default,null,t)};function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Misconceptions your team might have during The Big Rewrite"),(0,a.kt)("p",null,"Disclaimer: I enjoy the project I am working on and this is still a work\nin progress. I just had to rant about the stuff I go through in my job\nhere, but it does not reflect the opinions of my emplorer, and my\npersonal opinion is despite these troubles we are coming along nicely"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,'I joined a team that was doing the big rewrite in 2018. I was involved\nin the project before then and knew it\'s ins and outs, and frankly think\nit\'s still a great system. In order to break it\'s\xa0"limitations" a grand\nv2 gets started. I think my team has been good. My tech lead is really\ngood at architecture. Where I really resist kind of\xa0"writing new\narchitecture that is not already there", he can pull up entirely new\nconcepts and abstractions that are all pretty good. Myself, I don\'t much\nenjoy writing "new architecture" if there is something already there\nthat I can use, and I\'ll try to refer to the existence of an existing\nthing instead of creating new exotic stuff.\xa0'),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"Now, what happened during the big rewrite so far. 4 people on the team,\n2 years in"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"Persistent confusion about sources of slowness in our app"),(0,a.kt)("p",null,"\xa0- it's only slow because devtools is open (maybe it is! but this is\ndefinitely a red herring. the code should work with devtools open.\nreason that's been stated: devtools adds a \"bunch of instrumentation to\nthe promises that slows it down\"...stated without any evidence during a\n3 hour long planning call...)\\\n\xa0- it's only slow because we're using a development build of react, try\na production build (the production build makes some stuff faster, but it\nis NOT going to save your butt if you are constantly rerending all your\ncomponents unnecessarily every millisecond during user scroll, which is\nsomething we suffered from, and it creeps back in if you are not careful\nbecause you can't write tests against this so often one day I'll be\nlooking at my devtools and suddenly things are rendering twice per frame\n(signature of calling an unnecessary setState), tons of unnecessary\ncomponents rendering in every frame (signature of\ncomponentShouldUpdate/bad functional react memoizing, etc))\\\n\xa0- it's slow because we are hogging the main thread all the time, our\nkiller new feature in v2 is an intense webworker framework. now main\nthread contention is a concern, but really our app needs to just be\nperformant all around, webworkers just offloads that cpu spinning to\nanother core. what we have done in v2 is we went whole hog and made our\ncode rely on OffscreenCanvas which 0 browsers support. also, our\nwebworker bundles (worker-loader webpack build) are huge webpack things\nthat pretty much contain all the code that is on the main thread so it's\njust massive. that makes it slow at loading time, and makes it harder to\nthink about our worker threads in a lighter-weight way, and the worker\nconcept is now very deeply entrenched in a lot of the code (all code has\nto think of things in terms of rpc calls)\\\n\xa0- it's slow because there are processes that haven't been aborted\nspinning in the background, so we must build out an intensive\nAbortController thing that touches the entirety of all our code\nincluding sending abort signals across the RPC boundary in hopes that a\nlocked up webworker will respond to this (note: our first version of the\nsoftware had zero aborting, did not from my perspective suffer.\narguments with the team have gotten accusatory where I just claim that\nthere is no evidence that the aborting is helping us, pointing to the\nfact that our old code works fine, and that if our new code suffers\nwithout aborting, that means something else is wrong. I have not really\nbeen given a proper response for this, and so the curse of passing\nAbortSignals onto every function via an extra function parameter drags\non\\\n\xa0- it's slow because we are not multithreading..., so we put two views\nof the same data into different webworkers (but now each webworker\nseparately downloads the same data, which leads to more resource spent,\nmore network IO, more slowness)"),(0,a.kt)("p",null,"confusion about what our old users needs are"),(0,a.kt)("p",null,'\xa0- tracks not having per-track scroll (problem: leads to many scrolls\nwithin-scrolls, still unresolved problem)\\\n\xa0- the name indexing was always a big problem (yes it is slow but is it\nreally THE critical problem we face? likely not: bioinformatics people\nrun a data pipeline, it takes a couple days, so what). use elasticsearch\nif it sucks so bad\\\n\xa0- our users are "stupid" so they need to have every single thing GUI\neditable (interesting endeavor, but our design for this has been\ndifficult, and has not yet delivered on simplifying the system for\nusers)\\\n\xa0- our users "do not like modal popups" so we design everything into a\ntiny sidedrawer that barely can contain the relevant data that they want\nto see\\'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'having interest in catering to obscure or not very clear\xa0"user\nstories" like displaying the same exact region twice on the screen at\nonce saying\xa0"someone will want to do this", but causing a ton of extra\nlogical weirdness from this\\'),(0,a.kt)("li",{parentName:"ul"},"not catering to emerging areas of user needs such as breaking our\nlarge app into components that can be re-used, and instead just going\nfull hog on a large monolith project and treating our monolith as a\ngiant hammer that will solve everyones problems, when in reality, our\nusers are also programmers that could benefit from using smaller\ncomponentized versions of our code\\"),(0,a.kt)("li",{parentName:"ul"},'confusion about\xa0"what our competitors have". sometimes my team one day\nwas like\xa0"alright we just do that and then we have everything product X\nhas?" and I just had to be clear and be like, no! the competitor has a\nreall pretty intricate complex system that we could never hope to\nreplicate. but does that matter? probably not, but even still, we likely\ndon\'t have even 20% of the full set of functions of a competitor.\nluckily we have our own strengths that make us compelling besides that\n20%\\'),(0,a.kt)("li",{parentName:"ul"},"making it so our product requires a server side component to run,\nwhere our first version was much more amenable to running as a static\nsite")),(0,a.kt)("p",null,"more to be added"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"but what does all this imply?"),(0,a.kt)("p",null,"there are persistent confusion about what the challenges we face are,\nwhat the architectural needs are, what our user stores are, what our new\nv2 design goals are, and more. It's really crazy"),(0,a.kt)("p",null,"::: {#footer}\n","[ June 3rd, 2020 2:23am ]","{#timestamp} ","[rant]","{.tag}\n:::"))}c.isMDXComponent=!0},3353:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2020-06-03",function(){return n(6358)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=3353,e(e.s=t);var t}));var t=e.O();_N_E=t}]);