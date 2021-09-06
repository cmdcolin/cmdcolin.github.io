(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{3905:function(t,e,n){"use strict";n.d(e,{kt:function(){return p}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d=a.createContext({}),l=function(t){var e=a.useContext(d),n=e;return t&&(n="function"===typeof t?t(e):r(r({},e),t)),n},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,d=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,r(r({ref:e},c),{},{components:n})):a.createElement(m,r({ref:e},c))}));function p(t,e){var n=arguments,i=e&&e.mdxType;if("string"===typeof t||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s.mdxType="string"===typeof t?t:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4995:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}});var a=n(5893);function i(t){var e=t.children;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:"/",children:"Return home"}),(0,a.jsx)("img",{src:"/avatar.png",style:{height:"2em",marginLeft:"1em"}})]}),(0,a.jsx)("div",{className:"blog",children:e})]})}},1993:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var a=n(159),i=n(219),o=(n(7294),n(3905)),r=n(4995),s=["components"],d={},l=function(t){var e=t.children;return(0,o.kt)(r.default,null,e)};function u(t){var e=t.components,n=(0,i.Z)(t,s);return(0,o.kt)(l,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Killing postgres the hard way"),(0,o.kt)("p",null,"So today, I finally decided to do something about a query that we saw\nhad been running for 25 DAYS on our server"),(0,o.kt)("p",null,"Note: If you find this post and you need to follow the hard way, backup\nyour data first if possible."),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,'First I could obviously see the culprit: each postgress query runs it\'s\nown process so I could see in "htop"\xa0that there was this process that\nhad been running for 600 hours, or about 25 days'),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"Next, I opened a psql console and ran this query:\xa0"),(0,o.kt)("p",null,"\\"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SELECT datname,procpid,current","_","query FROM pg","_","stat","_","activity WHERE\ndatname='database","_","name' ORDER BY procpid ;")),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,'This returns which actual queries are being run on the database at any\ngiven time. \xa0I could easily see the one problematic query being run,\nwhich was a badly constructed intermine template query that resulted in\na weird "recursion" essentially.'),(0,o.kt)("p",null,"I wanted to try just terminating this query itself, so I ran this"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SELECT pg","_","cancel","_","backend(29033);")),(0,o.kt)("p",null,"Each time I ran it, it would say it returned one result but it did\nnothing."),(0,o.kt)("p",null,'I also read that you can try to nicely\xa0"kill" it from the command line\n(no kill -9) so I ran'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"kill\xa029033")),(0,o.kt)("p",null,"This also did not work!"),(0,o.kt)("p",null,"I thought perhaps all these problems were because tomcat was still\nactive, so we shut down tomcat, and retried killing the specific query,\nbut to no avail"),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"At this point, I just wanted to restart the whole database server. Kind\nof a risky move... but I am sort of a risky kind of guy...(that is not a\ngood thing with databases). If you are doing this, make backups! I\ndidn't. Luckily I suffered no data loss but what follows is kind of\nintense."),(0,o.kt)("p",null,"So first, I try and stop the database service"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"service postgresql-9.1 stop")),(0,o.kt)("p",null,"Unfortunately, this ","[","FAILED","]"," ! And of course, even though it failed,\nthe database is now unusable. No logging into it anymore, we have to go\nwith the hard way now...\\"),(0,o.kt)("p",null,"Looking at /etc/init.d/postgres-9.1 told me that the service stop\ncommand was effectively using something like this:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"pg","_","ctl -D /db/postgres/data -m fast stop\xa0")),(0,o.kt)("p",null,"After some reading, I learned that you can try using a slightly\ndifferent flag to restart it"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"pg","_","ctl -D /db/postgres/data -m immediate \xa0stop")),(0,o.kt)("p",null,"I ran this and to my horror/surprise, it actually worked! At this point\nI decided to start postgresql back up again!"),(0,o.kt)("p",null,"\\"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"service postgresql-9.1 start")),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"The service start quickly returned a SUCCESS, which was great, but then\nI tried to start a psql console and the console froze on me! I could not\neven ctrl+c it!"),(0,o.kt)("p",null,"I got really worried at this point and I looked at the process manager,\nand saw that there was one postmaster process running but it was not\nclear what it was doing. I actually tried to shutdown the server again\nin a panic mode but at this point it said"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"/usr/pgsql-9.1/bin/pg","_","ctl stop -D /db/postgres/data/ -m immediate\\\nwaiting for server to shut\ndown...............................................................\nfailed")),(0,o.kt)("p",null,"It was probably good that it didn't shut down, because I would quickly\nfind out that it was in recovery mode. \xa0I looked at the postgresql logs\nand I saw this, reproduced here for full detail (from before the\nshutdown to the restart)"),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"\\"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"WARNING: \xa0pgstat wait timeout\\\nWARNING: \xa0pgstat wait timeout\\\nWARNING: \xa0pgstat wait timeout\\\nWARNING: \xa0pgstat wait timeout\\\nWARNING: \xa0pgstat wait timeout\\\nWARNING: \xa0pgstat wait timeout\\\nWARNING: \xa0pgstat wait timeout\\\nWARNING: \xa0pgstat wait timeout"),(0,o.kt)("p",{parentName:"blockquote"},"ERROR: \xa0canceling statement due to user request\\\nSTATEMENT: \xa0CREATE TABLE precomp","_","90519 AS SELECT DISTINCT a1","_",".id AS\na1","_","id, a2","_",".id AS a2","_","id, a3","_",".id AS a3","_","id, a4","_",".id AS a4","_","id,\na5","_",".id AS a5","_","id, a6","_",".id AS a6","_","id, a12","_",".id AS a12","_","id, a10","_",".id AS\na10","_","id, a1","_",".id AS a13","_",", a1","_",".primaryIdentifier AS a14","_",",\na1","_",".secondaryIdentifier AS a15","_",", a2","_",".type AS a16","_",", a3","_",".name AS\na17","_",", a4","_",".primaryIdentifier AS a18","_",", a5","_",".primaryIdentifier AS\na19","_",", a6","_",".shortName AS a20","_",", a12","_",".identifier AS a21","_",", a10","_",".code\nAS a22","_"," FROM Gene AS a1","_",", Homologue AS a2","_",", Organism AS a3","_",", Gene\nAS a4","_",", Gene AS a5","_",", Organism AS a6","_",", GOAnnotation AS a7","_",",\nGOEvidence AS a8","_",", OntologyTerm AS a9","_",", GOEvidenceCode AS a10","_",",\nOntologyAnnotation AS a11","_",", OntologyTerm AS a12","_",", GeneGoAnnotation\nAS indirect0, EvidenceGOAnnotation AS indirect1 WHERE a1","_",".id =\na2","_",".geneId AND a1","_",".organismId = a3","_",".id AND a2","_",".geneId = a4","_",".id\nAND a2","_",".homologueId = a5","_",".id AND a5","_",".organismId = a6","_",".id AND\na1","_",".id = indirect0.Gene AND indirect0.GoAnnotation = a7","_",".id AND\na7","_",".id = indirect1.GOAnnotation AND indirect1.Evidence = a8","_",".id AND\na7","_",".ontologyTermId = a9","_",".id AND a8","_",".codeId = a10","_",".id AND a9","_",".id =\na11","_",".ontologyTermId AND a11","_",".ontologyTermId = a12","_",".id ORDER BY\na1","_",".primaryIdentifier, a1","_",".secondaryIdentifier, a2","_",".type,\na3","_",".name, a4","_",".primaryIdentifier, a5","_",".primaryIdentifier,\na6","_",".shortName, a12","_",".identifier, a10","_",".code, a1","_",".id, a2","_",".id,\na3","_",".id, a4","_",".id, a5","_",".id, a6","_",".id, a12","_",".id, a10","_",".id\\\nLOG: \xa0could not send data to client: Broken pipe\\\nSTATEMENT: \xa0CREATE TABLE precomp","_","90519 AS SELECT DISTINCT a1","_",".id AS\na1","_","id, a2","_",".id AS a2","_","id, a3","_",".id AS a3","_","id, a4","_",".id AS a4","_","id,\na5","_",".id AS a5","_","id, a6","_",".id AS a6","_","id, a12","_",".id AS a12","_","id, a10","_",".id AS\na10","_","id, a1","_",".id AS a13","_",", a1","_",".primaryIdentifier AS a14","_",",\na1","_",".secondaryIdentifier AS a15","_",", a2","_",".type AS a16","_",", a3","_",".name AS\na17","_",", a4","_",".primaryIdentifier AS a18","_",", a5","_",".primaryIdentifier AS\na19","_",", a6","_",".shortName AS a20","_",", a12","_",".identifier AS a21","_",", a10","_",".code\nAS a22","_"," FROM Gene AS a1","_",", Homologue AS a2","_",", Organism AS a3","_",", Gene\nAS a4","_",", Gene AS a5","_",", Organism AS a6","_",", GOAnnotation AS a7","_",",\nGOEvidence AS a8","_",", OntologyTerm AS a9","_",", GOEvidenceCode AS a10","_",",\nOntologyAnnotation AS a11","_",", OntologyTerm AS a12","_",", GeneGoAnnotation\nAS indirect0, EvidenceGOAnnotation AS indirect1 WHERE a1","_",".id =\na2","_",".geneId AND a1","_",".organismId = a3","_",".id AND a2","_",".geneId = a4","_",".id\nAND a2","_",".homologueId = a5","_",".id AND a5","_",".organismId = a6","_",".id AND\na1","_",".id = indirect0.Gene AND indirect0.GoAnnotation = a7","_",".id AND\na7","_",".id = indirect1.GOAnnotation AND indirect1.Evidence = a8","_",".id AND\na7","_",".ontologyTermId = a9","_",".id AND a8","_",".codeId = a10","_",".id AND a9","_",".id =\na11","_",".ontologyTermId AND a11","_",".ontologyTermId = a12","_",".id ORDER BY\na1","_",".primaryIdentifier, a1","_",".secondaryIdentifier, a2","_",".type,\na3","_",".name, a4","_",".primaryIdentifier, a5","_",".primaryIdentifier,\na6","_",".shortName, a12","_",".identifier, a10","_",".code, a1","_",".id, a2","_",".id,\na3","_",".id, a4","_",".id, a5","_",".id, a6","_",".id, a12","_",".id, a10","_",".id\\\nLOG: \xa0unexpected EOF on client connection\\\nLOG: \xa0unexpected EOF on client connection\\\nLOG: \xa0unexpected EOF on client connection\\\nLOG: \xa0unexpected EOF on client connection\\\nLOG: \xa0received fast shutdown request\\\nLOG: \xa0aborting any active transactions\\\nLOG: \xa0autovacuum launcher shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nFATAL: \xa0the database system is shutting down\\\nLOG: \xa0received immediate shutdown request\\\nWARNING: \xa0terminating connection because of crash of another server\nprocess\\\nDETAIL: \xa0The postmaster has commanded this server process to roll back\nthe current transaction and exit, because another server process\nexited abnormally and possibly corrupted shared memory.\\\nHINT: \xa0In a moment you should be able to reconnect to the database and\nrepeat your command.\\\nLOG: \xa0received fast shutdown request\\\nLOG: \xa0database system was interrupted; last known up at 2015-10-22\n15:47:43 CDT\\\nLOG: \xa0received immediate shutdown request\\\nLOG: \xa0database system was interrupted; last known up at 2015-10-22\n15:47:43 CDT\\\nLOG: \xa0database system was not properly shut down; automatic recovery\nin progress\\\nLOG: \xa0record with zero length at BBD/1CC2F0C0\\\n...")),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"You can see all the weird activity that was done here"),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"-",' first the attempt to "canceling statement due to user request" did\nnot work\\'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"then the database stop using -m fast\\"),(0,o.kt)("li",{parentName:"ul"},"then the database stop using -m immediate\\"),(0,o.kt)("li",{parentName:"ul"},"the restart (with the HINT, should be ready soon)\\"),(0,o.kt)("li",{parentName:"ul"},"the panic mode where i tried to shut it again anyways\\\n\\")),(0,o.kt)("p",null,'During the recovery period, I was still very concerned about the\ndatabase was doing, so I used "strace" to look at the main postmaster\nprocess.\xa0'),(0,o.kt)("p",null,"I was pleasantly surprised to see that the postmaster process was just\ncleaning up files in /db/postgres/data/base/pgsql","_",'tmp/, I could see the\nfile system "unlink" command with successful status codes.'),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"There were about 150 large files in /db/postgres/data/base/pgsql","_","tmp/,\nand I waited about an hour for them to be deleted, and after that, the\npostgresql log file said it was ready, and indeed, it was perfect :)"),(0,o.kt)("p",null,"\\"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"LOG: \xa0redo is not required\\\nLOG: \xa0database system is ready to accept connections\\\nLOG: \xa0autovacuum launcher started\\")),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"What a relief!"),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"I hope this might help any wayward stragglers to see how the postgresql\nrestart process works. Sometimes things don't shut down cleanly, but I\nthink it is still good to know some alternative steps to kill -9"),(0,o.kt)("p",null,"::: {#footer}\n","[ October 22nd, 2015 7:29pm ]","{#timestamp} ","[postgresql]","{.tag} ","[dba]","{.tag}\n","[databases]","{.tag} ","[sql]","{.tag} ","[troubleshooting]","{.tag}\n:::"))}u.isMDXComponent=!0},3454:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2015-10-22",function(){return n(1993)}])},159:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})},219:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,{Z:function(){return a}})}},function(t){t.O(0,[774,888,179],(function(){return e=3454,t(t.s=e);var e}));var e=t.O();_N_E=e}]);