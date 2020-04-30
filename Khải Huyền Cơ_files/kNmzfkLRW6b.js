if (self.CavalryLogger) { CavalryLogger.start_js(["Kw\/py"]); }

__d("CometSearchTypeaheadBaseLoggingProvider",["requireCond","cr:1288453","gkx","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=function(){return Math.random().toString()};a=function(){function a(a){var b=a.context;a=a.log;this.$4=null;this.$5=null;this.$6=!1;this.$3=a;this.$1=b}var c=a.prototype;c.addEvent=function(a){var c=a.action,d=a.entries,e=a.entry;a=a.queryString;var f=String(Date.now());if(!this.$6||this.$4==null){b("recoverableViolation")("Cannot log a new "+c+" event into inactive session on "+this.$1+" surface.","search");return null}this.$2&&this.$2.push({action:c,entries:d?[].concat(d):null,entry:e,queryString:a,sequenceID:f});return{sequenceID:f,sessionID:this.$4}};c.isSessionActive=function(){return this.$6};c.getSessionID=function(){this.$4==null&&b("recoverableViolation")("Logging sessionID requested from "+this.$1+" surface does not exist.","search");return this.$4};c.endSession=function(){var a=this.$5,c=this.$4,d=this.$2;if(a==null||c==null||d==null)return;d=h(d);d={endTimeMs:Date.now(),events:d,sessionID:c,startTimeMs:a};this.$3(d);b("gkx")("1288454")&&(b("cr:1288453")&&b("cr:1288453")(d));this.$6=!1;this.$2=null;this.$5=null};c.startSession=function(a){this.$6=!0;this.$2=[];a=(a=a)!=null?a:g();this.$4=a;var c=Date.now();this.$5=c;if(b("gkx")("1288454")){a={events:[],sessionID:a,startTimeMs:c};b("cr:1288453")&&b("cr:1288453")(a)}};return a}();function h(a){if(a.length<2){b("recoverableViolation")("Logging session can't have less than 2 events","search");return[]}var c=a[0],d=a[1],e=a.slice(2),f=[];if(c.action==="typeahead_appeared"&&d.action==="keystroke"){c=babelHelpers["extends"]({},c,{entries:(c=c.entries)!=null?c:d.entries});(d=f).push.apply(d,[c].concat(e))}else f=[].concat(a);d=[];while(f.length>0){c=f.shift();e=f;a=e[0];d.push(babelHelpers["extends"]({},c,{entries:(e=a==null?void 0:a.entries)!=null?e:c.entries}))}return d}e.exports=a}),null);
__d("CometTypeaheadDataEntryWithMetaData",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){var b=a.key,c=a.label,d=a.metaData;a=a.rawData;this.$1=b;this.$2=c;this.$4=a;this.$3=d}var b=a.prototype;b.getKey=function(){return this.$1};b.getLabel=function(){return this.$2};b.getMetaData=function(){return this.$3};b.getRawData=function(){return this.$4};return a}();e.exports=a}),null);
__d("SearchTypeaheadLoggingSessionFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("search_typeahead_logging_session");e.exports=a}),null);
__d("cometSearchTypeaheadFalcoLoggingSessionLogBuilder",["SearchTypeaheadLoggingSessionFalcoEvent"],(function(a,b,c,d,e,f){"use strict";var g=12;function a(a,c){return function(d){var e=h(a,c,d);b("SearchTypeaheadLoggingSessionFalcoEvent").logImmediately(function(){return{session:e}})}}function h(a,b,c){var d=c.endTimeMs,e=c.events,f=c.sessionID;c=c.startTimeMs;var h=e.filter(function(a,b){return b<Math.floor(g/2)||b>=e.length-Math.ceil(g/2)});return{context:a,end_time_ms:d,events:h.map(i),scoped_entity_id:b,session_id:f,start_time_ms:c}}function i(a){var b=a.action,c=a.entries,d=a.entry,e=a.queryString;a=a.sequenceID;return{action_type:b,entries:c!=null?c.map(j):[],entry:d!=null&&c!=null?j(d,c.indexOf(d)):null,query:(b=e)!=null?b:"",sequence_id:a}}function j(a,b){var c,d=a.getMetaData();return{entity_id:d==null?void 0:(c=d.logging)==null?void 0:c.entityID,entity_type:d==null?void 0:(c=d.logging)==null?void 0:c.entityType,id:a.getKey(),index_in_group:b,label:a.getLabel(),logging_id:d==null?void 0:(c=d.logging)==null?void 0:c.loggingID,sequence_id:d==null?void 0:(b=d.logging)==null?void 0:b.sequenceID,source:k(a)}}function k(a){a=a.getMetaData();if(a==null)return"backend";a=a.markers;if(a.has("see_all"))return"escape";if(a.has("echo"))return"echo";if(a.has("recent"))return"recent_searches";return a.has("bootstrap")?"bootstrap":"backend"}e.exports=a}),null);
__d("WorkGalahadImage.react",["Image.react","React","WIGBackgroundImage.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={wrapper:{position:"hal92y33",zIndex:"rpt3ley2"},root:{position:"hal92y33",overflowX:"ib0kwflm",overflowY:"qbbcxcfp"},border:{bottom:"qf3vbteg",boxSizing:"tdgv6ycz",end:"s000wco0",position:"i8ovu4tj",start:"akkqc5af",top:"xdo5vwd7",borderTop:"nkzg8k6n",borderEnd:"sf1ngpnb",borderBottom:"ph71f2of",borderStart:"eqxa6x9z",zIndex:"rk5zydmx"},backgroundImageContainer:{bottom:"qf3vbteg",boxSizing:"tdgv6ycz",end:"s000wco0",position:"i8ovu4tj",start:"akkqc5af",top:"xdo5vwd7"},rounded:{borderTopStartRadius:"qcplsvq8",borderTopEndRadius:"lbj7a7zq",borderBottomEndRadius:"qd9vfp32",borderBottomStartRadius:"ex16komz"},circle:{borderTopStartRadius:"fviam4sw",borderTopEndRadius:"e3xoa9gt",borderBottomEndRadius:"c6boxllp",borderBottomStartRadius:"mukvf3dn"},greyedOut:{backgroundColor:"ba23nu16"},image:{backgroundSize:"f0pa513o"},squareImageSpacer:{display:"nfce3akt",paddingBottom:"nw4knjib"},content:{bottom:"qf3vbteg",boxSizing:"tdgv6ycz",end:"s000wco0",position:"i8ovu4tj",start:"akkqc5af",top:"xdo5vwd7",zIndex:"b5n1fmi2"}};function a(a){var c=a.alt,d=a.children,e=a.greyedOut;e=e===void 0?!1:e;var f=a.height,j=a.src,k=a.type,l=a.width;a=a.xstyle;var m;typeof j==="string"?m=h.jsx(b("WIGBackgroundImage.react"),{alt:c!=null?c:void 0,src:j}):m=h.jsx(b("Image.react"),{alt:c,className:(g||(g=b("stylex")))(i.image),height:f,src:j,width:l});return h.jsxs("div",{className:(g||(g=b("stylex")))(i.wrapper,k==="rounded"&&i.rounded,k==="circle"&&i.circle,a),children:[h.jsxs("div",{className:g(i.root,k==="rounded"?i.rounded:null,k==="circle"?i.circle:null,e?i.greyedOut:null),style:{height:f,width:l},children:[h.jsx("div",{className:g(i.border,k==="rounded"?i.rounded:null,k==="circle"?i.circle:null)}),h.jsx("div",{className:g(i.backgroundImageContainer),children:m}),f==null&&h.jsx("div",{className:(g||(g=b("stylex")))(i.squareImageSpacer)})]}),d!=null?h.jsx("div",{className:(g||(g=b("stylex")))(i.content),children:d}):null]})}e.exports=a}),null);
__d("TypeaheadEarlyUserRequest",["AsyncRequest","XWarmUserRequestArgsController"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this._core=a.getCore(),this._listener=null}var c=a.prototype;c.enable=function(){this._listener=this._core.subscribe("focus",function(a,c){new(b("AsyncRequest"))().setURI(b("XWarmUserRequestArgsController").getURIBuilder().getURI()).send(),this.disable()}.bind(this))};c.disable=function(){this._listener&&this._core.unsubscribe(this._listener)};return a}();e.exports=a}),null);
__d("SimpleStructuredInput",["csx","ArbiterMixin","DataStore","DOM","Event","FacebarStructuredText","FlipDirection","Input","Parent","getActiveElement","mixin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this)||this;d.$SimpleStructuredInput1=c;d.$SimpleStructuredInput2=b("DOM").find(c,"._1frb");d.$SimpleStructuredInput3=b("DOM").find(c,"._5eay");b("DataStore").set(c,"SimpleStructuredInput",babelHelpers.assertThisInitialized(d));d.init();return d}var d=c.prototype;d.init=function(){var a=this,c=function(b){return a.inform(b.type)};b("Event").listen(this.$SimpleStructuredInput2,"blur",c);b("Event").listen(this.$SimpleStructuredInput2,"focus",c);b("Event").listen(this.$SimpleStructuredInput2,"input",function(){b("FlipDirection").setDirection(a.$SimpleStructuredInput2,1,!0),a.inform("change"),b("requestAnimationFrame")(function(){a.$SimpleStructuredInput2.scrollLeft>0&&a.clearHint()})});this.inform("init",null,"persistent")};d.clearHint=function(){b("Input").setValue(this.$SimpleStructuredInput3,"")};d.setHint=function(a){a=a.map(function(a){return a.text}).join("");var c=b("Input").getValue(this.$SimpleStructuredInput2);this.hasFocus()&&c.length>0&&a.toLowerCase().indexOf(c.toLowerCase())===0&&!this.hasTextOverflow()?b("Input").setValue(this.$SimpleStructuredInput3,c+a.slice(c.length)):this.clearHint()};d.focus=function(){this.$SimpleStructuredInput2.focus()};d.blur=function(){this.$SimpleStructuredInput2.blur(),this.setHint([])};d.hasTextOverflow=function(){return this.$SimpleStructuredInput2.offsetWidth!==this.$SimpleStructuredInput2.scrollWidth};d.hasFocus=function(){return b("DOM").contains(this.$SimpleStructuredInput1,b("getActiveElement")())};d.setStructure=function(a,c){c===void 0&&(c=!1);a=a.map(function(a){return a.text});b("Input").setValue(this.$SimpleStructuredInput2,a.join(""));c!==!0&&this.inform("change")};d.getStructure=function(){return b("FacebarStructuredText").fromString(b("Input").getValue(this.$SimpleStructuredInput2)).toStruct()};d.getSelection=function(){return{offset:this.$SimpleStructuredInput2.selectionStart,length:this.$SimpleStructuredInput2.selectionEnd-this.$SimpleStructuredInput2.selectionStart}};d.setSelection=function(a){this.hasFocus()&&(this.$SimpleStructuredInput2.setSelectionRange(a.offset,a.offset+a.length),this.inform("select"))};d.isSelectionAtEnd=function(){var a=this.getSelection().offset,c=b("Input").getValue(this.$SimpleStructuredInput2).length;return a>=c};d.selectAll=function(){this.setSelection({offset:0,length:b("Input").getValue(this.$SimpleStructuredInput2).length})};c.getInstance=function(a){a=b("Parent").bySelector(a,"._5eaz");if(!(a instanceof HTMLElement))throw new Error("No DOMElement structured input found using");return b("DataStore").get(a,"SimpleStructuredInput")||new c(a)};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("FluxHooks",["FluxContainerSubscriptions","React","shallowEqual","useSubscriptionValue"],(function(a,b,c,d,e,f){"use strict";d=b("React");var g=d.useCallback,h=d.useEffect,i=d.useRef,j=d.useState;function a(a,c){var d=g(function(d){var e=c(a);return d!=null&&b("shallowEqual")(d,e)?d:e},[a,c]),e=g(function(b){var c=a.addListener(b);return function(){return c.remove()}},[a]);return b("useSubscriptionValue")({getCurrentValue:d,subscribe:e})}function c(a,c,d){var e=g(function(c){var d=a(c);return c!=null&&b("shallowEqual")(c,d)?c:d},d),f=g(function(a){if(c.length===0)return function(){};var d=new(b("FluxContainerSubscriptions"))("useCalculateState");d.setStores(c);d.addListener(a);return function(){return d.reset()}},c);d=j(function(){return e()});var k=d[0],l=d[1];d=function(){l(e)};var m=i(d);m.current=d;var n=j(function(){return e}),o=n[0];n=n[1];o!==e&&(n(function(){return e}),d());h(function(){var a=!1,b=function(){a||m.current()},c=f(b);m.current();return function(){a=!0,c()}},[m,f]);return[k,l]}e.exports={useFluxStore:a,useCalculateState:c}}),null);
__d("SearchSuggestionsHighlighter",["React","escapeRegex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function h(a,c,d,e,f){a=b("escapeRegex")(f?a:a.trim());e=e?"gi":"g";var h=" "+c,i=[];f=f?new RegExp("( "+a.split(/\s+/).join("| ")+")",e):new RegExp("("+a.split(/\s+/).join("|")+")",e);a=0;e=null;while(!0){e=f.exec(h);if(e==null)break;var j=h.substring(a,e.index);a===0&&(j=j.trimLeft());d?i.push(j):i.push(g.jsx("strong",{children:j},c+"-"+e.index));j=e[0];e.index===0&&(j=j.trimLeft());a=e.index+e[0].length;d?i.push(g.jsx("strong",{children:j},c+"-"+a)):i.push(j)}d?i.push(h.substring(a,h.length)):i.push(g.jsx("strong",{children:h.substring(a,h.length)},c+"-"+h.length));return i}function a(a,b,c){c===void 0&&(c=!0);return h(a,b,!0,!1,c)}function c(a,b,c){c===void 0&&(c=!0);return h(a,b,!1,!1,c)}function d(a,b,c){c===void 0&&(c=!0);return h(a,b,!0,!0,c)}function f(a,b,c){c===void 0&&(c=!0);return h(a,b,!1,!0,c)}e.exports={highlightMatch:a,highlightNonMatch:c,highlightMatchCaseInsensitive:d,highlightNonMatchCaseInsensitive:f}}),null);