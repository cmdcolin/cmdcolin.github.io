(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return t(2909)}])},7518:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893);function i(e){var n=e.children;return(0,r.jsx)("div",{children:n})}},1952:function(e,n,t){"use strict";var r=t(5893),i=t(8711);n.Z=function(){return(0,r.jsx)("div",{style:{marginBottom:100},children:(0,r.jsx)(i.Z,{href:"/",children:(0,r.jsx)("a",{children:"Misc scribbles"})})})}},2115:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),i=t(8711),c=function(){return(0,r.jsxs)("footer",{style:{marginTop:100},children:[(0,r.jsx)(i.Z,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})," ",(0,r.jsx)(i.Z,{href:"/archive",children:(0,r.jsx)("a",{children:"Blog archive"})})," ",(0,r.jsx)(i.Z,{href:"https://github.com/cmdcolin/",children:(0,r.jsx)("a",{children:"Github"})})," ",(0,r.jsx)(i.Z,{href:"https://twitter.com/cmdcolin",children:(0,r.jsx)("a",{children:"Twitter"})})," ",(0,r.jsx)(i.Z,{href:"/projects",children:(0,r.jsx)("a",{children:"Projects"})})," ",(0,r.jsx)(i.Z,{href:"/photos",children:(0,r.jsx)("a",{children:"Photos"})})," ",(0,r.jsx)(i.Z,{href:"/rss.xml",children:(0,r.jsx)("a",{children:"RSS"})}),(0,r.jsx)(i.Z,{href:"/about",children:(0,r.jsx)("a",{children:"About"})})," "]})},o=function(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("main",{children:n})}),(0,r.jsx)(c,{})]})}},8711:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(1799),i=t(5893),c=t(1664),o=t.n(c);function s(e){return(0,i.jsx)(o(),(0,r.Z)({prefetch:!1},e))}},2909:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return C},default:function(){return Z}});var r={};t.r(r),t.d(r,{MDXContext:function(){return j},MDXProvider:function(){return b},useMDXComponents:function(){return v},withMDXComponents:function(){return g}});var i=t(1799),c=t(5893),o=t(1163),s=t(2918),a=t(7518),l=t(1952),u=function(e){var n=e.title,t=e.date;return(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:n}),(0,c.jsx)("h4",{children:t})]})},d=t(2115),h=t(9008),f=t.n(h),m=t(7294);function x({id:e,host:n,repo:r,repoId:i,category:o,categoryId:s,mapping:a,term:l,strict:u,reactionsEnabled:d,emitMetadata:h,inputPosition:f,theme:x,lang:p,loading:j}){const[g,v]=(0,m.useState)(!1);return(0,m.useEffect)((()=>{g||(t.e(891).then(t.bind(t,2891)),v(!0))}),[]),g?(0,c.jsx)("giscus-widget",{id:e,host:n,repo:r,repoid:i,category:o,categoryid:s,mapping:a,term:l,strict:u,reactionsenabled:d,emitmetadata:h,inputposition:f,theme:x,lang:p,loading:j}):null}var p=t(2746);const j=m.createContext({});function g(e){return function(n){const t=v(n.components);return m.createElement(e,{...n,allComponents:t})}}function v(e){const n=m.useContext(j);return m.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}const w={};function b({components:e,children:n,disableParentContext:t}){let r=v(e);return t&&(r=e||w),m.createElement(j.Provider,{value:r},n)}function y({compiledSource:e,frontmatter:n,scope:t,components:i={},lazy:c}){const[o,s]=(0,m.useState)(!c||"undefined"===typeof window);(0,m.useEffect)((()=>{if(c){const e=window.requestIdleCallback((()=>{s(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const a=(0,m.useMemo)((()=>{const i=Object.assign({opts:{...r,...p.c}},{frontmatter:n},t),c=Object.keys(i),o=Object.values(i),s=Reflect.construct(Function,c.concat(`${e}`));return s.apply(s,o).default}),[t,e]);if(!o)return m.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const l=m.createElement(b,{components:i},m.createElement(a,null));return c?m.createElement("div",null,l):l}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var C=!0,Z=function(e){var n=e.post,t=(0,o.useRouter)();if(!t.isFallback&&!(null===n||void 0===n?void 0:n.slug))return(0,c.jsx)(s.default,{statusCode:404});var r=n.title,h=n.date,m=n.mdxSource;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(f(),{children:(0,c.jsx)("title",{children:r})}),(0,c.jsx)(d.Z,{children:(0,c.jsxs)(a.Z,{children:[(0,c.jsx)(l.Z,{}),t.isFallback?(0,c.jsx)("div",{children:"Loading..."}):(0,c.jsxs)("article",{children:[(0,c.jsx)(f(),{children:(0,c.jsx)("title",{children:r})}),(0,c.jsx)(u,{title:r,date:h}),(0,c.jsx)(y,(0,i.Z)({},m)),(0,c.jsx)("div",{style:{marginTop:200},children:(0,c.jsx)(x,{id:"comments",repo:"cmdcolin/cmdcolin.github.io",repoId:"MDEwOlJlcG9zaXRvcnkyNjE0OTY3Nw==",category:"General",categoryId:"DIC_kwDOAY8DLc4CO-L9",mapping:"pathname",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",lang:"en",loading:"lazy"})})]})]})})]})}},2918:function(e,n,t){e.exports=t(9185)},1163:function(e,n,t){e.exports=t(387)},2746:function(e,n,t){const r=t(5893);e.exports.c=r}},function(e){e.O(0,[996,774,888,179],(function(){return n=592,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=[slug]-a48b13f8f13172f9.js.map