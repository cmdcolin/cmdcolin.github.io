(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8526],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),f=a,d=h["".concat(s,".").concat(f)]||h[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("div",{className:"blog",children:t})]})}},5825:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(159),a=n(219),o=(n(7294),n(3905)),i=n(4995),l=["components"],s={},p=function(e){var t=e.children;return(0,o.kt)(i.default,null,t)};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Weekend project: graphing tumblr reblogs using cytoscape.js"),(0,o.kt)("p",null,"In the past, I made an app that used RStudio's Shiny platform to plot\nnetwork graphs with RGraphviz. This worked, and gave some nice results,\nbut when I found out about cytoscape.js, I really wanted to try that\nout."),(0,o.kt)("p",null,"The app is designed to plot tumblr reblogs, so it has a tree structure,\nbut simply plotting things as a tree is not very space efficient (as in,\nthe visualization takes up too much space). Therefore, using different\ntypes of layouts can really help.\xa0"),(0,o.kt)("p",null,"In my first app with graphviz\n",(0,o.kt)("a",{parentName:"p",href:"https://colindiesh.shinyapps.io/tumblrgraph"},"https://colindiesh.shinyapps.io/tumblrgraph"),', there are several\nbuilt-in graph layouts including "neato"\xa0"twopi",\xa0"circo", and "dot"'),(0,o.kt)("p",null,'I made all of these available for users to try in the Shiny app. The\nnames of the layouts don\'t lend much to their behavior, but they are\nbuilt-in functions in Graphviz. There are both "tree" and\n"force-directed" style graph views. As I mentioned, the "tree" style\nview make a lot of sense for the tumblr reblogs, but the force directed\ngraphs are also a lot more compact, so offering both styles is useful.\xa0'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"../../media/128000908903_0.png",alt:null})),(0,o.kt)("p",null,"Figure 1. My default example graph from graphviz using the twopi layout."),(0,o.kt)("p",null,"I wanted to replicate all the features that I had in the Graphviz app in\nCytoscape.js. Here is the breakdown of the basic components that needed\nreplicating:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Build the\xa0"graph" representation of reblogs in memory')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add user forms and configurability")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add color for distance from root using a breadth first search")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Draw the graph"))),(0,o.kt)("p",null,"As I went along, I was happy to learn that the concepts mapped very\neasily to javascript and cytoscape.js. The implementations are a little\ndifferent, but it worked out very nicely."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"../../media/128000908903_1.png",alt:null})),(0,o.kt)("p",null,"Figure 2. Same data plotted in Cytoscape.js with the springy layout."),(0,o.kt)("p",null,'In the new app, we enabled several different layouts similar to the\nGraphviz app too. In cytoscape.js, the layouts that are offered\ninclude\xa0"arbor",\xa0"springy",\xa0"cola",\xa0"cose", and\xa0"dagre". I like "cola"\nbecause it really looks like bubbles moving around in a soda. Others are\nworth experimenting with too.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"../../media/128000908903_2.png",alt:null})),(0,o.kt)("p",null,"Figure 3. A Cytoscape.js springy layout for a larger tumblr reblog graph"),(0,o.kt)("p",null,"The new cytoscape.js app also has a nice animation feature. The old\ngraphviz app offered animation too (using Yihui's animation library for\nR) but the new version can automatically encode HTML5 video on the\nclient side from individual picture frames in the browser using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/antimatter15/whammy"},'"Whammy"'),"! This quite\nimpressive!"),(0,o.kt)("p",null,"So to animate the graph, what is done is"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add nodes/edges and layout the graph (the simulation time is\nconfigurable, because allowing the user to interact with the graph while\nthe simulation is running is useful)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once layout is complete, the user can save the graph as an\nanimation, which first hides all nodes by adding visibility: hidden to\nthe CSS.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then the nodes are re-shown one-by-one, preserving the layout, and a\nframe is saved by the renderer at each step (takes a snapshot of the\ncanvas)."))),(0,o.kt)("p",null,"This strategy for the animation is actually better than the original\ngraphviz version that I had because the layout is only done once, which\nis time saving and it is also more consistent (the layout changes a lot\nif you re run it on different sets of nodes).\xa0"),(0,o.kt)("p",null,"Check out the app here\xa0",(0,o.kt)("a",{parentName:"p",href:"http://cmdcolin.github.io/tumblrgraph2/"},"http://cmdcolin.github.io/tumblrgraph2/")),(0,o.kt)("p",null,"Future goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test out super large graphs (I have tested up to about 500 reblogs\nbut after this, around 1000 reblogs, it slows down a lot and produces\nbad layouts. Needs fixing)"),(0,o.kt)("li",{parentName:"ul"},"Test out ability to place importance on certain nodes by increasing\nnode size based on it's degree")),(0,o.kt)("p",null,"Check out an example of the HTML5 video here"),(0,o.kt)("p",null,"::: {#footer}\n","[ August 30th, 2015 11:49pm ]","{#timestamp} ","[cytoscapejs]","{.tag}\n","[cytoscape]","{.tag} ","[javascript]","{.tag}\n:::"))}u.isMDXComponent=!0},5759:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2015-08-30",function(){return n(5825)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[9774,2888,179],(function(){return t=5759,e(e.s=t);var t}));var t=e.O();_N_E=t}]);