(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"===typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("img",{src:"/avatar.png",style:{height:"2em",marginLeft:"1em"}})]}),(0,r.jsx)("div",{className:"blog",children:t})]})}},804:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(159),a=n(219),o=(n(7294),n(3905)),i=n(4995),u=["components"],l={},s=function(e){var t=e.children;return(0,o.kt)(i.default,null,t)};function c(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Querying InterMine databases using R"),(0,o.kt)("p",null,"In the past, I had found some ways to do simple queries on InterMine web\nservices using basic HTTP commands with R (see\n",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/cmdcolin/4758167bdd89e6c9c055"},"https://gist.github.com/cmdcolin/4758167bdd89e6c9c055"),")"),(0,o.kt)("p",null,"However, the InterMineR (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/intermine/intermineR"},"https://github.com/intermine/intermineR"),")\npackage automates some of these features and makes it easier to load the\ndata in R."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Installation")),(0,o.kt)("p",null,"One way to install InterMineR is to install from github with\nhadley/devtools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'install.packages("devtools")\ndevtools::install_github("hadley/devtools")\ndevtools::install_github("intermine/intermineR")\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage")),(0,o.kt)("p",null,'Basic usage includes loading the\xa0"intermine URL" using the initInterMine\nfunction. Then various functions can be called on this result.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'library(InterMineR)\nmine=initInterMine("http://bovinegenome.org/bovinemine/")\ngetVersion(mine) #18, intermine API version\ngetRelease(mine) #1.0, our data release version\ngetTemplates(mine) # lists all templates on interminer\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run a template query")),(0,o.kt)("p",null,"From the getTemplates function, if you see a template query that you\nwant to run, you can use the getTemplateQuery function with it's name,\nand run it with the runQuery function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'getTemplateQuery(mine,"TQ_protein_to_gene") # see what template looks like\ntemplate=getTemplateQuery(mine,"TQ_protein_to_gene") # save template\nrunQuery(mine,template) # run the template query with default params, receive data.frame\n')),(0,o.kt)("p",null,"This method is good, but some improvement could be added to change\ndefault parameters in the template query, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run query XML")),(0,o.kt)("p",null,"Another option for running queries is to use the query XML that you can\ndownload from the InterMine query result pages.\xa0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'query=\'\\<query model="genomic" view="Gene.primaryIdentifier\nGene.secondaryIdentifier Gene.symbol Gene.name Gene.source\nGene.organism.shortName Gene.chromosome.primaryIdentifier"\nsortOrder="Gene.primaryIdentifier ASC" ',">",'\\<constraint\npath="Gene.organism.shortName" op="=" value="B. taurus"\n/',">",'\\<constraint path="Gene.chromosome.primaryIdentifier" op="="\nvalue="GK000028.2" /',">","\\</query",">","' ","#"," get all Ensembl genes on chr28\nfrom bovinemine"),(0,o.kt)("p",{parentName:"blockquote"},"results=runQuery(mine, query)"),(0,o.kt)("p",{parentName:"blockquote"},"head(results)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Conclusion")),(0,o.kt)("p",null,"The InterMineR package has a couple of nice features for getting\nInterMine data with a couple of functions for looking at templates. For\nmany use cases, copying the Query XML from a InterMine webpage and\npasting that into the runQuery function is sufficient and produces a\ndata frame that can be analyzed."),(0,o.kt)("p",null,"PS it is not easy to post XML on tumblr after editing the post in\nmarkdown mode. You have to add the lt and gt shortcuts and even after\nthat it gets filtered?!"),(0,o.kt)("p",null,"::: {#footer}\n","[ June 17th, 2016 11:29am ]","{#timestamp} ","[intermine]","{.tag}\n","[bioinformatics]","{.tag} ","[R]","{.tag} ","[rstats]","{.tag}\n:::"))}c.isMDXComponent=!0},1707:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2016-06-17",function(){return n(804)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=1707,e(e.s=t);var t}));var t=e.O();_N_E=t}]);