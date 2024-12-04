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


/** updated: 07-02-2024 04:52 PM **/
window.leapmetrics=window.leapmetrics||[],window.leapmetrics.push(function(Leap,require){require(["jquery","core/utils/meta","core/utils/log"],function($,Meta){var searchInput;require("core/utils/log")("metrics:search")("loaded.."),(Meta.get().page.type==="search"?true:false)&&(Meta=$("#content form:first"),searchInput=Meta.find('input[type="text"]:first'),$(".search-filters:first"),searchInput.on("focus",function(){Leap.track("search:start")}),Meta.submit(function(){searchInput.val().length}),$(document).on("click","a[ng-href]",function(evt){evt.preventDefault();var text,evt=$(this),href=evt.attr("ng-href")||evt.attr("href")||"#",evt=((text=evt.text())||evt.closest(".search-info").find("h3").text(),text);if(evt)return Leap.track("search:select",{page_search_term:$("body").attr("data-search-term")||searchInput.val(),page_num_search_results:$("body").attr("data-num-results")||1,page_item_title:evt}).then(function(){"#"!==href&&window.open(href,"_self")}),!1}))})});

}
/*
     FILE ARCHIVED ON 13:09:27 Nov 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:21:01 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.478
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 10.729
  LoadShardBlock: 151.241 (3)
  PetaboxLoader3.datanode: 80.624 (4)
  load_resource: 126.471
  PetaboxLoader3.resolve: 71.751
*/