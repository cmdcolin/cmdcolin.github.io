(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6083],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:"Return home"}),(0,r.jsx)("div",{className:"blog",children:t})]})}},6872:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(159),a=n(219),i=(n(7294),n(3905)),o=n(4995),s=["components"],l={},c=function(e){var t=e.children;return(0,i.kt)(o.default,null,t)};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Basic command line productivity tricks and learning experiences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dd deletes line in vim\\"),(0,i.kt)("li",{parentName:"ul"},"Ctrl+d scrolls down in vim\\"),(0,i.kt)("li",{parentName:"ul"},"Learn to love your package manager. Homebrew, NPM, gem, cpanm,\ngvm/sdkman, etc. these all do amazing things"),(0,i.kt)("li",{parentName:"ul"},"Once you learn bash, try zsh and oh-my-zsh, they have things like\ncase-insensitive tab completion\\"),(0,i.kt)("li",{parentName:"ul"},'Don\'t make scripts that hardcode paths, make reusable command line\nscripts. Use bash as your\xa0"REPL", not R.\\'),(0,i.kt)("li",{parentName:"ul"},"git log -p helps analyze your log files in full details (make sure\nautocoloring is turned on in your terminal)\\"),(0,i.kt)("li",{parentName:"ul"},"There are keys to jump forward and backwards on the command line\ntext editor, learn them...don't scroll one char at a time\\"),(0,i.kt)("li",{parentName:"ul"},'Learn how\xa0"PATH" works. Generally it is just a set of directories\nconnected by\xa0":" separators. You can add things to the path by\nsaying\xa0"export PATH=\\$PATH:/new/directory/to/add" and you can add\nthis to ',"~","/.bashrc for example\\"),(0,i.kt)("li",{parentName:"ul"},'When your install process for a command line tool seems like\nnonsense, try homebrew instead. barring that, learn PATH, and how to\nrun\xa0"make install", etc. Most of your headbashing from installing\nprograms is 90% can be explained by not understanding how the\ndeveloper is intending it to be used, 10% of the tool\'s install\nprocess being wrong'),(0,i.kt)("li",{parentName:"ul"},"Get a static analyzer and basic tests going on your codebase and run\nit on travis-ci. Getting started with travis-ci is kind of a\nlearning curve, but it is worth it\\"),(0,i.kt)("li",{parentName:"ul"},"Use cpanm instead of cpan for package management\\"),(0,i.kt)("li",{parentName:"ul"},"Vocabulary learning curve: catalina is the same thing as tomcat.\nCATALINA","_","HOME is the same thing as the tomcat folder\\"),(0,i.kt)("li",{parentName:"ul"},'alias ll="ls -l", because I type\xa0"ll" hundreds of times a day.\\'),(0,i.kt)("li",{parentName:"ul"},'For irc productivity, run irssi on a server in a\xa0"screen"\ne.g.\xa0"screen irssi" and then you can come back to conversations\nlater by just logging into the server with ssh\\'),(0,i.kt)("li",{parentName:"ul"},"Edit ","~","/.ssh/config to include your hostnames so you don't have to\ntype out long ssh\ncommands\xa0",(0,i.kt)("a",{parentName:"li",href:"http://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/"},"http://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/"),"\\"),(0,i.kt)("li",{parentName:"ul"},"Use spaces instead of tabs in your source code (",">",":( yes I think\nthis is the one true way)\\"),(0,i.kt)("li",{parentName:"ul"},'Try out nodejs and browserify in your spare time to make a\xa0"npm"\nbased app in the browser. it\'s fun.\\'),(0,i.kt)("li",{parentName:"ul"},'Similarly, try making a simple "api" endpoint on the server side\nwith express.js or similar. can get started very quickly.'),(0,i.kt)("li",{parentName:"ul"},'Learn how to get a mindset of writing tests. You can write tests\nproactively (i.e. Test driven development), but you can also write\nthem\xa0"reactively" too (i.e. if have a bug that you fix, you can make\na test to make sure this doesn\'t happen anymore)'),(0,i.kt)("li",{parentName:"ul"},'Similar to above, tests in this sense are more\xa0"sanity checks" than\nthey are formal proofs. Take\xa0"assert" logic and\xa0"debugging" code out\nof main codebase and put them in tests'),(0,i.kt)("li",{parentName:"ul"},"Minimize comments in your code, and also don't comment out code and\nleave it present. Find a way to delete it and move on!"),(0,i.kt)("li",{parentName:"ul"},"When you have a bunch of .orig files after doing a git merge, just\nuse git clean -f to get rid of them. Similarly, to get rid of\neverythng, including things in your gitignore file (i.e. a super\nclean) use git clean -fdx. It has a --exclude argument too")),(0,i.kt)("p",null,"::: {#footer}\n","[ April 6th, 2016 4:23pm ]","{#timestamp}\n:::"))}u.isMDXComponent=!0},151:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2016-04-06",function(){return n(6872)}])},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[9774,2888,179],(function(){return t=151,e(e.s=t);var t}));var t=e.O();_N_E=t}]);