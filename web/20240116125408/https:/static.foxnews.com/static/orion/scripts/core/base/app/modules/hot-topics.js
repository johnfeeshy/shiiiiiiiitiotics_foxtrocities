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

/*! updated; 10-14-2024 12:05 PM **/
Modulr.define("core.base:modules/hot-topics",["require","jquery"],function(require,$){var target=$(".hot-topics:not(#menu-subnav) ul"),targetTitle=$(".hot-topics .subnav-title");return new function(){this.init=function(force){!force||0<target.children().length||$.getJSON("//web.archive.org/web/20241201202305/https://www.foxnews.com/api/hotTopics",function(data){var info=0<data.list_items.length?data.list_items:null;if(info){var id,html=[],counter=1,openTarget=data.openInNewWindow?'target="_blank"':"";for(id in data.title&&targetTitle.html(data.title),"green"===data.title_color&&targetTitle.addClass("subnav-title-green"),info){var item=info[id];html.push(`<li><a href="${item.url}" data-omtr-intcmp="subnav${counter}" ${openTarget}>${item.text}</a></li>`),counter++}0<html.length&&target.html(html.join(""))}})}}});

}
/*
     FILE ARCHIVED ON 20:23:05 Dec 01, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:23:11 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.878
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.013
  esindex: 0.014
  cdx.remote: 7.045
  LoadShardBlock: 234.528 (3)
  PetaboxLoader3.datanode: 202.285 (3)
  PetaboxLoader3.resolve: 29.515
  load_resource: 7.967
*/