(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8262],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,f=h["".concat(l,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("div",{className:"blog",children:t})]})}},6807:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(159),a=n(219),o=(n(7294),n(3905)),i=n(4995),s=["components"],l={},p=function(e){var t=e.children;return(0,o.kt)(i.default,null,t)};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Creating high-resolution screenshots (of jbrowse) with phantomJS"),(0,o.kt)("h1",null,"Introduction"),(0,o.kt)("p",null,"Generating screenshots that are of high quality can be a great benefit\nfor things like science publications. PhantomJS is great for automating\nthis in a reproducible way. While many HTML pages can be rendered in\nhigh resolution without modification, HTML5 canvas apps need special\nconsiderations (see this ",(0,o.kt)("a",{parentName:"p",href:"http://searchvoidstar.tumblr.com/post/86542847038/high-dpi-rendering-on-html5-canvas-some-problems"},"previous post on the\ntopic"),")."),(0,o.kt)("p",null,'One of the key things that we noticed when we developed the high\nresolution canvas rendering (see above link) is that the\n"devicePixelRatio" can increase based on the browser\'s zoom level, and\nit can also take fractional values. This was a difficult problem, to\nmake rendering 100% consistent under all devicePixelRatio values, so we\ncreated a config parameter called highResolutionMode to accept arbitrary\nresolutions.'),(0,o.kt)("p",null,"Later, we learned about PhantomJS and how it can be used for creating\nscreenshots, it was clear that our design for the settings arbitrary\nscaling factors for the HTML5 canvas was very helpful, as we can set\nhighResolutionMode=4 along with the phantomJS variable\npage.zoomFactor=4, which matches the resolutions and creates high-res\ncanvas screenshots."),(0,o.kt)("p",null,"One of the reasons that this is important is that it doesn't look like\nPhantomJS allows \"devicePixelRatio\" to be emulated, so the\npage.zoomFactor doesn't necessarily set the devicePixelRatio to a higher\nnumber, so being able to set the the arbitrary high resolution canvas\nscalings ourselves is a good solution. Reference: issue open Jan 2013\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ariya/phantomjs/issues/10964"},"https://github.com/ariya/phantomjs/issues/10964")," and we are now in Aug\n2015"),(0,o.kt)("p",null,"Here are some examples of the rendering process."),(0,o.kt)("h2",null,"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rendering screenshots to PNG"),(0,o.kt)("p",{parentName:"li"},'phantomjs rasterize.js\n"',(0,o.kt)("a",{parentName:"p",href:"http://localhost/jbrowse/?data=sample_data/json/volvox&tracklist=0"},"http://localhost/jbrowse/?data=sample_data/json/volvox&tracklist=0"),'"\noutput.png "3800px',"*",'1600px" 2'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://i.imgur.com/ABLo6WJ.png"},(0,o.kt)("img",{parentName:"a",src:"http://i.imgur.com/ABLo6WJ.png",alt:null}))),(0,o.kt)("p",{parentName:"li"},"Figure 1. A basic image output from phantomJS. It uses a\nzoomFactor=2 on the command line to match highResolutionMode=2 in\nthe config file. ","`")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rendering screenshots to PDF. In JBrowse, this requires PhantomJS\n2.0. Also see footnote."),(0,o.kt)("p",{parentName:"li"},'phantomjs rasterize.js\n"http://localhost/jbrowse/?data=sample',"_",'data/json/volvox&tracklist=0"\noutput.pdf "16in',"*",'8in"'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/7pceo4o406dys8s/output.pdf?dl=0"},"Dropbox PDF\n906kb")),(0,o.kt)("p",{parentName:"li"},"Figure 2. Outputted PDF from phantomJS. This still requires setting\nthe configuration such as highResolutionMode=2 too"),(0,o.kt)("h2",{parentName:"li"},"Conclusion"),(0,o.kt)("p",{parentName:"li"},"In the future, we want to consider adding highResolutionMode to be\nspecified via the URL so that it doesn't need to be changed\nmanually, although, setting highResolutionMode=2 by default is not a\nbad strategy."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Footnote")),(0,o.kt)("p",{parentName:"li"},'I used the following patch for rasterize.js to help "fill out" the\npage space in PDF renderings (otherwise, it is a square page, not\nsuper pretty for a widescreen app). I guess rasterize.js is really\njust a template and not meant to be super multi-purposed, so this\ncustom modification helps for our case.'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    diff --git a/examples/rasterize.js b/examples/rasterize.js\n    index b0e0f67..3b0b6e4 100644\n    --- a/examples/rasterize.js\n    +++ b/examples/rasterize.js\n    _@@ -14,6 +14,7 @@ if (system.args.length < 3 || system.args.length > 5) {\n        page.viewportSize = { width: 600, height: 600 };\n        if (system.args.length > 3 && system.args[2].substr(-4) === \".pdf\") {\n            size = system.args[3].split('_');\n         \n    +       page.viewportSize.width *= parseInt(size[0])/parseInt(size[1]);\n            page.paperSize = size.length === 2 ? { width: size[0], height: size[1], margin: '0px' }\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference")),(0,o.kt)("p",null,"gmod.org/wiki/JBrowse","_","Configuration","_","Guide","#","Rendering","_","high","_","resolution","_","screenshots","_","using","_","PhantomJS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Comparison")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"../../media/112494997473_0.png",alt:"image"})),(0,o.kt)("p",null,"Big improvement on font rendering"),(0,o.kt)("p",null,"::: {#footer}\n","[ March 2nd, 2015 1:52am ]","{#timestamp} ","[javascript]","{.tag}\n","[phantomjs]","{.tag} ","[html5]","{.tag} ","[canvas]","{.tag}\n:::"))}c.isMDXComponent=!0},8884:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2015-03-02",function(){return n(6807)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[9774,2888,179],(function(){return t=8884,e(e.s=t);var t}));var t=e.O();_N_E=t}]);