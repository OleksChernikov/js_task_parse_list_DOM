parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return n(t)||a(t)||e(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){if(t){if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,r):void 0}}function a(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return o(t)}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}function i(){var r=document.querySelector("ul"),e=t(document.querySelectorAll("li"));e.sort(function(t,r){var e=t.getAttribute("data-salary"),a=r.getAttribute("data-salary");return e=e.replace("$","").replace(",",""),a=a.replace("$","").replace(",",""),e=parseFloat(e),(a=parseFloat(a))-e}),e.forEach(function(t){r.appendChild(t)})}function u(){var r=t(document.querySelectorAll("li")),e=[];r.forEach(function(t){var r={name:"",position:"",salary:"",age:""},a=t.textContent.trim(),n=t.getAttribute("data-salary"),o=t.getAttribute("data-position"),i=t.getAttribute("data-age");r.name=a,r.position=o,r.salary=n,r.age=i,e.push(r)})}i(),u();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0750096d.js.map