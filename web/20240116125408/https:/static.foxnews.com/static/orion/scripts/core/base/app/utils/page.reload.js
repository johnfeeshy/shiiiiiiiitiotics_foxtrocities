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
Modulr.define("core.base:utils/page.reload",["require","jquery"],function(require,$){function App(){this._timeout=null,this._focused=!0,this._curr_timeout=0;var self=this;$(window).on("focus",function(){self._focused=!0}),$(window).on("blur",function(){self._focused=!1})}function reload(){$("body").hasClass("app-mode")&&(window.location.hash="&_intcmp=app_webview"),window.location.reload()}return App.prototype.set=function(timeout){var self=this;clearTimeout(this._timeout),"number"==typeof(timeout=timeout||this._curr_timeout)&&1<timeout&&(this._curr_timeout=timeout,timeout=-1<window.location.search.indexOf("_p_ref=1")?15e3:6e4*timeout,this._timeout=setTimeout(function(){self._focused?reload():$(window).on("focus",function(){reload()})},timeout))},App.prototype.reset=function(){this.set()},App.prototype.clear=function(){clearTimeout(this._timeout)},new App});

}
/*
     FILE ARCHIVED ON 15:55:44 Nov 24, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:23:12 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.592
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.012
  cdx.remote: 7.012
  LoadShardBlock: 421.977 (3)
  PetaboxLoader3.datanode: 333.674 (4)
  PetaboxLoader3.resolve: 186.542 (2)
  load_resource: 194.16
*/