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
Modulr.define("core.base:utils/detector",["require","jquery","core.plugins:OnWindowResize"],function(require,$){var OnResize=require("core.plugins:OnWindowResize"),win=$(window);return new function(){var _cntr=0,_stack={},_current=getType();function getType(){var ret="desktop",width=win.width();return width<768?ret="mobile":width<1025&&(ret="tablet"),ret="desktop"===ret?function(){var ua=navigator.userAgent.toLowerCase(),res="desktop";/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua)?res="tablet":/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(ua)&&(res="mobile");return res}():ret}this.current=getType,this.onChange=function(callback){var uid;return"function"==typeof callback&&(uid="stack-"+ ++_cntr,_stack[uid]=callback,{stop:function(){if(_stack[uid])try{delete _stack[uid]}catch(err){_stack[uid]=null}}})},OnResize(function(){var type=getType();if(_current!==type)for(var i in _current=type,_stack)"function"==typeof _stack[i]&&_stack[i](_current)},150)}});

}
/*
     FILE ARCHIVED ON 04:16:09 Nov 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:23:01 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 3.653
  exclusion.robots: 0.041
  exclusion.robots.policy: 0.025
  esindex: 0.018
  cdx.remote: 5.311
  LoadShardBlock: 128.556 (3)
  PetaboxLoader3.datanode: 109.249 (4)
  PetaboxLoader3.resolve: 158.987 (2)
  load_resource: 702.226
*/