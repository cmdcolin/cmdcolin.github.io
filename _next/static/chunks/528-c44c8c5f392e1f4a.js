(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{2606:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(5893);function o(e){var r=e.children;return(0,n.jsx)("div",{children:r})}},4320:function(e,r,t){"use strict";var n=t(5893),o=t(1664),i=t.n(o);r.Z=function(){return(0,n.jsx)("div",{style:{marginBottom:100},children:(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)("a",{children:"Misc scribbles"})})})}},1327:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5893),o=t(1664),i=t.n(o),c=function(){return(0,n.jsxs)("footer",{style:{marginTop:100},children:[(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)("a",{children:"Home"})})," ",(0,n.jsx)(i(),{href:"/archive",children:(0,n.jsx)("a",{children:"Blog archive"})})," ",(0,n.jsx)(i(),{href:"https://github.com/cmdcolin/",children:(0,n.jsx)("a",{children:"Github"})})," ",(0,n.jsx)(i(),{href:"https://twitter.com/cmdcolin",children:(0,n.jsx)("a",{children:"Twitter"})})," ",(0,n.jsx)(i(),{href:"/projects",children:(0,n.jsx)("a",{children:"Projects"})})," ",(0,n.jsx)(i(),{href:"https://scholar.google.com/citations?view_op=list_works&hl=en&user=--FwzsgAAAAJ",children:(0,n.jsx)("a",{children:"Publications"})})," ",(0,n.jsx)(i(),{href:"/sketches",children:(0,n.jsx)("a",{children:"Sketches"})})," ",(0,n.jsx)(i(),{href:"/kitty",children:(0,n.jsx)("a",{children:"Kitty"})})," ",(0,n.jsx)(i(),{href:"/rss.xml",children:(0,n.jsx)("a",{children:"RSS"})}),(0,n.jsx)(i(),{href:"/about",children:(0,n.jsx)("a",{children:"About"})})," "]})},l=function(e){var r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("main",{children:r})}),(0,n.jsx)(c,{})]})}},5787:function(e,r,t){"use strict";var n=t(5893),o=t(1664),i=t.n(o),c=function(e){var r=e.post,t=r.title,o=r.date,c=r.slug;return(0,n.jsx)(i(),{as:"/posts/".concat(c),href:"/posts/[slug]",children:(0,n.jsxs)("a",{children:[o," - ",t]})})};r.Z=function(e){var r=e.posts;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h1",{children:"Posts"}),(0,n.jsx)("ul",{children:r.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsx)(c,{post:e})},e.slug)}))})]})}},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);c=!0);}catch(a){l=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i,c=(i=t(7294))&&i.__esModule?i:{default:i},l=t(1003),a=t(880),u=t(9246);var s={};function f(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=a.useRouter(),i=c.default.useMemo((function(){var r=o(l.resolveHref(n,e.href,!0),2),t=r[0],i=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):i||t}}),[n,e.href,e.as]),d=i.href,h=i.as,p=c.default.useRef(d),v=c.default.useRef(h),y=e.children,j=e.replace,m=e.shallow,b=e.scroll,g=e.locale;"string"===typeof y&&(y=c.default.createElement("a",null,y));var x=(r=c.default.Children.only(y))&&"object"===typeof r&&r.ref,w=o(u.useIntersection({rootMargin:"200px"}),3),A=w[0],k=w[1],M=w[2],E=c.default.useCallback((function(e){v.current===h&&p.current===d||(M(),v.current=h,p.current=d),A(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[h,x,d,M,A]);c.default.useEffect((function(){var e=k&&t&&l.isLocalURL(d),r="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(n,d,h,{locale:r})}),[h,d,k,g,t,n]);var S={ref:E,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,i,c,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:i,locale:a,scroll:c}))}(e,n,d,h,j,m,b,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var C="undefined"!==typeof g?g:n&&n.locale,I=n&&n.isLocaleDomain&&l.getDomainLocale(h,C,n&&n.locales,n&&n.domainLocales);S.href=I||l.addBasePath(l.addLocale(h,C,n&&n.defaultLocale))}return c.default.cloneElement(r,S)};r.default=d,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);c=!0);}catch(a){l=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],h=f[1],p=o(i.useState(r?r.current:null),2),v=p[0],y=p[1],j=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=a.get(n):(r=a.get(t),u.push(t));if(r)return r;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return a.set(t,r={id:t,observer:i,elements:o}),r}(t),o=n.id,i=n.observer,c=n.elements;return c.set(e,r),i.observe(e),function(){if(c.delete(e),i.unobserve(e),0===c.size){i.disconnect(),a.delete(o);var r=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&u.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]),m=i.useCallback((function(){h(!1)}),[]);return i.useEffect((function(){if(!l&&!d){var e=c.requestIdleCallback((function(){return h(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){r&&y(r.current)}),[r]),[j,d,m]};var i=t(7294),c=t(4686),l="undefined"!==typeof IntersectionObserver;var a=new Map,u=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},9008:function(e,r,t){e.exports=t(3121)},1664:function(e,r,t){e.exports=t(1551)}}]);