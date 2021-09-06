(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):a(a({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,f=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"===typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);function i(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("img",{src:"/avatar.png",style:{height:"2em",marginLeft:"1em"}})]}),(0,r.jsx)("div",{className:"blog",children:t})]})}},4779:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(159),i=n(219),o=(n(7294),n(3905)),a=n(4995),s=["components"],l={},u=function(e){var t=e.children;return(0,o.kt)(a.default,null,t)};function c(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"An amazing error message if you put more than 2^24 items in a JS Map object"),(0,o.kt)("p",null,"One of the fun things about working with big data is that you can often hit\nweird limits with a system."),(0,o.kt)("p",null,"I was personally trying to load every 'common' single nucleotide polymorphism\nfor the human genome into memory (dbSNP), of which there are over 37 million\nentries (there are many more uncommon ones)"),(0,o.kt)("p",null,"Turns out, you may run into some hard limits. Note that these are all V8-isms\nand may not apply to all browsers or engines (I was using node.js for this)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const myObject = new Map();\nfor (let i = 0; i <= 50_000_000; i++) {\n  myObject.set(i,i);\n  if(i%100000==0) { console.log(i) }\n}\n")),(0,o.kt)("p",null,"This will crash after adding approx 16.7M elements and say"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0\n100000\n200000\n...\n16400000\n16500000\n16600000\n16700000\n\nUncaught RangeError: Value undefined out of range for undefined options\nproperty undefined\n")),(0,o.kt)("p",null,"That is a very weird error message. It says \u201cundefined\u201d three times! Much\nbetter than your usual \u201cTypeError: Can\u2019t find property \u2018lol\u2019 of undefined\u201d. See\n",(0,o.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/v8/issues/detail?id=11852"},"https://bugs.chromium.org/p/v8/issues/detail?id=11852")," for a bug filed to help\nimprove the error message perhaps."),(0,o.kt)("p",null,"Now, also interestingly enough, if you use an Object instead of a Map"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const myObject = {};\nfor (let i = 0; i <= 50_000_000; i++) {\n  myObject['myobj_\u2019+i]=i;\n  if(i%100000==0) { console.log(i) }\n}\n")),(0,o.kt)("p",null,"Then it will print\u2026."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0\n100000\n200000\n...\n8000000\n8100000\n8200000\n8300000\n")),(0,o.kt)("p",null,"And it will actually just hang there\u2026frozen\u2026no error message though! And it is\nfailing at ~8.3M elements. Weird right? This is roughly half the amount of\nelements as the 16.7M case"),(0,o.kt)("p",null,"Turns out there is a precise hard limit for the Map case"),(0,o.kt)("p",null,"For the Map: 2^24=16,777,216"),(0,o.kt)("p",null,"For the Object it is around 2^23=8,388,608 HOWEVER, I can actually add more\nthan this, e.g. I can add 8,388,609 or 8,388,610 or even more, but the\noperations start taking forever to run, e.g. 8,388,999 was taking many minutes"),(0,o.kt)("p",null,"Very weird stuff! If you expected me to dig into this and explain it in deep\ntechnical detail, well, you\u2019d be wrong. I am lazy. However, this helpful post\non stackoverflow by a V8 js engine developer clarifies the Map case!!\n",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54452896/maximum-number-of-entries-in-node-js-map"},"https://stackoverflow.com/questions/54452896/maximum-number-of-entries-in-node-js-map")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"V8 developer here. I can confirm that 2^24 is the maximum number of entries in\na Map. That\u2019s not a bug, it\u2019s just the implementation-defined limit.\n\nThe limit is determined by:\n\nThe FixedArray backing store of the Map has a maximum size of 1GB (independent\nof the overall heap size limit) On a 64-bit system that means 1GB / 8B = 2^30 /\n2^3 = 2^27 ~= 134M maximum elements per FixedArray A Map needs 3 elements per\nentry (key, value, next bucket link), and has a maximum load factor of 50% (to\navoid the slowdown caused by many bucket collisions), and its capacity must be\na power of 2. 2^27 / (3 * 2) rounded down to the next power of 2 is 2^24, which\nis the limit you observe.  FWIW, there are limits to everything: besides the\nmaximum heap size, there\u2019s a maximum String length, a maximum Array length, a\nmaximum ArrayBuffer length, a maximum BigInt size, a maximum stack size, etc.\nAny one of those limits is potentially debatable, and sometimes it makes sense\nto raise them, but the limits as such will remain. Off the top of my head I\ndon\u2019t know what it would take to bump this particular limit by, say, a factor\nof two \u2013 and I also don\u2019t know whether a factor of two would be enough to\nsatisfy your expectations.\n\n")),(0,o.kt)("p",null,"Great details there. It would also be good to know what the behavior is for the\nObject, which has those 100% CPU stalls after ~8.3M, but not the same error\nmessage..."),(0,o.kt)("p",null,"Another fun note: if I modify the Object code to use only \u201cinteger IDs\u201d the\ncode actually works fine, does not hit any errors, and is \u201cblazingly fast\u201d as\nthe kids call it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const myObject = {};\nfor (let i = 0; i <= 50_000_000; i++) {\n  myObject[i]=i;\n  if(i%100000==0) { console.log(i) }\n}\n")),(0,o.kt)("p",null,"I presume that this code works because it detects that I\u2019m using it like an\narray and it decides to transform how it is working internally and not use a\nhash-map-style data structure, so does not hit a limit. There is a slightly\nhigher limit though, e.g. 1 billion elements gives \u201cUncaught RangeError:\nInvalid array length\u201d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const myObject = {};\nfor (let i = 0; i <= 1_000_000_000; i++) {\n  myObject[i]=i;\n  if(i%100000==0) { console.log(i) }\n}\n")),(0,o.kt)("p",null,"This has been another episode of ....the twilight zone (other episodes\ncatalogued here) ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cmdcolin/technical_oddities/"},"https://github.com/cmdcolin/technical_oddities/")))}c.isMDXComponent=!0},3575:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2021-08-15-map-limit",function(){return n(4779)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=3575,e(e.s=t);var t}));var t=e.O();_N_E=t}]);