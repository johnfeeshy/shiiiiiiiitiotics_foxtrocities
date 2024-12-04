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

/*! updated; 01-15-2024 11:01 AM **/
Modulr.define("core.base:modules/referral",["require","jquery","utils/environment","utils/sessionStorage"],function(require,$,Env){var Storage=require("utils/sessionStorage"),siteId=Env.getSiteId();return new function(){var target=-1<["foxbusiness","foxweather"].indexOf(siteId)?function(){if(!function(){var res=!1,id="ref_popup",referrer=document.referrer;return referrer?/foxnews\.com/i.test(referrer)?(Storage.set(id,(new Date).getTime()+"_"+referrer),res=!0):Storage.get(id)&&(res=!0):Storage.remove(id),res}())return null;var wrapper=$("#wrapper"),target=wrapper.find("> .back-to-fox");{var tpl;target.length?target.removeClass("hide"):(tpl=$.trim('                <div class="back-to-fox">                 <div class="back-to-fox-inner">                     <a href="//web.archive.org/web/20240116142114/https://www.foxnews.com" data-omtr-intcmp="fbn_back_to_fn"><span class="text">Back to </span><span class="logo">Fox News</span></a>                 </div>                 </div>'),wrapper.prepend(tpl),target=wrapper.find("> .back-to-fox"))}return target}():null;this.hide=function(){target&&target.addClass("hide")}}});

}
/*
     FILE ARCHIVED ON 14:21:14 Jan 16, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:22:55 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 5.826
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.015
  esindex: 0.011
  cdx.remote: 16.732
  LoadShardBlock: 154.536 (3)
  PetaboxLoader3.datanode: 245.769 (5)
  load_resource: 3383.786 (2)
  PetaboxLoader3.resolve: 3255.344 (2)
*/