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

/*! updated; 01-09-2024 10:17 PM **/


Modulr.define("core.templates:api",["require","controls/api"],function(require){return require("controls/api")});
Modulr.define("core.templates:config",["cdn","core.base:utils/environment"],function(cdn,Env){var id,config={_clone:function(){return{iframe:cdn.domain+"/static/orion/scripts/core/templates/app/iframe.html?v="+Env.getCacheParam(),readyEvent:"FOX_TPL_FRAME.ready",handlerEvent:"FOX_TPL_FRAME.handler",templateEvent:"FOX_TPL_HANDLER",frameId:"frame-template"}}},cloned=config._clone();for(id in cloned)config[id]=cloned[id];return config});
Modulr.define("core.templates:controls/api",["require","jquery","lodash","config","core.plugins:EventMessageHandler","core.plugins:URLInfo"],function(require,$,_,config){var EventHandler=require("core.plugins:EventMessageHandler"),URLInfo=require("core.plugins:URLInfo"),CONFIG=config._clone();return new function(config){var basePath=(config=config||{}).basePath||"",Events=new EventHandler,READY=!1,READY_STACK=[],TEMPLATES={},FRAME_INITIALIZED=!1,FRAME_SRC=config.iframeSrc||CONFIG.iframe;function sendMessage(info){var iframeDom=$("#"+CONFIG.frameId).get(0);Events.sendMessage(iframeDom,CONFIG.handlerEvent,{uid:info.uid,template:info.template})}function uidExists(uid){return!!TEMPLATES[uid]}Events.addHandler(CONFIG.readyEvent,function(){if(0<READY_STACK.length)for(;0<READY_STACK.length;){var uid=READY_STACK.shift();sendMessage(TEMPLATES[uid])}READY=!0}),Events.addHandler(CONFIG.handlerEvent,function(info){if(info.uid&&info.str){var uid=info.uid;for(TEMPLATES[uid].str=info.str;0<TEMPLATES[uid].stack.length;){var stack=TEMPLATES[uid].stack.shift();"function"==typeof stack&&stack(info.str)}}}),this.setFrameSource=function(src){"string"==typeof src&&(FRAME_SRC=src)},this.get=function(template,callback){FRAME_INITIALIZED||(FRAME_INITIALIZED=!0,function embedFrame(){$(document).ready(function(){var iframe;0===$("#"+CONFIG.frameId).length&&(iframe='<iframe id="'+CONFIG.frameId+'" src="'+FRAME_SRC+'" style="display: none; opacity: 0; width: 0px; height: 0px;"></iframe>',$("body").append(iframe),0===$("body #"+CONFIG.frameId).length&&setTimeout(function(){embedFrame()},150))})}());var tpl=function(template){var template=[basePath,template].join("/").replace(/\/+/i,"/"),dataset=new URLInfo(template),query=dataset.getInfo().query;query&&query.cb||(query=function(){var c=new Date,secs=c.getSeconds(),c=[c.getFullYear(),c.getMonth()+1,c.getDate(),c.getHours(),c.getMinutes()].join("");return c+=secs<=30?"30":"01"}(),dataset.addQuery({cb:query}),template=dataset.getUrl());return template}(template),template=function(template){var template=template.split("/"),template=template[template.length-1],uid=(template=(template=template.split(".")).slice(0,template.length-1).join("."),[CONFIG.templateEvent,template].join(".")),cntr=0;if(uidExists(uid)){for(;uidExists([uid,cntr].join("-"));)cntr++;uid=[uid,cntr].join("-")}return uid}(template);TEMPLATES[template]||(TEMPLATES[template]={template:tpl,uid:template,stack:[]}),READY?TEMPLATES[template].executed?TEMPLATES[template].str?callback(TEMPLATES[template].str):TEMPLATES[template].stack.push(callback):(TEMPLATES[template].executed=!0,TEMPLATES[template].stack.push(callback),sendMessage(TEMPLATES[template])):(TEMPLATES[template].stack.push(callback),READY_STACK.push(template))}}});
Modulr.define("core.templates:controls/frame",["require","jquery","lodash","config","core.plugins:EventMessageHandler"],function(require,$,_,config){var CONFIG=config._clone(),Events=new(require("core.plugins:EventMessageHandler"));Events.addHandler(CONFIG.handlerEvent,function(data){data.template&&data.uid&&!function(data,callback){$.ajax({url:data.template,dataType:"text"}).done(function(str){callback(str)})}(data,function(str){Events.sendMessage("parent",CONFIG.handlerEvent,{uid:data.uid,str:str})})}),Events.sendMessage("parent",CONFIG.readyEvent,!0)});
Modulr.define("core.templates:main",["require"],function(require){window._tpl_frame&&require(["controls/frame"])});
!function(Modulr,FNC){var uid="core.templates";Modulr.getInstance(uid)||((Modulr=Modulr.config({instance:uid,baseDomain:FNC.CDN.domain,baseUrl:"/static/orion/scripts/core/templates/app",masterFile:"/static/orion/scripts/core/utils/modulr/master.js",packages:["core.plugins","core.base"],shim:{jquery:{src:"/static/orion/scripts/core/utils/jquery/core.js",exports:"jQuery"},lodash:{src:"/static/orion/scripts/core/utils/lodash.js",exports:"_"}}})).define("cdn",function(){return FNC.CDN}),Modulr.require(["main"]))}(window.Modulr,window.FNC);

}
/*
     FILE ARCHIVED ON 16:12:34 Jan 16, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:22:57 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.609
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 11.383
  LoadShardBlock: 83.794 (3)
  PetaboxLoader3.datanode: 119.727 (4)
  load_resource: 165.531
  PetaboxLoader3.resolve: 113.633
*/