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

/*! updated; 11-20-2024 10:30 PM **/
Modulr.define("core.base:utils/cookie",["require"],function(require){function Cookie(name,value,options){if(void 0===value){var cookieValue=null;if(document.cookie&&""!==document.cookie)for(var cookies=document.cookie.split(";"),i=0;i<cookies.length;i++){var cookie=(cookies[i]||"").replace(/^\s+|\s+$/g,"");if(cookie.substring(0,name.length+1)===name+"="){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}return cookieValue}options=options||{},null===value&&(value="",options.expires=-1);var expires="",date=(options.expires&&("number"==typeof options.expires||options.expires.toUTCString)&&("number"==typeof options.expires?(date=new Date).setTime(date.getTime()+24*options.expires*60*60*1e3):date=options.expires,expires="; expires="+date.toUTCString()),options.path?"; path="+options.path:""),domain=options.domain?"; domain="+options.domain:"",secure=options.secure?"; secure":"",options=options.samesite?"; samesite="+options.samesite+"; secure":"";return document.cookie=[name,"=",encodeURIComponent(value),expires,date,domain,secure||options].join(""),""}return Cookie.isAvailable=function(){if(navigator.cookieEnabled)return!0;var ret=!1;try{document.cookie="cookietest=1",ret=-1!==document.cookie.indexOf("cookietest="),document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"}catch(err){ret=!1}return ret},Cookie.set=function(name,value,options){Cookie.isAvailable()&&"string"==typeof name&&Cookie("fxn_cstore__"+name,value,options)},Cookie.get=function(name){return Cookie.isAvailable()&&"string"==typeof name?Cookie("fxn_cstore__"+name):null},Cookie.remove=function(name){Cookie.isAvailable()&&"string"==typeof name&&Cookie("fxn_cstore__"+name,null)},Cookie.isSafari=function(){return!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&void 0!==document.body.style.webkitFilter},Cookie});

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
  captures_list: 1.14
  exclusion.robots: 0.043
  exclusion.robots.policy: 0.027
  esindex: 0.015
  cdx.remote: 10.241
  LoadShardBlock: 52.379 (3)
  PetaboxLoader3.datanode: 61.705 (4)
  load_resource: 794.364
  PetaboxLoader3.resolve: 716.995
*/