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

/*! updated; 04-22-2021 10:56 AM **/
/* updated by mrichards@fastly to replace ESI calls */

!function(GeoApp) {
    GeoApp.ENABLED = true,
    window.FNC = window.FNC || {},
    window.FNC.GEO = GeoApp
}(function() {
    const CONST_Akamai_GEO = window.CONST_Akamai_GEO || {
        continent: "NA",
        countryCode: "US",
        regionCode: "CA",
        dmaCode: "807",
        zipRange: "95051"
    },
    CONST_Akamai_TIME = window.CONST_Akamai_TIME || {
        yr: "2024",
        mm: "12",
        dd: "01",
        dy: "7",
        hr: "20",
        min: "22",
        sec: "16"
    };

    function getQS() {
        var vals = (window.location.search.slice(1) || "").split("&"),
            ret = {};
        for (let x = 0; x < vals.length; x++) {
            var sp = vals[x].split("="),
                key = sp[0] || !1,
                sp = sp[1] || !1;
            key && sp && (ret[key] = decodeURIComponent(sp))
        }
        return ret
    }
    return {
        time: new function() {
            const Proto = this,
                LOC_START_TIME = new Date;

            let d = new Date(((d) => {
                return [[d.mm, d.dd, d.yr].join("/"), [d.hr, d.min, d.sec].join(":")].join(" ") + " UTC";
            })(CONST_Akamai_TIME));

            let AKAMAI_DATETIME = new Date(d.toLocaleString('en-US', { timeZone: 'America/New_York' })),
                CUSTOM_ANNOUNCED = !1;

            function USDST(d) {
                const yr = (d = d || Proto.getCurrent()).getFullYear();
                var currYrStart = function() {
                        var dt = new Date("3/01/" + yr + " 00:00:00");
                        let found = 0;
                        for (; found < 2;) 0 === dt.getDay() && found++,
                        found < 2 && dt.setDate(dt.getDate() + 1),
                        2 <= dt.getMonth && (found = 2, dt.setHours(2));
                        return dt
                    }(),
                    currYrEnd = function() {
                        var dt = new Date("11/01/" + yr + " 00:00:00");
                        let found = !1;
                        for (; !found;) 0 === dt.getDay() ? found = !0 : dt.setDate(dt.getDate() + 1),
                        (found = 10 < dt.getMonth() ? !0 : found) && dt.setHours(2);
                        return dt
                    }();
                return {
                    val: isDSTObserved(d),
                    currYrStart: currYrStart,
                    currYrEnd: currYrEnd,
                    currYr: yr
                }
            }

            function isDSTObserved(d) {
                return true;
            }
            Proto.getCurrent = function(trueTime) {
                var diff = (new Date).getTime() - LOC_START_TIME.getTime(),
                    customDate = function() {
                        let qs = getQS(),
                            ret = null;
                        if (qs && qs.cdt) {
                            let val = qs.cdt,
                                reDate = (-1 < val.indexOf("%") && (val = decodeURIComponent(val)), /^([0-9]+){1,2}(\/|\-)([0-9]+){1,2}(\/|\-)([0-9]+){1,4}/g),
                                reDateOnly = /^([0-9]+){1,2}(\/|\-)([0-9]+){1,2}(\/|\-)([0-9]+){1,4}$/,
                                reTime = /\|([0-9]+){1,2}\:([0-9]+){1,2}\:([0-9]+){1,2}$/g,
                                date = val.match(reDate),
                                time = val.match(reTime);
                            var dateStr, dt;
                            !time && reDateOnly.test(val) && (time = ["|00:00:00"]), date && time && (date = date[0].split("-").join("/"), time = time[0].slice(1), dateStr = [date, time].join(" "), dt = new Date(dateStr), window.console && console.log && !CUSTOM_ANNOUNCED && (CUSTOM_ANNOUNCED = !0, console.log("DATE TEST OVERRIDE: " + dateStr)), ret = dt)
                        }
                        return ret
                    }(),
                    trueTime = !trueTime && customDate || AKAMAI_DATETIME,
                    trueTime = new Date(trueTime.getTime() + diff);
                return USDST(trueTime).val || customDate || trueTime.setHours(trueTime.getHours() - 1), trueTime
            }, Proto.isDST = USDST, Proto.isDSTObserved = isDSTObserved
        },
        geo: new function() {
            let CUSTOM_ANNOUNCED = !1;
            this.get = function() {
                var qs = getQS();
                if (qs && qs.cgo) {
                    var id, pairs = (arr => {
                        let res = {};
                        return arr.forEach(val => {
                            val = val.split(":");
                            res[val[0].trim()] = val[1].trim()
                        }), res
                    })(qs.cgo.split(";"));
                    for (id in CUSTOM_ANNOUNCED || (CUSTOM_ANNOUNCED = !0, console.log("GEO TEST OVERRIDE:", pairs)), CONST_Akamai_GEO) pairs[id] && (CONST_Akamai_GEO[id] = pairs[id])
                }
                return CONST_Akamai_GEO
            }
        }
    }
}());

}
/*
     FILE ARCHIVED ON 20:22:42 Dec 01, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:22:48 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.655
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.013
  esindex: 0.04
  cdx.remote: 12.207
  LoadShardBlock: 142.646 (3)
  PetaboxLoader3.datanode: 49.553 (3)
  load_resource: 112.896
*/