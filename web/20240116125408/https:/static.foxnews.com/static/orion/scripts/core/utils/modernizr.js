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

/*!build lint:ignore; minify:ignore **/
/* eslint-disable */

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cookies-cssanimations-csstransitions-fullscreen-geolocation-hashchange-history-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,i,s,a;for(var u in x)if(x.hasOwnProperty(u)){if(e=[],n=x[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function u(){var e=n.body;return e||(e=a(w?"svg":"body"),e.fake=!0),e}function f(e,t,o,r){var i,s,f,l,c="modernizr",d=a("div"),p=u();if(parseInt(o,10))for(;o--;)f=a("div"),f.id=r?r[o]:c+(o+1),d.appendChild(f);return i=a("style"),i.type="text/css",i.id="s"+c,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),s=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=l,_.offsetHeight):d.parentNode.removeChild(d),!!s}function l(e,n){return!!~(""+e).indexOf(n)}function c(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var r;for(var i in e)if(e[i]in n)return t===!1?e[i]:(r=n[e[i]],o(r,"function")?c(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+p(n[r])+":"+o+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,i){function u(){c&&(delete P.style,delete P.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var f=m(e,r);if(!o(f,"undefined"))return f}for(var c,d,p,h,v,g=["modernizr","tspan","samp"];!P.style&&g.length;)c=!0,P.modElem=a(g.shift()),P.style=P.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=P.style[h],l(h,"-")&&(h=s(h)),P.style[h]!==t){if(i||o(r,"undefined"))return u(),"pfx"==n?h:!0;try{P.style[h]=r}catch(y){}if(P.style[h]!=v)return u(),"pfx"==n?h:!0}return u(),!1}function v(e,n,t,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?h(a,n,r,i):(a=(e+" "+A.join(s+" ")+s).split(" "),d(a,n,t))}function g(e,n,o){return v(e,t,t,n,o)}var y=[],x=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{n.cookie="cookietest=1";var e=-1!=n.cookie.indexOf("cookietest=");return n.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var n=navigator.userAgent;return-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1});var _=n.documentElement,w="svg"===_.nodeName.toLowerCase(),S=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=S;var b=function(){function e(e,n){var r;return e?(n&&"string"!=typeof n||(n=a(n||"div")),e="on"+e,r=e in n,!r&&o&&(n.setAttribute||(n=a("div")),n.setAttribute(e,""),r="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),r):!1}var o=!("onblur"in n.documentElement);return e}();C.hasEvent=b,Modernizr.addTest("hashchange",function(){return b("hashchange",e)===!1?!1:n.documentMode===t||n.documentMode>7});var T=C.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(o,function(e){t=9===e.offsetTop})}return t});var k="Moz O ms Webkit",E=C._config.usePrefixes?k.split(" "):[];C._cssomPrefixes=E;var z=function(n){var o,r=S.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),o=n.replace(/-/g,"_").toUpperCase()+"_RULE",o in i)return"@"+n;for(var s=0;r>s;s++){var a=S[s],u=a.toUpperCase()+"_"+o;if(u in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=z;var A=C._config.usePrefixes?k.toLowerCase().split(" "):[];C._domPrefixes=A;var O={elem:a("modernizr")};Modernizr._q.push(function(){delete O.elem});var P={style:O.elem.style};Modernizr._q.unshift(function(){delete P.style}),C.testAllProps=v;var N=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?z(e):(-1!=e.indexOf("-")&&(e=s(e)),n?v(e,n,t):v(e,"pfx"))};Modernizr.addTest("fullscreen",!(!N("exitFullscreen",n,!1)&&!N("cancelFullScreen",n,!1))),C.testAllProps=g,Modernizr.addTest("cssanimations",g("animationName","a",!0)),Modernizr.addTest("csstransitions",g("transition","all",!0)),r(),i(y),delete C.addTest,delete C.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);

}
/*
     FILE ARCHIVED ON 04:03:20 Jan 16, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:22:59 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.557
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.014
  esindex: 0.013
  cdx.remote: 10.126
  LoadShardBlock: 191.022 (3)
  PetaboxLoader3.datanode: 159.95 (4)
  load_resource: 4788.722
  PetaboxLoader3.resolve: 4712.604
*/