(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ClockCount~MultiplyQuiz"],{"04d4":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"text-white p-2 w-full h-18 shadow-2xl confirm-button",class:t.statusClass,on:{click:function(e){return t.$emit("check",!0)}}},[t._v(" 확인 ")])},o=[],i=r("d4ec"),c=r("bee2"),a=r("262e"),u=r("2caf"),f=r("9ab4"),s=r("1b40"),l=function(t){Object(a["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(i["a"])(this,r),e.apply(this,arguments)}return Object(c["a"])(r,[{key:"statusClass",get:function(){return this.status?"good"===this.status?["bg-green-600"]:"bad"===this.status?["bg-red-600"]:[""]:["bg-gray-600"]}}]),r}(s["c"]);Object(f["a"])([Object(s["b"])(String)],l.prototype,"status",void 0),l=Object(f["a"])([s["a"]],l);var p=l,h=p,y=(r("b2d0"),r("2877")),d=Object(y["a"])(h,n,o,!1,null,"6916445c",null);e["a"]=d.exports},"0538":function(t,e,r){"use strict";var n=r("1c0b"),o=r("861d"),i=[].slice,c={},a=function(t,e,r){if(!(e in c)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";c[e]=Function("C,a","return new C("+n.join(",")+")")}return c[e](t,r)};t.exports=Function.bind||function(t){var e=n(this),r=i.call(arguments,1),c=function(){var n=r.concat(i.call(arguments));return this instanceof c?a(e,n.length,n):e.apply(t,n)};return o(e.prototype)&&(c.prototype=e.prototype),c}},"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"15dc":function(t,e,r){},"17e2":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"analog-clock",style:{width:t.size,height:t.size}},[r("figcaption",{staticClass:"analog-clock__face"},t._l(60,(function(t){return r("span",{key:t,staticClass:"analog-clock__notch",class:{"-long":!(t%5)},style:{transform:"rotate("+6*t+"deg)"}})})),0),r("span",{staticClass:"analog-clock__hand -hours",style:t.hours}),r("span",{staticClass:"analog-clock__hand -minutes",style:t.minutes})])},o=[],i=r("d4ec"),c=r("bee2"),a=r("262e"),u=r("2caf"),f=(r("a9e3"),r("9ab4")),s=r("1b40"),l=function(t){Object(a["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.rotation={hours:0,minutes:0},t}return Object(c["a"])(r,[{key:"hours",get:function(){return{transform:"translate3d(-50%, 0, 0) rotate(".concat(this.rotation.hours,"deg)")}}},{key:"minutes",get:function(){return{transform:"translate3d(-50%, 0, 0) rotate(".concat(this.rotation.minutes,"deg)")}}},{key:"setClock",value:function(t,e){this.rotation={hours:30*t+.5*e,minutes:6*e}}},{key:"mounted",value:function(){this.setClock(this.hour,this.min)}}]),r}(s["c"]);Object(f["a"])([Object(s["b"])(Number)],l.prototype,"hour",void 0),Object(f["a"])([Object(s["b"])(Number)],l.prototype,"min",void 0),Object(f["a"])([Object(s["b"])({type:String,default:"300px"})],l.prototype,"size",void 0),l=Object(f["a"])([s["a"]],l);var p=l,h=p,y=(r("3f54"),r("2877")),d=Object(y["a"])(h,n,o,!1,null,"529bb1ad",null);e["a"]=d.exports},"1b40":function(t,e,r){"use strict";r.d(e,"a",(function(){return j})),r.d(e,"c",(function(){return n["a"]})),r.d(e,"b",(function(){return S}));var n=r("2b0e");
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t){return a(t)||u(t)||f()}function a(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(){return"undefined"!==typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function l(t,e){p(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){p(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){p(t,e,r)}))}function p(t,e,r){var n=r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e);n.forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var h={__proto__:[]},y=h instanceof Array;function d(t){return function(e,r,n){var o="function"===typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!==typeof n&&(n=void 0),o.__decorators__.push((function(e){return t(e,r,n)}))}}function v(t){var e=o(t);return null==t||"object"!==e&&"function"!==e}function b(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach((function(t){void 0!==n[t]&&(o[t]=n[t])})),o}var g=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(g.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"===typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){return i({},t,n.value)}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return b(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var c=Object.getPrototypeOf(t.prototype),a=c instanceof n["a"]?c.constructor:n["a"],u=a.extend(e);return O(u,t,a),s()&&l(u,t),u}var w={prototype:!0,arguments:!0,callee:!0,caller:!0};function O(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!w[n]){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var i=Object.getOwnPropertyDescriptor(e,n);if(!y){if("cid"===n)return;var c=Object.getOwnPropertyDescriptor(r,n);if(!v(i.value)&&c&&c.value===i.value)return}0,Object.defineProperty(t,n,i)}}}))}function _(t){return"function"===typeof t?m(t):function(e){return m(e,t)}}_.registerHooks=function(t){g.push.apply(g,c(t))};var j=_;var x="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function E(t,e,r){if(x&&!Array.isArray(t)&&"function"!==typeof t&&!t.hasOwnProperty("type")&&"undefined"===typeof t.type){var n=Reflect.getMetadata("design:type",e,r);n!==Object&&(t.type=n)}}function S(t){return void 0===t&&(t={}),function(e,r){E(t,e,r),d((function(e,r){(e.props||(e.props={}))[r]=t}))(e,r)}}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(f){return void r(f)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"262e":function(t,e,r){"use strict";function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",(function(){return o}))},"2caf":function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));r("4ae1"),r("3410");function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var i=r("7037"),c=r.n(i);function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){return!e||"object"!==c()(e)&&"function"!==typeof e?a(t):e}function f(t){var e=o();return function(){var r,o=n(t);if(e){var i=n(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return u(this,r)}}},3410:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("7b0b"),c=r("e163"),a=r("e177"),u=o((function(){c(1)}));n({target:"Object",stat:!0,forced:u,sham:!a},{getPrototypeOf:function(t){return c(i(t))}})},"3f54":function(t,e,r){"use strict";r("15dc")},"4ae1":function(t,e,r){var n=r("23e7"),o=r("d066"),i=r("1c0b"),c=r("825a"),a=r("861d"),u=r("7c73"),f=r("0538"),s=r("d039"),l=o("Reflect","construct"),p=s((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),h=!s((function(){l((function(){}))})),y=p||h;n({target:"Reflect",stat:!0,forced:y,sham:y},{construct:function(t,e){i(t),c(e);var r=arguments.length<3?t:i(arguments[2]);if(h&&!p)return l(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(f.apply(t,n))}var o=r.prototype,s=u(a(o)?o:Object.prototype),y=Function.apply.call(t,s,e);return a(y)?y:s}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),i="["+o+"]",c=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),u=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7037:function(t,e,r){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0),n(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,c;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(c=i.prototype)&&c!==r.prototype&&o(t,c),t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(A){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new k(n||[]);return i._invoke=E(t,r,c),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",y="completed",d={};function v(){}function b(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,O=w&&w(w(L([])));O&&O!==r&&n.call(O,i)&&(m=O);var _=g.prototype=v.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return R()}r.method=o,r.arg=i;while(1){var c=r.delegate;if(c){var a=S(c,r);if(a){if(a===d)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?y:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:R}}function R(){return{value:e,done:!0}}return b.prototype=_.constructor=g,g.constructor=b,b.displayName=u(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},j(x.prototype),x.prototype[c]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(_),u(_,a,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),f=n.call(c,"finallyLoc");if(u&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9ab4":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));function n(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,r,c):o(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),u=r("4930"),f=r("fdbf"),s=r("d039"),l=r("5135"),p=r("e8b5"),h=r("861d"),y=r("825a"),d=r("7b0b"),v=r("fc6a"),b=r("c04e"),g=r("5c6c"),m=r("7c73"),w=r("df75"),O=r("241c"),_=r("057f"),j=r("7418"),x=r("06cf"),E=r("9bf2"),S=r("d1e7"),P=r("9112"),N=r("6eeb"),k=r("5692"),L=r("f772"),R=r("d012"),A=r("90e3"),I=r("b622"),C=r("e538"),M=r("746f"),F=r("d44e"),T=r("69f3"),G=r("b727").forEach,$=L("hidden"),D="Symbol",z="prototype",J=I("toPrimitive"),V=T.set,Y=T.getterFor(D),B=Object[z],K=o.Symbol,U=i("JSON","stringify"),Q=x.f,X=E.f,H=_.f,W=S.f,q=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),rt=k("wks"),nt=o.QObject,ot=!nt||!nt[z]||!nt[z].findChild,it=a&&s((function(){return 7!=m(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(B,e);n&&delete B[e],X(t,e,r),n&&t!==B&&X(B,e,n)}:X,ct=function(t,e){var r=q[t]=m(K[z]);return V(r,{type:D,tag:t,description:e}),a||(r.description=e),r},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ut=function(t,e,r){t===B&&ut(Z,e,r),y(t);var n=b(e,!0);return y(r),l(q,n)?(r.enumerable?(l(t,$)&&t[$][n]&&(t[$][n]=!1),r=m(r,{enumerable:g(0,!1)})):(l(t,$)||X(t,$,g(1,{})),t[$][n]=!0),it(t,n,r)):X(t,n,r)},ft=function(t,e){y(t);var r=v(e),n=w(r).concat(yt(r));return G(n,(function(e){a&&!lt.call(r,e)||ut(t,e,r[e])})),t},st=function(t,e){return void 0===e?m(t):ft(m(t),e)},lt=function(t){var e=b(t,!0),r=W.call(this,e);return!(this===B&&l(q,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(q,e)||l(this,$)&&this[$][e])||r)},pt=function(t,e){var r=v(t),n=b(e,!0);if(r!==B||!l(q,n)||l(Z,n)){var o=Q(r,n);return!o||!l(q,n)||l(r,$)&&r[$][n]||(o.enumerable=!0),o}},ht=function(t){var e=H(v(t)),r=[];return G(e,(function(t){l(q,t)||l(R,t)||r.push(t)})),r},yt=function(t){var e=t===B,r=H(e?Z:v(t)),n=[];return G(r,(function(t){!l(q,t)||e&&!l(B,t)||n.push(q[t])})),n};if(u||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===B&&r.call(Z,t),l(this,$)&&l(this[$],e)&&(this[$][e]=!1),it(this,e,g(1,t))};return a&&ot&&it(B,e,{configurable:!0,set:r}),ct(e,t)},N(K[z],"toString",(function(){return Y(this).tag})),N(K,"withoutSetter",(function(t){return ct(A(t),t)})),S.f=lt,E.f=ut,x.f=pt,O.f=_.f=ht,j.f=yt,C.f=function(t){return ct(I(t),t)},a&&(X(K[z],"description",{configurable:!0,get:function(){return Y(this).description}}),c||N(B,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:K}),G(w(rt),(function(t){M(t)})),n({target:D,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=K(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:pt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ht,getOwnPropertySymbols:yt}),n({target:"Object",stat:!0,forced:s((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(d(t))}}),U){var dt=!u||s((function(){var t=K();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:dt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(h(e)||void 0!==t)&&!at(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,U.apply(null,o)}})}K[z][J]||P(K[z],J,K[z].valueOf),F(K,D),R[$]=!0},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),i=r("94ca"),c=r("6eeb"),a=r("5135"),u=r("c6b6"),f=r("7156"),s=r("c04e"),l=r("d039"),p=r("7c73"),h=r("241c").f,y=r("06cf").f,d=r("9bf2").f,v=r("58a8").trim,b="Number",g=o[b],m=g.prototype,w=u(p(m))==b,O=function(t){var e,r,n,o,i,c,a,u,f=s(t,!1);if("string"==typeof f&&f.length>2)if(f=v(f),e=f.charCodeAt(0),43===e||45===e){if(r=f.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(i=f.slice(2),c=i.length,a=0;a<c;a++)if(u=i.charCodeAt(a),u<48||u>o)return NaN;return parseInt(i,n)}return+f};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var _,j=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof j&&(w?l((function(){m.valueOf.call(r)})):u(r)!=b)?f(new g(O(e)),r,j):O(e)},x=n?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;x.length>E;E++)a(g,_=x[E])&&!a(j,_)&&d(j,_,y(g,_));j.prototype=m,m.constructor=j,c(o,b,j)}},b2d0:function(t,e,r){"use strict";r("f404")},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),c=r("50c4"),a=r("65f0"),u=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=7==t,h=5==t||l;return function(y,d,v,b){for(var g,m,w=i(y),O=o(w),_=n(d,v,3),j=c(O.length),x=0,E=b||a,S=e?E(y,j):r||p?E(y,0):void 0;j>x;x++)if((h||x in O)&&(g=O[x],m=_(g,x,w),t))if(e)S[x]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:u.call(S,g)}else switch(t){case 4:return!1;case 7:u.call(S,g)}return l?-1:f||s?s:S}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},bee2:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return o}))},d28b:function(t,e,r){var n=r("746f");n("iterator")},d4ec:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),c=i("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),c=r("5135"),a=r("861d"),u=r("9bf2").f,f=r("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(p,s);var h=p.prototype=s.prototype;h.constructor=p;var y=h.toString,d="Symbol(test)"==String(s("test")),v=/^Symbol\((.*)\)[^)]+$/;u(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=y.call(t);if(c(l,t))return"";var r=d?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f404:function(t,e,r){}}]);
//# sourceMappingURL=ClockCount~MultiplyQuiz.0a340d75.js.map