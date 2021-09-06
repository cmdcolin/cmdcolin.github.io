(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2219],{3905:function(n,e,t){"use strict";t.d(e,{kt:function(){return f}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),c=function(n){var e=r.useContext(l),t=e;return n&&(t="function"===typeof n?n(e):a(a({},e),n)),t},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),f=c(t),h=o,g=f["".concat(l,".").concat(h)]||f[h]||u[h]||i;return t?r.createElement(g,a(a({ref:e},p),{},{components:t})):r.createElement(g,a({ref:e},p))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"===typeof n||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"===typeof n?n:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4995:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var r=t(5893);function o(n){var e=n.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("div",{className:"blog",children:e})]})}},7892:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(159),o=t(219),i=(t(7294),t(3905)),a=t(4995),s=["components"],l={},c=function(n){var e=n.children;return(0,i.kt)(a.default,null,e)};function u(n){var e=n.components,t=(0,o.Z)(n,s);return(0,i.kt)(c,(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Running nginx on containerised travis-CI pt 2"),(0,i.kt)("p",null,'There are several guides out there about how to setup nginx on travis-CI\nbut I still found it to be a challenge, especially finding a modern one\nthat works with the containerized builds. I was frustrated that things\nlike SimpleHTTPServer from python and http-server from npm did not have\nfully enough features to run our app either (a complex "static-site\ngenerator" type thing you might say), and I was also too lazy to setup\n"sauce labs" (which I have not used, but presume has some better ability\nto run functional/browser tests).'),(0,i.kt)("p",null,'Essentially, the problem with running nginx under the containerized\nbuild is that it "likes to be sudo", with many logfiles by default going\nto different places that only sudo has access to.'),(0,i.kt)("p",null,"This link is probably the most similar to the technique I use here, but\nit is now gone (?) and must be accessed through the internet archive!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.doublesignal.com/running-nginx-on-containerised-travis-ci"}),(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150919050719/http://www.doublesignal.com/running-nginx-on-containerised-travis-ci"},"https://web.archive.org/web/20150919050719/http://www.doublesignal.com/running-nginx-on-containerised-travis-ci")),(0,i.kt)("p",null,'My technique is very similar, however I use an extra trick to set the\nfile root to the current directory (instead of /tmp/nowhere as in the\nlink) by using "envsubst" to replace variables in the nginx config file.'),(0,i.kt)("p",null,"Without further ado, the .travis.yml can look like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo: false\naddons:\n  apt:\n    packages:\n    - nginx\ninstall:\n  - cat tests/travis.conf | envsubst > tests/travis-envsubst.conf\n  - nginx -c `pwd`/tests/travis-envsubst.conf\nscript:\n  - wget http://localhost:9000/yourfiles\n")),(0,i.kt)("p",null,"Then your nginx config file can look like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"worker_processes 10;\npid /tmp/nginx.pid;\n\nerror_log /tmp/error.log;\n\nevents {\n    worker_connections 768;\n}\n\nhttp {\n    client_body_temp_path /tmp/nginx_client_body;\n    fastcgi_temp_path     /tmp/nginx_fastcgi_temp;\n    proxy_temp_path       /tmp/nginx_proxy_temp;\n    scgi_temp_path        /tmp/nginx_scgi_temp;\n    uwsgi_temp_path       /tmp/nginx_uwsgi_temp;\n\n    server {\n        listen 9000 default_server;\n\n        server_name localhost;\n        location / {\n            root $TRAVIS_BUILD_DIR;\n            index  index.html index.htm;\n        }\n        error_log /tmp/error.log;\n        access_log /tmp/access.log;\n    }\n}\n")),(0,i.kt)("p",null,"Then, when travis-CI is run, it uses envsubst to replace\n\\$TRAVIS","_","BUILD","_","DIR in the tests/travis.conf file, and then boots up\nnginx"),(0,i.kt)("p",null,"::: {#footer}\n","[ March 28th, 2016 4:56pm ]","{#timestamp} ","[nginx]","{.tag} ","[travisci]","{.tag}\n","[software]","{.tag}\n:::"))}u.isMDXComponent=!0},9143:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2016-03-28",function(){return t(7892)}])},159:function(n,e,t){"use strict";function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}t.d(e,{Z:function(){return r}})},219:function(n,e,t){"use strict";function r(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}t.d(e,{Z:function(){return r}})}},function(n){n.O(0,[9774,2888,179],(function(){return e=9143,n(n.s=e);var e}));var e=n.O();_N_E=e}]);