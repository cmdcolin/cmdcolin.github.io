(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{1351:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kitty",function(){return r(6189)}])},2606:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893);function i(e){var t=e.children;return(0,n.jsx)("div",{children:t})}},4320:function(e,t,r){"use strict";var n=r(5893),i=r(1664),o=r.n(i);t.Z=function(){return(0,n.jsx)("div",{style:{marginBottom:100},children:(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)("a",{children:"Misc scribbles"})})})}},1327:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893),i=r(1664),o=r.n(i),c=function(){return(0,n.jsxs)("footer",{style:{marginTop:100},children:[(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)("a",{children:"Home"})})," ",(0,n.jsx)(o(),{href:"/archive",children:(0,n.jsx)("a",{children:"Blog archive"})})," ",(0,n.jsx)(o(),{href:"https://github.com/cmdcolin/",children:(0,n.jsx)("a",{children:"Github"})})," ",(0,n.jsx)(o(),{href:"https://twitter.com/cmdcolin",children:(0,n.jsx)("a",{children:"Twitter"})})," ",(0,n.jsx)(o(),{href:"/projects",children:(0,n.jsx)("a",{children:"Projects"})})," ",(0,n.jsx)(o(),{href:"https://scholar.google.com/citations?view_op=list_works&hl=en&user=--FwzsgAAAAJ",children:(0,n.jsx)("a",{children:"Publications"})})," ",(0,n.jsx)(o(),{href:"/sketches",children:(0,n.jsx)("a",{children:"Sketches"})})," ",(0,n.jsx)(o(),{href:"/kitty",children:(0,n.jsx)("a",{children:"Kitty"})})," ",(0,n.jsx)(o(),{href:"/rss.xml",children:(0,n.jsx)("a",{children:"RSS"})}),(0,n.jsx)(o(),{href:"/about",children:(0,n.jsx)("a",{children:"About"})})," "]})},a=function(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("main",{children:t})}),(0,n.jsx)(c,{})]})}},6232:function(e,t,r){"use strict";var n=r(5893),i=function(e){var t=e.post,r=e.idx,i="/sketches/k"+(r+1)+".resized.webp",o="/sketches/j"+(r+1)+".resized.webp";return(0,n.jsxs)("div",{style:{marginBottom:100},children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("a",{href:i,children:(0,n.jsx)("img",{height:450,src:i,loading:"lazy"})}),(0,n.jsx)("a",{href:o,children:(0,n.jsx)("img",{height:450,src:o,loading:"lazy"})})]}),(0,n.jsx)("br",{}),new Date(t.date).toLocaleDateString()," -"," ",(0,n.jsx)("a",{href:t.url,children:t.title})," ",t.note?"(".concat(t.note,")"):""]})};t.Z=function(e){var t=e.sketches;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h1",{children:"Sketches"}),t.map((function(e,r){return(0,n.jsx)(i,{post:e,idx:t.length-r-1},JSON.stringify(e))}))]})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,c=(o=r(7294))&&o.__esModule?o:{default:o},a=r(1003),l=r(880),s=r(9246);var u={};function f(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(i?"%"+i:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),o=c.default.useMemo((function(){var t=i(a.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?a.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,h=o.as,p=c.default.useRef(d),j=c.default.useRef(h),v=e.children,y=e.replace,g=e.shallow,m=e.scroll,x=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var b=(t=c.default.Children.only(v))&&"object"===typeof t&&t.ref,k=i(s.useIntersection({rootMargin:"200px"}),3),w=k[0],_=k[1],A=k[2],E=c.default.useCallback((function(e){j.current===h&&p.current===d||(A(),j.current=h,p.current=d),w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[h,b,d,A,w]);c.default.useEffect((function(){var e=_&&r&&a.isLocalURL(d),t="undefined"!==typeof x?x:n&&n.locale,i=u[d+"%"+h+(t?"%"+t:"")];e&&!i&&f(n,d,h,{locale:t})}),[h,d,_,x,r,n]);var S={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,c,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),t[i?"replace":"push"](r,n,{shallow:o,locale:l,scroll:c}))}(e,n,d,h,y,g,m,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof x?x:n&&n.locale,O=n&&n.isLocaleDomain&&a.getDomainLocale(h,M,n&&n.locales,n&&n.domainLocales);S.href=O||a.addBasePath(a.addLocale(h,M,n&&n.defaultLocale))}return c.default.cloneElement(t,S)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!a,u=o.useRef(),f=i(o.useState(!1),2),d=f[0],h=f[1],p=i(o.useState(t?t.current:null),2),j=p[0],v=p[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),s.push(r));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:o,elements:i}),t}(r),i=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){if(c.delete(e),o.unobserve(e),0===c.size){o.disconnect(),l.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:j,rootMargin:r}))}),[n,j,r,d]),g=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!a&&!d){var e=c.requestIdleCallback((function(){return h(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&v(t.current)}),[t]),[y,d,g]};var o=r(7294),c=r(4686),a="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6189:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(2606),o=(r(6232),r(9008)),c=r(1327),a=r(4320),l=function(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"Misc scribblings - Kitty"})}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)("div",{className:"tiny",children:t})]})})]})};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){var t=Object.assign({h2:"h2",p:"p",img:"img"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Kitty"}),"\n",(0,n.jsx)(t.p,{children:"We adopted a cat in late 2021. His name is beezlebub. Beezle for short. Or\nbeezee. Or little man. He is very devilish, and in his current life stage likes\nto wake me up at all hours of the night to try to get food."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:"/media/kitty3.resized.jpg",alt:""}),"\n",(0,n.jsx)(t.img,{src:"/media/kitty2.resized.jpg",alt:""}),"\n",(0,n.jsx)(t.img,{src:"/media/kitty4.resized.jpg",alt:""}),"\n",(0,n.jsx)(t.img,{src:"/media/kitty1.resized.jpg",alt:""}),"\n",(0,n.jsx)(t.img,{src:"/media/socks.jpg",alt:""})]})]})};return l?(0,n.jsx)(l,Object.assign({},e,{children:(0,n.jsx)(t,{})})):t()}},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=1351,e(e.s=t);var t}));var t=e.O();_N_E=t}]);