(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2859],{92404:(r,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>a});var e=o(94015),c=o.n(e),t=o(23645),s=o.n(t)()(c());s.push([r.id,"/* Based on arcticicestudio's Nord theme */\n/* https://github.com/arcticicestudio/nord */\n\n.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }\n.cm-s-nord div.CodeMirror-selected { background: #434c5e; }\n.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }\n.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }\n.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }\n.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }\n.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-nord span.cm-comment { color: #4c566a; }\n.cm-s-nord span.cm-atom { color: #b48ead; }\n.cm-s-nord span.cm-number { color: #b48ead; }\n\n.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }\n.cm-s-nord span.cm-keyword { color: #81A1C1; }\n.cm-s-nord span.cm-builtin { color: #81A1C1; }\n.cm-s-nord span.cm-string { color: #A3BE8C; }\n\n.cm-s-nord span.cm-variable { color: #d8dee9; }\n.cm-s-nord span.cm-variable-2 { color: #d8dee9; }\n.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }\n.cm-s-nord span.cm-def { color: #8FBCBB; }\n.cm-s-nord span.cm-bracket { color: #81A1C1; }\n.cm-s-nord span.cm-tag { color: #bf616a; }\n.cm-s-nord span.cm-header { color: #b48ead; }\n.cm-s-nord span.cm-link { color: #b48ead; }\n.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }\n\n.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }\n.cm-s-nord .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/nord.css"],names:[],mappings:"AAAA,0CAA0C;AAC1C,4CAA4C;;AAE5C,wBAAwB,mBAAmB,EAAE,cAAc,EAAE;AAC7D,qCAAqC,mBAAmB,EAAE;AAC1D,8IAA8I,mBAAmB,EAAE;AACnK,6JAA6J,mBAAmB,EAAE;AAClL,iCAAiC,mBAAmB,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,cAAc,EAAE;AACtD,6CAA6C,cAAc,EAAE;AAC7D,oCAAoC,cAAc,EAAE;AACpD,gCAAgC,8BAA8B,EAAE;;AAEhE,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,cAAc,EAAE;AAC1C,4BAA4B,cAAc,EAAE;;AAE5C,0CAA0C,cAAc,EAAE;AAC1D,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;;AAErD,4DAA4D,cAAc,EAAE;AAC5E,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;;AAE5C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,yDAAyD,cAAc,EAAE;AACzE,yBAAyB,cAAc,EAAE;AACzC,6BAA6B,cAAc,EAAE;AAC7C,yBAAyB,cAAc,EAAE;AACzC,4BAA4B,cAAc,EAAE;AAC5C,0BAA0B,cAAc,EAAE;AAC1C,2BAA2B,mBAAmB,EAAE,cAAc,EAAE;;AAEhE,+CAA+C,mBAAmB,EAAE;AACpE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/* Based on arcticicestudio's Nord theme */\n/* https://github.com/arcticicestudio/nord */\n\n.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }\n.cm-s-nord div.CodeMirror-selected { background: #434c5e; }\n.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }\n.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }\n.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }\n.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }\n.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-nord span.cm-comment { color: #4c566a; }\n.cm-s-nord span.cm-atom { color: #b48ead; }\n.cm-s-nord span.cm-number { color: #b48ead; }\n\n.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }\n.cm-s-nord span.cm-keyword { color: #81A1C1; }\n.cm-s-nord span.cm-builtin { color: #81A1C1; }\n.cm-s-nord span.cm-string { color: #A3BE8C; }\n\n.cm-s-nord span.cm-variable { color: #d8dee9; }\n.cm-s-nord span.cm-variable-2 { color: #d8dee9; }\n.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }\n.cm-s-nord span.cm-def { color: #8FBCBB; }\n.cm-s-nord span.cm-bracket { color: #81A1C1; }\n.cm-s-nord span.cm-tag { color: #bf616a; }\n.cm-s-nord span.cm-header { color: #b48ead; }\n.cm-s-nord span.cm-link { color: #b48ead; }\n.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }\n\n.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }\n.cm-s-nord .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n"],sourceRoot:""}]);const a=s},23645:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o=r(n);return n[2]?"@media ".concat(n[2]," {").concat(o,"}"):o})).join("")},n.i=function(r,o,e){"string"==typeof r&&(r=[[null,r,""]]);var c={};if(e)for(var t=0;t<this.length;t++){var s=this[t][0];null!=s&&(c[s]=!0)}for(var a=0;a<r.length;a++){var A=[].concat(r[a]);e&&c[A[0]]||(o&&(A[2]?A[2]="".concat(o," and ").concat(A[2]):A[2]=o),n.push(A))}},n}},94015:r=>{"use strict";function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=r[o];return e}r.exports=function(r){var o,e,c=(e=4,function(r){if(Array.isArray(r))return r}(o=r)||function(r,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var o=[],e=!0,c=!1,t=void 0;try{for(var s,a=r[Symbol.iterator]();!(e=(s=a.next()).done)&&(o.push(s.value),!n||o.length!==n);e=!0);}catch(r){c=!0,t=r}finally{try{e||null==a.return||a.return()}finally{if(c)throw t}}return o}}(o,e)||function(r,o){if(r){if("string"==typeof r)return n(r,o);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,o):void 0}}(o,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=c[1],s=c[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),i="/*# ".concat(A," */"),d=s.sources.map((function(r){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(r," */")}));return[t].concat(d).concat([i]).join("\n")}return[t].join("\n")}},92859:(r,n,o)=>{var e=o(92404);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[r.id,e,""]]);o(93379)(e,{insert:"head",singleton:!1}),e.locals&&(r.exports=e.locals)},93379:(r,n,o)=>{"use strict";var e,c={},t=function(){var r={};return function(n){if(void 0===r[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}r[n]=o}return r[n]}}();function s(r,n){for(var o=[],e={},c=0;c<r.length;c++){var t=r[c],s=n.base?t[0]+n.base:t[0],a={css:t[1],media:t[2],sourceMap:t[3]};e[s]?e[s].parts.push(a):o.push(e[s]={id:s,parts:[a]})}return o}function a(r,n){for(var o=0;o<r.length;o++){var e=r[o],t=c[e.id],s=0;if(t){for(t.refs++;s<t.parts.length;s++)t.parts[s](e.parts[s]);for(;s<e.parts.length;s++)t.parts.push(C(e.parts[s],n))}else{for(var a=[];s<e.parts.length;s++)a.push(C(e.parts[s],n));c[e.id]={id:e.id,refs:1,parts:a}}}}function A(r){var n=document.createElement("style");if(void 0===r.attributes.nonce){var e=o.nc;e&&(r.attributes.nonce=e)}if(Object.keys(r.attributes).forEach((function(o){n.setAttribute(o,r.attributes[o])})),"function"==typeof r.insert)r.insert(n);else{var c=t(r.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var i,d=(i=[],function(r,n){return i[r]=n,i.filter(Boolean).join("\n")});function m(r,n,o,e){var c=o?"":e.css;if(r.styleSheet)r.styleSheet.cssText=d(n,c);else{var t=document.createTextNode(c),s=r.childNodes;s[n]&&r.removeChild(s[n]),s.length?r.insertBefore(t,s[n]):r.appendChild(t)}}function l(r,n,o){var e=o.css,c=o.media,t=o.sourceMap;if(c&&r.setAttribute("media",c),t&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var u=null,p=0;function C(r,n){var o,e,c;if(n.singleton){var t=p++;o=u||(u=A(n)),e=m.bind(null,o,t,!1),c=m.bind(null,o,t,!0)}else o=A(n),e=l.bind(null,o,n),c=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(o)};return e(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;e(r=n)}else c()}}r.exports=function(r,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var o=s(r,n);return a(o,n),function(r){for(var e=[],t=0;t<o.length;t++){var A=o[t],i=c[A.id];i&&(i.refs--,e.push(i))}r&&a(s(r,n),n);for(var d=0;d<e.length;d++){var m=e[d];if(0===m.refs){for(var l=0;l<m.parts.length;l++)m.parts[l]();delete c[m.id]}}}}}}]);
//# sourceMappingURL=2859.4be8ef54127b46c65956.js.map