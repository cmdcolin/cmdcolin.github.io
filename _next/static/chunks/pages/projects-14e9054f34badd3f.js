(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9233:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(5968)}])},7518:function(e,n,r){"use strict";var i=r(5893);n.Z=function(e){var n=e.children;return(0,i.jsx)("div",{children:n})}},1952:function(e,n,r){"use strict";var i=r(5893),t=r(1664);n.Z=function(){return(0,i.jsx)("div",{style:{marginBottom:100},children:(0,i.jsx)(t.default,{href:"/",children:(0,i.jsx)("a",{children:"Misc scribbles"})})})}},2115:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var i=r(5893),t=r(1664),s=function(){return(0,i.jsxs)("footer",{style:{marginTop:100},children:[(0,i.jsx)(t.default,{href:"/",children:(0,i.jsx)("a",{children:"Home"})})," ",(0,i.jsx)(t.default,{href:"/archive",children:(0,i.jsx)("a",{children:"Blog archive"})})," ",(0,i.jsx)(t.default,{href:"https://github.com/cmdcolin",children:(0,i.jsx)("a",{children:"Github"})})," ",(0,i.jsx)(t.default,{href:"https://twitter.com/cmdcolin",children:(0,i.jsx)("a",{children:"Twitter"})})," ",(0,i.jsx)(t.default,{href:"/projects",children:(0,i.jsx)("a",{children:"Projects"})})," ",(0,i.jsx)(t.default,{href:"/photos",children:(0,i.jsx)("a",{children:"Photos"})})," ",(0,i.jsx)(t.default,{href:"/rss.xml",children:(0,i.jsx)("a",{children:"RSS"})})]})},o=function(e){var n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsx)("main",{children:n})}),(0,i.jsx)(s,{})]})}},8418:function(e,n,r){"use strict";function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],i=!0,t=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(r.push(o.value),!n||r.length!==n);i=!0);}catch(c){t=!0,s=c}finally{try{i||null==l.return||l.return()}finally{if(t)throw s}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var t,s=(t=r(7294))&&t.__esModule?t:{default:t},o=r(6273),l=r(387),c=r(7190);var a={};function h(e,n,r,i){if(e&&o.isLocalURL(n)){e.prefetch(n,r,i).catch((function(e){0}));var t=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;a[n+"%"+r+(t?"%"+t:"")]=!0}}var u=function(e){var n,r=!1!==e.prefetch,t=l.useRouter(),u=s.default.useMemo((function(){var n=i(o.resolveHref(t,e.href,!0),2),r=n[0],s=n[1];return{href:r,as:e.as?o.resolveHref(t,e.as):s||r}}),[t,e.href,e.as]),d=u.href,f=u.as,p=e.children,j=e.replace,g=e.shallow,x=e.scroll,m=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var v=(n=s.default.Children.only(p))&&"object"===typeof n&&n.ref,b=i(c.useIntersection({rootMargin:"200px"}),2),w=b[0],y=b[1],_=s.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);s.default.useEffect((function(){var e=y&&r&&o.isLocalURL(d),n="undefined"!==typeof m?m:t&&t.locale,i=a[d+"%"+f+(n?"%"+n:"")];e&&!i&&h(t,d,f,{locale:n})}),[f,d,y,m,r,t]);var k={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,i,t,s,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==l&&i.indexOf("#")>=0&&(l=!1),n[t?"replace":"push"](r,i,{shallow:s,locale:c,scroll:l}))}(e,t,d,f,j,g,x,m)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(d)&&h(t,d,f,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof m?m:t&&t.locale,M=t&&t.isLocaleDomain&&o.getDomainLocale(f,E,t&&t.locales,t&&t.domainLocales);k.href=M||o.addBasePath(o.addLocale(f,E,t&&t.defaultLocale))}return s.default.cloneElement(n,k)};n.default=u},7190:function(e,n,r){"use strict";function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],i=!0,t=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(r.push(o.value),!n||r.length!==n);i=!0);}catch(c){t=!0,s=c}finally{try{i||null==l.return||l.return()}finally{if(t)throw s}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!o,c=t.useRef(),a=i(t.useState(!1),2),h=a[0],u=a[1],d=t.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||h||e&&e.tagName&&(c.current=function(e,n,r){var i=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var i=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:t,elements:i}),r}(r),t=i.id,s=i.observer,o=i.elements;return o.set(e,n),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),l.delete(t))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[r,n,h]);return t.useEffect((function(){if(!o&&!h){var e=s.requestIdleCallback((function(){return u(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[h]),[d,h]};var t=r(7294),s=r(9311),o="undefined"!==typeof IntersectionObserver;var l=new Map},5968:function(e,n,r){"use strict";r.r(n);var i=r(5893),t=r(1952),s=r(7518),o=r(2115),l=r(9008),c=function(e){var n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{children:(0,i.jsx)("title",{children:"Misc scribblings - Projects"})}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(t.Z,{}),n]})})]})};n.default=function(e){var n=void 0===e?{}:e,r=function(){var e=Object.assign({h2:"h2",p:"p",a:"a",ul:"ul",li:"li",h3:"h3",img:"img"},n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{children:"Work"}),"\n",(0,i.jsxs)(e.p,{children:["I am currently working for UC Berkeley on the ",(0,i.jsx)(e.a,{href:"https://jbrowse.org",children:"JBrowse"}),"\nproject, developing structural variant and comparative genomics visualizations.\nWe are currently working on developing JBrowse 2, a ground up rewrite using\nReact."]}),"\n",(0,i.jsx)(e.h2,{children:"Past work"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Michigan State University, Gallant lab (2016-2017)"}),"\n",(0,i.jsx)(e.li,{children:"University of Missouri, Elsik lab (2013-2016)"}),"\n",(0,i.jsx)(e.li,{children:"University of Colorado, BS computer science (2013)"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{children:"Publications"}),"\n",(0,i.jsxs)(e.p,{children:["See ",(0,i.jsx)(e.a,{href:"https://scholar.google.com/citations?view_op=list_works&hl=en&user=--FwzsgAAAAJ",children:"google scholar"})]}),"\n",(0,i.jsx)(e.h2,{children:"Personal projects"}),"\n",(0,i.jsx)(e.h3,{children:"Bioinformatics"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://cmdcolin.github.io/graphgenomeviewer",children:"graphgenomeviewer"})," BCC2020 hackathon project to visualize GFA graph genome files (2020)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://gmod.github.io/jbrowse-registry",children:"jbrowse 1 plugins"})," such as multibigwig, multivariantviewer, and more"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{children:"Visualizers"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://colindiesh.shinyapps.io/github_burndown/",children:"github burndown"}),' a shiny app to plot "burndown" style statistics on github issues (2021)']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://cmdcolin.github.io/githubgraphjs",children:"githubgraphjs"})," visualize your Github Actions build times (2020)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://cmdcolin.github.io/travigraphjs",children:"travigraphjs"})," visualize your travis-CI build times (2019)"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{children:"Other"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://cmdcolin.github.io/logistic_chaos_map/",children:"logistic_chaos_map"})," logistic map fractal viewer, demonstrates using Rust and WASM with canvas drawing (2020)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://myloveydove.com",children:"myloveydove.com"})," a photo gallery for dixie (RIP). has video/photo uploads/commenting with AWS lambda and S3 (2020, ",(0,i.jsx)(e.a,{href:"https://github.com/cmdcolin/aws_serverless_photo_gallery/",children:"source"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://cmdcolin.github.io/resort/qs.html",children:"resort"})," visualize sorting algorithms (2017)"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{children:"Code/art"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://cmdcolin.github.io/reclaimedspace/",children:"reclaimed space"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://cmdcolin.github.io/interaction_shadow/",children:"interaction shadow"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://cmdcolin.github.io/nightskies/",children:"nightskies"})}),"\n"]}),"\n",(0,i.jsx)(e.h3,{children:"Games"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/vastholdings/gratiotquest",children:"gratiotquest"})," multi-player websocket RPG where you are a pheasant running around a MS Paint world (2018)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/cmdcolin/slaphappy",children:"slap happy"})," retrofitted a arcade cabinet with a raspberry pi (2018)"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{children:"Awesome lists"}),"\n",(0,i.jsx)(e.p,{children:"I like to keep track of various awesome or odd or interesting things in these\nrepos. Please add your favorites with PRs :)"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/cmdcolin/oddgenes",children:"oddgenes"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/cmdcolin/genomesignals",children:"genomesignals"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/cmdcolin/awesome-jbrowse",children:"awesome-jbrowse"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/cmdcolin/awesome-genome-visualization",children:"awesome-genome-visualization"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{children:"Coursera classes"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Experimental Genome Science, University of Pennsylvania 2013, ",(0,i.jsx)(e.a,{href:"genomesci.pdf",children:"statement of completion"})]}),"\n",(0,i.jsxs)(e.li,{children:["Computing for Data Analysis, John Hopkins 2013, ",(0,i.jsx)(e.a,{href:"compdata.pdf",children:"statement of completion, with distinction"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{children:"Me"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"/me2.jpg",alt:""})}),"\n",(0,i.jsx)(e.p,{children:"more recent"}),"\n",(0,i.jsx)(e.h2,{children:"Gallery"}),"\n",(0,i.jsx)("img",{src:"mafviewer.png",width:400}),"\n",(0,i.jsx)("img",{src:"gwasviewer.png",width:400}),"\n",(0,i.jsx)("img",{src:"tumblrgraph.png",width:400}),"\n",(0,i.jsx)("img",{src:"ontograph.png",width:400})]})};return c?(0,i.jsx)(c,Object.assign({},n,{children:(0,i.jsx)(r,{})})):r()}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=9233,e(e.s=n);var n}));var n=e.O();_N_E=n}]);