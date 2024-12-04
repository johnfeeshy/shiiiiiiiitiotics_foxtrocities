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

/*! updated; 11-04-2024 04:56 PM **/


!function(e){const r=e.location.hostname,a=`https://${r}/portal/set-cookie`;async function t({name:e,value:t,expires:o,domain:n}){n={cookie_name:e,cookie_value:t,cookie_expires:o,domain:n||r},n={method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify(n)};const i=await fetch(a,n);n=await i.json();if(200!==i.status)throw new Error("Failed to set cookie");return n}function n(e){let t;var o;if((o=e[0])&&"string"==typeof o&&(t=function(e){let t={name:e[0],value:e[1]||""};return e[2]&&e[2].expires&&(t.expires=e[2].expires),t}(e)),(o=e[0])&&"object"==typeof o&&!Array.isArray(o)&&null!==o&&(t=e[0]),void 0!==t)return t.expires=t.expires||365,t}async function o(...e){e=n(e);if(void 0!==e)return t(e)}function i(...t){t=n(t);if(void 0!==t){const o={value:t.value};let e=new Date;return o.expires=e.setTime(e.getTime()+864e5*t.expires),localStorage.setItem(t.name,JSON.stringify(o)),JSON.stringify(o)}}function s(e){return localStorage.removeItem(e),null}var l={setCookie:o,getCookie:function(e){return Object.fromEntries(document.cookie.split("; ").map(e=>e.split(/=(.*)/s).map(decodeURIComponent)))[e]||null},deleteCookie:function(e){return document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; max-age=0; path=/",null},setLocal:i,getLocal:function(t){try{var e=JSON.parse(localStorage.getItem(t));return null===e?null:new Date(e.expires)<new Date?void s(t):e.value}catch(e){return localStorage.getItem(t)||null}},deleteLocal:s,setBoth:function(...e){void 0!==(e=n(e))&&(o(e),i(e))}};e.FNC=e.FNC||{},e.FNC.storage=e.FNC.storage||l}(window);

}
/*
     FILE ARCHIVED ON 11:51:18 Nov 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:22:50 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.425
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 8.124
  LoadShardBlock: 153.232 (3)
  PetaboxLoader3.datanode: 97.889 (4)
  PetaboxLoader3.resolve: 114.71 (2)
  load_resource: 112.674
*/