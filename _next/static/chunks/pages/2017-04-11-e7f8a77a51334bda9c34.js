(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6574],{3905:function(t,e,n){"use strict";n.d(e,{kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"===typeof t?t(e):i(i({},e),t)),n},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"===typeof t||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"===typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4995:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var r=n(5893);function o(t){var e=t.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("div",{className:"blog",children:e})]})}},4692:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r=n(159),o=n(219),a=(n(7294),n(3905)),i=n(4995),l=["components"],s={},p=function(t){var e=t.children;return(0,a.kt)(i.default,null,e)};function c(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)(p,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Studying nonlinear dynamics and chaos pt 2: the chaosining"),(0,a.kt)("p",null,"In the first part of our series\n(",(0,a.kt)("a",{parentName:"p",href:"http://searchvoidstar.tumblr.com/post/158949147558/studying-chaos-starting-with-an-overview-of-ode"},"http://searchvoidstar.tumblr.com/post/158949147558/studying-chaos-starting-with-an-overview-of-ode"),"),\nwe started reading Non-linear Dynamics and Chaos by Strogatz and found\nthat there are a number of mathematical concepts being introduced right\noff the bat. We took it slowly and introduced the idea of the\ndifferential equation and how to simulate one using R and the deSolve\npackage."),(0,a.kt)("p",null,'We also looked at a simple system, a damped oscillator, or basically a\nspring type system that experiences some damping like friction. The last\npart of the problem our figure had something called a phase plot or\n"portrait" which is a good way to illustrate the relationship between\nposition and velocity of our\noscillator\xa0',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Phase_portrait"},"https://en.wikipedia.org/wiki/Phase_portrait")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"../../media/159472912758_0.png",alt:null})),(0,a.kt)("p",null,'In this post, we will look at a\xa0"damped driven oscillator", introduced\nin chapter 1 of the book as well.\xa0'),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,'This system is similar to the simple "damped oscillator" but it adds an\nextra "forcing" so that instead of just decaying, the system receives an\nextra inputted force that goes back and forth. This system is well\nstudied because it can lead to some "sporadic resonance" in systems that\nshould not be resonating, e.g. bridge designs, and cause collapse. Here\nis a good demo of a damped driven oscillator on a\ntable\xa0',(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=OINsClhiUyo"},"https://www.youtube.com/watch?v=OINsClhiUyo")),(0,a.kt)("p",null,"Here is the equation:\\"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"../../media/159472912758_1.png",alt:null})),(0,a.kt)("p",null,"We can now implement this as code by altering our first program slightly\n(the plot function is switched out for ggplot2 here for fun)"),(0,a.kt)("p",null,"\\"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"library(deSolve)\nlibrary(ggplot2)\nlibrary(cowplot)\n# x1 = initial position\n# x2 = initial velocity\n# x3 = initial \"time\", note that it is used by cos, and you can give it a multiplier to increase frequency\nstate <- c(x1 = 0, x2 = 0, x3 = 0)\n# b = damping constant (e.g. friction)\n# m = mass\n# F = oscillating force\n# k = spring constant for oscillator\nparameters <- c(b = 0.1, F = 10, k = 30, m = 1)\nDampedDrivenOscillator<-function(t, state, parameters) {\n\xa0with(as.list(c(state, parameters)), {\n\xa0 \xa0dX <- x2\n\xa0 \xa0dY <- 1/m*(-k*x1-b*x2+F*cos(2*x3))\n\xa0 \xa0dZ <- 1\n\xa0 \xa0list(c(dX, dY, dZ))\n\xa0})\n}\n# go from time 0 to 100, iterating by 0.01 seconds\ntimes <- seq(0, 100, by = 0.001)\n# run simulation for each timestep\nout <- ode(y = state, times = times, func = DampedDrivenOscillator, parms = parameters)\n# plot of position over time\nout2=data.frame(position=out[,'x1'],velocity=out[,'x2'],t=out[,'x3'],time=out[,'time'])\n# plot of variable over time\np1<-ggplot(out2, aes(time, position))+geom_line()\n# plot of position vs velocity\np2<-ggplot(out2, aes(time, velocity))+geom_line()\n# phase plot\np3<-ggplot(out2, aes(position, velocity))+geom_path()\n# plotting our fake \"time\" variable\np4<-ggplot(out2, aes(time, t))+geom_line()\n# phase plot\nplot_grid(p1, p2, p3, p4, align='hv', labels=c('A', 'B', 'C', 'D'))\n")),(0,a.kt)("p",null,'In this example, we can start our system at position 0, velocity 0, and\nthe forcing will start moving our system. We can see from this that it\nbegins a little chaotically but it will then fall into a\xa0"resonant" mode'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"../../media/159472912758_2.png",alt:null})),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"If the forcing becomes very large (increase F) then it will take over\nthe system entirely"),(0,a.kt)("p",null,"state \\<- c(x1 = 0, x2 = 0, x3 = 0)\\\nparameters \\<- c(b = 10, F = 100, k = 30, m = 1)\\"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"../../media/159472912758_3.png",alt:null})),(0,a.kt)("p",null,"Now let's bring F back down to a small value, and then also change the\n2","*","x3 to 0.1","*","x3, then we can see that the forcing is slower and will\nhave less influence on the system"),(0,a.kt)("p",null,"state \\<- c(x1 = 0, x2 = 0, x3 = 0)\\\nparameters \\<- c(b = 0.1, F = 10, k = 30, m = 10)"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"../../media/159472912758_4.png",alt:null})),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"With these examples, you can see that the forcing takes over some of the\noscillations, but that the damping will chaotically work against the\nresonance.\xa0"),(0,a.kt)("p",null,"\\"),(0,a.kt)("p",null,"There are some good take homes here. On the applied side, this system\ncan be applied by engineers to\xa0modelling dynamics of a structure, and we\ncan use our program to simulate outcomes."),(0,a.kt)("p",null,"For our interest though, it is also interesting that we can also just\nsee that chaos starts to emerge from a fairly simple set of equations."),(0,a.kt)("p",null,"::: {#footer}\n","[ April 11th, 2017 9:29pm ]","{#timestamp} ","[chaos]","{.tag} ","[R]","{.tag}\n","[math]","{.tag} ","[desolve]","{.tag} ","[calculus]","{.tag}\n:::"))}c.isMDXComponent=!0},5592:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2017-04-11",function(){return n(4692)}])},159:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},219:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,{Z:function(){return r}})}},function(t){t.O(0,[9774,2888,179],(function(){return e=5592,t(t.s=e);var e}));var e=t.O();_N_E=e}]);