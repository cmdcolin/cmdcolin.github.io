(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{3905:function(e,t,r){"use strict";r.d(t,{kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"===typeof e?e(t):u(u({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=a(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||l[f]||i;return r?n.createElement(d,u(u({ref:t},m),{},{components:r})):n.createElement(d,u({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var i=r.length,u=new Array(i);u[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:o,u[1]=s;for(var a=2;a<i;a++)u[a]=r[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4995:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);function o(e){var t=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{href:"/",children:"Return home"}),(0,n.jsx)("img",{src:"/avatar.png",style:{height:"2em",marginLeft:"1em"}})]}),(0,n.jsx)("div",{className:"blog",children:t})]})}},5661:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(159),o=r(219),i=(r(7294),r(3905)),u=r(4995),s=["components"],c={},a=function(e){var t=e.children;return(0,i.kt)(u.default,null,t)};function l(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)(a,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"How to make your resume.json or resume-cli look great"),(0,i.kt)("p",null,".There are a ton of themes for resume-cli that are not immediately\nobvious to find"),(0,i.kt)("p",null,"To see all the great themes on the command line, check out"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\xa0 \xa0 curl http://themes.jsonresume.org/themes.json |jq .\n")),(0,i.kt)("p",null,"I tried a bunch of them"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\xa0 \xa04679 \xa0resume export site/resume/index.html -t modern-freeland\n\xa0 \xa04680 \xa0resume export site/resume/index.html -t modern-freelance\n\xa0 \xa04682 \xa0resume export site/resume/index.html -t modern-with-projects-section\n\xa0 \xa04683 \xa0resume export site/resume/index.html -t dangerflat\n\xa0 \xa04684 \xa0resume export site/resume/index.html -t striking\n\xa0 \xa04685 \xa0resume export site/resume/index.html -t crisp\n\xa0 \xa04686 \xa0resume export site/resume/index.html -t semantic-ui\n\xa0 \xa04687 \xa0resume export site/resume/index.html -t material\n\xa0 \xa04688 \xa0resume export site/resume/index.html -t modern-extended\n\xa0 \xa04689 \xa0resume export site/resume/index.html -t paper\n\xa0 \xa04690 \xa0resume export site/resume/index.html -t smart\n\xa0 \xa04691 \xa0resume export site/resume/index.html -t flat\n\n")),(0,i.kt)("p",null,"Note: resume.json is setup to use HTML themes, so even though it has a\nPDF output option, it is inherently converting HTML first and then to\nPDF. The PDF conversion is done by a automated cloud service, which\ncurrently can fail sometimes. It is probably better to just choose HTML\nand convert to PDF if you need to.\nSee\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsonresume/resume-cli/issues/94"},"https://github.com/jsonresume/resume-cli/issues/94")),(0,i.kt)("p",null,"::: {#footer}\n","[ April 23rd, 2016 2:41pm ]","{#timestamp}\n:::"))}l.isMDXComponent=!0},9327:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2016-04-23",function(){return r(5661)}])},159:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},219:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[774,888,179],(function(){return t=9327,e(e.s=t);var t}));var t=e.O();_N_E=t}]);