(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{1351:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kitty",function(){return t(6189)}])},2606:function(e,r,t){"use strict";var n=t(5893);r.Z=function(e){var r=e.children;return(0,n.jsx)("div",{children:r})}},4320:function(e,r,t){"use strict";var n=t(5893),i=t(1664);r.Z=function(){return(0,n.jsx)("div",{style:{marginBottom:100},children:(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{children:"Misc scribbles"})})})}},1327:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(5893),i=t(1664),o=function(){return(0,n.jsxs)("footer",{style:{marginTop:100},children:[(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})})," ",(0,n.jsx)(i.default,{href:"/archive",children:(0,n.jsx)("a",{children:"Blog archive"})})," ",(0,n.jsx)(i.default,{href:"https://github.com/cmdcolin",children:(0,n.jsx)("a",{children:"Github"})})," ",(0,n.jsx)(i.default,{href:"https://twitter.com/cmdcolin",children:(0,n.jsx)("a",{children:"Twitter"})})," ",(0,n.jsx)(i.default,{href:"/projects",children:(0,n.jsx)("a",{children:"Projects"})})," ",(0,n.jsx)(i.default,{href:"https://scholar.google.com/citations?view_op=list_works&hl=en&user=--FwzsgAAAAJ",children:(0,n.jsx)("a",{children:"Publications"})})," ",(0,n.jsx)(i.default,{href:"/sketches",children:(0,n.jsx)("a",{children:"Sketches"})})," ",(0,n.jsx)(i.default,{href:"/kitty",children:(0,n.jsx)("a",{children:"Kitty"})})," ",(0,n.jsx)(i.default,{href:"/rss.xml",children:(0,n.jsx)("a",{children:"RSS"})}),(0,n.jsx)(i.default,{href:"/about",children:(0,n.jsx)("a",{children:"About"})})," "]})},c=function(e){var r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("main",{children:r})}),(0,n.jsx)(o,{})]})}},6232:function(e,r,t){"use strict";var n=t(5893),i=function(e){var r=e.post,t=e.idx,i="/sketches/k"+(t+1)+".resized.webp",o="/sketches/j"+(t+1)+".resized.webp";return(0,n.jsxs)("div",{style:{marginBottom:100},children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("a",{href:i,children:(0,n.jsx)("img",{height:450,src:i,loading:"lazy"})}),(0,n.jsx)("a",{href:o,children:(0,n.jsx)("img",{height:450,src:o,loading:"lazy"})})]}),(0,n.jsx)("br",{}),new Date(r.date).toLocaleDateString()," -"," ",(0,n.jsx)("a",{href:r.url,children:r.title})," ",r.note?"(".concat(r.note,")"):""]})};r.Z=function(e){var r=e.sketches;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h1",{children:"Sketches"}),r.map((function(e,t){return(0,n.jsx)(i,{post:e,idx:r.length-t-1},JSON.stringify(e))}))]})}},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,c=(o=t(7294))&&o.__esModule?o:{default:o},a=t(1003),l=t(880),s=t(9246);var u={};function f(e,r,t,n){if(e&&a.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),o=c.default.useMemo((function(){var r=i(a.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?a.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),d=o.href,h=o.as,p=e.children,v=e.replace,j=e.shallow,y=e.scroll,m=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var x=(r=c.default.Children.only(p))&&"object"===typeof r&&r.ref,g=i(s.useIntersection({rootMargin:"200px"}),2),b=g[0],w=g[1],k=c.default.useCallback((function(e){b(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,b]);c.default.useEffect((function(){var e=w&&t&&a.isLocalURL(d),r="undefined"!==typeof m?m:n&&n.locale,i=u[d+"%"+h+(r?"%"+r:"")];e&&!i&&f(n,d,h,{locale:r})}),[h,d,w,m,t,n]);var A={ref:k,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,i,o,c,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),r[i?"replace":"push"](t,n,{shallow:o,locale:l,scroll:c}))}(e,n,d,h,v,j,y,m)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),a.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var _="undefined"!==typeof m?m:n&&n.locale,E=n&&n.isLocaleDomain&&a.getDomainLocale(h,_,n&&n.locales,n&&n.domainLocales);A.href=E||a.addBasePath(a.addLocale(h,_,n&&n.defaultLocale))}return c.default.cloneElement(r,A)};r.default=d},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!a,u=o.useRef(),f=i(o.useState(!1),2),d=f[0],h=f[1],p=i(o.useState(r?r.current:null),2),v=p[0],j=p[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=l.get(n):(r=l.get(t),s.push(t));if(r)return r;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(t,r={id:t,observer:o,elements:i}),r}(t),i=n.id,o=n.observer,c=n.elements;return c.set(e,r),o.observe(e),function(){if(c.delete(e),o.unobserve(e),0===c.size){o.disconnect(),l.delete(i);var r=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));r>-1&&s.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]);return o.useEffect((function(){if(!a&&!d){var e=c.requestIdleCallback((function(){return h(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&j(r.current)}),[r]),[y,d]};var o=t(7294),c=t(4686),a="undefined"!==typeof IntersectionObserver;var l=new Map,s=[]},6189:function(e,r,t){"use strict";t.r(r);var n=t(5893),i=t(2606),o=(t(6232),t(9008)),c=t(1327),a=t(4320),l=function(e){var r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"Misc scribblings - Kitty"})}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)("div",{className:"tiny",children:r})]})})]})};r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=function(){var r=Object.assign({h2:"h2",p:"p",img:"img"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{children:"Kitty"}),"\n",(0,n.jsx)(r.p,{children:"We adopted a cat in late 2021. His name is beezlebub [sic]. And he is very devilish."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{src:"/media/kitty3.resized.jpg",alt:""}),"\n",(0,n.jsx)(r.img,{src:"/media/kitty2.resized.jpg",alt:""}),"\n",(0,n.jsx)(r.img,{src:"/media/kitty4.resized.jpg",alt:""}),"\n",(0,n.jsx)(r.img,{src:"/media/kitty1.resized.jpg",alt:""})]})]})};return l?(0,n.jsx)(l,Object.assign({},e,{children:(0,n.jsx)(r,{})})):r()}},9008:function(e,r,t){e.exports=t(3121)},1664:function(e,r,t){e.exports=t(1551)}},function(e){e.O(0,[774,888,179],(function(){return r=1351,e(e.s=r);var r}));var r=e.O();_N_E=r}]);