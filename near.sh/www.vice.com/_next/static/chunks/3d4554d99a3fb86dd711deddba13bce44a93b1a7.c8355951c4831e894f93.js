(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},"4JlD":function(e,t,n){"use strict";var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,i){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?c(a(e),(function(a){var i=encodeURIComponent(o(a))+n;return r(e[a])?c(e[a],(function(e){return i+encodeURIComponent(o(e))})).join(t):i+encodeURIComponent(o(e[a]))})).join(t):i?encodeURIComponent(o(i))+n+encodeURIComponent(o(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function c(e,t){if(e.map)return e.map(t);for(var n=[],o=0;o<e.length;o++)n.push(t(e[o],o));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"5xVl":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var o=n("rePB");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=[],i=function(e){if(window.dataLayer)try{s(),window.dataLayer.push(e)}catch(t){console.log(t)}else p(e)},s=function(){a.length&&(a.forEach((function(e){window.dataLayer.push(e)})),a.length=0)},p=function(e){var t=c(c({},e),{},{queued_on:Date.now()});a.push(t)}},GBY4:function(e,t,n){"use strict";(function(t){var o=n("RA0T"),r=n("nFlj"),c=/^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,a=/^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,i=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function s(e){return(e||"").toString().replace(i,"")}var p=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],u={hash:1,query:1};function l(e){var n,o=("undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{}).location||{},r={},a=typeof(e=e||o);if("blob:"===e.protocol)r=new h(unescape(e.pathname),{});else if("string"===a)for(n in r=new h(e,{}),u)delete r[n];else if("object"===a){for(n in e)n in u||(r[n]=e[n]);void 0===r.slashes&&(r.slashes=c.test(e.href))}return r}function f(e){e=s(e);var t=a.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!(t[2]&&t[2].length>=2),rest:t[2]&&1===t[2].length?"/"+t[3]:t[3]}}function h(e,t,n){if(e=s(e),!(this instanceof h))return new h(e,t,n);var c,a,i,u,d,v,g=p.slice(),m=typeof t,y=this,b=0;for("object"!==m&&"string"!==m&&(n=t,t=null),n&&"function"!==typeof n&&(n=r.parse),t=l(t),c=!(a=f(e||"")).protocol&&!a.slashes,y.slashes=a.slashes||c&&t.slashes,y.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(g[3]=[/(.*)/,"pathname"]);b<g.length;b++)"function"!==typeof(u=g[b])?(i=u[0],v=u[1],i!==i?y[v]=e:"string"===typeof i?~(d=e.indexOf(i))&&("number"===typeof u[2]?(y[v]=e.slice(0,d),e=e.slice(d+u[2])):(y[v]=e.slice(d),e=e.slice(0,d))):(d=i.exec(e))&&(y[v]=d[1],e=e.slice(0,d.index)),y[v]=y[v]||c&&u[3]&&t[v]||"",u[4]&&(y[v]=y[v].toLowerCase())):e=u(e);n&&(y.query=n(y.query)),c&&t.slashes&&"/"!==y.pathname.charAt(0)&&(""!==y.pathname||""!==t.pathname)&&(y.pathname=function(e,t){if(""===e)return t;for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],c=!1,a=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),a++):a&&(0===o&&(c=!0),n.splice(o,1),a--);return c&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}(y.pathname,t.pathname)),"/"!==y.pathname.charAt(0)&&y.hostname&&(y.pathname="/"+y.pathname),o(y.port,y.protocol)||(y.host=y.hostname,y.port=""),y.username=y.password="",y.auth&&(u=y.auth.split(":"),y.username=u[0]||"",y.password=u[1]||""),y.origin=y.protocol&&y.host&&"file:"!==y.protocol?y.protocol+"//"+y.host:"null",y.href=y.toString()}h.prototype={set:function(e,t,n){var c=this;switch(e){case"query":"string"===typeof t&&t.length&&(t=(n||r.parse)(t)),c[e]=t;break;case"port":c[e]=t,o(t,c.protocol)?t&&(c.host=c.hostname+":"+t):(c.host=c.hostname,c[e]="");break;case"hostname":c[e]=t,c.port&&(t+=":"+c.port),c.host=t;break;case"host":c[e]=t,/:\d+$/.test(t)?(t=t.split(":"),c.port=t.pop(),c.hostname=t.join(":")):(c.hostname=t,c.port="");break;case"protocol":c.protocol=t.toLowerCase(),c.slashes=!n;break;case"pathname":case"hash":if(t){var a="pathname"===e?"/":"#";c[e]=t.charAt(0)!==a?a+t:t}else c[e]=t;break;default:c[e]=t}for(var i=0;i<p.length;i++){var s=p[i];s[4]&&(c[s[1]]=c[s[1]].toLowerCase())}return c.origin=c.protocol&&c.host&&"file:"!==c.protocol?c.protocol+"//"+c.host:"null",c.href=c.toString(),c},toString:function(e){e&&"function"===typeof e||(e=r.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var c=o+(n.slashes?"//":"");return n.username&&(c+=n.username,n.password&&(c+=":"+n.password),c+="@"),c+=n.host+n.pathname,(t="object"===typeof n.query?e(n.query):n.query)&&(c+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(c+=n.hash),c}},h.extractProtocol=f,h.location=l,h.trimLeft=s,h.qs=r,e.exports=h}).call(this,n("yLpj"))},HXYI:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("q1tI"),r=n.n(o),c=(n("T59b"),n("zIgu")),a=n("8Kt/"),i=n.n(a),s=n("i173"),p=n("mY1c"),u=r.a.createElement,l=function(e){var t=Object(s.a)(),n=t.googleTagManagerId,o=t.gtmQueryParams;return u("div",{className:"error"},u(i.a,null,Object(c.a)({GTM_ID:n,GTM_QUERY_PARAMS:o})),u("div",null,u("h1",{className:"error__code"},e.clientSide?"Error":e.statusCode||404)),e.graphqlErrors&&!!e.graphqlErrors.length&&u("div",{style:{display:"none"}},e.graphqlErrors),u("div",null,u("a",{href:"/",className:"error__link"},"Go home")),u(p.a,{GTM_ID:n,GTM_QUERY_PARAMS:o}))};t.b=l},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return r}))},QmWs:function(e,t,n){var o,r=(o=n("s4NR"))&&"object"==typeof o&&"default"in o?o.default:o,c=/https?|ftp|gopher|file/;function a(e){"string"==typeof e&&(e=b(e));var t=function(e,t,n){var o=e.auth,r=e.hostname,c=e.protocol||"",a=e.pathname||"",i=e.hash||"",s=e.query||"",p=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?p=o+e.host:r&&(p=o+(~r.indexOf(":")?"["+r+"]":r),e.port&&(p+=":"+e.port)),s&&"object"==typeof s&&(s=t.encode(s));var u=e.search||s&&"?"+s||"";return c&&":"!==c.substr(-1)&&(c+=":"),e.slashes||(!c||n.test(c))&&!1!==p?(p="//"+(p||""),a&&"/"!==a[0]&&(a="/"+a)):p||(p=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),{protocol:c,host:p,pathname:a=a.replace(/[?#]/g,encodeURIComponent),search:u=u.replace("#","%23"),hash:i}}(e,r,c);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var i="http://",s="w.w",p=i+s,u=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,l=/https?|ftp|gopher|file/;function f(e,t){var n="string"==typeof e?b(e):e;e="object"==typeof e?a(e):e;var o=b(t),r="";n.protocol&&!n.slashes&&(r=n.protocol,e=e.replace(n.protocol,""),r+="/"===t[0]||"/"===e[0]?"/":""),r&&o.protocol&&(r="",o.slashes||(r=o.protocol,t=t.replace(o.protocol,"")));var c=e.match(u);c&&!o.protocol&&(e=e.substr((r=c[1]+(c[2]||"")).length),/^\/\/[^/]/.test(t)&&(r=r.slice(0,-1)));var s=new URL(e,p+"/"),f=new URL(t,s).toString().replace(p,""),h=o.protocol||n.protocol;return h+=n.slashes||o.slashes?"//":"",!r&&h?f=f.replace(i,h):r&&(f=f.replace(i,"")),l.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),r&&(f=r+("/"===f[0]?f.substr(1):f)),f}function h(){}h.prototype.parse=b,h.prototype.format=a,h.prototype.resolve=f,h.prototype.resolveObject=f;var d=/^https?|ftp|gopher|file/,v=/^(.*?)([#?].*)/,g=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,y=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function b(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),e&&"object"==typeof e&&e instanceof h)return e;var o=(e=e.trim()).match(v);e=o?o[1].replace(/\\/g,"/")+o[2]:e.replace(/\\/g,"/"),y.test(e)&&"/"!==e.slice(-1)&&(e+="/");var c=!/(^javascript)/.test(e)&&e.match(g),i=m.test(e),u="";c&&(d.test(c[1])||(u=c[1].toLowerCase(),e=""+c[2]+c[3]),c[2]||(i=!1,d.test(c[1])?(u=c[1],e=""+c[3]):e="//"+c[3]),3!==c[2].length&&1!==c[2].length||(u=c[1],e="/"+c[3]));var l,f=(o?o[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=f&&f[1],w=new h,x="",O="";try{l=new URL(e)}catch(r){x=r,u||n||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(O="/",e=e.substr(1));try{l=new URL(e,p)}catch(e){return w.protocol=u,w.href=u,w}}w.slashes=i&&!O,w.host=l.host===s?"":l.host,w.hostname=l.hostname===s?"":l.hostname.replace(/(\[|\])/g,""),w.protocol=x?u||null:l.protocol,w.search=l.search.replace(/\\/g,"%5C"),w.hash=l.hash.replace(/\\/g,"%5C");var j=e.split("#");!w.search&&~j[0].indexOf("?")&&(w.search="?"),w.hash||""!==j[1]||(w.hash="#"),w.query=t?r.decode(l.search.substr(1)):w.search.substr(1),w.pathname=O+(c?function(e){return e.replace(/['^|`]/g,(function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()})).replace(/((?:%[0-9A-F]{2})+)/g,(function(e,t){try{return decodeURIComponent(t).split("").map((function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()})).join("")}catch(e){return t}}))}(l.pathname):l.pathname),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),u&&!d.test(u)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[l.username,l.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=l.port,b&&!w.host.endsWith(b)&&(w.host+=b,w.port=b.slice(1)),w.href=O?""+w.pathname+w.search+w.hash:a(w);var k=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach((function(e){~k.indexOf(e)||(w[e]=w[e]||null)})),w}t.parse=b,t.format=a,t.resolve=f,t.resolveObject=function(e,t){return b(f(e,t))},t.Url=h},RA0T:function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},RpKo:function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var o=n("1OyB"),r=n("vuIU"),c=n("JX7q"),a=n("foSv");function i(e,t,n){return(i="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(a.a)(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}var s=n("Ji7U"),p=n("md7G"),u=n("rePB"),l=(n("o0o1"),n("HaE+"),n("+qE3")),f=n("XmFI");n("QmWs");function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(a.a)(e);if(t){var r=Object(a.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(p.a)(this,n)}}var d=function(){var e,t=Object(f.b)("X-GeoIP-Country-Code"),n=Object(f.b)("X-GeoIP-Region-Code");return t&&n&&(e={code:200,data:{country:{code:t},region:{code:n}},message:"OK"}),e},v={PAGE_CHANGE:"PAGE_CHANGE"},g=function(e){Object(s.a)(n,e);var t=h(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),Object(u.a)(Object(c.a)(e),"EVENTS",v),Object(u.a)(Object(c.a)(e),"geoIPData",void 0),e}return Object(r.a)(n,[{key:"on",value:function(e,t){if(!v[e]&&"string"===typeof e)throw new Error("Event '".concat(e,"' is not a valid event name"));if("function"!==typeof t)throw new Error("The callback supplied is not a function");return i(Object(a.a)(n.prototype),"on",this).call(this,e,(function(){try{t.apply(void 0,arguments)}catch(e){console.log(e)}})),this}}]),n}(l.EventEmitter);t.a=g},T59b:function(e,t,n){},XmFI:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o=function(e,t,n){var o;if(n){var r=new Date,c=r.getTime()+24*n*60*60*1e3;r.setTime(c),o="; expires=".concat(r.toUTCString())}else o="";return"".concat(e,"=").concat(t).concat(o,"; path=/")},r=function(e){if("undefined"===typeof document)return!1;var t="; ".concat(document.cookie).split("; ".concat(e,"="));return 2===t.length&&t.pop().split(";").shift()}},am9W:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var o=n("rePB"),r=n("Ff2n"),c=n("tCiE"),a=["googleAnalyticsId"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={segmentId:e.env.NEXT_PUBLIC_SEGMENT_ID,googleAnalyticsId:c.b.production,googleTagManagerId:c.c,fbId:"213518685373476",gtmQueryParams:c.d.production},u=e.env.PUBLIC_ASSET_HOST_NAME||"https://vice-web-statics-cdn.vice.com",l={vice:{globalNewsSectionID:"5d387c9b3a09250008932ffd"},"i-d":{},garage:{}},f=function(e){var t=p.googleAnalyticsId,n=Object(r.a)(p,a),o=l[e];return s(s({googleAnalyticsId:t[e]||c.a,defaultThumbnail:"".concat(u,"/images/").concat(e,"-og.png"),showThumbnail:"".concat(u,"/images/").concat(e,"-show.png")},o),n)}}).call(this,n("8oxB"))},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},cntd:function(e,t,n){"use strict";(function(e){var o=n("q1tI"),r=n.n(o),c=r.a.createElement,a=e.env.PUBLIC_ASSET_HOST_NAME||"https://vice-web-statics-cdn.vice.com",i=(c(r.a.Fragment,null,c("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(a,"/favicons/vice/favicon-32x32.png")}),c("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"".concat(a,"/favicons/vice/android-chrome-192x192.png")}),c("link",{rel:"icon",type:"image/png",sizes:"228x228",href:"".concat(a,"/favicons/vice/coast-228x228.png")}),c("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(a,"/favicons/vice/favicon-16x16.png")})),c(r.a.Fragment,null,c("link",{rel:"apple-touch-icon",sizes:"57x57",href:"".concat(a,"/favicons/vice/apple-touch-icon-57x57.png")}),c("link",{rel:"apple-touch-icon",sizes:"60x60",href:"".concat(a,"/favicons/vice/apple-touch-icon-60x60.png")}),c("link",{rel:"apple-touch-icon",sizes:"72x72",href:"".concat(a,"/favicons/vice/apple-touch-icon-72x72.png")}),c("link",{rel:"apple-touch-icon",sizes:"76x76",href:"".concat(a,"/favicons/vice/apple-touch-icon-76x76.png")}),c("link",{rel:"apple-touch-icon",sizes:"114x114",href:"".concat(a,"/favicons/vice/apple-touch-icon-114x114.png")}),c("link",{rel:"apple-touch-icon",sizes:"120x120",href:"".concat(a,"/favicons/vice/apple-touch-icon-120x120.png")}),c("link",{rel:"apple-touch-icon",sizes:"144x144",href:"".concat(a,"/favicons/vice/apple-touch-icon-144x144.png")}),c("link",{rel:"apple-touch-icon",sizes:"152x152",href:"".concat(a,"/favicons/vice/apple-touch-icon-152x152.png")}),c("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(a,"/favicons/vice/apple-touch-icon-180x180.png")}),c("link",{rel:"icon",type:"image/png",sizes:"228x228",href:"".concat(a,"/favicons/vice/coast-228x228.png")}),c("link",{rel:"yandex-tableau-widget",href:"".concat(a,"/favicons/vice/yandex-browser-manifest.json")}),c("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(a,"/favicons/vice/favicon-32x32.png")}),c("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"".concat(a,"/favicons/vice/android-chrome-192x192.png")}),c("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(a,"/favicons/vice/favicon-16x16.png")}),c("link",{rel:"shortcut icon",href:"".concat(a,"/favicons/vice/favicon.ico")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-320x460.png")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-640x920.png")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-640x1096.png")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-750x1294.png")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-1182x2208.png")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-1242x2148.png")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-748x1024.png")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-768x1004.png")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-1496x2048.png")}),c("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)",href:"".concat(a,"/favicons/vice/apple-touch-startup-image-1536x2008.png")}),c("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(a,"/favicons/vice/favicon-32x32.png")}),c("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"".concat(a,"/favicons/vice/android-chrome-192x192.png")}),c("link",{rel:"icon",type:"image/png",sizes:"228x228",href:"".concat(a,"/favicons/vice/coast-228x228.png")}),c("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(a,"/favicons/vice/favicon-16x16.png")})));t.a=i}).call(this,n("8oxB"))},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},i173:function(e,t,n){"use strict";var o=n("M5tw"),r=n("am9W");t.a=function(){var e=Object(o.b)();return Object(r.a)(e)}},kd2E:function(e,t,n){"use strict";function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,c){t=t||"&",n=n||"=";var a={};if("string"!==typeof e||0===e.length)return a;var i=/\+/g;e=e.split(t);var s=1e3;c&&"number"===typeof c.maxKeys&&(s=c.maxKeys);var p=e.length;s>0&&p>s&&(p=s);for(var u=0;u<p;++u){var l,f,h,d,v=e[u].replace(i,"%20"),g=v.indexOf(n);g>=0?(l=v.substr(0,g),f=v.substr(g+1)):(l=v,f=""),h=decodeURIComponent(l),d=decodeURIComponent(f),o(a,h)?r(a[h])?a[h].push(d):a[h]=[a[h],d]:a[h]=d}return a};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},mY1c:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),c=n("RpKo"),a=n("5xVl"),i=r.a.createElement;t.a=function(e){var t=e.GTM_ID,n=void 0===t?"":t,r=e.GTM_QUERY_PARAMS,s=void 0===r?"":r;return Object(o.useEffect)((function(){try{window.__V1C3.appHooks=new c.a,window.flushDataLayerQueue=a.b}catch(e){console.log(e)}}),[]),i("noscript",{style:{display:"none"}},i("iframe",{src:"https://www.googletagmanager.com/ns.html?id=".concat(n).concat(s),height:0,width:0,style:{display:"none",visibility:"hidden"}}))}},md7G:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("cDf5"),r=n.n(o),c=n("JX7q");function a(e,t){return!t||"object"!==r()(t)&&"function"!==typeof t?Object(c.a)(e):t}},nFlj:function(e,t,n){"use strict";var o=Object.prototype.hasOwnProperty;function r(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return null}}function c(e){try{return encodeURIComponent(e)}catch(t){return null}}t.stringify=function(e,t){t=t||"";var n,r,a=[];for(r in"string"!==typeof t&&(t="?"),e)if(o.call(e,r)){if((n=e[r])||null!==n&&undefined!==n&&!isNaN(n)||(n=""),r=c(r),n=c(n),null===r||null===n)continue;a.push(r+"="+n)}return a.length?t+a.join("&"):""},t.parse=function(e){for(var t,n=/([^=?#&]+)=?([^&]*)/g,o={};t=n.exec(e);){var c=r(t[1]),a=r(t[2]);null===c||null===a||c in o||(o[c]=a)}return o}},p46w:function(e,t,n){var o,r;!function(c){if(void 0===(r="function"===typeof(o=c)?o.call(t,n,t,e):o)||(e.exports=r),!0,e.exports=c(),!!0){var a=window.Cookies,i=window.Cookies=c();i.noConflict=function(){return window.Cookies=a,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function c(t,n,c){if("undefined"!==typeof document){"number"===typeof(c=e({path:"/"},r.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(p){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var s in c)c[s]&&(i+="; "+s,!0!==c[s]&&(i+="="+c[s].split(";")[0]));return document.cookie=t+"="+n+i}}function a(e,n){if("undefined"!==typeof document){for(var r={},c=document.cookie?document.cookie.split("; "):[],a=0;a<c.length;a++){var i=c[a].split("="),s=i.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var p=t(i[0]);if(s=(o.read||o)(s,p)||t(s),n)try{s=JSON.parse(s)}catch(u){}if(r[p]=s,e===p)break}catch(u){}}return e?r[e]:r}}return r.set=c,r.get=function(e){return a(e,!1)},r.getJSON=function(e){return a(e,!0)},r.remove=function(t,n){c(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))},s4NR:function(e,t,n){"use strict";t.decode=t.parse=n("kd2E"),t.encode=t.stringify=n("4JlD")},tCiE:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return a}));var o="UA-599058-174",r=e.env.NEXT_PUBLIC_GTM_ID_PROD||"GTM-MSM4HQ4",c={production:{vice:"UA-599058-49","multi-container":"UA-599058-158"},local:{vice:o,"multi-container":"UA-599058-178"}},a={local:"&gtm_auth=aw-wdKxjvbq_qBC_0s0D9w&gtm_preview=env-3743&gtm_cookies_win=x",production:"&gtm_auth=P9-REthElsMGFNfEBtQmGA&gtm_preview=env-2&gtm_cookies_win=x"}}).call(this,n("8oxB"))},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return r}))},zIgu:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("q1tI"),r=n.n(o),c=r.a.createElement,a=function(e){var t=e.defer,n=void 0===t?0:t,o=e.GTM_ID,a=e.GTM_QUERY_PARAMS,i="function loadGTM(){\n                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+ '".concat(a,"';f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','").concat(o,"');;\n    window.flushDataLayerQueue();\n              };");return c(r.a.Fragment,null,c("script",{key:"app-defaults",dangerouslySetInnerHTML:{__html:"\n        window.__V1C3 = {};\n        window.__APP_STATE = {};\n        window.flushDataLayerQueue = function(){};\n    "}}),c("script",n>0?{key:"gtm-script",dangerouslySetInnerHTML:{__html:"\n            ".concat(i,";\n            window.setTimeout(loadGTM,").concat(n,");\n            ")}}:{key:"gtm-script",dangerouslySetInnerHTML:{__html:"\n      ".concat(i,"\n      loadGTM();\n      ")}}))};t.b=a}}]);
//# sourceMappingURL=3d4554d99a3fb86dd711deddba13bce44a93b1a7.c8355951c4831e894f93.js.map