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


!function(r){const n={fn:"foxnews",fb:"foxbusiness"},s="fxn_cstore__wv_xid";if(r.FNC=r.FNC||{},!(!r.FNC||r.FNC.xid)){const e=r.FNC.xid||new class{constructor(){this.initialized||(this.env=this.getEnv(),this.domain=this.getDomain(),this.bu=this.getBusinessUnit(),this.isWebview=this.isAppMode(),this.xid_path=`https://${this.env}.${this.domain}.com/xid`,this.xid_event_path="https://web.archive.org/web/20241106112245/https://prod.pyxis.atp.fox/pyxis/submit",this.xid_value=null,this.initialized=!1)}xidReady(e){e=new CustomEvent("xidReady",{detail:{xid:e}});r.dispatchEvent(e)}getEnv(){const e=r.location.hostname,t=e.split(".")[0];return t.includes("dev")?"dev":t.includes("stage")?"stage":"my"===t?"www":"static"===t?"static":t}getBusinessUnit(){const e=new URLSearchParams(r.location.search);var t=e.get("site"),i=this.getDomain();return n[t]||i}getDomain(){const e=r.location.host;var t=e.split(".");return 0<t.length?t[t.length-2]:"foxnews"}getDeviceType(){let e="desktop",t=r.outerWidth;return t<768?e="mobile":t<1024&&(e="tablet"),e}fetchXid(){let i={method:"POST",headers:{"Content-Type":"application/json;"}},e={};var t=this.getXid();return t&&(e.xid=t),i.body=JSON.stringify(e),new r.Promise((t,e)=>{fetch(this.xid_path,i).then(e=>{e.status;e.ok?t(e.json()):t(null)}).catch(e=>{console.error("Error occured fetching XID:",e)})})}fireXidEvent(e){let i={method:"POST",headers:{"Content-Type":"application/json;"},body:JSON.stringify(e)};return new r.Promise((t,e)=>{fetch(this.xid_event_path,i).then(e=>{e.status;e.ok?t(e.json()):t(null)}).catch(e=>{console.error("Error occured firing XID event:",e)})})}getCookie(e){var i=e+"=",n=document.cookie.split(";");for(let t=0;t<n.length;t++){let e=n[t];for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(i))return decodeURIComponent(e.substring(i.length,e.length))}return null}deleteCookie(e,t={path:"/"}){var{path:i,domain:t}=t;let n=e+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path="+i;t&&(n+="; domain="+t),document.cookie=n}getLocalItem(t){t=localStorage.getItem(t);try{return JSON.parse(t)}catch(e){return t||null}}getXid(){return this.isWebview?(this.deleteCookie("xid",{path:"/",domain:".foxnews.com"}),this.getCookie(s)||this.getLocalItem(s)||this.getCookie("xid")):this.getCookie("xid")}getEventData(){const e=(r.FNC||{}).anon||{};var t,i=this.getLocalItem("ajs_user_traits")||{},n=JSON.parse(this.getCookie("__leap_props"))||{},s="function"==typeof e.anon_fpid?e.anon_fpid():this.getLocalItem("anon_fpid"),o="function"==typeof e.persist_fpid?e.persist_fpid():this.getLocalItem("persist_fpid");let a={dcg_profile_id:i.dcg_profile_id||"",last_anonymous_id:i.lastAnonymousProfileId||"",last_known_profile_id:i.lastKnownProfileId||"",ajs_user_id:this.getCookie("ajs_user_id")||"",lastknownprofileid:n.lastKnownId||"",anon_fpid:s||"",segment_anonymous_id:this.getCookie("ajs_anonymous_id")||"",xid:this.xid_value||"",persist_fpid:o||"",userProfileId:n.userProfileId||"",lastAnonymousProfileId:n.lastAnonymousProfileId||"",persistAnonId:n.persistAnonId||""};for(t in a)""!==a[t]&&null!==a[t]&&void 0!==a[t]||delete a[t];return{data:{boi:a,event_type:"view",origin_bu:""+this.bu,xid:this.xid_value,us_privacy:this.getCookie("usprivacy"),device_type:this.getDeviceType()},origin:"xf:profile_sdk",scheme:"default_web"}}init(){this.initialized||this.fetchXid().then(e=>{e&&(e=e.xid,this.xid_value=e,this.xidReady(e),e=this.getEventData(),this.fireXidEvent(e).then(e=>{this.initialized=!0,this.initializeFennec()}))})}initializeFennec(){let e=r.FNC.fennec||{},t=r.FNC.FennecInstance;e.initialized||"function"!=typeof e.runFennecInject?!e.initialized&&t&&"function"==typeof t.initFennec&&(t.initFennec(),r.FNC.fennec=r.FNC.fennec||{_INITIALIZED:!0}):e.runFennecInject()}isAppMode(){const e=document.querySelector("body");var t=!!e&&e.classList.contains("app-mode");const i=new URLSearchParams(r.location.search);var n=i.get("mode");return t||"app"===n||!!this.getCookie(s)||!!this.getLocalItem(s)}};e.init(),r.FNC.xid=r.FNC.xid||e}}(window);

}
/*
     FILE ARCHIVED ON 11:22:45 Nov 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:20:41 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.514
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.012
  cdx.remote: 56.933
  LoadShardBlock: 743.314 (3)
  PetaboxLoader3.datanode: 79.158 (4)
  PetaboxLoader3.resolve: 686.587 (2)
  load_resource: 162.246
*/