//>>built
require({cache:{"JBrowse/Store/SeqFeature/GlobalStatsEstimationMixin":function(){define(["dojo/_base/declare","dojo/_base/array","dojo/Deferred","JBrowse/Errors"],function(q,u,s,l){return q(null,{_estimateGlobalStats:function(h){var d=new s;h=h||this.refSeq;var e=this.storeTimeout||3E3,r=new Date,g=function(a,c){var b=this,n=0.75*h.start+0.25*h.end,v=Math.max(0,Math.round(n-a/2)),f=Math.min(Math.round(n+a/2),h.end),e=[];this._getFeatures({ref:h.name,start:v,end:f},function(b){e.push(b)},function(n){e=
u.filter(e,function(b){return b.get("start")>=v&&b.get("end")<=f});c.call(b,a,{featureDensity:e.length/a,_statsSampleFeatures:e.length,_statsSampleInterval:{ref:h.name,start:v,end:f,length:a}})},function(n){c.call(b,a,null,n)})},a=function(k,c,b){if(b)b.isInstanceOf(l.DataOverflow)?d.resolve({featureDensity:0,error:"global stats estimation found chunkSizeError"}):d.reject(b);else{var n=h.end-h.start;300<=c._statsSampleFeatures||2*k>n||b?d.resolve(c):new Date-r<e?g.call(this,2*k,a):d.resolve({featureDensity:0,
error:"global stats estimation timed out"})}};g.call(this,100,a);return d}})})},"JBrowse/Store/SeqFeature/BAM/File":function(){define("dojo/_base/declare dojo/_base/array JBrowse/has JBrowse/Util JBrowse/Errors JBrowse/Store/LRUCache ./Util ./LazyFeature".split(" "),function(q,u,s,l,h,d,e,r){var g=function(){console.error.apply(console,arguments)},a=l.fastDeclare({constructor:function(b,n,a){this.minv=b;this.maxv=n;this.bin=a},toUniqueString:function(){return this.minv+".."+this.maxv+" (bin "+this.bin+
")"},toString:function(){return this.toUniqueString()},fetchedSize:function(){return this.maxv.block+65536-this.minv.block+1}}),k=e.readInt,c=e.readVirtualOffset;return q(null,{constructor:function(b){this.store=b.store;this.data=b.data;this.bai=b.bai;this.chunkSizeLimit=b.chunkSizeLimit||5E6},init:function(b){var n=b.success||function(){},a=b.failure||function(b){console.error(b,b.stack)};this._readBAI(dojo.hitch(this,function(){this._readBAMheader(function(){n()},a)}),a)},_readBAI:function(b,n){this.bai.fetch(dojo.hitch(this,
function(a){if(a)if(s("typed-arrays")){var f=new Uint8Array(a);if(21578050!=k(f,0))g("Not a BAI file"),n("Not a BAI file");else{var e=k(f,4);this.indices=[];for(var m=8,d=0;d<e;++d){for(var p=m,h=k(f,m),m=m+4,r=0;r<h;++r){k(f,m);for(var l=k(f,m+4),m=m+8,t=0;t<l;t++){var q=c(f,m);this._findMinAlignment(q);m+=16}}r=k(f,m);m+=4;this._findMinAlignment(r?c(f,m):null);m+=8*r;if(0<h||0<r)this.indices[d]=new Uint8Array(a,p,m-p)}this.empty=!this.indices.length;b(this.indices,this.minAlignmentVO)}}else g("Web browser does not support typed arrays"),
n("Web browser does not support typed arrays");else g("No data read from BAM index (BAI) file"),n("No data read from BAM index (BAI) file")}),n)},_findMinAlignment:function(b){if(b&&(!this.minAlignmentVO||0>this.minAlignmentVO.cmp(b)))this.minAlignmentVO=b},_readBAMheader:function(b,n){var a=this;a.data.read(0,a.minAlignmentVO?a.minAlignmentVO.block+65535:null,function(f){try{var c;try{c=new Uint8Array(e.unbgzf(f))}catch(m){throw Error("Could not uncompress BAM data. Is it compressed correctly?");
}if(21840194!=k(c,0))throw Error("Not a BAM file");var d=k(c,4);a._readRefSeqs(d+8,262144,b,n)}catch(p){g(""+p),n(""+p)}},n)},_readRefSeqs:function(b,a,c,f){var d=this;d.data.read(0,b+a,function(m){m=e.unbgzf(m);m=new Uint8Array(m);var r=k(m,b),p=b+4;d.chrToIndex={};d.indexToChr=[];for(var g=0;g<r;++g){for(var h=k(m,p),l="",t=0;t<h-1;++t)l+=String.fromCharCode(m[p+4+t]);t=k(m,p+h+4);d.chrToIndex[d.store.browser.regularizeReferenceName(l)]=g;d.indexToChr.push({name:l,length:t});p=p+8+h;if(p>m.length){a*=
2;console.warn("BAM header is very big.  Re-fetching "+a+" bytes.");d._readRefSeqs(b,a,c,f);return}}c()},f)},blocksForRange:function(b,n,v){var f=this.indices[b];if(!f)return[];b=function(){for(var b={},a=this._reg2bins(n,v),f=0;f<a.length;++f)b[a[f]]=!0;return b}.call(this);for(var d=[],m=[],e=k(f,0),p=4,g=0;g<e;++g){var h=k(f,p),r=k(f,p+4),p=p+8;if(b[h])for(var l=0;l<r;++l){var q=c(f,p),s=c(f,p+8);(4681>h?m:d).push(new a(q,s,h));p+=16}else p+=16*r}var u=function(){for(var b=null,a=k(f,p),d=Math.min(n>>
14,a-1),a=Math.min(v>>14,a-1);d<=a;++d){var e=c(f,p+4+8*d);if(e&&(!b||0<e.cmp(b)))b=e}return b}();u&&(m=function(b){for(var a=[],n=0;n<b.length;++n){var f=b[n];f.maxv.block>=u.block&&a.push(f)}return a}(m));b=m.concat(d).sort(function(b,a){return b.minv.block-a.minv.block||b.minv.offset-a.minv.offset});d=[];if(b.length){m=b[0];for(e=1;e<b.length;++e)g=b[e],g.minv.block==m.maxv.block?m=new a(m.minv,g.maxv,"merged"):(d.push(m),m=g);d.push(m)}return d},fetch:function(b,a,c,f,k,d){b=this.store.browser.regularizeReferenceName(b);
b=this.chrToIndex&&this.chrToIndex[b];var e;0<=b?(e=this.blocksForRange(b,a,c))||d(new h.Fatal("Error in index fetch")):e=[];e.toString=function(){return this.join(", ")};try{this._fetchChunkFeatures(e,b,a,c,f,k,d)}catch(g){d(g)}},_fetchChunkFeatures:function(b,a,c,f,e,k,g){if(b.length){for(var r=0,q=this.featureCache=this.featureCache||new d({name:"bamFeatureCache",fillCallback:dojo.hitch(this,"_readChunk"),sizeFunction:function(b){return b.length},maxSize:1E5}),s=0;s<b.length;s++){var w=b[s].fetchedSize();
if(w>this.chunkSizeLimit){g(new h.DataOverflow("Too many BAM features. BAM chunk size "+l.commifyNumber(w)+" bytes exceeds chunkSizeLimit of "+l.commifyNumber(this.chunkSizeLimit)+"."));return}}var t;u.forEach(b,function(d){q.get(d,function(d,h){h&&!t&&g(h);if(!(t=t||h)){for(var l=0;l<d.length;l++){var q=d[l];if(q._refID==a)if(q.get("start")>f)break;else q.get("end")>=c&&e(q)}++r==b.length&&k()}})})}else k()},_readChunk:function(b,a){var c=this,f=[];c.data.read(b.minv.block,b.fetchedSize(),function(d){try{var k=
e.unbgzf(d,b.maxv.block-b.minv.block+1);c.readBamFeatures(new Uint8Array(k),b.minv.offset,f,a)}catch(g){a(null,new h.Fatal(g))}},function(b){a(null,new h.Fatal(b))})},readBamFeatures:function(b,a,c,f){for(var d=this,e=0;;)if(a>=b.length){f(c);break}else if(300>=e){var g=k(b,a),g=a+4+g-1;if(g<b.length){var h=new r({store:this.store,file:this,bytes:{byteArray:b,start:a,end:g}});c.push(h);e++}a=g+1}else{window.setTimeout(function(){d.readBamFeatures(b,a,c,f)},1);break}},_reg2bin:function(b,a){--a;return b>>
14==a>>14?4681+(b>>14):b>>17==a>>17?585+(b>>17):b>>20==a>>20?73+(b>>20):b>>23==a>>23?9+(b>>23):b>>26==a>>26?1+(b>>26):0},MAX_BIN:37449,_reg2bins:function(b,a){var c,f=[0];--a;for(c=1+(b>>26);c<=1+(a>>26);++c)f.push(c);for(c=9+(b>>23);c<=9+(a>>23);++c)f.push(c);for(c=73+(b>>20);c<=73+(a>>20);++c)f.push(c);for(c=585+(b>>17);c<=585+(a>>17);++c)f.push(c);for(c=4681+(b>>14);c<=4681+(a>>14);++c)f.push(c);return f}})})},"JBrowse/Store/SeqFeature/BAM/Util":function(){define(["jszlib/inflate","jszlib/arrayCopy",
"JBrowse/Util"],function(q,u,s){var l=s.fastDeclare({constructor:function(d,e){this.block=d;this.offset=e},toString:function(){return""+this.block+":"+this.offset},cmp:function(d){return d.block-this.block||d.offset-this.offset}}),h={readInt:function(d,e){return d[e+3]<<24|d[e+2]<<16|d[e+1]<<8|d[e]},readShort:function(d,e){return d[e+1]<<8|d[e]},readFloat:function(d,e){for(var h=new Uint8Array(4),g=0;4>g;g++)h[g]=d[e+g];return(new Float32Array(h.buffer))[0]},readVirtualOffset:function(d,e){var h=
4294967296*(d[e+6]&255)+16777216*(d[e+5]&255)+65536*(d[e+4]&255)+256*(d[e+3]&255)+(d[e+2]&255),g=d[e+1]<<8|d[e];return 0==h&&0==g?null:new l(h,g)},unbgzf:function(d,e){e=Math.min(e||Infinity,d.byteLength-27);for(var l=[],g=0,a=[0];a[0]<e;a[0]+=8){var k=new Uint8Array(d,a[0],18);if(!(31==k[0]&&139==k[1])){console.error("invalid BGZF block header, skipping",k);break}var k=h.readShort(k,10),k=a[0]+12+k,c;try{c=q(d,k,d.byteLength-k,a)}catch(b){if(/^Z_BUF_ERROR/.test(b.statusString)&&l.length)break;else throw b;
}c.byteLength&&(g+=c.byteLength,l.push(c))}if(1==l.length)return l[0];g=new Uint8Array(g);for(c=a=0;c<l.length;++c)k=new Uint8Array(l[c]),u(k,0,g,a,k.length),a+=k.length;return g.buffer}};return h})},"JBrowse/Store/SeqFeature/BAM/LazyFeature":function(){define(["dojo/_base/array","JBrowse/Util","./Util","JBrowse/Model/SimpleFeature"],function(q,u,s,l){var h="\x3dACxGxxxTxxxxxxN".split(""),d="MIDNSHP\x3dX???????".split(""),e=s.readInt,r=s.readShort,g=s.readFloat;return u.fastDeclare({constructor:function(a){this.file=
a.file;this.data={type:"match",source:a.store.source};this.bytes={start:a.bytes.start,end:a.bytes.end,byteArray:a.bytes.byteArray};this._coreParse()},get:function(a){return this._get(a.toLowerCase())},_get:function(a){return a in this.data?this.data[a]:this.data[a]=this[a]?this[a]():this._flagMasks[a]?this._parseFlag(a):this._parseTag(a)},tags:function(){return this._get("_tags")},_tags:function(){this._parseAllTags();var a="seq seq_reverse_complemented unmapped qc_failed duplicate secondary_alignment supplementary_alignment".split(" ");
this._get("unmapped")||a.push("start","end","strand","score","qual","MQ","CIGAR","length_on_ref","template_length");this._get("multi_segment_template")&&a.push("multi_segment_all_correctly_aligned","multi_segment_next_segment_unmapped","multi_segment_next_segment_reversed","multi_segment_first","multi_segment_last","next_segment_position");var a=a.concat(this._tagList||[]),d=this.data,c;for(c in d)d.hasOwnProperty(c)&&("_"!=c[0]&&"multi_segment_all_aligned"!=c&&"next_seq_id"!=c)&&a.push(c);var b=
{};return a=q.filter(a,function(a){if(a in this.data&&void 0===this.data[a])return!1;a=a.toLowerCase();var c=b[a];b[a]=!0;return!c},this)},parent:function(){},children:function(){return this._get("subfeatures")},id:function(){return this._get("name")+"/"+this._get("md")+"/"+this._get("cigar")+"/"+this._get("start")+"/"+this._get("multi_segment_next_segment_reversed")},multi_segment_all_aligned:function(){return this._get("multi_segment_all_correctly_aligned")},mq:function(){var a=(this._get("_bin_mq_nl")&
65280)>>8;return 255==a?void 0:a},score:function(){return this._get("mq")},qual:function(){if(!this._get("unmapped")){for(var a=[],d=this.bytes.byteArray,c=this.bytes.start+36+this._get("_l_read_name")+4*this._get("_n_cigar_op")+this._get("_seq_bytes"),b=this._get("seq_length"),e=0;e<b;++e)a.push(d[c+e]);return a.join(" ")}},strand:function(){return this._get("seq_reverse_complemented")?-1:1},multi_segment_next_segment_strand:function(){return this._get("multi_segment_next_segment_unmapped")?void 0:
this._get("multi_segment_next_segment_reversed")?-1:1},_l_read_name:function(){return this._get("_bin_mq_nl")&255},_seq_bytes:function(){return this._get("seq_length")+1>>1},seq:function(){for(var a="",d=this.bytes.byteArray,c=this.bytes.start+36+this._get("_l_read_name")+4*this._get("_n_cigar_op"),b=this._get("_seq_bytes"),e=0;e<b;++e){var g=d[c+e],a=a+h[(g&240)>>4];a.length<this.get("seq_length")&&(a+=h[g&15])}return a},name:function(){return this._get("_read_name")},_read_name:function(){for(var a=
this.bytes.byteArray,d="",c=this._get("_l_read_name"),b=this.bytes.start+36,e=0;e<c-1;++e)d+=String.fromCharCode(a[b+e]);return d},_n_cigar_op:function(){return this._get("_flag_nc")&65535},cigar:function(){if(!this._get("unmapped")){for(var a=this.bytes.byteArray,k=this._get("_n_cigar_op"),c=this.bytes.start+36+this._get("_l_read_name"),b="",g=0,h=0;h<k;++h){var f=e(a,c),l=f>>4,f=d[f&15],b=b+(l+f);"H"!=f&&("S"!=f&&"I"!=f)&&(g+=l);c+=4}this.data.length_on_ref=g;return b}},next_segment_position:function(){var a=
this.file.indexToChr[this._get("_next_refid")];if(a)return a.name+":"+this._get("_next_pos")},subfeatures:function(){var a=this._get("cigar");if(a)return this._cigarToSubfeats(a)},length_on_ref:function(){this._get("cigar");return this.data.length_on_ref},_flags:function(){return(this.get("_flag_nc")&4294901760)>>16},end:function(){return this._get("start")+(this._get("length_on_ref")||this._get("seq_length")||void 0)},seq_id:function(){return this._get("unmapped")?void 0:(this.file.indexToChr[this._refID]||
{}).name},next_seq_id:function(){return this._get("multi_segment_next_segment_unmapped")?void 0:(this.file.indexToChr[this._get("_next_refid")]||{}).name},_bin_mq_nl:function(){return e(this.bytes.byteArray,this.bytes.start+12)},_flag_nc:function(){return e(this.bytes.byteArray,this.bytes.start+16)},seq_length:function(){return e(this.bytes.byteArray,this.bytes.start+20)},_next_refid:function(){return e(this.bytes.byteArray,this.bytes.start+24)},_next_pos:function(){return e(this.bytes.byteArray,
this.bytes.start+28)},template_length:function(){return e(this.bytes.byteArray,this.bytes.start+32)},_coreParse:function(){this._refID=e(this.bytes.byteArray,this.bytes.start+4);this.data.start=e(this.bytes.byteArray,this.bytes.start+8)},_parseTag:function(a){if(!this._allTagsParsed){this._tagList=this._tagList||[];for(var d=this.bytes.byteArray,c=this._tagOffset||this.bytes.start+36+this._get("_l_read_name")+4*this._get("_n_cigar_op")+this._get("_seq_bytes")+this._get("seq_length"),b=this.bytes.end;c<
b&&l!=a;){var h=String.fromCharCode(d[c],d[c+1]),l=h.toLowerCase(),f=String.fromCharCode(d[c+2]),c=c+3;switch(f.toLowerCase()){case "a":f=String.fromCharCode(d[c]);c+=1;break;case "i":f=e(d,c);c+=4;break;case "c":f=d[c];c+=1;break;case "s":f=r(d,c);c+=2;break;case "f":f=g(d,c);c+=4;break;case "z":case "h":for(f="";c<=b;){var q=d[c++];if(0==q)break;else f+=String.fromCharCode(q)}break;default:console.warn("Unknown BAM tag type '"+f+"', tags may be incomplete"),f=void 0,c=b}this._tagOffset=c;this._tagList.push(h);
if(l==a)return f;this.data[l]=f}this._allTagsParsed=!0}},_parseAllTags:function(){this._parseTag()},_flagMasks:{multi_segment_template:1,multi_segment_all_correctly_aligned:2,unmapped:4,multi_segment_next_segment_unmapped:8,seq_reverse_complemented:16,multi_segment_next_segment_reversed:32,multi_segment_first:64,multi_segment_last:128,secondary_alignment:256,qc_failed:512,duplicate:1024,supplementary_alignment:2048},_parseFlag:function(a){return!!(this._get("_flags")&this._flagMasks[a])},_parseCigar:function(a){return q.map(a.match(/\d+\D/g),
function(a){return[a.match(/\D/)[0].toUpperCase(),parseInt(a)]})},_cigarToSubfeats:function(a){var d=[],c=this._get("start"),b;a=this._parseCigar(a);for(var e=0;e<a.length;e++){var g=a[e][1],f=a[e][0];"\x3d"===f&&(f="E");switch(f){case "M":case "D":case "N":case "E":case "X":b=c+g;break;case "I":b=c}"N"!==f&&d.push(new l({data:{type:f,start:c,end:b,strand:this._get("strand"),cigar_op:g+f},parent:this}));c=b}return d}})})}}});
define("JBrowse/Store/SeqFeature/BAM","dojo/_base/declare dojo/_base/array dojo/_base/Deferred dojo/_base/lang JBrowse/has JBrowse/Util JBrowse/Store/SeqFeature JBrowse/Store/DeferredStatsMixin JBrowse/Store/DeferredFeaturesMixin JBrowse/Model/XHRBlob JBrowse/Store/SeqFeature/GlobalStatsEstimationMixin ./BAM/File".split(" "),function(q,u,s,l,h,d,e,r,g,a,k,c){return q([e,r,g,k],{constructor:function(b){var d=b.bam||new a(this.resolveUrl(b.urlTemplate||"data.bam")),e=b.bai||new a(this.resolveUrl(b.baiUrlTemplate||
(b.urlTemplate?b.urlTemplate+".bai":"data.bam.bai")));this.bam=new c({store:this,data:d,bai:e,chunkSizeLimit:b.chunkSizeLimit});this.source=(d.url?d.url.match(/\/([^/\#\?]+)($|[\#\?])/)[1]:d.blob?d.blob.name:void 0)||void 0;h("typed-arrays")?(this.bam.init({success:l.hitch(this,function(){this._deferred.features.resolve({success:!0});this._estimateGlobalStats().then(l.hitch(this,function(a){this.globalStats=a;this._deferred.stats.resolve({success:!0})}),l.hitch(this,"_failAllDeferred"))}),failure:l.hitch(this,
"_failAllDeferred")}),this.storeTimeout=b.storeTimeout||3E3):this._failAllDeferred("This web browser lacks support for JavaScript typed arrays.")},hasRefSeq:function(a,c,d){var e=this;a=e.browser.regularizeReferenceName(a);this._deferred.stats.then(function(){c(a in e.bam.chrToIndex)},d)},_getFeatures:function(a,c,d,e){this.bam.fetch(this.refSeq.name,a.start,a.end,c,d,e)},saveStore:function(){return{urlTemplate:this.config.bam.url,baiUrlTemplate:this.config.bai.url}}})});
//# sourceMappingURL=BAM.js.map