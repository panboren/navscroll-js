!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NavScroll=e():n.NavScroll=e()}(this,function(){return function(n){function e(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=n,e.c=o,e.d=function(n,o,t){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=2)}([function(n,e,o){"use strict";function t(n){var e={};for(var o in n)!function(o){var t=r(n[o]);e[o]={type:t,default:t===Array||t===Object?function(){return n[o]}:n[o]}}(o);return e}function r(n){switch(function(n){return Object.prototype.toString.call(n).slice(8,-1)}(n)){case"Object":return Object;case"Array":return Array;case"String":return String;case"Number":return Number;case"Boolean":return Boolean;case"RegExp":return RegExp;case"Undefined":case"Null":default:return null}}o.d(e,"c",function(){return a}),e.a=function(n){return i},o.d(e,"b",function(){return c});var i={container:"body",duration:600,easing:"ease",offset:0,onScrollOffsetX:void 0,onScrollOffsetY:void 0,cancelable:!0,onDone:null,onCancel:null,stopPropagation:!0,anchor:!0,hash:null,scrollX:!1,scrollY:!0,clickToScroll:!0,clickedNavItem:null,navItems:[],alwaysTrack:!1,activeClass:"active",itemSelector:".scroll-item"},a=function(n){return i=Object.assign({},i,n)},c=function(n){return t(n?n:i)}},function(n,e,o){"use strict";var t=o(6),r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,i)}catch(n){}e.a={$:function(n){return"string"!=typeof n?n:document.querySelector(n)},on:function(n,e,o){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var i=0;i<e.length;i++)n.addEventListener(e[i],o,!!r&&t)},off:function(n,e,o){e instanceof Array||(e=[e]);for(var t=0;t<e.length;t++)n.removeEventListener(e[t],o)},cumulativeOffset:function(n){var e=0,o=0;do{e+=n.offsetTop||0,o+=n.offsetLeft||0,n=n.offsetParent}while(n);return{top:e,left:o}},cubicBezierArrayFrom:function(n){return Array.isArray(n)?n:"string"==typeof n?t.a[n]?t.a[n]:n.split(",").map(function(n){return+n}):t.a.ease}}},function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(3),r=o(0),i=function(n,e){e&&Object(r.c)(e),n.directive("navscroll",t.a),n.component("navscroll",t.a),n.prototype.$scrollTo=t.a.scrollTo};t.a.install=i,"undefined"!=typeof window&&window.Vue&&(window.NavScroll=t.a,Vue.use(i)),e.default=t.a},function(n,e,o){"use strict";function t(n,e){var o=Object.assign({},e.value);o.isWrapper=!!e.arg,o.isWrapper&&(o.itemSelector="."+e.arg),r(n,o,o.isWrapper)}function r(n,e,o){console.log("onBind",n,e,o);var t=Object(g.a)();e.isWrapper=o,o?a(n,e.itemSelector,e):(v(n).binding=e,(void 0===e.clickToScroll?e.clickToScroll:t.clickToScroll)?h.a.on(n,"click",l):h.a.off(n,"click",l))}function i(n){var e=v(n).binding;Object(g.a)();console.log("onUnbind",n,e),e.isWrapper?f(e):u(n)}function a(n,e,o){function t(n){console.log("watcher",n,"with options",r,j,O),j&&(console.log("navigationItems before",w,w.length),w.forEach(function(n){return u(n)}),w=[].slice.call(j.querySelectorAll(O)),console.log("navigationItems after",w,w.length),(void 0===r.clickToScroll?i.clickToScroll:r.clickToScroll)?w.forEach(function(n){v(n).binding=Object.assign({},r,{el:n.hash||n.dataset.href}),h.a.on(n,"click",l)}):w.forEach(function(n){h.a.off(n,"click",l)}),s())}console.log("initObserver",n,e,o);var r=void 0,i=Object(g.a)();if(j=h.a.$(n),O=e||i.itemSelector,j&&(r=v(j).binding=Object.assign({},v(j).binding,o,{isWrapper:!0}),c(r))){var a=window.MutationObserver||window.WebKitMutationObserver;(S=new a(t)).observe(j,{childList:!0,subtree:!0}),t()}}function c(n){console.log("initScrollContainer",n);var e=Object(g.a)(),o=h.a.$(n.container||e.container);return o?(v(o).binding=n,h.a.on(o,"scroll",s,{passive:!0}),!0):console.warn('[navscroll-js]: Could not attach scroll handler to the container "'+(n.container||e.container)+'" because it was not found. Make sure it is in the DOM and then call `initObserver(wrapper, itemSelector, options)` yourself with options.container properly set.')}function l(n){n.preventDefault();var e=v(this).binding||{},o=Object(g.a)(),t=event.currentTarget;if((void 0===e.stopPropagation?o.stopPropagation:e.stopPropagation)&&n.stopPropagation(),"string"==typeof e)return Object(b.a)(e,{clickedNavItem:t,navItems:w});e.clickedNavItem=t,e.navItems=w,e.trackingFn=s,Object(b.a)(e.el||e.element,e)}function s(n){var e=void 0,o=Object(g.a)(),t=v(j).binding,r=h.a.$(t.container||o.container),i=t.onScrollOffsetY||2*Math.round((window.innerHeight||document.documentElement.clientHeight)/3),a=t.onScrollOffsetX||2*Math.round((window.innerWidth||document.documentElement.clientWidth)/3),c=void 0===t.activeClass?o.activeClass:t.activeClass,l=void 0===t.scrollX?o.scrollX:t.scrollX,s=void 0===t.scrollY?o.scrollY:t.scrollY;r&&(w.forEach(function(n){n.classList.remove(c);var o=n.hash?n.hash.substr(1):n.dataset.href,t=document.getElementById(o);if(t){var u=h.a.cumulativeOffset(t);s&&r.scrollTop>=u.top-i&&(e=n),l&&r.scrollLeft>=u.left-a&&(e=n)}}),e!==k&&(k=e),e&&e.classList.add(c))}function u(n){m(n),h.a.off(n,"click",l)}function f(n){console.log("unbindObserver",n),w.forEach(function(n){u(n)}),w=[],O=void 0,m(j),j=void 0,S&&(S.disconnect(),S=void 0),d(n)}function d(n){var e=Object(g.a)(),o=h.a.$(n.container||e.container);o&&(m(o),h.a.off(o,"scroll",s))}function v(n){var e=p(n);return e||(y.push(e={el:n,binding:{}}),e)}function p(n){for(var e=0;e<y.length;++e)if(y[e].el===n)return y[e]}function m(n){for(var e=0;e<y.length;++e)if(y[e].el===n)return y.splice(e,1),!0;return!1}var b=o(4),h=o(1),g=o(0),y=[],w=[],O=void 0,S=void 0,j=void 0,k=void 0;e.a={scrollTo:b.a,onScroll:s,initObserver:a,unbindObserver:f,setDefaults:g.c,getDefaults:g.a,bindings:y,utils:h.a,navigationWrapper:j,navigationItems:w,navItemsClassName:O,getVueComponentProps:g.b,bind:function(n,e){t(n,e)},update:function(n,e){t(n,e)},unbind:function(n){i(n)},props:Object(g.b)(),template:'\n    <nav class="navscroll-js">\n      <slot></slot>\n    </nav>\n  ',mounted:function(){r(this.$el,this.$props,!0)},updated:function(){r(h.a.$(this.$el),this.$props,!0)},beforeDestroy:function(){i(this.$el)}}},function(n,e,o){"use strict";function t(n){n&&(window.history.pushState?window.history.pushState(null,null,n):window.location.hash=n)}var r=o(5),i=o.n(r),a=o(1),c=o(0),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],u=function(){function n(n){var e=n.scrollTop;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}function e(n){var e=n.scrollLeft;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}function o(n){if(F)return r();X||(X=n),Y=n-X,q=Math.min(Y/p,1),q=W(q),u(v,N+x*q,C+$*q),Y<p?window.AFRequestID=window.requestAnimationFrame(o):r()}function r(){F||u(v,M,I),X=!1,T&&t(k),A&&!L&&f(j,E),F&&y&&y(D),g&&g(),a.a.off(v,s,P),setTimeout(function(){a.a.on(v,"scroll",L,{passive:!0})},100)}function u(n,e,o){O&&(n.scrollTop=e),w&&(n.scrollLeft=o),"body"===n.tagName.toLowerCase()&&(O&&(document.documentElement.scrollTop=e),w&&(document.documentElement.scrollLeft=o))}function f(n,e){e.forEach(function(n){n.classList.remove(S)}),n&&n.classList.add(S)}var d=void 0,v=void 0,p=void 0,m=void 0,b=void 0,h=void 0,g=void 0,y=void 0,w=void 0,O=void 0,S=void 0,j=void 0,k=void 0,T=void 0,E=void 0,A=void 0,L=void 0,C=void 0,I=void 0,N=void 0,M=void 0,$=void 0,x=void 0,F=void 0,D=void 0,P=function(n){h&&(D=n,F=!0)},W=void 0,X=void 0,Y=void 0,q=void 0;return function(t,r){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===(void 0===r?"undefined":l(r))?u=r:"number"==typeof r&&(u.duration=r),!(d=a.a.$(t)))return console.warn('[navscroll-js]: Trying to scroll to element "'+t+'" that is not on the page. Make sure it is set in the DOM.');var X=Object(c.a)();if(!(v=a.a.$(u.container||X.container)))return console.warn('[navscroll-js]: Scrolling container "'+(u.container||X.container)+'" is not present on the page.');p=u.duration||X.duration,m=u.easing||X.easing,b=u.offset||X.offset,h=!1!==u.cancelable,g=u.onDone||X.onDone,y=u.onCancel||X.onCancel,w=void 0===u.scrollX?X.scrollX:u.scrollX,O=void 0===u.scrollY?X.scrollY:u.scrollY,S=void 0===u.activeClass?X.activeClass:u.activeClass,j=u.clickedNavItem||X.clickedNavItem,k=j?j.hash||j.dataset.href:u.hash||X.hash,T=void 0===u.anchor?X.anchor:u.anchor,E=u.navItems||X.navItems,A=void 0===u.alwaysTrack?X.alwaysTrack:u.alwaysTrack,L="function"==typeof u.trackingFn?u.trackingFn:X.trackingFn;var Y=a.a.cumulativeOffset(d);return N=n(v),M=Y.top-v.offsetTop-b,C=e(v),I=Y.left-v.offsetLeft-b,F=!1,x=M-N,$=I-C,m=a.a.cubicBezierArrayFrom(m),W=i.a.apply(i.a,m),x||$?(A||(a.a.off(v,"scroll",L),window.cancelAnimationFrame(window.AFRequestID),f(j,E)),a.a.on(v,s,P,{passive:!0}),window.requestAnimationFrame(o),function(){D=null,F=!0}):void 0}}();e.a=u},function(n,e){function o(n,e){return 1-3*e+3*n}function t(n,e){return 3*e-6*n}function r(n){return 3*n}function i(n,e,i){return((o(e,i)*n+t(e,i))*n+r(e))*n}function a(n,e,i){return 3*o(e,i)*n*n+2*t(e,i)*n+r(e)}function c(n,e,o,t,r){var a,c,l=0;do{(a=i(c=e+(o-e)/2,t,r)-n)>0?o=c:e=c}while(Math.abs(a)>f&&++l<d);return c}function l(n,e,o,t){for(var r=0;r<s;++r){var c=a(e,o,t);if(0===c)return e;e-=(i(e,o,t)-n)/c}return e}var s=4,u=.001,f=1e-7,d=10,v=11,p=1/(v-1),m="function"==typeof Float32Array;n.exports=function(n,e,o,t){function r(e){for(var t=0,r=1,i=v-1;r!==i&&s[r]<=e;++r)t+=p;var f=t+(e-s[--r])/(s[r+1]-s[r])*p,d=a(f,n,o);return d>=u?l(e,f,n,o):0===d?f:c(e,t,t+p,n,o)}if(!(0<=n&&n<=1&&0<=o&&o<=1))throw new Error("bezier x values must be in [0, 1] range");var s=m?new Float32Array(v):new Array(v);if(n!==e||o!==t)for(var f=0;f<v;++f)s[f]=i(f*p,n,o);return function(a){return n===e&&o===t?a:0===a?0:1===a?1:i(r(a),e,t)}}},function(n,e,o){"use strict";e.a={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]}}])});