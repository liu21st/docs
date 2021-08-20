(()=>{var e,t,n,r,i={316:e=>{"use strict";e.exports=function(e,t){var n,r,i=0,o=0;if("string"!=typeof t||1!==t.length)throw new Error("Expected character");e=String(e),r=e.indexOf(t),n=r;for(;-1!==r;)i++,r===n?i>o&&(o=i):i=1,n=r+1,r=e.indexOf(t,n);return o}},398:(e,t)=>{"use strict";function n(e){this.config.enter.data.call(this,e),this.config.exit.data.call(this,e)}t.enter={mathFlow:function(e){this.enter({type:"math",meta:null,value:"",data:{hName:"div",hProperties:{className:["math","math-display"]},hChildren:[{type:"text",value:""}]}},e)},mathFlowFenceMeta:function(){this.buffer()},mathText:function(e){this.enter({type:"inlineMath",value:"",data:{hName:"span",hProperties:{className:["math","math-inline"]},hChildren:[{type:"text",value:""}]}},e),this.buffer()}},t.exit={mathFlow:function(e){var t=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),n=this.exit(e);n.value=t,n.data.hChildren[0].value=t,this.setData("mathFlowInside")},mathFlowFence:function(){if(this.getData("mathFlowInside"))return;this.buffer(),this.setData("mathFlowInside",!0)},mathFlowFenceMeta:function(){var e=this.resume();this.stack[this.stack.length-1].meta=e},mathFlowValue:n,mathText:function(e){var t=this.resume(),n=this.exit(e);n.value=t,n.data.hChildren[0].value=t},mathTextData:n}},270:(e,t,n)=>{"use strict";t.unsafe=[{character:"\r",inConstruct:["mathFlowMeta"]},{character:"\r",inConstruct:["mathFlowMeta"]},{character:"$",inConstruct:["mathFlowMeta","phrasing"]},{atBreak:!0,character:"$",after:"\\$"}],t.handlers={math:function(e,t,n){var a,u=e.value||"",s=r("$",Math.max(i(u,"$")+1,2)),l=n.enter("mathFlow"),c=s;e.meta&&(a=n.enter("mathFlowMeta"),c+=o(n,e.meta,{before:"$",after:" ",encode:["$"]}),a());c+="\n",u&&(c+=u+"\n");return c+=s,l(),c},inlineMath:a},a.peek=function(){return"$"};var r=n(76),i=n(316),o=n(289);function a(e){for(var t,n=e.value||"",i=1,o="";new RegExp("(^|[^$])"+r("\\$",i)+"([^$]|$)").test(n);)i++;return/[^ \r\n]/.test(n)&&(/[ \r\n$]/.test(n.charAt(0))||/[ \r\n$]/.test(n.charAt(n.length-1)))&&(o=" "),(t=r("$",i))+o+n+o+t}},505:e=>{e.exports=function(e){var t,n;e._compiled||(t=e.before?"(?:"+e.before+")":"",n=e.after?"(?:"+e.after+")":"",e.atBreak&&(t="[\\r\\n][\\t ]*"+t),e._compiled=new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(n||""),"g"));return e._compiled}},855:e=>{function t(e,t,n){var r;if(!t)return n;for("string"==typeof t&&(t=[t]),r=-1;++r<t.length;)if(-1!==e.indexOf(t[r]))return!0;return!1}e.exports=function(e,n){return t(e,n.inConstruct,!0)&&!t(e,n.notInConstruct)}},289:(e,t,n)=>{e.exports=function(e,t,n){var u,s,l,c,f,h,p,d,m=(n.before||"")+(t||"")+(n.after||""),g=[],v=[],x={},y=-1;for(;++y<e.unsafe.length;)if(c=e.unsafe[y],i(e.stack,c))for(f=r(c);h=f.exec(m);)u="before"in c||c.atBreak,s="after"in c,l=h.index+(u?h[1].length:0),-1===g.indexOf(l)?(g.push(l),x[l]={before:u,after:s}):(x[l].before&&!u&&(x[l].before=!1),x[l].after&&!s&&(x[l].after=!1));g.sort(o),p=n.before?n.before.length:0,d=m.length-(n.after?n.after.length:0),y=-1;for(;++y<g.length;)(l=g[y])<p||l>=d||l+1<d&&g[y+1]===l+1&&x[l].after&&!x[l+1].before&&!x[l+1].after||(p!==l&&v.push(a(m.slice(p,l),"\\")),p=l,!/[!-/:-@[-`{-~]/.test(m.charAt(l))||n.encode&&-1!==n.encode.indexOf(m.charAt(l))?(v.push("&#x"+m.charCodeAt(l).toString(16).toUpperCase()+";"),p++):v.push("\\"));return v.push(a(m.slice(p,d),n.after)),v.join("")};var r=n(505),i=n(855);function o(e,t){return e-t}function a(e,t){for(var n,r=/\\(?=[!-/:-@[-`{-~])/g,i=[],o=[],a=-1,u=0,s=e+t;n=r.exec(s);)i.push(n.index);for(;++a<i.length;)u!==i[a]&&o.push(e.slice(u,i[a])),o.push("\\"),u=i[a];return o.push(e.slice(u)),o.join("")}},967:(e,t,n)=>{e.exports=n(50)},50:(e,t,n)=>{"use strict";t.flow={36:n(623)},t.text={36:n(71)}},623:(e,t,n)=>{"use strict";t.tokenize=function(e,t,n){var o=this,a=r(this.events,"linePrefix"),u=0;return function(t){if(36!==t)throw new Error("expected `$`");return e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),s(t)};function s(t){return 36===t?(e.consume(t),u++,s):(e.exit("mathFlowFenceSequence"),u<2?n(t):i(e,l,"whitespace")(t))}function l(t){return null===t||-5===t||-4===t||-3===t?f(t):(e.enter("mathFlowFenceMeta"),e.enter("chunkString",{contentType:"string"}),c(t))}function c(t){return null===t||-5===t||-4===t||-3===t?(e.exit("chunkString"),e.exit("mathFlowFenceMeta"),f(t)):36===t?n(t):(e.consume(t),c)}function f(n){return e.exit("mathFlowFence"),o.interrupt?t(n):h(n)}function h(t){return null===t?d(t):-5===t||-4===t||-3===t?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),e.attempt({tokenize:m,partial:!0},d,a?i(e,h,"linePrefix",a+1):h)):(e.enter("mathFlowValue"),p(t))}function p(t){return null===t||-5===t||-4===t||-3===t?(e.exit("mathFlowValue"),h(t)):(e.consume(t),p)}function d(n){return e.exit("mathFlow"),t(n)}function m(e,t,n){var r=0;return i(e,(function(t){return e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),o(t)}),"linePrefix",4);function o(t){return 36===t?(e.consume(t),r++,o):r<u?n(t):(e.exit("mathFlowFenceSequence"),i(e,a,"whitespace")(t))}function a(r){return null===r||-5===r||-4===r||-3===r?(e.exit("mathFlowFence"),t(r)):n(r)}}},t.concrete=!0;var r=n(722),i=n(397)},71:(e,t)=>{"use strict";function n(e){return 36!==e||"characterEscape"===this.events[this.events.length-1][1].type}t.tokenize=function(e,t,r){var i,o,a=this,u=0;return function(t){if(36!==t)throw new Error("expected `$`");if(!n.call(a,a.previous))throw new Error("expected correct previous");return e.enter("mathText"),e.enter("mathTextSequence"),s(t)};function s(t){return 36===t?(e.consume(t),u++,s):(e.exit("mathTextSequence"),l(t))}function l(t){return null===t?r(t):36===t?(o=e.enter("mathTextSequence"),i=0,f(t)):32===t?(e.enter("space"),e.consume(t),e.exit("space"),l):-5===t||-4===t||-3===t?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l):(e.enter("mathTextData"),c(t))}function c(t){return null===t||32===t||36===t||-5===t||-4===t||-3===t?(e.exit("mathTextData"),l(t)):(e.consume(t),c)}function f(n){return 36===n?(e.consume(n),i++,f):i===u?(e.exit("mathTextSequence"),e.exit("mathText"),t(n)):(o.type="mathTextData",c(n))}},t.resolve=function(e){var t,n,r=e.length-4,i=3;if(!("lineEnding"!==e[i][1].type&&"space"!==e[i][1].type||"lineEnding"!==e[r][1].type&&"space"!==e[r][1].type))for(t=i;++t<r;)if("mathTextData"===e[t][1].type){e[r][1].type="mathTextPadding",e[i][1].type="mathTextPadding",i+=2,r-=2;break}t=i-1,r++;for(;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):t!==r&&"lineEnding"!==e[t][1].type||(e[n][1].type="mathTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},t.previous=n},727:e=>{"use strict";e.exports=function(e){return-2===e||-1===e||32===e}},397:(e,t,n)=>{"use strict";var r=n(727);e.exports=function(e,t,n,i){var o=i?i-1:1/0,a=0;return function(i){if(r(i))return e.enter(n),u(i);return t(i)};function u(i){return r(i)&&a++<o?(e.consume(i),u):(e.exit(n),t(i))}}},722:(e,t,n)=>{"use strict";var r=n(37);e.exports=function(e,t){var n=e[e.length-1];return n&&n[1].type===t?r(n[2].sliceStream(n[1])):0}},37:e=>{"use strict";e.exports=function(e){for(var t=-1,n=0;++t<e.length;)n+="string"==typeof e[t]?e[t].length:1;return n}},16:(e,t,n)=>{"use strict";var r,i=n(967),o=n(398),a=n(270);e.exports=function(){var e=this.data();!r&&(this.Parser&&this.Parser.prototype&&this.Parser.prototype.blockTokenizers||this.Compiler&&this.Compiler.prototype&&this.Compiler.prototype.visitors)&&(r=!0,console.warn("[remark-math] Warning: please upgrade to remark 13 to use this plugin"));function t(t,n){e[t]?e[t].push(n):e[t]=[n]}t("micromarkExtensions",i),t("fromMarkdownExtensions",o),t("toMarkdownExtensions",a)}},76:e=>{"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var t,n="";e.exports=function(e,r){if("string"!=typeof e)throw new TypeError("expected a string");if(1===r)return e;if(2===r)return e+e;var i=e.length*r;if(t!==e||void 0===t)t=e,n="";else if(n.length>=i)return n.substr(0,i);for(;i>n.length&&r>1;)1&r&&(n+=e),r>>=1,e+=e;return n=(n+=e).substr(0,i)}},804:e=>{"use strict";e.exports=React},907:e=>{"use strict";e.exports=TopWrite}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e].call(n.exports,n,n.exports,a),n.exports}a.m=i,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+"-"+{102:"aeb66f",846:"0bd2cb"}[e]+".js",a.miniCssF=e=>e+".index.css",a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="TopWritePlugins = typeof TopWritePlugins === \"undefined\" ? {} : TopWritePlugins; TopWritePlugins['tex']:",a.l=(n,r,i,o)=>{if(e[n])e[n].push(r);else{var u,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(s=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",t+i),u.src=n),e[n]=[r];var h=(t,r)=>{u.onerror=u.onload=null,clearTimeout(p);var i=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((e=>e(r))),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=h.bind(null,u.onerror),u.onload=h.bind(null,u.onload),s&&document.head.appendChild(u)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="",n=e=>new Promise(((t,n)=>{var r=a.miniCssF(e),i=a.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var a;if((i=(a=o[r]).getAttribute("data-href"))===e||i===t)return a}})(r,i))return t();((e,t,n,r)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=o=>{if(i.onerror=i.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,i.parentNode.removeChild(i),r(s)}},i.href=t,document.head.appendChild(i)})(e,i,t,n)})),r={179:0},a.f.miniCss=(e,t)=>{r[e]?t.push(r[e]):0!==r[e]&&{846:1}[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))},(()=>{var e={179:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=i);var o=a.p+a.u(t),u=new Error;a.l(o,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,r[1](u)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,i,[o,u,s]=n,l=0;for(r in u)a.o(u,r)&&(a.m[r]=u[r]);if(s)s(a);for(t&&t(n);l<o.length;l++)i=o[l],a.o(e,i)&&e[i]&&e[i][0](),e[o[l]]=0},n=self.webpackChunkTopWritePlugins_typeof_TopWritePlugins_undefined_TopWritePlugins_TopWritePlugins_tex_=self.webpackChunkTopWritePlugins_typeof_TopWritePlugins_undefined_TopWritePlugins_TopWritePlugins_tex_||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var u={};(()=>{"use strict";var e=a(907);a.p=(0,e.getPublicPath)()})(),(()=>{"use strict";a.d(u,{default:()=>h});var e=a(907);var t=a(804),n=a.n(t),r=a(16),i=a.n(r),o=function(e){if(null==e)return l;if("string"==typeof e)return function(e){return s(t);function t(t){return t&&t.type===e}}(e);if("object"==typeof e)return"length"in e?function(e){var t=[],n=-1;for(;++n<e.length;)t[n]=o(e[n]);return s(r);function r(...e){for(var n=-1;++n<t.length;)if(t[n].call(this,...e))return!0}}(e):function(e){return s(t);function t(t){var n;for(n in e)if(t[n]!==e[n])return;return!0}}(e);if("function"==typeof e)return s(e);throw new Error("Expected function, string, or object as test")};function s(e){return function(...t){return Boolean(e.call(this,...t))}}function l(){return!0}const c=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null);var i=o(t),a=r?-1:1;!function e(o,u,s){var l,c="object"==typeof o&&null!==o?o:{};"string"==typeof c.type&&(l="string"==typeof c.tagName?c.tagName:"string"==typeof c.name?c.name:void 0,Object.defineProperty(f,"name",{value:"node ("+c.type+(l?"<"+l+">":"")+")"}));return f;function f(){var l,c,f,h=[];if((!t||i(o,u,s[s.length-1]||null))&&false===(h=function(e){if(Array.isArray(e))return e;if("number"==typeof e)return[true,e];return[e]}(n(o,s)))[0])return h;if(o.children&&"skip"!==h[0])for(c=(r?o.children.length:-1)+a,f=s.concat(o);c>-1&&c<o.children.length;){if(false===(l=e(o.children[c],c,f)())[0])return l;c="number"==typeof l[1]?l[1]:c+a}return h}}(e,null,[])()};const f=n().lazy((()=>Promise.all([a.e(102),a.e(846)]).then(a.bind(a,846)))),h=function({models:t,components:n,activate:r,deactivate:i,messages:o,locales:a}){return new e.Plugin("tex",t,n,r,i,o,undefined)}({components:{"block:math":f,"block:tex":f,"inline:$":f},activate(){e.markdown.use(i()),e.markdown.use((function(){return function(e){!function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null),c(e,t,(function(e,t){var r=t[t.length-1];return n(e,r?r.children.indexOf(e):null,r)}),r)}(e,["math","inlineMath"],((e,t,n)=>{null!==t&&null!==n&&("math"===e.type?n.children.splice(t,1,{type:"xBlock",name:"math",value:e.value,position:e.position}):"inlineMath"===e.type&&n.children.splice(t,1,{type:"xInline",name:"$",value:e.value,position:e.position}))}))}}))}})})(),TopWritePlugins="undefined"==typeof TopWritePlugins?{}:TopWritePlugins,TopWritePlugins.tex=u.default})();
//# sourceMappingURL=index.js.map