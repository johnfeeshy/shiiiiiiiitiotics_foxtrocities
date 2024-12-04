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
Modulr.define("core.base:utils/search.query",["require","jquery"],function(require,$){return new function(){var Proto=this;Proto.getVal=function(name){var queryObj=Proto.getAll();return!(!queryObj||!queryObj[name])&&Proto.cleanVal(queryObj[name])},Proto.getAll=function(){for(var ret={},vals=(window.location.search.substr(1)||"").split("&"),x=0;x<vals.length;x++){var sp=vals[x].split("="),name=sp[0]||!1,sp=sp[1]||!1;name&&sp&&(ret[name]=Proto.cleanVal(sp).toString())}return ret},Proto.cleanVal=function(val){return val=$.trim(val||""),val=(val=(val=(val=(val=decodeURIComponent(val)).replace(/\+/g," ")).replace(/\s+/g," ")).replace(/</g,"&lt;")).replace(/\>/g,"&gt;")},Proto.setToString=function(queryObj){var i,ret=[];for(i in queryObj)ret.push(i+"="+queryObj[i]);return ret=ret.join("&")}}});

}
/*
     FILE ARCHIVED ON 21:10:50 Nov 22, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:23:16 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.041
  exclusion.robots: 0.041
  exclusion.robots.policy: 0.026
  esindex: 0.018
  cdx.remote: 8.279
  LoadShardBlock: 160.025 (3)
  PetaboxLoader3.datanode: 107.027 (4)
  PetaboxLoader3.resolve: 188.012 (2)
  load_resource: 155.035
*/