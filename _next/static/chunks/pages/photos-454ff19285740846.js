(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{445:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photos",function(){return r(7302)}])},7518:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{children:t})}},1952:function(e,t,r){"use strict";var n=r(5893),i=r(1664);t.Z=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{children:"Misc scribbles"})})})}},2115:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893),i=r(1664),a=function(){return(0,n.jsxs)("footer",{style:{marginTop:20},children:[(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})})," ",(0,n.jsx)(i.default,{href:"/archive",children:(0,n.jsx)("a",{children:"Blog archive"})})," ",(0,n.jsx)(i.default,{href:"https://github.com/cmdcolin",children:(0,n.jsx)("a",{children:"Github"})})," ",(0,n.jsx)(i.default,{href:"https://twitter.com/cmdcolin",children:(0,n.jsx)("a",{children:"Twitter"})})," ",(0,n.jsx)(i.default,{href:"/projects",children:(0,n.jsx)("a",{children:"Projects"})})," ",(0,n.jsx)(i.default,{href:"/photos",children:(0,n.jsx)("a",{children:"Photos"})})," ",(0,n.jsx)(i.default,{href:"/rss.xml",children:(0,n.jsx)("a",{children:"RSS"})})]})},o=function(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("main",{children:t})}),(0,n.jsx)(a,{})]})}},4847:function(e,t,r){"use strict";var n=r(5893),i=r(1664),a=function(e){var t=e.title,r=e.date,a=e.slug;return(0,n.jsx)("div",{children:(0,n.jsx)(i.default,{as:"/posts/".concat(a),href:"/posts/[slug]",children:(0,n.jsxs)("a",{children:[r," - ",t]})})})};t.Z=function(e){var t=e.posts;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h1",{children:"Posts"}),(0,n.jsx)("ul",{children:t.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsx)(a,{title:e.title,date:e.date,slug:e.slug},e.slug)},e.slug)}))})]})}},8045:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){i=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,r=e.sizes,a=e.unoptimized,l=void 0!==a&&a,u=e.priority,h=void 0!==u&&u,g=e.loading,b=e.lazyBoundary,v=void 0===b?"200px":b,y=e.className,j=e.quality,x=e.width,k=e.height,S=e.objectFit,I=e.objectPosition,C=e.onLoadingComplete,Q=e.loader,z=void 0===Q?U:Q,L=e.placeholder,E=void 0===L?"empty":L,O=e.blurDataURL,P=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=r?"responsive":"intrinsic";"layout"in P&&(P.layout&&(D=P.layout),delete P.layout);var J="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var B=w(t)?t.default:t;if(!B.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(B)));if(O=O||B.blurDataURL,J=B.src,(!D||"fill"!==D)&&(k=k||B.height,x=x||B.width,!B.height||!B.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(B)))}t="string"===typeof t?t:J;var M=R(x),F=R(k),V=R(j),G=!h&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,G=!1);A.has(t)&&(G=!1);0;var W,X=i(d.useIntersection({rootMargin:v,disabled:!G}),2),N=X[0],q=X[1],T=!G||q,H={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K=!1,Y={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:I},$="blur"===E?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(O,'")'),backgroundPosition:I||"0% 0%"}:{};if("fill"===D)H.display="block",H.position="absolute",H.top=0,H.left=0,H.bottom=0,H.right=0;else if("undefined"!==typeof M&&"undefined"!==typeof F){var ee=F/M,te=isNaN(ee)?"100%":"".concat(100*ee,"%");"responsive"===D?(H.display="block",H.position="relative",K=!0,Z.paddingTop=te):"intrinsic"===D?(H.display="inline-block",H.position="relative",H.maxWidth="100%",K=!0,Z.maxWidth="100%",W='<svg width="'.concat(M,'" height="').concat(F,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(H.display="inline-block",H.position="relative",H.width=M,H.height=F)}else 0;var re={src:p,srcSet:void 0,sizes:void 0};T&&(re=_({src:t,unoptimized:l,layout:D,width:M,quality:V,sizes:r,loader:z}));var ne=t;0;0;var ie=(n(m={},"imagesrcset",re.srcSet),n(m,"imagesizes",re.sizes),m);return o.default.createElement("span",{style:H},K?o.default.createElement("span",{style:Z},W?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(W))}):null):null,o.default.createElement("img",Object.assign({},P,re,{decoding:"async","data-nimg":D,className:y,ref:function(e){N(e),function(e,t,r,n,i){if(!e)return;var a=function(){e.src!==p&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),A.add(t),i){var r=e.naturalWidth,a=e.naturalHeight;i({naturalWidth:r,naturalHeight:a})}}))};e.complete?a():e.onload=a}(e,ne,0,E,C)},style:f({},Y,$)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},P,_({src:t,unoptimized:l,layout:D,width:M,quality:V,sizes:r,loader:z}),{decoding:"async","data-nimg":D,style:Y,className:y,loading:g||"lazy"}))),h?o.default.createElement(s.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+re.src+re.srcSet+re.sizes,rel:"preload",as:"image",href:re.srcSet?void 0:re.src},ie))):null)};var o=h(r(7294)),s=h(r(5443)),c=r(6978),l=r(5809),d=r(7190);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){u(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var A=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,a=new URL("".concat(t).concat(S(r))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(S(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(S(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}var m,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai"}||l.imageConfigDefault,v=b.deviceSizes,y=b.imageSizes,j=b.loader,x=b.path,k=(b.domains,a(v).concat(a(y)));function _(e){var t=e.src,r=e.unoptimized,n=e.layout,i=e.width,o=e.quality,s=e.sizes,c=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,i=/(^|\s)(1?\d?\d)vw/g,o=[];n=i.exec(r);n)o.push(parseInt(n[2]));if(o.length){var s,c=.01*(s=Math).min.apply(s,a(o));return{widths:k.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:k,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return k.find((function(t){return t>=e}))||k[k.length-1]})))),kind:"x"}}(i,n,s),d=l.widths,u=l.kind,h=d.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:d.map((function(e,r){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===u?e:r+1).concat(u)})).join(", "),src:c({src:t,quality:o,width:d[h]})}}function R(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function U(e){var t=g.get(j);if(t)return t(f({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(j))}function S(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),k.sort((function(e,t){return e-t}))},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){i=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},o=r(6273),s=r(387),c=r(7190);var l={};function d(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(i?"%"+i:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,i=s.useRouter(),u=a.default.useMemo((function(){var t=n(o.resolveHref(i,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?o.resolveHref(i,e.as):a||r}}),[i,e.href,e.as]),h=u.href,f=u.as,A=e.children,p=e.replace,g=e.shallow,w=e.scroll,m=e.locale;"string"===typeof A&&(A=a.default.createElement("a",null,A));var b=(t=a.default.Children.only(A))&&"object"===typeof t&&t.ref,v=n(c.useIntersection({rootMargin:"200px"}),2),y=v[0],j=v[1],x=a.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);a.default.useEffect((function(){var e=j&&r&&o.isLocalURL(h),t="undefined"!==typeof m?m:i&&i.locale,n=l[h+"%"+f+(t?"%"+t:"")];e&&!n&&d(i,h,f,{locale:t})}),[f,h,j,m,r,i]);var k={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](r,n,{shallow:a,locale:c,scroll:s}))}(e,i,h,f,p,g,w,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(h)&&d(i,h,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof m?m:i&&i.locale,R=i&&i.isLocaleDomain&&o.getDomainLocale(f,_,i&&i.locales,i&&i.domainLocales);k.href=R||o.addBasePath(o.addLocale(f,_,i&&i.defaultLocale))}return a.default.cloneElement(t,k)};t.default=u},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){i=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,c=i.useRef(),l=n(i.useState(!1),2),d=l[0],u=l[1],h=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||d||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(i))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[r,t,d]);return i.useEffect((function(){if(!o&&!d){var e=a.requestIdleCallback((function(){return u(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[h,d]};var i=r(7294),a=r(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},7302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5893),i=r(7518),a=(r(4847),r(1664),r(9008)),o=r(5675);function s(e){var t=e.src;return(0,n.jsx)("div",{style:{maxWidth:800},children:(0,n.jsx)("a",{href:t.src,children:(0,n.jsx)(o.default,{src:t})})})}var c=r(2115),l=r(1952),d={src:"/_next/static/media/k1.resized.b504585e.webp",height:1235,width:779,blurDataURL:"data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoFAAgAAkA4JaQAAucNKYgAAP7tcfLtxkf/qhBQAAA="},u={src:"/_next/static/media/k2.resized.9da99451.webp",height:768,width:1230,blurDataURL:"data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACQAQCdASoIAAUAAkA4JaQAAuWt2ogA/vBs1UuXSny1bFBQgoAAAA=="},h={src:"/_next/static/media/k3.resized.3bc46090.webp",height:757,width:1243,blurDataURL:"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAUAAkA4JaQAAudLfxAAAP73/huwkRvRh8sybZcnfCzA4AA="},f={src:"/_next/static/media/k4.resized.752ab525.webp",height:765,width:1238,blurDataURL:"data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoIAAUAAkA4JaQAAudZtgAA/vBA2XuFvUCSM9gAAAA="},A={src:"/_next/static/media/k5.resized.ac50670b.webp",height:770,width:1227,blurDataURL:"data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoIAAUAAkA4JaQAAuppDioAAP7tWpe+YWWitbjgAAA="},p={src:"/_next/static/media/k6.resized.406ef0b5.webp",height:1232,width:770,blurDataURL:"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoFAAgAAkA4JaQAAudo3u4AAP7nQmP2DIMPFzgkGc7Rww4A"},g={src:"/_next/static/media/k7.resized.b32df189.webp",height:770,width:1243,blurDataURL:"data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAACQAQCdASoIAAUAAkA4JaQAAuTsOIAA/u4PAAkPxGAAAA=="},w={src:"/_next/static/media/k8.resized.eae65cf7.webp",height:732,width:1238,blurDataURL:"data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAACwAQCdASoIAAUAAkA4JaQAAudsMJVAAP7z4kJBM32AAAAA"},m={src:"/_next/static/media/k9.resized.c6b1d048.webp",height:768,width:1238,blurDataURL:"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAABwAQCdASoIAAUAAkA4JaV2AAGIAAD+8p5fFUAPw9w7XXot0LSRYAAA"},b={src:"/_next/static/media/k10.resized.67ef9738.webp",height:773,width:1235,blurDataURL:"data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAACQAQCdASoIAAUAAkA4JaQAAuWt2ogA/vU0WPvEcg4zCHAA"},v={src:"/_next/static/media/k11.resized.efdcd329.webp",height:1243,width:776,blurDataURL:"data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoFAAgAAkA4JaQAAvh1xMQAAP7wBUxAG9tkXSOAAAA="},y={src:"/_next/static/media/k12.resized.f8b0e5e2.webp",height:781,width:1232,blurDataURL:"data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoIAAUAAkA4JaQAAudoLoAA/rWgNS5LyVhJFsAAAAA="},j=function(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{children:(0,n.jsx)("title",{children:"Misc scribblings - Images"})}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(l.Z,{}),t]})})]})};var x=function(e){var t=void 0===e?{}:e,r=function(){var e=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a"},t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{children:"Images"}),"\n",(0,n.jsx)(e.h3,{children:"Sketches"}),"\n",(0,n.jsx)(s,{src:d}),"\n",(0,n.jsxs)(e.p,{children:["12/25/21 - ",(0,n.jsx)(e.a,{href:"https://www.wikiart.org/en/isaac-levitan/in-the-forest-at-winter-1885",children:"winter in the forest - isaac leviton (1885)"})]}),"\n",(0,n.jsx)(s,{src:u}),"\n",(0,n.jsxs)(e.p,{children:["12/26/21 - ",(0,n.jsx)(e.a,{href:"https://www.atlasofplaces.com/painting/mood-landscape/",children:"by the water's edge - isaac leviton (undated)"})]}),"\n",(0,n.jsx)(s,{src:h}),"\n",(0,n.jsxs)(e.p,{children:["12/27/21 - ",(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Fyodor_Vasilyev#/media/File:Fedor_Vasilev_-_The_Thaw.JPG",children:"the thaw - fedor vasilev (1871)"})]}),"\n",(0,n.jsx)(s,{src:f}),"\n",(0,n.jsxs)(e.p,{children:["12/31/21 - ",(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/File:Nikolaj_Alexejewitsch_Kassatkin_-_Rival_Ladies.jpg",children:"nikolaj kassatkin - rival ladies (1890)"})]}),"\n",(0,n.jsx)(s,{src:A}),"\n",(0,n.jsxs)(e.p,{children:["1/8/22 - ",(0,n.jsx)(e.a,{href:"https://www.digitaltrends.com/cool-tech/women-scientists-of-the-manhattan-project-part-2/",children:"welder oak ridge, manhattan project (1945)"})," ",(0,n.jsx)(e.a,{href:"https://www.wbir.com/article/news/do-not-publish-ed-westcott-photographer-for-the-manhattan-project-passes-away/51-7bf51211-cac6-4108-8986-6b150d3157dd",children:"source for 1945 being the year hinted at here in the photographer's obituary"})]}),"\n",(0,n.jsx)(s,{src:p}),"\n",(0,n.jsxs)(e.p,{children:["1/10/22 - ",(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Willow_Run#/media/File:Willow_Run_airplane_inspection_edited.jpg",children:"inspection of landing gear at willow run (between 1941-1945)"})]}),"\n",(0,n.jsx)(s,{src:g}),"\n",(0,n.jsxs)(e.p,{children:["1/12/22 - ",(0,n.jsx)(e.a,{href:"https://digital.library.wayne.edu/item/wayne:vmc48499",children:"workers remove last of old type arc streets lights, meldrum and forest, detroit MI (1946)"})]}),"\n",(0,n.jsx)(s,{src:w}),"\n",(0,n.jsxs)(e.p,{children:["1/13/22 - ",(0,n.jsx)(e.a,{href:"https://www.loc.gov/item/2016794664/",children:"the close of a career in new york, handwritten: byron ny (between 1900-1906)"})," ",(0,n.jsx)(e.a,{href:"https://www.thehenryford.org/collections-and-research/digital-collections/artifact/174075",children:"alt"})]}),"\n",(0,n.jsx)(s,{src:m}),"\n",(0,n.jsxs)(e.p,{children:["1/18/22 - ",(0,n.jsx)(e.a,{href:"https://ericbouvet.com/Chechnya-wars",children:"eric bouvet - battle of grozny 1995 - chechnya wars"})]}),"\n",(0,n.jsx)(s,{src:b}),"\n",(0,n.jsxs)(e.p,{children:["1/23/22 - ",(0,n.jsx)(e.a,{href:"https://www.shorpy.com/node/25486?size=_original#caption",children:'"defense worker who is on night shift. during the day he works on the new home which he is building. detroit, mi." (1941)'})]}),"\n",(0,n.jsx)(s,{src:v}),"\n",(0,n.jsxs)(e.p,{children:["1/29/22 - ",(0,n.jsx)(e.a,{href:"https://www.reddit.com/r/HistoryPorn/comments/seqlpo/a_soviet_soldier_smashes_a_portrait_of_adolf/",children:'"a soviet soldier smashes a portrait of adolf hitler in the liberated city of gatchina (\u0413\u0430\u0442\u0447\u0438\u043d\u0430), leningrad oblast, jan 1944"'})]}),"\n",(0,n.jsx)(s,{src:y}),"\n",(0,n.jsxs)(e.p,{children:["2/6/22 - ",(0,n.jsx)(e.a,{href:"https://rarehistoricalphotos.com/soviet-war-afganistan-in-pictures/",children:'"A Soviet soldier smokes a cigarette at a checkpoint of the Soviet military airport in Kabul on February 10, 1989 as the other one forbids pictures."'})]})]})};return j?(0,n.jsx)(j,Object.assign({},t,{children:(0,n.jsx)(r,{})})):r()}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=445,e(e.s=t);var t}));var t=e.O();_N_E=t}]);