(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1798],{3905:function(e,n,t){"use strict";t.d(n,{kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||l;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var l=t.length,i=new Array(l);i[0]=s;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"===typeof e?e:o,i[1]=c;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4995:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(5893);function o(e){var n=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("div",{className:"blog",children:n})]})}},8243:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(159),o=t(219),l=(t(7294),t(3905)),i=t(4995),c=["components"],a={},u=function(e){var n=e.children;return(0,l.kt)(i.default,null,n)};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,l.kt)(u,(0,r.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Problems that I experienced with the HPCC",".",".."),(0,l.kt)("h1",null,"Module load completely barfs with incomprehensible error"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ module spider bedtools\nUsing system spider cache file\n/opt/software/lmod/bin/lua: /opt/software/lmod/4.1.4icer5/libexec/Spider.lua:662: attempt to perform arithmetic on a nil value\nstack traceback:\n    /opt/software/lmod/4.1.4icer5/libexec/Spider.lua:662: in function 'Level1'\n    /opt/software/lmod/4.1.4icer5/libexec/Spider.lua:640: in function 'spiderSearch'\n    /opt/software/lmod/4.1.4icer5/libexec/lmod:967: in function 'cmd'\n    /opt/software/lmod/4.1.4icer5/libexec/lmod:1195: in function 'main'\n    /opt/software/lmod/4.1.4icer5/libexec/lmod:1222: in main chunk\n    [C]: ?\n")),(0,l.kt)("h1",null,"Linuxbrew is terribly confused by things that depend on gcc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install hello\n==> Installing dependencies for hello: glibc, xz, gmp, mpfr, libmpc, isl, gcc\n==> Installing hello dependency: glibc\nError: glibc cannot be built with any available compilers.\nInstall Clang or brew install gcc\n")),(0,l.kt)("p",null,"Using module load Clang does not fix problem ",">","_","\\<"),(0,l.kt)("h1",null,"Compiling things manually on software machine does not work on interactive machine"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ mummer\nIllegal instruction (core dumped)\n")),(0,l.kt)("h1",null,"Many modules have a secret dependency on loading other modules"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ module load LASTZ\n\nLmod Warning: Did not find: LASTZ\n\nTry: "module spider LASTZ"\n$ module load GNU\n$ module load LASTZ\n$ lastz\nYou must specify a target file\nlastz-- Local Alignment Search Tool, blastZ-like\n  (version 1.03.02 released 20110719)\n...\n')),(0,l.kt)("p",null,"Etc etc."),(0,l.kt)("p",null,"::: {#footer}\n","[ April 21st, 2017 9:18am ]","{#timestamp}\n:::"))}p.isMDXComponent=!0},124:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2017-04-21",function(){return t(8243)}])},159:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},219:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[9774,2888,179],(function(){return n=124,e(e.s=n);var n}));var n=e.O();_N_E=n}]);