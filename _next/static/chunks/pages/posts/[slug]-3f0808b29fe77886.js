(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3905:function(e,t,r){"use strict";r.r(t),r.d(t,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),f=function(e){return function(t){var r=s(t.components);return n.createElement(e,c({},t,{components:r}))}},s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"===typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,y=f["".concat(i,".").concat(d)]||f[d]||p[d]||c;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var c=r.length,i=new Array(c);i[0]=y;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"===typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8093:function(e,t,r){"use strict";var n=r(7294),o=r(3905);function c(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var a=c(n),u=i(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:r={},lazy:o}){const[c,i]=n.useState(!o||"undefined"===typeof window);n.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{i(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=n.useMemo((()=>{const r=Object.assign({mdx:u.mdx,React:a.default},t),n=Object.keys(r),o=Object.values(r),c=Reflect.construct(Function,n.concat(`${e}; return MDXContent;`));return c.apply(c,o)}),[t,e]);if(!c)return a.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const f=a.default.createElement(u.MDXProvider,{components:r},a.default.createElement(l,null));return o?a.default.createElement("div",null,f):f}},9035:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(2061)}])},7518:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{children:t})}},1952:function(e,t,r){"use strict";var n=r(5893),o=r(1664);t.Z=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:"Misc scribbles"})})})}},2115:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),o=r(1664),c=function(){return(0,n.jsxs)("footer",{style:{marginTop:20},children:[(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})})," ",(0,n.jsx)(o.default,{href:"/archive",children:(0,n.jsx)("a",{children:"Blog archive"})})," ",(0,n.jsx)(o.default,{href:"https://github.com/cmdcolin",children:(0,n.jsx)("a",{children:"Github"})})," ",(0,n.jsx)(o.default,{href:"https://twitter.com/cmdcolin",children:(0,n.jsx)("a",{children:"Twitter"})})," ",(0,n.jsx)(o.default,{href:"/projects",children:(0,n.jsx)("a",{children:"Projects"})})," ",(0,n.jsx)(o.default,{href:"/photos",children:(0,n.jsx)("a",{children:"Photos"})})," ",(0,n.jsx)(o.default,{href:"/rss.xml",children:(0,n.jsx)("a",{children:"RSS"})})]})},i=function(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("main",{children:t})}),(0,n.jsx)(c,{})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var c,i=(c=r(7294))&&c.__esModule?c:{default:c},a=r(6273),u=r(387),l=r(7190);var f={};function s(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),c=i.default.useMemo((function(){var t=o(a.resolveHref(n,e.href,!0),2),r=t[0],c=t[1];return{href:r,as:e.as?a.resolveHref(n,e.as):c||r}}),[n,e.href,e.as]),d=c.href,p=c.as,y=e.children,h=e.replace,v=e.shallow,m=e.scroll,b=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var j=(t=i.default.Children.only(y))&&"object"===typeof t&&t.ref,g=o(l.useIntersection({rootMargin:"200px"}),2),w=g[0],x=g[1],O=i.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);i.default.useEffect((function(){var e=x&&r&&a.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,x,b,r,n]);var E={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:c,locale:u,scroll:i}))}(e,n,d,p,h,v,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof b?b:n&&n.locale,C=n&&n.isLocaleDomain&&a.getDomainLocale(p,P,n&&n.locales,n&&n.domainLocales);E.href=C||a.addBasePath(a.addLocale(p,P,n&&n.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,n=c.useRef(),l=o(c.useState(!1),2),f=l[0],s=l[1],d=c.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||f||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,c=n.observer,i=n.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[r,t,f]);return c.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return s(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[d,f]};var c=r(7294),i=r(9311),a="undefined"!==typeof IntersectionObserver;var u=new Map},2061:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return y},default:function(){return h}});var n=r(5893),o=r(1163),c=r(2918),i=r(7518),a=r(1952),u=function(e){var t=e.title,r=e.date;return(0,n.jsxs)("h1",{children:[t," - ",r]})},l=r(2115),f=r(9008),s=r(8093);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}var y=!0,h=function(e){var t=e.post,r=(0,o.useRouter)();if(!r.isFallback&&!(null===t||void 0===t?void 0:t.slug))return(0,n.jsx)(c.default,{statusCode:404});var d=t.title,y=t.date,h=t.mdxSource;return(0,n.jsx)(l.Z,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(a.Z,{}),r.isFallback?(0,n.jsx)("div",{children:"Loading..."}):(0,n.jsxs)("article",{children:[(0,n.jsx)(f.default,{children:(0,n.jsx)("title",{children:d})}),(0,n.jsx)(u,{title:d,date:y}),(0,n.jsx)(s.R,p({},h))]})]})})}},2918:function(e,t,r){e.exports=r(9185)},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return t=9035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);