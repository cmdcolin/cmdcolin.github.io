(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[482],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,g=f["".concat(l,".").concat(d)]||f[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("div",{className:"blog",children:t})]})}},6244:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(159),a=n(219),o=(n(7294),n(3905)),i=n(4995),s=["components"],l={},u=function(e){var t=e.children;return(0,o.kt)(i.default,null,t)};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Post-graduation survey"),(0,o.kt)("p",null,"I recently received some post-graduation survey results from my class of\n2013 about salaries, job satisfaction, and other things. I thought I'd\ntry to visualize the data using R and ggplot2 as an exercise."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://i.imgur.com/5rVnQHC.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"../../media/109823235838_0.png",alt:null})),(0,o.kt)("p",null,"Figure 1. The fancy ggplot2 graph of salaries with standard deviation\nbars comparing salaries of BS/MS grads (red) with BS grads (blue)."),(0,o.kt)("p",null,"As a CS grad, I suppose I'm happy to see that we have the a highest\naverage salary right out of the gate. CS also has a high standard\ndeviation which I thought was interesting. Perhaps CS majors work in a\nmyriad of fields that demand computational skills where other\nengineering majors may be more focused on certain types of fields,\ngiving less deviation."),(0,o.kt)("p",null,'In the process of making this graph, I was looking for how to do the\nside-by-side bar charts in ggplot and ended up supplying a "correction"\nto a answer on crossvalidated, a stackexchange site. The correction\nentailed how the syntax for using reshape2 vs reshape has changed\nslightly, so hopefully that helps other people searching for the same\nissue.'),(0,o.kt)("p",null,"Here is the code for processing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-R"},' library(xlsx)\n library(ggplot2)\n library(reshape2)\n\n salaries=read.xlsx("workbook.xlsx",1)\n df=melt(salaries,measure.vars = c("BS.MS.annual.salary",\n "BS.annual.salary"))\n #awkward step to merge standard deviations\n df[df$variable=="BS.MS.annual.salary","stdev"]=df[df$variable=="BS.MS.annual.salary","stdev.1"]\n ggplot(df, aes(NA., value, fill=variable)) +\n \xa0\xa0\xa0\xa0 geom_bar(position="dodge",stat="identity") +\n \xa0\xa0\xa0\xa0 geom_errorbar(aes(ymin=value-stdev, ymax=value+stdev),\n position=position_dodge(width=0.9)) +\n \xa0\xa0\xa0\xa0 ggtitle("Salary for 2013 class of Engineering (2014 survey)") +\n \xa0\xa0\xa0\xa0 xlab("Major") +\n \xa0\xa0\xa0\xa0 ylab("Salary w/ stddev")\n')),(0,o.kt)("p",null,"Table pictured"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"../../media/109823235838_1.png",alt:null})),(0,o.kt)("p",null,"::: {#footer}\n","[ February 1st, 2015 7:05pm ]","{#timestamp} ","[rstats]","{.tag} ","[ggplot2]","{.tag}\n","[college]","{.tag} ","[salary]","{.tag}\n:::"))}c.isMDXComponent=!0},6355:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2015-02-01",function(){return n(6244)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=6355,e(e.s=t);var t}));var t=e.O();_N_E=t}]);