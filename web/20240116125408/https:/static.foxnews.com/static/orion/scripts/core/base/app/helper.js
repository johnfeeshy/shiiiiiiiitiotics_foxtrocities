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

/*! updated; 11-22-2024 02:36 PM **/
Modulr.define("core.base:helper",["core.base:utils/cookie","core.base:utils/localStorage"],function(Cookie,LocalStorage){return new class{constructor(){}isWebview(key="wv"){var body=document.body,mode=new URLSearchParams(window.location.search).get("mode");return body.classList.contains("app-mode")||"app"===mode||"true"===this.getWebviewFlag(key)}getWebviewFlag(WV_FLAG_KEY){return Cookie.get(WV_FLAG_KEY)||LocalStorage.get(WV_FLAG_KEY)||null}}});

}
/*
     FILE ARCHIVED ON 16:57:12 Nov 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:23:14 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.536
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 5.929
  LoadShardBlock: 79.52 (3)
  PetaboxLoader3.datanode: 79.9 (4)
  PetaboxLoader3.resolve: 91.556 (2)
  load_resource: 118.139
*/