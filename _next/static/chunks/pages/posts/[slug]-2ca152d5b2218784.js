(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),f=function(e){return function(t){var n=s(t.components);return r.createElement(e,c({},t,{components:n}))}},s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,v=f["".concat(i,".").concat(d)]||f[d]||p[d]||c;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var c=n.length,i=new Array(c);i[0]=v;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"===typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8093:function(e,t,n){"use strict";var r=n(7294),o=n(3905);function c(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var a=c(r),u=i(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:n={},lazy:o}){const[c,i]=r.useState(!o||"undefined"===typeof window);r.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{i(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=r.useMemo((()=>{const n=Object.assign({mdx:u.mdx,React:a.default},t),r=Object.keys(n),o=Object.values(n),c=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return c.apply(c,o)}),[t,e]);if(!c)return a.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const f=a.default.createElement(u.MDXProvider,{components:n},a.default.createElement(l,null));return o?a.default.createElement("div",null,f):f}},2070:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(2061)}])},7518:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{children:t})}},1952:function(e,t,n){"use strict";var r=n(5893),o=n(1664);t.Z=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"Misc scribbles"})})})}},2115:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=n(1664),c=function(){return(0,r.jsxs)("footer",{style:{marginTop:20},children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})," ",(0,r.jsx)(o.default,{href:"/archive",children:(0,r.jsx)("a",{children:"Blog archive"})})," ",(0,r.jsx)(o.default,{href:"https://github.com/cmdcolin",children:(0,r.jsx)("a",{children:"Github"})})," ",(0,r.jsx)(o.default,{href:"https://twitter.com/cmdcolin",children:(0,r.jsx)("a",{children:"Twitter"})})," ",(0,r.jsx)(o.default,{href:"/projects",children:(0,r.jsx)("a",{children:"Projects"})})," ",(0,r.jsx)(o.default,{href:"/photos",children:(0,r.jsx)("a",{children:"Photos"})})," ",(0,r.jsx)(o.default,{href:"/rss.xml",children:(0,r.jsx)("a",{children:"RSS"})})]})},i=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("main",{children:t})}),(0,r.jsx)(c,{})]})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,c=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),a=n(387),u=n(7190);var l={};function f(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=a.useRouter(),s=c.default.useMemo((function(){var t=r(i.resolveHref(o,e.href,!0),2),n=t[0],c=t[1];return{href:n,as:e.as?i.resolveHref(o,e.as):c||n}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var j=(t=c.default.Children.only(v))&&"object"===typeof t&&t.ref,x=r(u.useIntersection({rootMargin:"200px"}),2),w=x[0],g=x[1],O=c.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);c.default.useEffect((function(){var e=g&&n&&i.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&f(o,d,p,{locale:t})}),[p,d,g,m,n,o]);var E={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:c,locale:u,scroll:a}))}(e,o,d,p,h,y,b,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof m?m:o&&o.locale,C=o&&o.isLocaleDomain&&i.getDomainLocale(p,P,o&&o.locales,o&&o.domainLocales);E.href=C||i.addBasePath(i.addLocale(p,P,o&&o.defaultLocale))}return c.default.cloneElement(t,E)};t.default=s},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=o.useRef(),l=r(o.useState(!1),2),f=l[0],s=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!i&&!f){var e=c.requestIdleCallback((function(){return s(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=n(7294),c=n(9311),i="undefined"!==typeof IntersectionObserver;var a=new Map},2061:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return h}});var r=n(5893),o=n(1163),c=n(2918),i=n(7518),a=n(1952),u=function(e){var t=e.title,n=e.date;return(0,r.jsxs)("h1",{children:[t," - ",n]})},l=n(2115),f=n(9008),s=n(8093);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}var v=!0,h=function(e){var t=e.post,n=(0,o.useRouter)();if(!n.isFallback&&!(null===t||void 0===t?void 0:t.slug))return(0,r.jsx)(c.default,{statusCode:404});var d=t.title,v=t.date,h=t.mdxSource;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.default,{children:(0,r.jsx)("title",{children:d})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{}),n.isFallback?(0,r.jsx)("div",{children:"Loading..."}):(0,r.jsxs)("article",{children:[(0,r.jsx)(f.default,{children:(0,r.jsx)("title",{children:d})}),(0,r.jsx)(u,{title:d,date:v}),(0,r.jsx)(s.R,p({},h))]})]})})]})}},2918:function(e,t,n){e.exports=n(9185)},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=2070,e(e.s=t);var t}));var t=e.O();_N_E=t}]);