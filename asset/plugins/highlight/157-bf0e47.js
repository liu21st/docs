"use strict";(self.webpackChunkTopWritePlugins_highlight=self.webpackChunkTopWritePlugins_highlight||[]).push([[157],{157:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var r=t(159),o=t(804);const a="container--f4f52969";var i=t(907);function c({props:{children:e,className:n}}){const c=function(){const{config:e}=(0,i.useBook)(),n=t(181);return e.getPluginConfig("highlight",n)}(),[l,s]=(0,o.useState)(e.join(""));return(0,o.useEffect)((()=>()=>{s(e.join(""))}),[e]),(0,i.useAsyncEffect)((async()=>{const r=e.join("");if(r.match(/\n/)){const e=await async function(){const e=await t.e(282).then(t.t.bind(t,282,23));return await t.e(522).then(t.t.bind(t,522,23)),e}();try{let t,o=function(e){return e.map((function(e){return 0===e.search("lang-")?e.slice("lang-".length):0===e.search("language-")?e.slice("language-".length):null})).find((function(e){return Boolean(e)}))}(n||[]);o||(o=c.getValue("defaultLanguage","clike")),e.languages[o]||(o="clike"),t=e.highlight(r,e.languages[o],o),s(t)}catch(e){console.error(e)}}}),[e,s]),(0,r.jsx)("code",{className:a,dangerouslySetInnerHTML:{__html:l}},void 0)}},2:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,l=o(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))t.call(i,u)&&(l[u]=i[u]);if(n){c=n(i);for(var f=0;f<c.length;f++)r.call(i,c[f])&&(l[c[f]]=i[c[f]])}}return l}},709:(e,n,t)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
t(2);var r=t(804),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,a={},s=null,u=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(u=n.ref),n)c.call(n,r)&&!l.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:i.current}}n.jsx=s},159:(e,n,t)=>{e.exports=t(709)}}]);
//# sourceMappingURL=157-bf0e47.js.map