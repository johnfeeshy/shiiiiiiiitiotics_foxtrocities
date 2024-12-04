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
Modulr.define("core.base:utils/localStorage",["require","jquery"],function(require,$){return new function(){var Proto=this;Proto.isAvailable=function(getStorage){var res=!0,testId="__coretest_localStorage";if("function"==typeof getStorage)try{getStorage().setItem(testId,1),getStorage().removeItem(testId)}catch(err){res=!1}else if("object"==typeof window.localStorage)try{window.localStorage.setItem(testId,1),window.localStorage.removeItem(testId)}catch(err){res=!1}return res},Proto.localStorage=function(){return window.localStorage},Proto.set=function(id,val){Proto.isAvailable(Proto.localStorage)&&null!==(val="string"!=typeof val?"object"==typeof val?JSON.stringify(val):void 0!==val?val.toString():null:val)&&window.localStorage.setItem("fxn_cstore__"+id,val)},Proto.get=function(id){if(!Proto.isAvailable(Proto.localStorage))return null;try{return window.localStorage.getItem("fxn_cstore__"+id)}catch(err){return null}},Proto.getItem=function(key){if(!Proto.isAvailable(Proto.localStorage))return null;try{return window.localStorage.getItem(key)}catch(err){return null}},Proto.remove=function(id){if(Proto.isAvailable(Proto.localStorage))try{window.localStorage.removeItem("fxn_cstore__"+id)}catch(err){}}}});

}
/*
     FILE ARCHIVED ON 21:10:50 Nov 22, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:23:15 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.666
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 21.804
  LoadShardBlock: 90.519 (3)
  PetaboxLoader3.datanode: 103.831 (4)
  load_resource: 161.223
  PetaboxLoader3.resolve: 119.064
*/