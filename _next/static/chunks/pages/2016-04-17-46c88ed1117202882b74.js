(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8069],{3905:function(e,r,n){"use strict";n.d(r,{kt:function(){return s}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"===typeof e?e(r):a(a({},r),e)),n},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||c;return n?t.createElement(m,a(a({ref:r},p),{},{components:n})):t.createElement(m,a({ref:r},p))}));function s(e,r){var n=arguments,o=r&&r.mdxType;if("string"===typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"===typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4995:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var t=n(5893);function o(e){var r=e.children;return(0,t.jsxs)("div",{children:[(0,t.jsx)("a",{href:"/",children:"Return home"}),(0,t.jsx)("div",{className:"blog",children:r})]})}},2115:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f}});var t=n(159),o=n(219),c=(n(7294),n(3905)),a=n(4995),i=["components"],u={},l=function(e){var r=e.children;return(0,c.kt)(a.default,null,r)};function f(e){var r=e.components,n=(0,o.Z)(e,i);return(0,c.kt)(l,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",null,"Creating a docker image"),(0,c.kt)("p",null,"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'brew install docker boot2docker docker-machine\ndocker-machine create --driver virtualbox default\ndocker-machine env default # will output some variables\neval "$(docker-machine env default)" # use those variables\n# make dockerfile\ndocker build -t nameof-yourimage .\n')),(0,c.kt)("p",null,"::: {#footer}\n","[ April 17th, 2016 6:45pm ]","{#timestamp}\n:::"))}f.isMDXComponent=!0},2944:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2016-04-17",function(){return n(2115)}])},159:function(e,r,n){"use strict";function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}n.d(r,{Z:function(){return t}})},219:function(e,r,n){"use strict";function t(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(r,{Z:function(){return t}})}},function(e){e.O(0,[9774,2888,179],(function(){return r=2944,e(e.s=r);var r}));var r=e.O();_N_E=r}]);