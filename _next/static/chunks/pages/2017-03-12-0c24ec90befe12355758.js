(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("img",{src:"/avatar.png",style:{height:"2em",marginLeft:"1em"}})]}),(0,r.jsx)("div",{className:"blog",children:t})]})}},5509:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(159),a=n(219),o=(n(7294),n(3905)),i=n(4995),l=["components"],s={},u=function(e){var t=e.children;return(0,o.kt)(i.default,null,t)};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"How I learned to hate ORM (especially for data import scripts)"),(0,o.kt)("p",null,"When I was tasked with making a new application for our websites, I was\ngiven several CSV files with some expectation that these files could\nbasically be just loaded into a database and jumped into production\nreally quickly. This was sort of naive idea for me to\xa0share in, so I'll\ngo through the way the project progressed"),(0,o.kt)("p",null,"When I started, I chose grails/groovy/hibernate/GORM as a platform to\nuse. This quickly turned into pain when I tried to make a data importer\nusing grails also."),(0,o.kt)("p",null,"Each CSV row from the source file would have to be turned into many\ndifferent rows in the database because it represented multiple\nrelationships, example:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/media/158300473458_0.png",alt:null})),(0,o.kt)("p",null,'Initially I made my data importer in grails, and was hardcoding column\nnames knowing full well this was really inflexible. At the same time I\nwas also trying to\xa0"iterate" on my database schema, and I\'d want to\nre-import my data to test it out, but it was really really slow. I tried\nmany different approaches to try to speed this up such as cleanUpGorm,\nStatelessSessions, and other tricks, but it would take 10-20 minutes for\nimports on a 100KB input file. \xa0'),(0,o.kt)("p",null,"What I basically realised is that for bulk data import"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1) Using the ORM is really painful for bulk import.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2) If you can pre-process your data so that it is already in the\nformat the database expects, then you can use the CSV COPY command which\nis very fast")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3) If you can then abandon the ORM mentality and even ignore it as\na\xa0convenience factor, then you can embrace my database system itself")),(0,o.kt)("p",null,"Overall, after all this work, it just seemed like ORM treats the\ndatabase as a danger and something to be heavily abstracted over, but I\nactually found joy in learning how to treat my database as a first class\ncitizen. Soon I started gaining appreciation of"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"using plain SQL queries"),(0,o.kt)("li",{parentName:"ul"},"learning about full text search in postgres with ts_query"),(0,o.kt)("li",{parentName:"ul"},'learning about triggers to make a\xa0"last updated" field get updated\nautomatically')),(0,o.kt)("p",null,"I am pretty happy this way, and although I miss some things like\ncriteria queries which are very powerful, I am happy that I can interact\nwith my database as a friend"),(0,o.kt)("p",null,"At the very least, due to the fact that I now pre-process the data\nbefore database loading, I can now import large amounts of data super\nfast with the CSV COPY command"),(0,o.kt)("p",null,"::: {#footer}\n","[ March 12th, 2017 3:13am ]","{#timestamp} ","[grails]","{.tag}\n","[postgresql]","{.tag} ","[sql]","{.tag}\n:::"))}c.isMDXComponent=!0},6551:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2017-03-12",function(){return n(5509)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=6551,e(e.s=t);var t}));var t=e.O();_N_E=t}]);