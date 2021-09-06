(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(n),y=o,h=f["".concat(l,".").concat(y)]||f[y]||p[y]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"===typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893);function o(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("img",{src:"/avatar.png",style:{height:"2em",marginLeft:"1em"}})]}),(0,r.jsx)("div",{className:"blog",children:t})]})}},1543:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(159),o=n(219),a=(n(7294),n(3905)),i=n(4995),u=["components"],l={},c=function(e){var t=e.children;return(0,a.kt)(i.default,null,t)};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Plotting a coordinate on the screen"),(0,a.kt)("p",null,"I always end up having to remember the algorithm for plotting a\ncoordinate on the screen,\xa0for example an HTML5 canvas and end up\nstitching it together manually"),(0,a.kt)("p",null,"If you step through the math it becomes very simple though"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"Say you have a coordinate range of 1000 to 2000 that you want to plot in\na HTML5 canvas of size 100px"),(0,a.kt)("p",null,"First, you want to put your position relative to the start of the range,\nso you take\\"),(0,a.kt)("p",null,"1500-1000"),(0,a.kt)("p",null,"Second, you know your point is going to be halfway in the range, and in\ngeneral, to get this position, you divide now by the size of the\ninterval you are plotting in, e.g. 2000-1000"),(0,a.kt)("p",null,"(1500-1000)/(2000-1000) = 0.5"),(0,a.kt)("p",null,"We get 0.5 as expected. Then you multiply this proportion times the\nwidth of box you are rendering in, e.g. 100 pixels wide, and get that\nyou put your pixel at position 50px"),(0,a.kt)("p",null,"To summarize, the general formula for plotting a point x in a range\n(x1,x2) on a screen of width w is\\"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"w","*","(x - \xa0x1) / (x2 - x1)"),(0,a.kt)("p",null,"Of course same thing applies for y"),(0,a.kt)("p",null,"h","*","(y - y1) / (y2 - y1)"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"This does not take into account small possible adjustments for closed vs\nopen ranges, which could be important to avoid subpixel rendering on a\ncanvas, but that can be a further exercise"),(0,a.kt)("p",null,"::: {#footer}\n","[ February 16th, 2017 8:40pm ]","{#timestamp} ","[math]","{.tag} ","[html5\ncanvas]","{.tag}\n:::"))}p.isMDXComponent=!0},9693:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2017-02-16",function(){return n(1543)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=9693,e(e.s=t);var t}));var t=e.O();_N_E=t}]);