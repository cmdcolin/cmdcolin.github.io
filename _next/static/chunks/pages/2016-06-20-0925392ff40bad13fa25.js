(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88],{3905:function(e,n,t){"use strict";t.d(n,{kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"===typeof e?e(n):o(o({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||l;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"===typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4995:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(5893);function a(e){var n=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("div",{className:"blog",children:n})]})}},4046:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(159),a=t(219),l=(t(7294),t(3905)),o=t(4995),c=["components"],i={},u=function(e){var n=e.children;return(0,l.kt)(o.default,null,n)};function s(e){var n=e.components,t=(0,a.Z)(e,c);return(0,l.kt)(u,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Installing clamav on OSX"),(0,l.kt)("p",null,"It is a common trope that OSX doesn't need anti-virus because everyone\ntargets windows. That is maybe comforting to some but I think it's\npretty naive. It would be better to have a system on your machine to\ntell you about viruses, trojan horses, malware, or spying. \xa0I have\ndecided to employ a free open source scanner called\nclamAV\xa0",(0,l.kt)("a",{parentName:"p",href:"https://www.clamav.net/"},"https://www.clamav.net/")),(0,l.kt)("p",null,"ClamAV is the top choice for linux based OSs being free and open source\n(GPL) virus scanner."),(0,l.kt)("p",null,"\\"),(0,l.kt)("p",null,"To install we can use homebrew"),(0,l.kt)("p",null,"\xa0 \xa0 \\$ brew install clamav"),(0,l.kt)("p",null,"\\"),(0,l.kt)("p",null,"Then there is s config file to setup. This is located\nin\xa0/usr/local/etc/clamav/freshclam.conf"),(0,l.kt)("p",null,"\\"),(0,l.kt)("p",null,'To setup, edit this file and delete the line that says\xa0"Example" and\nthen uncheck the desired settings. I would chose to enable logging to\n/var/log/clamav.log and also database directories in /var/lib/clamav'),(0,l.kt)("p",null,'Then run the\xa0"freshclam" program'),(0,l.kt)("p",null,"\xa0 \xa0 \\$ freshclam"),(0,l.kt)("p",null,"\\"),(0,l.kt)("p",null,"This will download the virus scanner database (main) and daily scanning\nupdates"),(0,l.kt)("p",null,"\\"),(0,l.kt)("p",null,"Then you can run clamscan on a given directory (recursively, only print\ninfected files)"),(0,l.kt)("p",null,"\xa0 \xa0 \\$ clamscan -ri ","~","/"),(0,l.kt)("p",null,"\\"),(0,l.kt)("p",null,"Or add this to a cronjob"),(0,l.kt)("p",null,"\xa0 \xa0 \\$ crontab -"),(0,l.kt)("p",null,"\xa0 \xa0 ",(0,l.kt)("a",{parentName:"p",href:"https://tmblr.co/mOKWMmBeJ1b_J7izaZpeYaQ"},"\\@hourly")," clamscan -ri\n","~","/ ","|",' mail -v -s "clamscan results" your.email\\@gmail.com \xa0',">","/dev/null\n2",">","&1"),(0,l.kt)("p",null,"::: {#footer}\n","[ June 20th, 2016 6:15pm ]","{#timestamp}\n:::"))}s.isMDXComponent=!0},792:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2016-06-20",function(){return t(4046)}])},159:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},219:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return n=792,e(e.s=n);var n}));var n=e.O();_N_E=n}]);