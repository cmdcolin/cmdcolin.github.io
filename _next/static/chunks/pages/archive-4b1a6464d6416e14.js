(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9434:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archive",function(){return n(7018)}])},7518:function(e,r,n){"use strict";var t=n(5893);r.Z=function(e){var r=e.children;return(0,t.jsx)("div",{children:r})}},1952:function(e,r,n){"use strict";var t=n(5893),i=n(1664);r.Z=function(){return(0,t.jsx)("div",{children:(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)("a",{children:"Misc scribbles"})})})}},2115:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(5893),i=n(1664),c=function(){return(0,t.jsxs)("footer",{style:{marginTop:20},children:[(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})," ",(0,t.jsx)(i.default,{href:"/archive",children:(0,t.jsx)("a",{children:"Blog archive"})})," ",(0,t.jsx)(i.default,{href:"https://github.com/cmdcolin",children:(0,t.jsx)("a",{children:"Github"})})," ",(0,t.jsx)(i.default,{href:"https://twitter.com/cmdcolin",children:(0,t.jsx)("a",{children:"Twitter"})})," ",(0,t.jsx)(i.default,{href:"/projects",children:(0,t.jsx)("a",{children:"Projects"})})," ",(0,t.jsx)(i.default,{href:"/photos",children:(0,t.jsx)("a",{children:"Photos"})})," ",(0,t.jsx)(i.default,{href:"/rss.xml",children:(0,t.jsx)("a",{children:"RSS"})})]})},o=function(e){var r=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsx)("main",{children:r})}),(0,t.jsx)(c,{})]})}},4847:function(e,r,n){"use strict";var t=n(5893),i=n(1664),c=function(e){var r=e.title,n=e.date,c=e.slug;return(0,t.jsx)("div",{children:(0,t.jsx)(i.default,{as:"/posts/".concat(c),href:"/posts/[slug]",children:(0,t.jsxs)("a",{children:[n," - ",r]})})})};r.Z=function(e){var r=e.posts;return(0,t.jsxs)("section",{children:[(0,t.jsx)("h1",{children:"Posts"}),(0,t.jsx)("ul",{children:r.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(c,{title:e.title,date:e.date,slug:e.slug},e.slug)},e.slug)}))})]})}},8418:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(l){i=!0,c=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw c}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var i,c=(i=n(7294))&&i.__esModule?i:{default:i},o=n(6273),s=n(387),l=n(7190);var a={};function u(e,r,n,t){if(e&&o.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;a[r+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,i=s.useRouter(),f=c.default.useMemo((function(){var r=t(o.resolveHref(i,e.href,!0),2),n=r[0],c=r[1];return{href:n,as:e.as?o.resolveHref(i,e.as):c||n}}),[i,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,j=e.shallow,x=e.scroll,y=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=(r=c.default.Children.only(v))&&"object"===typeof r&&r.ref,b=t(l.useIntersection({rootMargin:"200px"}),2),m=b[0],w=b[1],_=c.default.useCallback((function(e){m(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,m]);c.default.useEffect((function(){var e=w&&n&&o.isLocalURL(d),r="undefined"!==typeof y?y:i&&i.locale,t=a[d+"%"+h+(r?"%"+r:"")];e&&!t&&u(i,d,h,{locale:r})}),[h,d,w,y,n,i]);var E={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,i,c,s,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&t.indexOf("#")>=0&&(s=!1),r[i?"replace":"push"](n,t,{shallow:c,locale:l,scroll:s}))}(e,i,d,h,p,j,x,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),o.isLocalURL(d)&&u(i,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var M="undefined"!==typeof y?y:i&&i.locale,L=i&&i.isLocaleDomain&&o.getDomainLocale(h,M,i&&i.locales,i&&i.domainLocales);E.href=L||o.addBasePath(o.addLocale(h,M,i&&i.defaultLocale))}return c.default.cloneElement(r,E)};r.default=f},7190:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(l){i=!0,c=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw c}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!o,l=i.useRef(),a=t(i.useState(!1),2),u=a[0],f=a[1],d=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=s.get(r);if(n)return n;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return s.set(r,n={id:r,observer:i,elements:t}),n}(n),i=t.id,c=t.observer,o=t.elements;return o.set(e,r),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[n,r,u]);return i.useEffect((function(){if(!o&&!u){var e=c.requestIdleCallback((function(){return f(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=n(7294),c=n(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},7018:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return u}});var t=n(5893),i=n(7518),c=n(4847),o=(n(1664),n(2115)),s=n(1952),l=n(9008),a=function(e){var r=e.children,n=e.allPosts;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{children:(0,t.jsx)("title",{children:"Misc scribblings - Blog archive"})}),(0,t.jsx)(o.Z,{children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(s.Z,{}),r,(0,t.jsx)(c.Z,{posts:n})]})})]})};var u=!0;r.default=function(e){var r=void 0===e?{}:e,n=function(){var e=Object.assign({h2:"h2"},r.components);return(0,t.jsx)(e.h2,{children:"Blog archive"})};return a?(0,t.jsx)(a,Object.assign({},r,{children:(0,t.jsx)(n,{})})):n()}},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=9434,e(e.s=r);var r}));var r=e.O();_N_E=r}]);