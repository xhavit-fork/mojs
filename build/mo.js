!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.mojs=e():t.mojs=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="build/",e(e.s=1)}([function(t,e,n){var o,r,i,o,r,i;!function(a,u){r=[t,e,n(2),n(3),n(4)],o=u,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";!function(a,u){r=[t,e,n(2),n(3),n(4)],o=u,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o,r){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(n),u=i(o),f=i(r),l={revision:"2.0.0",__helpers__:{ClassProto:a.default,TweenPlanner:u.default,tweenDefaults:f.default}};e.default=l,t.exports=e.default})})},function(t,e,n){t.exports=n(0)},function(t,e,n){var o,r,i,o,r,i;!function(n,a){r=[t,e],o=a,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";!function(n,a){r=[t,e],o=a,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,t),this._o=e,this._init(),this._declareDefaults(),this._extendDefaults(),this._vars(),this._render()}return r(t,[{key:"_init",value:function(){}},{key:"_declareDefaults",value:function(){this._defaults={}}},{key:"_extendDefaults",value:function(){this._props=o({},this._defaults,this._o)}},{key:"_render",value:function(){}},{key:"_setProp",value:function(t,e){if("object"==typeof t)for(var n in t)this._assignProp(n,t[n]);else this._assignProp(t,e)}},{key:"_assignProp",value:function(t,e){this._props[t]=e}},{key:"_vars",value:function(){}},{key:"_render",value:function(){}}]),t}();e.default=i,t.exports=e.default})})},function(t,e,n){var o,r,i,o,r,i;!function(a,u){r=[t,e,n(2),n(4)],o=u,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";!function(a,u){r=[t,e,n(2),n(4)],o=u,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var f=r(n),l=r(o),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(){return i(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u(e,t),s(e,[{key:"_declareDefaults",value:function(){return this._defaults=c({},l.default)}},{key:"_vars",value:function(){this._plan=[],this._calcTotalTime()}},{key:"_createPlan",value:function(){var t=this._props.duration;this._plan.length=0,this._calcTotalTime();for(var e=16,n=0;n<t;){var o=this._getPeriod(n-e),r=this._getPeriod(n),i=(this._getPeriod(n+e),this._plan[this._plan.length-1]),a=0;if("delay"!==r){if("delay"!=r){a|=16;var u=void 0!==i;u||(a|=1,a|=2);var f="delay"===o;u&&!f&&o!==r-1||(a|=4)}this._plan.push(a),n+=e}else this._plan.push(0)}}},{key:"_calcTotalTime",value:function(){var t=this._props,e=t.delay,n=t.duration,o=t.repeat,r=n+e;this._totalTime=r*(o+1)-e}},{key:"_getPeriod",value:function(t){var e=this._props,n=e.delay,o=e.duration;t+=n;var r=n+o,i=t/r,a=t<this._totalTime?t%r:0;return i=t>=this._totalTime?Math.round(i):Math.floor(i),t>this._totalTime?i=Math.round(this._totalTime/r):a>0&&a<n&&(i="delay"),i}}]),e}(f.default);e.default=p,t.exports=e.default})})},function(t,e,n){var o,r,i,o,r,i;!function(n,a){r=[t,e],o=a,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";!function(n,a){r=[t,e],o=a,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={duration:350,delay:0,repeat:0,speed:1,isYoyo:!1,easing:"Sin.Out",backwardEasing:null,name:null,nameBase:"Tween",onProgress:function(){},onStart:function(){},onRefresh:function(){},onComplete:function(){},onRepeatStart:function(){},onRepeatComplete:function(){},onFirstUpdate:function(){},onUpdate:function(){},isChained:!1,onPlaybackStart:function(){},onPlaybackPause:function(){},onPlaybackStop:function(){},onPlaybackComplete:function(){},callbacksContext:null,onSetStartTime:function(){},onInternalUpdate:function(){}},t.exports=e.default})})}])});