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

!function(){function u(a,b){function c(){}c.prototype=b.prototype,a.m=b.prototype,a.prototype=new c,(a.prototype.constructor=a).j=function(d,e,f){for(var k=Array(arguments.length-2),h=2;h<arguments.length;h++)k[h-2]=arguments[h];return b.prototype[e].apply(d,k)}}function O(){}function W(a){Q(this,a)}function Y(a){this.h=l.document,this.a=new ia(this.h,a),this.f=S(a,1),this.g=U(a,2),this.c=!1,this.b=a}var a,g=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},l=this,m=/^[\w+/_-]+[=]{0,2}$/,p=null,q=function(){},r=function(a){var b=typeof a;if("object"==b){if(!a)return"null";if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&void 0!==a.splice&&void 0!==a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||void 0!==a.call&&void 0!==a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else if("function"==b&&void 0===a.call)return"object";return b},t=Date.now||function(){return+new Date},v=function(a,b){Object.defineProperty(l,a,{configurable:!1,get:function(){return b},set:q})},w=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^t()).toString(36)},y=function(){this.a="",this.b=x},x={},z=function(a){var b=new y;return b.a=a,b},A=function(a,b){a.src=b instanceof y&&b.constructor===y&&b.b===x?b.a:"type_error:TrustedResourceUrl",(b=p=null===p?(b=(b=(b=l.document).querySelector&&b.querySelector("script[nonce]"))&&(b.nonce||b.getAttribute("nonce")))&&m.test(b)?b:"":p)&&a.setAttribute("nonce",b)},B=function(a){this.a=a||l.document||document},C=(B.prototype.appendChild=function(a,b){a.appendChild(b)},function(a,b,c,d,e,f){try{var k=a.a,h=a.a.createElement("SCRIPT");h.async=!0,A(h,b),k.head.appendChild(h),h.addEventListener("load",function(){e(),d&&k.head.removeChild(h)}),h.addEventListener("error",function(){0<c?C(a,b,c-1,d,e,f):(d&&k.head.removeChild(h),f())})}catch(n){f()}}),D=l.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),E=l.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),aa=l.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu"),ba=function(a,b,c){this.b=a,this.f=new B(this.b),this.a=null,this.c=[],this.g=!1,this.i=b,this.h=c},H=function(a){var b;a.b.body&&!a.g&&(C(a.f,a.i,2,!0,function(){l[a.h]||b()},b=function(){F(a),l.setTimeout(function(){return G(a,3)},50)}),a.g=!0)},F=function(a){for(var b=I(1,5),c=0;c<b;c++){var d=J(a);a.b.body.appendChild(d),a.c.push(d)}(b=J(a)).style.bottom="0",b.style.left="0",b.style.position="fixed",b.style.width=I(100,110).toString()+"%",b.style.zIndex=I(2147483544,2147483644).toString(),b.style["background-color"]=K(249,259,242,252,219,229),b.style["box-shadow"]="0 0 12px #888",b.style.color=K(0,10,0,10,0,10),b.style.display="flex",b.style["justify-content"]="center",b.style["font-family"]="Roboto, Arial",(c=J(a)).style.width=I(80,85).toString()+"%",c.style.maxWidth=I(750,775).toString()+"px",c.style.margin="24px",c.style.display="flex",c.style["align-items"]="flex-start",c.style["justify-content"]="center",(d=a.f.a.createElement("IMG")).className=w(),d.src=D,d.style.height="24px",d.style.width="24px",d.style["padding-right"]="16px";var e=J(a),f=J(a),k=(f.style["font-weight"]="bold",f.textContent=E,J(a));for(k.textContent=aa,L(a,e,f),L(a,e,k),L(a,c,d),L(a,c,e),L(a,b,c),a.a=b,a.b.body.appendChild(a.a),b=I(1,5),c=0;c<b;c++)d=J(a),a.b.body.appendChild(d),a.c.push(d)},L=function(a,b,c){for(var d=I(1,5),e=0;e<d;e++){var f=J(a);b.appendChild(f)}for(b.appendChild(c),c=I(1,5),d=0;d<c;d++)e=J(a),b.appendChild(e)},I=function(a,b){return Math.floor(a+Math.random()*(b-a))},K=function(a,b,c,d,e,f){return"rgb("+I(Math.max(a,0),Math.min(b,255)).toString()+","+I(Math.max(c,0),Math.min(d,255)).toString()+","+I(Math.max(e,0),Math.min(f,255)).toString()+")"},J=function(a){return(a=a.f.a.createElement("DIV")).className=w(),a},G=function(a,b){b<=0||null!=a.a&&0!=a.a.offsetHeight&&0!=a.a.offsetWidth||(ca(a),F(a),l.setTimeout(function(){return G(a,b-1)},50))},ca=function(a){for(var b=a.c,c=(b=(c="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator])?c.call(b):{next:g(b)}).next();!c.done;c=b.next())(c=c.value)&&c.parentNode&&c.parentNode.removeChild(c);a.c=[],(b=a.a)&&b.parentNode&&b.parentNode.removeChild(b),a.a=null},M=function(a,b,c){a=l.btoa(a+b),v(a,c)},da=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];if(e=l.btoa(a+b),e=l[e],"function"!=r(e))throw Error("API not exported.");e.apply(null,d)},fa=function(a,b,c,d,e){function h(n){document.body?(n=>{n.appendChild(f),l.setTimeout(function(){f?((0!==f.offsetHeight&&0!==f.offsetWidth?b:a)(),f.parentNode&&f.parentNode.removeChild(f)):a()},d)})(document.body):0<n?l.setTimeout(function(){h(n-1)},e):b()}var f=ea(c);h(3)},ea=function(a){var b=document.createElement("div");return b.className=a,b.style.width="1px",b.style.height="1px",b.style.position="absolute",b.style.left="-10000px",b.style.top="-10000px",b.style.zIndex="-10000",b},N=null,P="function"==typeof Uint8Array,Q=function(a,b){a.b=null,b=b||[],a.l=void 0,a.f=-1,a.a=b;a:{if(b=a.a.length){var c=a.a[--b];if(!(null===c||"object"!=typeof c||"array"==r(c)||P&&c instanceof Uint8Array)){a.g=b-a.f,a.c=c;break a}}a.g=Number.MAX_VALUE}a.i={}},R=[],S=function(a,b){var c;return b<a.g?(b+=a.f,(c=a.a[b])===R?a.a[b]=[]:c):a.c?(c=a.c[b])===R?a.c[b]=[]:c:void 0},U=function(a,b){var d,c=T;return a.b||(a.b={}),a.b[b]||(d=S(a,b))&&(a.b[b]=new c(d)),a.b[b]},V=(O.prototype.h=P?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){if(!N){N={};for(var b=0;b<65;b++)N[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b)}for(var b=N,c=[],d=0;d<this.length;d+=3){var e=this[d],f=d+1<this.length,k=f?this[d+1]:0,h=d+2<this.length,n=h?this[d+2]:0,ha=e>>2,e=(3&e)<<4|k>>4,k=(15&k)<<2|n>>6;n&=63,h||(n=64,f)||(k=64),c.push(b[ha],b[e],b[k],b[n])}return c.join("")};try{return JSON.stringify(this.a,V)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.a,V)},function(a,b){return"number"!=typeof b||!isNaN(b)&&1/0!==b&&-1/0!==b?b:String(b)}),T=(O.prototype.toString=function(){return this.a.toString()},function(a){Q(this,a)}),ia=(u(T,O),u(W,O),function(a,b){this.g=new B(a);var c=U(b,11),c=z(S(c,4)||"");this.b=new ba(a,c,S(b,10)),this.a=b,this.f=S(this.a,1),this.c=!1}),X=function(a,b,c,d){b=new T(b?JSON.parse(b):null),b=z(S(b,4)||""),C(a.g,b,3,!1,c,function(){fa(function(){H(a.b),d(!1)},function(){d(!0)},S(a.a,12),S(a.a,5),S(a.a,3))})},ka=(Y.prototype.start=function(){try{ka(),(a=this.a).c||(M(a.f,"internal_api_load_with_sb",function(b,c,d){X(a,b,c,d)}),M(a.f,"internal_api_sb",function(){H(a.b)}),a.c=!0),l.googlefc=l.googlefc||{},"callbackQueue"in l.googlefc||(l.googlefc.callbackQueue=[]),la(this)}catch(a){H(this.a.b)}var a},function(){function a(){var b;l.frames.googlefcPresent||(document.body?((b=document.createElement("iframe")).style.display="none",b.style.width="0px",b.style.height="0px",b.style.border="none",b.style.zIndex="-1000",b.style.left="-1000px",b.style.top="-1000px",b.name="googlefcPresent",document.body.appendChild(b)):l.setTimeout(a,5))}a()}),la=function(a){var b=t();X(a.a,a.g.h(),function(){var c,d=a.f;if(e=l[l.btoa(d+"cached_js")]){e=l.atob(e);var e=parseInt(e,10),d=l.btoa(d+"cached_js").split("."),f=l;d[0]in f||void 0===f.execScript||f.execScript("var "+d[0]);for(;d.length&&(c=d.shift());)d.length?f=f[c]&&f[c]!==Object.prototype[c]?f[c]:f[c]={}:f[c]=null;c=(c=Math.abs(b-e))<1728e5?0:c}else c=-1;0!=c&&(da(a.f,"internal_api_sb"),Z(a,S(a.b,9)))},function(c){Z(a,S(a.b,c?7:8))})},Z=function(a,b){a.c||(a.c=!0,(a=new l.XMLHttpRequest).open("GET",b,!0),a.send())};l[a="__475an521in8a__"]=function(c){for(var d=[],e=0;e<arguments.length;++e)d[+e]=arguments[e];l[a]=q,function(a){"function"==typeof l.atob&&(a=l.atob(a),a=new W(a?JSON.parse(a):null),new Y(a).start())}.apply(null,d)}}.call(this),window.__475an521in8a__("WyI3NGQ1NzM0ZTMzN2EyNzk4IixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2YvQUdTS1d4WEo4dl90dmpaTDBEb1JwR2lEbXYtM1hJUkhxRXZKbnVZMU5LRWRSeEo1MGRISlctTXNFWEJDZjZjZ0hYUXRoWnYzUTBkUk4tdkN1U1pyQVd5TiJdCiwyMCxudWxsLDEwMCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9sL0FHU0tXeFhqX2l3ODZGNzFicTVMcXZ5ZkFQT3ZwRlRsalJjdGNtYVlHR29ScjNxanNOR1hwRWMwank4LTgxV1ZXczkwUmFhRHVXc0RTTnVjZ2NnMFBhU08/YWJcdTAwM2QxIiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hVeGRQWVRSUHpuQ3ZRLXlzd29iazFYa3ZMTXFsNmJkQkl3WXFuM3dSdGhLYmIybGRZcFRJNGpRdTUwTjd3VFowSkNGdW1uRUJGT21WQ1BnaEVNP2FiXHUwMDNkMlx1MDAyNnNiZlx1MDAzZDEiLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9sL0FHU0tXeFVNMWFHSFgxLVdfNUM0TUtWWmtXVXBmN0kwMGpMNFFKamhRak52dFpJVEd0dk1RTDFSbW9TSFI4eDkzOVRMN0szdFk5al8tbDNMVkFVaU1YSnc/c2JmXHUwMDNkMiIsIk56UmtOVGN6TkdVek16ZGhNamM1T0FcdTAwM2RcdTAwM2QiLFtudWxsLG51bGwsbnVsbCwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vMGVtbi9mL3AvNzRkNTczNGUzMzdhMjc5OC5qcz91c3FwXHUwMDNkQ0E0Il0KLCJkaXYtZ3B0LWFkIl0K");

}
/*
     FILE ARCHIVED ON 15:47:50 Nov 07, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:22:56 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.787
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.011
  esindex: 0.01
  cdx.remote: 18.576
  LoadShardBlock: 409.106 (6)
  PetaboxLoader3.datanode: 557.616 (7)
  PetaboxLoader3.resolve: 239.805 (2)
  load_resource: 452.414
*/