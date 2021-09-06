(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),h=a,m=f["".concat(c,".").concat(h)]||f[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("img",{src:"/avatar.png",style:{height:"2em",marginLeft:"1em"}})]}),(0,r.jsx)("div",{className:"blog",children:t})]})}},4855:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(159),a=n(219),i=(n(7294),n(3905)),o=n(4995),s=["components"],c={},l=function(e){var t=e.children;return(0,i.kt)(o.default,null,t)};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Decrease your idle CPU usage when developing typescript apps with this one weird environment variable"),(0,i.kt)("p",null,"TL;DR:"),(0,i.kt)("p",null,"add this to your bashrc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"By default, the typescript watcher configuration e.g. tsc --watch or whatever is run internally to a create-react-app typescript app (I see it in the process manager as fork-ts-checker-webpack-plugin cpu usage) can have high CPU usage by default"),(0,i.kt)("p",null,"This is because the default configuration polls for file changes (constantly\nasks the computer if there are changes ever second or so). There is an\nalternative configuration for this to change it to a file watcher so it\nreceives file system notifications on file change. There is discussion here on\nthis."),(0,i.kt)("p",null,"The main summary is that a env variable set to\nTSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling allows this"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/31048"},"https://github.com/microsoft/TypeScript/issues/31048")),(0,i.kt)("p",null,"The issue thread shows that it can go from roughly ~7% idle CPU usage to 0.2%.\nThis corresponds roughly what I see too. Detailed docs for typescript discuss\nsome of the reasoning behing not making this the default"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript-Handbook/blob/master/pages/Configuring%20Watch.md#background"},"https://github.com/microsoft/TypeScript-Handbook/blob/master/pages/Configuring%20Watch.md#background")),(0,i.kt)("p",null,"It claims that some OS specific behaviors of file watching could be harmful to\nmaking it the default. For example, that (maybe?) on linux, it may use a large\nnumber of file watchers which can exceed notify handles (this is a setting I\ncommonly have to increase in linux, guide here\n",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/rubiin/ubuntu-increase-inotify-watcher-file-watch-limit-kf4"},"https://dev.to/rubiin/ubuntu-increase-inotify-watcher-file-watch-limit-kf4"),")"),(0,i.kt)("p",null,"PS: if you have a package.json of a ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app --template typescript")," or\nsomething like this then you can edit the package.json to apply this\nautomatically"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-"start": "react-scripts start"\n+"start": "cross-env TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling react-scripts start"\n')),(0,i.kt)("p",null,"Phew. I can already feel my laptop running cooler...placebo? what is that?"),(0,i.kt)("p",null,"Disclaimer: it may be worth reading the reasons that typescript does not have\nthis enabled by default before pushing this into your dev environment and all\nyour teammates, but as far as I could tell, it seems ok!"))}u.isMDXComponent=!0},4277:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2021-09-05-typescript",function(){return n(4855)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=4277,e(e.s=t);var t}));var t=e.O();_N_E=t}]);