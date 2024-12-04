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


!function(r){const o={fn:"foxnews",fb:"foxbusiness"},t={liveramp:"_lr_env",tradedesk:"__uid2_advertising_token",arid:"arid"};let e=new class{constructor(){this.initialized||(this.xid_value=null,this.initialized=!1,this.graph_path="https://web.archive.org/web/20241106000405/https://prod.idgraph.dt.fox/api/v2/item",this.liverampCookieExpired=null===this.getCookie(t.liveramp),this.tradedeskCookieExpired=null===this.getCookie(t.tradedesk),this.aridCookieExpired=null===this.getCookie(t.arid),this.cookieIsExpired=this.liverampCookieExpired||this.tradedeskCookieExpired||this.aridCookieExpired)}getXid(){return this.getXidValueFromEvent().then(e=>e?(this.setXidValue(e),this.fetchAndSetIdGraph()):this.getXidFromFallbackSources())}getXidFromFallbackSources(){var e=this.getXidValueFromCookie();if(e)return this.setXidValue(e),this.fetchAndSetIdGraph();e=this.getXidValueFromGlobal();return e?(this.setXidValue(e),this.fetchAndSetIdGraph()):r.Promise.resolve(null)}fetchAndSetIdGraph(){return this.fetchIdGraph(this.xid_value).then(e=>(this.liverampCookieExpired&&this.setEncodedLrEnvCookie(e._lr_env,e.lr_exp),this.tradedeskCookieExpired&&this.setTdCookie(e._td_token,e.td_exp),this.aridCookieExpired&&this.setAridCookie(e.arid,e.arid_exp),e))}setEncodedLrEnvCookie(e,i){e=JSON.stringify({envelope:e}),e=btoa(e),i=new Date(i);this.setCookie(t.liveramp,e,i)}setTdCookie(e,i){null!==e&&(i=new Date(i),this.setCookie(t.tradedesk,e,i))}setAridCookie(e,i){null!==e&&(i=new Date(i),this.setCookie(t.arid,e,i))}getXidValueFromEvent(){return new r.Promise(i=>{const t=e=>{r.removeEventListener("xidReady",t),e.detail.xid?i(e.detail.xid):i(null)};r.addEventListener("xidReady",t)})}getXidValueFromCookie(){return this.getCookie("xid")||null}getXidValueFromGlobal(){return r.FNC&&r.FNC.xid&&r.FNC.xid.xid_value?r.FNC.xid.xid_value:null}setXidValue(e){e&&(this.xid_value=e,this.initialized=!0)}fetchIdGraph(e){let o={method:"POST",headers:{"Content-Type":"application/json"}};return o.body=JSON.stringify({id:e}),new r.Promise((i,t)=>{fetch(this.graph_path,o).then(e=>{if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(e=>{i(e)}).catch(e=>{t(e)})})}getBusinessUnit(){let e=new URLSearchParams(r.location.search);var i=e.get("site"),t=this.getDomain();return o[i]||t}getDomain(){const e=r.location.host;var i=e.split(".");return 0<i.length?i[i.length-2]:"foxnews"}getCookie(e){var t=e+"=",o=document.cookie.split(";");for(let i=0;i<o.length;i++){let e=o[i];for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(t))return decodeURIComponent(e.substring(t.length,e.length))}return null}setCookie(i,t,e){let o="";e&&(o="; expires="+e.toUTCString());[".foxnews.com",".foxbusiness.com"].forEach(e=>{document.cookie=i+"="+(t||"")+o+"; path=/; domain="+e})}init(){this.initialized||(this.cookieIsExpired&&this.getXid(),this.initialized=!0)}};e.init()}(window);

}
/*
     FILE ARCHIVED ON 00:04:05 Nov 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:20:51 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.744
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.038
  cdx.remote: 8.819
  LoadShardBlock: 233.31 (3)
  PetaboxLoader3.datanode: 111.522 (4)
  PetaboxLoader3.resolve: 10233.601 (3)
  load_resource: 10144.854
*/