(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{3905:function(e,t,a){"use strict";a.d(t,{kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"===typeof e?e(t):s(s({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"===typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4995:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var n=a(5893);function r(e){var t=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{href:"/",children:"Return home"}),(0,n.jsx)("div",{className:"blog",children:t})]})}},7724:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(159),r=a(219),o=(a(7294),a(3905)),s=a(4995),l=["components"],i={},u=function(e){var t=e.children;return(0,o.kt)(s.default,null,t)};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)(u,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Making a serverless website for photo upload pt. 1"),(0,o.kt)("p",null,"I set out to make a serverless website for photo uploads. Our dearly\ndeparted dixie dog needed a place to have photo uploads."),(0,o.kt)("p",null,"I didn't want to get charged dollars per month for a running ec2\ninstance, so I wanted something that was lightweight e.g. serverless,\nand easy"),(0,o.kt)("p",null,"I decided to follow this tutorial"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/compute/uploading-to-amazon-s3-directly-from-a-web-or-mobile-application/"},"https://aws.amazon.com/blogs/compute/uploading-to-amazon-s3-directly-from-a-web-or-mobile-application/")),(0,o.kt)("p",null,"I really liked the command line deployment (aws-sam) because fiddling\naround with the AWS web based control panel is ridiculously complicated"),(0,o.kt)("p",null,"For example I also tried following this tutorial which uses the web\nbased UI (",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=mw_-0iCVpUc"},"https://www.youtube.com/watch?v=mw_-0iCVpUc"),') and it just did\nnot work for me....I couldn\'t stay focused (blame ADHD or just my CLI\nobsession?) and certain things like\xa0"Execution role" that they say to\nmodify are not there in the web UI anymore, so I just gave up (I did try\nthough!)'),(0,o.kt)("p",null,"To install aws-sam I used homebrew"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"brew tap aws/tap\nbrew install aws-sam-cli\nbrew install aws-sam-cli # I had to run the install command twice\nref\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-sam-cli/issues/2320#issuecomment-721414971"},"https://github.com/aws/aws-sam-cli/issues/2320#issuecomment-721414971")),(0,o.kt)("p",{parentName:"blockquote"},"git clone\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/amazon-s3-presigned-urls-aws-sam"},"https://github.com/aws-samples/amazon-s3-presigned-urls-aws-sam"),"\ncd amazon-s3-presigned-urls-aws-sam\nsam deploy --guided"),(0,o.kt)("h1",{parentName:"blockquote"},"proceeeds with a guided installation, I used all defaults except I"),(0,o.kt)("p",{parentName:"blockquote"},'made\xa0"UploadRequestFunction may not have authorization defined, Is\nthis okay? ',"[y/N]",': y"')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://64.media.tumblr.com/3028ab2ff22803ebe4ab1f69dc4c6cb0/237164d886a09414-60/s540x810/9e02904fd35ebd9dfab681cd1d5a3a13fa7a1efa.png",alt:null})),(0,o.kt)("p",null,"They then in the tutorial describe trying to use postman to test"),(0,o.kt)("p",null,"I test with ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," instead"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u276f\u276f\u276f curl\n'",(0,o.kt)("a",{parentName:"p",href:"https://fjgbqj5436.execute-api.us-east-2.amazonaws.com/uploads'"},"https://fjgbqj5436.execute-api.us-east-2.amazonaws.com/uploads'")),(0,o.kt)("p",{parentName:"blockquote"},'{"uploadURL":"',(0,o.kt)("a",{parentName:"p",href:"https://sam-app-s3uploadbucket-1653634.s3.us-east-2.amazonaws.com/112162.jpg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU6CQBER6YBNCDDMJ%2F20201224%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20201224T174804Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMiJGMEQCIH65IvgJsofUpIX46lTaG3Pi5WC85ti1lukM3iICh%2BB%2BAiAJEyynPNPhZN8%2Bg1ylO7wthqud9cBcNIChIp2H%2F%2BR7mCryAQjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDMzOTQ3MDI2MzQyMSIMLqPo1IYyH7udCGZuKsYBSEF3c50YXkmPeSWcLsEzq%2BFBTpeOIrwZTyCUjbJ7fgJUakhM1YRX40jExstN8eJcMXqw00Xd5lYHvZDbU9ajwWPLRAxcEN5BQ0utqn0NGTLyJhibzJUj8cjgm5RguIEKe9GUtMVWa9mi7C5%2FlFpS0i9jK5BSVf74JyPSLETV5mzMMzy5kHBQMGjw1dR66E3MG8PjIqfgKjhVtZmlaicf5OmeqNI2%2F8T5ye%2FICRsH4d7KNEmj4FELa8buW8U%2Fn97ThfH3P7XmMNOok%2F8FOuEBDj1EHluCT4DfZ1jIXjvrJsVv1WtV4POQDn2Dah%2BWosBn%2BFNTtQtw841ACDarYR1ZVbuwcpTjfBPlGuSOncPsbzOhzDy7wYyumsPKsXoPdxTncMWbx4BQkbU5SeF9hjpfIKRMSOqkJBN7%2BtgHXwuW1rfYMDN2OAlQZpTj7uWMPWojUMbvMzyHvI2pfgcRAlrBdGGYDigyjWl9QXP%2Bdi6WiR7XCSXbWcIAJDZh%2Beb%2BIH1asmMJtpAK6nMP8gWczaYh7PMeYyVOIs2B20xQBy%2Bz7oe%2BYQ2GfdEr2hgqPH3jd%2B7c&X-Amz-Signature=11b8cd524c25ef51193e3b3fc4816760ebcde8bfc74bd52f3f91d8bf409620f5&X-Amz-SignedHeaders=host%22,%22Key%22:%22112162.jpg%22%7D%25"},'https://sam-app-s3uploadbucket-1653634.s3.us-east-2.amazonaws.com/112162.jpg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU6CQBER6YBNCDDMJ%2F20201224%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20201224T174804Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMiJGMEQCIH65IvgJsofUpIX46lTaG3Pi5WC85ti1lukM3iICh%2BB%2BAiAJEyynPNPhZN8%2Bg1ylO7wthqud9cBcNIChIp2H%2F%2BR7mCryAQjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDMzOTQ3MDI2MzQyMSIMLqPo1IYyH7udCGZuKsYBSEF3c50YXkmPeSWcLsEzq%2BFBTpeOIrwZTyCUjbJ7fgJUakhM1YRX40jExstN8eJcMXqw00Xd5lYHvZDbU9ajwWPLRAxcEN5BQ0utqn0NGTLyJhibzJUj8cjgm5RguIEKe9GUtMVWa9mi7C5%2FlFpS0i9jK5BSVf74JyPSLETV5mzMMzy5kHBQMGjw1dR66E3MG8PjIqfgKjhVtZmlaicf5OmeqNI2%2F8T5ye%2FICRsH4d7KNEmj4FELa8buW8U%2Fn97ThfH3P7XmMNOok%2F8FOuEBDj1EHluCT4DfZ1jIXjvrJsVv1WtV4POQDn2Dah%2BWosBn%2BFNTtQtw841ACDarYR1ZVbuwcpTjfBPlGuSOncPsbzOhzDy7wYyumsPKsXoPdxTncMWbx4BQkbU5SeF9hjpfIKRMSOqkJBN7%2BtgHXwuW1rfYMDN2OAlQZpTj7uWMPWojUMbvMzyHvI2pfgcRAlrBdGGYDigyjWl9QXP%2Bdi6WiR7XCSXbWcIAJDZh%2Beb%2BIH1asmMJtpAK6nMP8gWczaYh7PMeYyVOIs2B20xQBy%2Bz7oe%2BYQ2GfdEr2hgqPH3jd%2B7c&X-Amz-Signature=11b8cd524c25ef51193e3b3fc4816760ebcde8bfc74bd52f3f91d8bf409620f5&X-Amz-SignedHeaders=host","Key":"112162.jpg"}%'),"\xa0")),(0,o.kt)("p",null,"The premise of this is you make a request, and then the response from\nthe API is a pre-signed URL that then allows you to upload directly to\nS3. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"curl <url> --upload-file yourfile.jpg"),'. This\nautomatically does a PUT request to the s3 bucket (yes, this is talking\ndirectly to s3 now, not the lambda! the lambda is just for generating\nthe "pre-signed URL" to let you upload). Careful to copy it exactly as\nis'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'curl\n"',(0,o.kt)("a",{parentName:"p",href:"https://sam-app-s3uploadbucket-1653634.s3.us-east-2.amazonaws.com/112162.jpg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU6CQBER6YBNCDDMJ%2F20201224%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20201224T174804Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMiJGMEQCIH65IvgJsofUpIX46lTaG3Pi5WC85ti1lukM3iICh%2BB%2BAiAJEyynPNPhZN8%2Bg1ylO7wthqud9cBcNIChIp2H%2F%2BR7mCryAQjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDMzOTQ3MDI2MzQyMSIMLqPo1IYyH7udCGZuKsYBSEF3c50YXkmPeSWcLsEzq%2BFBTpeOIrwZTyCUjbJ7fgJUakhM1YRX40jExstN8eJcMXqw00Xd5lYHvZDbU9ajwWPLRAxcEN5BQ0utqn0NGTLyJhibzJUj8cjgm5RguIEKe9GUtMVWa9mi7C5%2FlFpS0i9jK5BSVf74JyPSLETV5mzMMzy5kHBQMGjw1dR66E3MG8PjIqfgKjhVtZmlaicf5OmeqNI2%2F8T5ye%2FICRsH4d7KNEmj4FELa8buW8U%2Fn97ThfH3P7XmMNOok%2F8FOuEBDj1EHluCT4DfZ1jIXjvrJsVv1WtV4POQDn2Dah%2BWosBn%2BFNTtQtw841ACDarYR1ZVbuwcpTjfBPlGuSOncPsbzOhzDy7wYyumsPKsXoPdxTncMWbx4BQkbU5SeF9hjpfIKRMSOqkJBN7%2BtgHXwuW1rfYMDN2OAlQZpTj7uWMPWojUMbvMzyHvI2pfgcRAlrBdGGYDigyjWl9QXP%2Bdi6WiR7XCSXbWcIAJDZh%2Beb%2BIH1asmMJtpAK6nMP8gWczaYh7PMeYyVOIs2B20xQBy%2Bz7oe%2BYQ2GfdEr2hgqPH3jd%2B7c&X-Amz-Signature=11b8cd524c25ef51193e3b3fc4816760ebcde8bfc74bd52f3f91d8bf409620f5&X-Amz-SignedHeaders=host%22"},'https://sam-app-s3uploadbucket-1653634.s3.us-east-2.amazonaws.com/112162.jpg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU6CQBER6YBNCDDMJ%2F20201224%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20201224T174804Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMiJGMEQCIH65IvgJsofUpIX46lTaG3Pi5WC85ti1lukM3iICh%2BB%2BAiAJEyynPNPhZN8%2Bg1ylO7wthqud9cBcNIChIp2H%2F%2BR7mCryAQjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDMzOTQ3MDI2MzQyMSIMLqPo1IYyH7udCGZuKsYBSEF3c50YXkmPeSWcLsEzq%2BFBTpeOIrwZTyCUjbJ7fgJUakhM1YRX40jExstN8eJcMXqw00Xd5lYHvZDbU9ajwWPLRAxcEN5BQ0utqn0NGTLyJhibzJUj8cjgm5RguIEKe9GUtMVWa9mi7C5%2FlFpS0i9jK5BSVf74JyPSLETV5mzMMzy5kHBQMGjw1dR66E3MG8PjIqfgKjhVtZmlaicf5OmeqNI2%2F8T5ye%2FICRsH4d7KNEmj4FELa8buW8U%2Fn97ThfH3P7XmMNOok%2F8FOuEBDj1EHluCT4DfZ1jIXjvrJsVv1WtV4POQDn2Dah%2BWosBn%2BFNTtQtw841ACDarYR1ZVbuwcpTjfBPlGuSOncPsbzOhzDy7wYyumsPKsXoPdxTncMWbx4BQkbU5SeF9hjpfIKRMSOqkJBN7%2BtgHXwuW1rfYMDN2OAlQZpTj7uWMPWojUMbvMzyHvI2pfgcRAlrBdGGYDigyjWl9QXP%2Bdi6WiR7XCSXbWcIAJDZh%2Beb%2BIH1asmMJtpAK6nMP8gWczaYh7PMeYyVOIs2B20xQBy%2Bz7oe%2BYQ2GfdEr2hgqPH3jd%2B7c&X-Amz-Signature=11b8cd524c25ef51193e3b3fc4816760ebcde8bfc74bd52f3f91d8bf409620f5&X-Amz-SignedHeaders=host"'),"\n--upload-file test.jpg")),(0,o.kt)("p",null,"There is no response, but I can then check the s3 console and see the\nfile upload is successful (all files are renamed)"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://64.media.tumblr.com/cd948c0709d9e36a4434ed6c1fdc0706/237164d886a09414-c2/s540x810/886b466cae543391a32a424dfd13aa7826423398.png",alt:null})),(0,o.kt)("p",null,"Figure shows that the file upload is successful :)"),(0,o.kt)("p",null,"Then we can edit the file frontend/index.html from the repo we cloned to\ncontain the lambda with the /uploads/ suffix"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://64.media.tumblr.com/8dd5ec24c62e5a588fbb9c338b72533c/237164d886a09414-d8/s540x810/8ad17c4eee0a72fd8e8300cd35e7c4929ea5d8d9.png",alt:null})),(0,o.kt)("p",null,"Figure shows editing the index.html with the lambda endpoint"),(0,o.kt)("p",null,"Then we manually upload this file to another s3 bucket or test it\nlocally"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"aws s3 cp index.html s3://mybucket/"),(0,o.kt)("p",{parentName:"blockquote"},"...visit that in the browser")),(0,o.kt)("p",null,"At this point the files are getting uploaded but not publically\naccessible. To make them publically accessible we uncomment the\nACL:\xa0'public-read' in the getSignedURL/app.js folder in the github repo"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://64.media.tumblr.com/c2bb77d16f1ff8501da962cf99954241/237164d886a09414-9b/s540x810/9c8a6be9e7291b168400984533061976febd38cf.png",alt:null})),(0,o.kt)("p",null,"Figure showing the public-read uncommented"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://64.media.tumblr.com/6b46deb1dc8025abacbeb67d5c950d17/237164d886a09414-e4/s540x810/4e1913f18f4c3b544af95aa617e025bfa48b34b5.png",alt:null})),(0,o.kt)("p",null,"Figure showing the lines that need uncommenting in template.yaml in the\nroot of the github repo that allows putObject in s3 with the public-read\nACL"),(0,o.kt)("p",null,"Re-run ",(0,o.kt)("inlineCode",{parentName:"p"},"sam deploy --guided"),", same thing as at the start"),(0,o.kt)("p",null,"Now the objects are publicly accessible!"),(0,o.kt)("p",null,"::: {#footer}\n","[ December 24th, 2020 1:14pm ]","{#timestamp}\n:::"))}c.isMDXComponent=!0},2438:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2020-12-24",function(){return a(7724)}])},159:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,{Z:function(){return n}})},219:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})}},function(e){e.O(0,[774,888,179],(function(){return t=2438,e(e.s=t);var t}));var t=e.O();_N_E=t}]);