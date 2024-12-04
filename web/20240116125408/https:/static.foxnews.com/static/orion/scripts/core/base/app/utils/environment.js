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
Modulr.define("core.base:utils/environment",["require","jquery","modernizr"],function(require,$,Modernizr){return new function(){var Proto=this;Proto.isProd=function(){return"prod"===window.FOX_ENV_STATIC},Proto.isStaging=function(){return"staging"===window.FOX_ENV_STATIC},Proto.isDev=function(){return"qa"===window.FOX_ENV_STATIC},Proto.getEnvironment=function(){var res="prod";return Proto.isStaging()?res="stage":Proto.isDev()&&(res="dev"),res},Proto.getStaticDomain=function(){return window.location.protocol+"//"+(Proto.isProd()?"":"qa.")+"global.fncstatic.com"},Proto.getSiteId=function(){var channel=Proto.getMeta("prism.channel"),section=Proto.getMeta("prism.section"),id="foxnews";switch(channel){case"fnc":id="foxnews";break;case"fbn":id="foxbusiness";break;case"fsb":id="smallbusiness";break;case"fnl":id="foxnewslatino";break;case"fwx":id="foxweather"}return"fnc"===channel&&"nation"===section?id="foxnation":"fnc"===channel&&"insider"===section&&(id="foxnewsinsider"),id},Proto.getSectionPath=function(){for(var iter=1,sect=Proto.getMeta("prism.subsection"+iter),arr=[Proto.getMeta("prism.section")];sect;)arr.push(sect),sect=Proto.getMeta("prism.subsection"+ ++iter);return arr.join("/")},Proto.getSection=function(){return Proto.getMeta("prism.section")},Proto.getMeta=function(val,type){return $("meta["+(type=type||"name")+"='"+val+"']").attr("content")||""},Proto.isMobile=function(){return Modernizr.touch||Modernizr.touchevents},Proto.getDomainHost=function(useProtocol,prod){var loc=window.location,host=loc.hostname,loc=loc.protocol,arr=host.split("."),val=[];return useProtocol&&(val.push(loc+"//"),!prod)?loc+"//"+host:(-1<host.indexOf("latino")?val.push("latino."):-1<host.indexOf("smallbusiness.")?val.push("smallbusiness."):prod&&val.push("www."),val.join("")+arr[arr.length-2]+"."+arr[arr.length-1])},Proto.getCacheParam=function(){return Modulr.getGlobalCacheParam()},Proto.isTiger=function(){var meta=$('meta[name="content.creator"]:first');return 1===(meta=0===meta.length?$('meta[name="content-creator"]:first'):meta).length&&"tiger"===meta.attr("content")}}});

}
/*
     FILE ARCHIVED ON 14:21:14 Jan 16, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:22:51 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.646
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 20.016
  LoadShardBlock: 312.188 (3)
  PetaboxLoader3.datanode: 402.659 (5)
  PetaboxLoader3.resolve: 293.156 (3)
  load_resource: 475.446 (2)
*/