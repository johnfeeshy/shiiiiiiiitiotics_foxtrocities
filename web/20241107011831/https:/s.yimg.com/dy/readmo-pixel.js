var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var ReadmoPixel=function(){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),o.push.apply(o,t)}return o}function y(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach(function(e){var n,o,t;n=r,t=i[o=e],o in n?Object.defineProperty(n,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[o]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))})}return r}var b={queue:[],cache:{},url:window.publisherUrl||window!==window.top&&window.context&&window.context.sourceUrl||window.location.href,isAMP:window!==window.top&&window.context&&window.context.sourceUrl},e=function e(n){if(b.initialAdBlockLoad)n();else{var o=document.createElement("script");o.src="https://web.archive.org/web/20241107011832/https://s.yimg.com/dy/sponsored.js",document.head.appendChild(o);var t=function t(e){b.initialAdBlockLoad=!0,b.isBlockerEnabled=e,n(),o.parentNode.removeChild(o)};o.onload=function(){return t(!1)},o.onerror=function(){return t(!0)}}},v=function v(e,n){var o=e.delay,t=void 0===o?3500:o,r=e.pageId,i=e.placeholder,d=e.spaceId,a=b.Rapid,c=b.isBlockerEnabled,l=b.url;if(a){var u={pageid:r,page_uri:l,spaceid:d,readmo:!0};a.beaconEvent("simple",y({adblock:c},u),"readmo_pixel");for(var p=(i||"").split(",").filter(Boolean),s=0,f=p.length;s<f;s++){var m=p[s],w=document.querySelector(m);a.beaconEvent("simple",y(y({},u),{},{selector:m,placeholder:!!w}),"readmo_placeholder")}setTimeout(function(){if(p.length)for(var e=0,n=p.length;e<n;e++){var o=p[e],t=document.querySelector(o),r=!(!t||!t.children.length);a.beaconEvent("simple",y(y({},u),{},{selector:o,modfound:r}),"readmo_found")}else{var i=!!document.querySelectorAll(".readmo").length;a.beaconEvent("simple",y(y({},u),{},{modfound:i}),"readmo_found")}},Number(t))}n()},i=function i(e,n){e.apv=e.dwell_on=e.pageview_on_init=!1,b.isAMP&&(e.keys._w=document.referrer,e.keys._R="_"),b.Rapid||(b.Rapid=new YAHOO.i13n.Rapid(e),b.rapidInitialized=!0),n()},u=function u(e,n){var o={spaceid:e.spaceId};if(window.YAHOO===undefined||window.YAHOO&&window.YAHOO.i13n&&!window.YAHOO.i13n.Rapid){var t=document.createElement("script");t.async=!0,t.src="https://web.archive.org/web/20241107011832/https://s.yimg.com/ss/rapid3.js",t.onload=function(){return i(o,n)},t.onerror=function(){return b.rapidInitialized=!1},document.body.appendChild(t)}else{var r=YAHOO.i13n.__RAPID_INSTANCES__;r&&r.length&&(o.spaceid=YAHOO.i13n.__RAPID_INSTANCES__[0].state.conf.spaceid),i(o,n)}},p=b.cache,s=b.queue,f=function f(){var e=[].slice.call(document.querySelectorAll("[data-page-id]:not(.processed)")),n=e.length;if(n){for(var o=0;o<n;o++){var t=e.shift(),r=t.dataset,i=r.delay,d=r.pageId,a=r.placeholder,c=r.spaceId;c&&(d&&(p[c]||(p[c]=d,s.push({delay:i,pageId:d,placeholder:a,spaceId:c}),t.classList.add("processed"))))}var l=function l(){if(s.length){var e=s.shift();return b.processing=!!s.length,v(e,l)}};!b.processing&&s.length&&(b.rapidInitialized?l():u(s[0],l))}},t={load:function r(){return e(function(){return f()})},version:"1.0.10"};return"object"!==("undefined"==typeof exports?"undefined":n(exports))&&"function"==typeof define&&define.amd?define(t):"object"===("undefined"==typeof exports?"undefined":n(exports))&&"undefined"!=typeof module?module.exports=t:"undefined"!==window&&(window.ReadmoPixel?window.ReadmoPixel.load():t.load()),window.ReadmoPixel||(window.ReadmoPixel=t),t}();


}
/*
     FILE ARCHIVED ON 01:18:32 Nov 07, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:22:57 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.018
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.019
  cdx.remote: 9.942
  LoadShardBlock: 376.609 (6)
  PetaboxLoader3.datanode: 265.614 (7)
  PetaboxLoader3.resolve: 153.313 (2)
  load_resource: 97.283
*/