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
Modulr.define("core.base:modules/weather",["require","jquery","utils/akamai"],function(require,$){var Location=require("utils/akamai").geo;return new function(){var container=$(".site-header .weather"),WEATHER_FEED_LOCAL=!1,Proto=this;Proto.getFeedURL=function(){var zipCode=$.cookie("FXN_w_locinfo")||Location.zipRange;WEATHER_FEED_LOCAL=!!/^([0-9]){5}.*$/.test(zipCode)&&(zipCode=zipCode.substring(0,5),zipCode="/feeds/web/weather/details/zip/{zipCode}.json".replace("{zipCode}",zipCode))},Proto.getWeatherDetails=function(callback){var freq,date,str,hr={url:(/foxnews.com$/.test(window.location.hostname)?"//web.archive.org/web/20241123041616/https://www.foxnews.com":"")+WEATHER_FEED_LOCAL,data:{cb:(freq=(freq=2)||2,date=new Date,str=date.getFullYear().toString()+(date.getMonth()+1).toString()+date.getDate().toString(),hr=date.getHours()+1,date=date.getMinutes(),str+=hr.toString()+(freq&&!isNaN(freq)?Math.floor(date/parseFloat(freq)).toString():""))},dataType:"jsonp",async:!0};$.ajax(hr).done(function(data){data&&data.weatherData&&callback&&"function"==typeof callback&&callback({city:data.weatherData.cityName,state:data.weatherData.stateShort,forecast:data.weatherData.forecast,temp:data.weatherData.currentTemp})})},Proto.init=function(){0<container.length&&(Proto.getFeedURL(),WEATHER_FEED_LOCAL&&Proto.getWeatherDetails(function(response){container.find(".location").text(response.city+", "+response.state),container.find(".condition").text(response.forecast),container.find(".temp").text(response.temp+"°")}))}}});

}
/*
     FILE ARCHIVED ON 04:16:16 Nov 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:23:03 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.818
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.012
  esindex: 0.016
  cdx.remote: 6.54
  LoadShardBlock: 60.541 (3)
  PetaboxLoader3.datanode: 80.377 (4)
  load_resource: 176.893
  PetaboxLoader3.resolve: 130.071
*/