(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(d,l(l({ref:t},f),{},{components:n})):r.createElement(d,l({ref:t},f))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"===typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("img",{src:"/avatar.png",style:{height:"2em",marginLeft:"1em"}})]}),(0,r.jsx)("div",{className:"blog",children:t})]})}},2936:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(159),a=n(219),o=(n(7294),n(3905)),l=n(4995),i=["components"],s={},u=function(e){var t=e.children;return(0,o.kt)(l.default,null,t)};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Do you understand how parallelization interacts with global variabesl in jest?"),(0,o.kt)("p",null,"I found that there is a little bit of confusion and misunderstanding around how\nthings like parallelization work in jest, which sometimes leads to additional\nhacking around problems that may not exist or speculating incorrectly about\ntest failure. This is also of course a point of concern when you have code that\nfor some reason or another uses global variables. Here are a short summary of\nthings that may cause confusion."),(0,o.kt)("h2",null,"Tests in a single file are NOT run in parallel"),(0,o.kt)("p",null,"Simple example, the global variable r is included in the test condition, but it\nis accurately run in all cases because the tests are not run in parallel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let r = 0;\n\nfunction timeout(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\ndescribe("tests", () => {\n  it("t1", async () => {\n    await timeout(1000);\n    expect(r).toBe(0);\n    r++;\n  });\n  it("t2", async () => {\n    await timeout(1000);\n    expect(r).toBe(1);\n    r++;\n  });\n  it("t3", async () => {\n    await timeout(1000);\n    expect(r).toBe(2);\n    r++;\n  });\n});\n')),(0,o.kt)("p",null,"This test will take 3 seconds, and will accurately count the global variable.\nIf it was in parallel, it may only take 1 second, and would inaccurately count\nthe global variable due to race conditions"),(0,o.kt)("h2",null,"Tests in different files ARE run in parallel"),(0,o.kt)("p",null,"Let's take another example where we use a global variable, and then two\ndifferent tests use the global variable."),(0,o.kt)("p",null,"file_using_some_globals.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let myGlobal = 0;\n\nexport function doStuff() {\n  myGlobal++;\n  return myGlobal;\n}\n\nexport function resetMyGlobal() {\n  myGlobal = 0;\n}\n\nexport function timeout(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n")),(0,o.kt)("p",null,"test_global_vars1.test.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { doStuff, timeout } from "./dostuff";\ntest("file1", async () => {\n  doStuff();\n  await timeout(1000);\n  expect(doStuff()).toEqual(2);\n});\n')),(0,o.kt)("p",null,"test_global_vars2.test.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\nimport { doStuff, timeout } from "./dostuff";\n\ntest("file1", async () => {\n  await timeout(1000);\n  expect(doStuff()).toEqual(1);\n});\n')),(0,o.kt)("p",null,"This test completes in less than 2 seconds, and these tests are run in\nparallel. They use different instances of the global state, and therefore have\nno worries with colliding their state."))}c.isMDXComponent=!0},9644:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2021-10-05-jest",function(){return n(2936)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=9644,e(e.s=t);var t}));var t=e.O();_N_E=t}]);