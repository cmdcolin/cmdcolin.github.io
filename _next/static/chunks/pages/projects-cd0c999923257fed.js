(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9233:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(5968)}])},7518:function(e,n,r){"use strict";var t=r(5893);n.Z=function(e){var n=e.children;return(0,t.jsx)("div",{children:n})}},1952:function(e,n,r){"use strict";var t=r(5893),i=r(1664);n.Z=function(){return(0,t.jsx)("div",{style:{marginBottom:100},children:(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)("a",{children:"Misc scribbles"})})})}},2115:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(5893),i=r(1664),s=function(){return(0,t.jsxs)("footer",{style:{marginTop:100},children:[(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})," ",(0,t.jsx)(i.default,{href:"/archive",children:(0,t.jsx)("a",{children:"Blog archive"})})," ",(0,t.jsx)(i.default,{href:"https://github.com/cmdcolin",children:(0,t.jsx)("a",{children:"Github"})})," ",(0,t.jsx)(i.default,{href:"https://twitter.com/cmdcolin",children:(0,t.jsx)("a",{children:"Twitter"})})," ",(0,t.jsx)(i.default,{href:"/projects",children:(0,t.jsx)("a",{children:"Projects"})})," ",(0,t.jsx)(i.default,{href:"/photos",children:(0,t.jsx)("a",{children:"Photos"})})," ",(0,t.jsx)(i.default,{href:"/photos",children:(0,t.jsx)("a",{children:"Kitty"})})," ",(0,t.jsx)(i.default,{href:"/rss.xml",children:(0,t.jsx)("a",{children:"RSS"})}),(0,t.jsx)(i.default,{href:"/about",children:(0,t.jsx)("a",{children:"About"})})," "]})},o=function(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsx)("main",{children:n})}),(0,t.jsx)(s,{})]})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(c){i=!0,s=c}finally{try{t||null==l.return||l.return()}finally{if(i)throw s}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var i,s=(i=r(7294))&&i.__esModule?i:{default:i},o=r(6273),l=r(387),c=r(7190);var a={};function h(e,n,r,t){if(e&&o.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;a[n+"%"+r+(i?"%"+i:"")]=!0}}var u=function(e){var n,r=!1!==e.prefetch,i=l.useRouter(),u=s.default.useMemo((function(){var n=t(o.resolveHref(i,e.href,!0),2),r=n[0],s=n[1];return{href:r,as:e.as?o.resolveHref(i,e.as):s||r}}),[i,e.href,e.as]),d=u.href,f=u.as,p=e.children,j=e.replace,m=e.shallow,x=e.scroll,g=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var v=(n=s.default.Children.only(p))&&"object"===typeof n&&n.ref,b=t(c.useIntersection({rootMargin:"200px"}),2),w=b[0],y=b[1],_=s.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);s.default.useEffect((function(){var e=y&&r&&o.isLocalURL(d),n="undefined"!==typeof g?g:i&&i.locale,t=a[d+"%"+f+(n?"%"+n:"")];e&&!t&&h(i,d,f,{locale:n})}),[f,d,y,g,r,i]);var k={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,i,s,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[i?"replace":"push"](r,t,{shallow:s,locale:c,scroll:l}))}(e,i,d,f,j,m,x,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(d)&&h(i,d,f,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof g?g:i&&i.locale,C=i&&i.isLocaleDomain&&o.getDomainLocale(f,E,i&&i.locales,i&&i.domainLocales);k.href=C||o.addBasePath(o.addLocale(f,E,i&&i.defaultLocale))}return s.default.cloneElement(n,k)};n.default=u},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(c){i=!0,s=c}finally{try{t||null==l.return||l.return()}finally{if(i)throw s}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!o,c=i.useRef(),a=t(i.useState(!1),2),h=a[0],u=a[1],d=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||h||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:i,elements:t}),r}(r),i=t.id,s=t.observer,o=t.elements;return o.set(e,n),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),l.delete(i))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[r,n,h]);return i.useEffect((function(){if(!o&&!h){var e=s.requestIdleCallback((function(){return u(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[h]),[d,h]};var i=r(7294),s=r(9311),o="undefined"!==typeof IntersectionObserver;var l=new Map},5968:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=r(1952),s=r(7518),o=r(2115),l=r(9008),c=function(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{children:(0,t.jsx)("title",{children:"Misc scribblings - Projects"})}),(0,t.jsx)(o.Z,{children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{}),n]})})]})};n.default=function(e){var n=void 0===e?{}:e,r=function(){var e=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Here are some various (mostly personal) projects that I've worked on"}),"\n",(0,t.jsx)(e.h2,{children:"Bioinformatics"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://cmdcolin.github.io/graphgenomeviewer",children:"graphgenomeviewer"})," BCC2020 hackathon project to visualize GFA graph genome files (2020)"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/gmod/jbrowse",children:"jbrowse 1"})," and ",(0,t.jsx)(e.a,{href:"https://gmod.github.io/jbrowse-registry",children:"jbrowse 1 plugins"})," such as multibigwig, multivariantviewer, and more"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/gmod/jbrowse-components",children:"jbrowse 2"})," such as multibigwig, multivariantviewer, and more"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Awesome lists"}),"\n",(0,t.jsx)(e.p,{children:"I like to keep track of various awesome or odd or interesting things in these\nrepos. Please add your favorites with PRs :)"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/cmdcolin/oddgenes",children:"oddgenes"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/cmdcolin/genomesignals",children:"genomesignals"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/cmdcolin/awesome-jbrowse",children:"awesome-jbrowse"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/cmdcolin/awesome-genome-visualization",children:"awesome-genome-visualization"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Visualizers"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://colindiesh.shinyapps.io/github_burndown/",children:"github burndown"}),' a shiny app to plot "burndown" style statistics on github issues (2021)']}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://cmdcolin.github.io/githubgraphjs",children:"githubgraphjs"})," visualize your Github Actions build times (2020)"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://cmdcolin.github.io/travigraphjs",children:"travigraphjs"})," visualize your travis-CI build times (2019)"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"http://cmdcolin.github.io/tumblrgraph2/",children:"tumblrgraph"})," visualize tumblr reblogs with cytoscapejs (2017)"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://cmdcolin.github.io/resort/qs.html",children:"resort"})," visualize sorting algorithms (2017)"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Code/art"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cmdcolin.github.io/reclaimedspace/",children:"reclaimed space"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://cmdcolin.github.io/logistic_chaos_map/",children:"logistic_chaos_map"})," logistic map fractal viewer, demonstrates using Rust and WASM with canvas drawing (2020)"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cmdcolin.github.io/interaction_shadow/",children:"interaction shadow"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cmdcolin.github.io/nightskies/",children:"nightskies"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Games"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/vastholdings/gratiotquest",children:"gratiotquest"})," multi-player websocket RPG where you are a pheasant running around a MS Paint world (2018)"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/cmdcolin/slaphappy",children:"slap happy"})," retrofitted a arcade cabinet with a raspberry pi (2018)"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Coursera classes"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Experimental Genome Science, University of Pennsylvania 2013, ",(0,t.jsx)(e.a,{href:"genomesci.pdf",children:"statement of completion"})]}),"\n",(0,t.jsxs)(e.li,{children:["Computing for Data Analysis, John Hopkins 2013, ",(0,t.jsx)(e.a,{href:"compdata.pdf",children:"statement of completion, with distinction"})]}),"\n"]})]})};return c?(0,t.jsx)(c,Object.assign({},n,{children:(0,t.jsx)(r,{})})):r()}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=9233,e(e.s=n);var n}));var n=e.O();_N_E=n}]);