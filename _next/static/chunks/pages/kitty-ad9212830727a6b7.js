(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{1351:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kitty",function(){return n(6189)}])},7518:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{children:t})}},1952:function(e,t,n){"use strict";var r=n(5893),i=n(1664);t.Z=function(){return(0,r.jsx)("div",{style:{marginBottom:100},children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"Misc scribbles"})})})}},2115:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=n(1664),c=function(){return(0,r.jsxs)("footer",{style:{marginTop:100},children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})," ",(0,r.jsx)(i.default,{href:"/archive",children:(0,r.jsx)("a",{children:"Blog archive"})})," ",(0,r.jsx)(i.default,{href:"https://github.com/cmdcolin",children:(0,r.jsx)("a",{children:"Github"})})," ",(0,r.jsx)(i.default,{href:"https://twitter.com/cmdcolin",children:(0,r.jsx)("a",{children:"Twitter"})})," ",(0,r.jsx)(i.default,{href:"/projects",children:(0,r.jsx)("a",{children:"Projects"})})," ",(0,r.jsx)(i.default,{href:"/photos",children:(0,r.jsx)("a",{children:"Photos"})})," ",(0,r.jsx)(i.default,{href:"/rss.xml",children:(0,r.jsx)("a",{children:"RSS"})}),(0,r.jsx)(i.default,{href:"/about",children:(0,r.jsx)("a",{children:"About"})})," "]})},a=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("main",{children:t})}),(0,r.jsx)(c,{})]})}},3810:function(e,t,n){"use strict";var r=n(5893),i=function(e){var t=e.post,n=e.idx,i="/sketches/k"+(n+1)+".resized.webp",c="/sketches/j"+(n+1)+".resized.webp";return(0,r.jsxs)("div",{style:{marginBottom:100},children:[(0,r.jsx)("a",{href:i,children:(0,r.jsx)("img",{height:450,src:i,loading:"lazy"})}),(0,r.jsx)("a",{href:c,children:(0,r.jsx)("img",{height:450,src:c,loading:"lazy"})}),(0,r.jsx)("br",{}),new Date(t.date).toLocaleDateString()," -"," ",(0,r.jsx)("a",{href:t.url,children:t.title})," ",t.note?"(".concat(t.note,")"):""]})};t.Z=function(e){var t=e.sketches;return(0,r.jsxs)("section",{children:[(0,r.jsx)("h1",{children:"Sketches"}),t.map((function(e,t){return(0,r.jsx)(i,{post:e,idx:t},JSON.stringify(e))}))]})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(o){i=!0,c=o}finally{try{r||null==s.return||s.return()}finally{if(i)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,c=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),s=n(387),o=n(7190);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,i=s.useRouter(),f=c.default.useMemo((function(){var t=r(a.resolveHref(i,e.href,!0),2),n=t[0],c=t[1];return{href:n,as:e.as?a.resolveHref(i,e.as):c||n}}),[i,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,j=e.shallow,x=e.scroll,y=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var g=(t=c.default.Children.only(p))&&"object"===typeof t&&t.ref,m=r(o.useIntersection({rootMargin:"200px"}),2),b=m[0],w=m[1],k=c.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);c.default.useEffect((function(){var e=w&&n&&a.isLocalURL(d),t="undefined"!==typeof y?y:i&&i.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(i,d,h,{locale:t})}),[h,d,w,y,n,i]);var E={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,c,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](n,r,{shallow:c,locale:o,scroll:s}))}(e,i,d,h,v,j,x,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&u(i,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof y?y:i&&i.locale,L=i&&i.isLocaleDomain&&a.getDomainLocale(h,_,i&&i.locales,i&&i.domainLocales);E.href=L||a.addBasePath(a.addLocale(h,_,i&&i.defaultLocale))}return c.default.cloneElement(t,E)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(o){i=!0,c=o}finally{try{r||null==s.return||s.return()}finally{if(i)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,o=i.useRef(),l=r(i.useState(!1),2),u=l[0],f=l[1],d=i.useCallback((function(e){o.current&&(o.current(),o.current=void 0),n||u||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!a&&!u){var e=c.requestIdleCallback((function(){return f(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=n(7294),c=n(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map},6189:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7518),c=(n(3810),n(9008)),a=n(2115),s=n(1952),o=function(e){var t=e.children;e.allSketches;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{children:(0,r.jsx)("title",{children:"Misc scribblings - Kitty"})}),(0,r.jsx)(a.Z,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:"tiny",children:t})]})})]})};t.default=function(e){var t=void 0===e?{}:e,n=function(){var e=Object.assign({h2:"h2",p:"p",img:"img"},t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Kitty"}),"\n",(0,r.jsx)(e.p,{children:"We adopted a cat in late 2021. As a dog person, this it was pretty weird. His\nname is beezlebub. We thought he was a girl as a kitten... but he is, in fact,\na boy. And he is very devilish."}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{src:"/media/kitty2.jpg",alt:""}),"\n",(0,r.jsx)(e.img,{src:"/media/kitty3.jpg",alt:""}),"\n",(0,r.jsx)(e.img,{src:"/media/kitty4.jpg",alt:""}),"\n",(0,r.jsx)(e.img,{src:"/media/kitty1.jpg",alt:""})]})]})};return o?(0,r.jsx)(o,Object.assign({},t,{children:(0,r.jsx)(n,{})})):n()}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=1351,e(e.s=t);var t}));var t=e.O();_N_E=t}]);