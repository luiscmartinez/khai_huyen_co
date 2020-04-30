if (self.CavalryLogger) { CavalryLogger.start_js(["2gVTf"]); }

__d("CometHovercardEntityRenderer_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometHovercardEntityRenderer_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Actor"};e.exports=a}),null);
__d("CometShortenedExternalUrlEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometShortenedExternalUrlEntityRenderer_entity",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl"}],type:"Entity"};e.exports=a}),null);
__d("CometVideoTimeIndexEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometVideoTimeIndexEntityRenderer_entity",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex"}],type:"Entity"};e.exports=a}),null);
__d("useCometFeedStoryMatchDebugger_iCometStorySection.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometFeedStoryMatchDebugger_iCometStorySection",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection"};e.exports=a}),null);
__d("CometFeedStoryAudienceStrategy_audience$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{derivedFrom:"CometFeedStoryAudienceStrategy_audience"},name:"CometFeedStoryAudienceStrategy_audience$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometFeedStoryAudienceStrategy_audience.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryAudienceStrategy_audience",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"}],type:"CometFeedStoryAudienceStrategy"};e.exports=a}),null);
__d("CometFeedStoryTimestampStrategy_timestamp$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"val",storageKey:null}],b={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"attributes",plural:!0,selections:a,storageKey:null};a={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"styles",plural:!0,selections:a,storageKey:null};var c={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"CometFeedStoryTimestampStrategy_timestamp"},name:"CometFeedStoryTimestampStrategy_timestamp$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"creation_time",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"ghl_label",plural:!1,selections:[b,a,c,d,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[b,a,c,d,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[b,a,c,d],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryTimestampStrategy_timestamp.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryTimestampStrategy_timestamp",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"creation_time",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"ghl_label",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometGHLScrambledLabel_label"}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"}],type:"CometFeedStoryTimestampStrategy"};e.exports=a}),null);
__d("CometUFICommentBodyTextWithEntities_comment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentBodyTextWithEntities_comment",selections:[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_locally_composed",storageKey:null}]}],type:"Comment"};e.exports=a}),null);
__d("CometUFICommentBodyTextWithEntities_textWithEntities$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"CometUFICommentBodyTextWithEntities_textWithEntities"},name:"CometUFICommentBodyTextWithEntities_textWithEntities$normalization",selections:[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[a,b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[c,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[c,{kind:"InlineFragment",selections:[d,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User"},d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[c,d,{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null}],type:"Page"},{kind:"InlineFragment",selections:[e],type:"User"},{kind:"InlineFragment",selections:[e,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group"}],storageKey:null},a,b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentBodyTextWithEntities_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentBodyTextWithEntities_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities"};e.exports=a}),null);
__d("CometEntryPointDialogTrigger.react",["React","useCometEntryPointDialog"],(function(a,b,c,d,e,f){"use strict";b("React");c=b("React");var g=c.useCallback;function a(a){var c=a.children,d=a.dialogEntryPoint,e=a.fallback,f=a.onHide,h=a.preloadParams,i=a.preloadTrigger,j=a.otherProps,k=a.onShow,l=k===void 0?function(){}:k,m=a.tracePolicy;k=b("useCometEntryPointDialog")(d,h,i,e);var n=k[0];k[1];a=k[2];d=k[3];h=k[4];i=g(function(){n(j,f,m),l()},[n,j,f,m,l]);return c(i,a,d,h)}e.exports=a}),null);
__d("canRenderHovercardForGraphQLEntityType",[],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){return["Event","Page","Group","GroupAnonAuthorProfile","User"].includes(a)}}),null);
__d("CometHovercardEntityRenderer",["ActorHovercard.react","CometRelay","React","canRenderHovercardForGraphQLEntityType","CometHovercardEntityRenderer_actor.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("React");g!==void 0?g:g=b("CometHovercardEntityRenderer_actor.graphql");a=function(a,c){if(b("canRenderHovercardForGraphQLEntityType")(c.__typename)===!1)return a;return c.id==null?a:h.jsx(b("ActorHovercard.react"),{actorID:c.id,display:"inline",children:function(b){return h.jsx("span",{ref:b,children:a})}})};e.exports=a}),null);
__d("CometShortenedExternalUrlEntityRenderer",["CometRelay","URITruncator","CometShortenedExternalUrlEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;g!==void 0?g:g=b("CometShortenedExternalUrlEntityRenderer_entity.graphql");var h=60;a=function(a,c){if(c.external_url==null)return a;c=b("URITruncator")(c.external_url,h);return c.length<[a].join("").length?c:a};e.exports=a}),null);
__d("CometUFIVideoPlayerContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext;d=c([null,function(){}]);e.exports=d}),null);
__d("useCometUFIVideoPlayerStateAndController",["CometUFIVideoPlayerContext","React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useContext;function a(){var a=g(b("CometUFIVideoPlayerContext")),c=a[0];a[1];return c}e.exports=a}),null);
__d("CometVideoTimeIndexEntityRenderer",["CometLink.react","CometRelay","React","useCometUFIVideoPlayerStateAndController","CometVideoTimeIndexEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("React");g!==void 0?g:g=b("CometVideoTimeIndexEntityRenderer_entity.graphql");a=function(a,c){var d=b("useCometUFIVideoPlayerStateAndController")();return c.time_index==null||d==null?a:h.jsx(b("CometLink.react"),{onClick:function(){c.time_index!=null&&d.controller.seek(c.time_index)},ref:function(a){var b=null;a&&(a.onmousedown=function(){b=document.activeElement},a.onmouseup=function(){a.blur(),b&&b.focus()})},children:h.jsx("strong",{children:a})})};e.exports=a}),null);
__d("CometHighlightTransform",["React","baseTextTransformAllStrings","escapeRegex","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a===void 0?{}:a;var c=a.matchSubstrings,d=c===void 0?!1:c;c=a.matches;var e=c===void 0?[]:c,f=0;return function(a){return b("baseTextTransformAllStrings")(a,function(a,b){return h(e,d,a,b+":"+String(f++))})}}function h(a,c,d,e){var f=[];h(d);return g.jsx("span",{children:f},"highlight_container_"+e);function h(d,i){i===void 0&&(i=0);if(d.length===0)return;var j=null,k=null;a.forEach(function(a){var e;if(c)e=d.search(new RegExp(b("escapeRegex")(a),"i"));else{var f="(^|\\s|\\(|'|\"|,|;)",g="($|\\s|\\)|\\.|'|\"|!|,|;|\\?)";f=new RegExp(f+b("escapeRegex")(a)+g,"i");e=d.search(f);if(e>-1){g=d.match(f);g!=null&&(e+=g[0].search(new RegExp(b("escapeRegex")(a),"i")))}}e>-1&&(j==null||e<j||k!=null&&e===j&&a.length>k.length)&&(j=e,k=d.slice(e,e+a.length))});if(j!==null&&k!==null){var l=g.jsx("span",{className:"diy96o5h",children:k},"h_"+e+"_"+i),m=g.jsx("span",{children:d.slice(0,j)},"bh_"+e+"_"+i);j>0&&f.push(m);f.push(l);m=d.slice(j+k.length);h(m,i+1)}else{l=g.jsx("span",{children:d},"rt_"+e+"_"+i);f=[].concat(f,[l])}}}e.exports=a}),null);
__d("CometFeedStoryMetaSectionMiddot.react",["Middot.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(){return g.jsx("span",{className:"jpp8pzdo",children:g.jsx(b("Middot.react"),{})})}e.exports=a}),null);
__d("CometFeedStoryMatchDebuggerDispatcherContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c={};d={add:function(a){},remove:function(a){}};e.exports=a.createContext(d)}),null);
__d("useCometFeedStoryMatchDebugger",["CometFeedStoryMatchDebuggerDispatcherContext","CometRelay","React","useCometFeedStoryMatchDebugger_iCometStorySection.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment;c=b("React");var i=c.useContext,j=c.useEffect;function a(a){a=h(g!==void 0?g:g=b("useCometFeedStoryMatchDebugger_iCometStorySection.graphql"),a);var c=a.__typename,d=a.is_prod_eligible,e=i(b("CometFeedStoryMatchDebuggerDispatcherContext"));j(function(){if(c!=null&&d===!1){e.add(c);return function(){e.remove(c)}}},[e,d,c])}e.exports=a}),null);
__d("CometFeedStoryAudienceStrategy.react",["ix","CometFeedStoryMetaSectionMiddot.react","CometRelay","CometTooltip.react","React","TetraIcon.react","fbicon","stylex","unrecoverableViolation","useCometFeedStoryMatchDebugger","CometFeedStoryAudienceStrategy_audience.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");function k(a){switch(a){case"acquaintances":return b("fbicon")._(g("588044"),12);case"close_friends":return b("fbicon")._(g("479321"),12);case"event":case"private_event":return b("fbicon")._(g("495077"),12);case"everyone":return b("fbicon")._(g("560118"),12);case"facebook":return b("fbicon")._(g("487657"),12);case"family_list":return b("fbicon")._(g("481924"),12);case"friends":return b("fbicon")._(g("487556"),12);case"friends_except":case"friends_except_acquaintances":return b("fbicon")._(g("500233"),12);case"friends_of_friends":return b("fbicon")._(g("485085"),12);case"specific_friends":return b("fbicon")._(g("784474"),12);case"list_members":case"generic_list":return b("fbicon")._(g("949989"),12);case"good_friends":return b("fbicon")._(g("722855"),12);case"group":return b("fbicon")._(g("573122"),12);case"location_list":return b("fbicon")._(g("481940"),12);case"only_me":return b("fbicon")._(g("497243"),12);case"school_group":case"school_list":return b("fbicon")._(g("481933"),12);case"work_community":case"work_list":return b("fbicon")._(g("481903"),12);case"work_multi_company":return b("fbicon")._(g("785426"),12);case"supporter_exclusive":return b("fbicon")._(g("495338"),12);case"no_icon":case"app_list":case"custom":case"gamer_friends":default:return b("fbicon")._(g("497565"),12)}}function a(a){a=i(h!==void 0?h:h=b("CometFeedStoryAudienceStrategy_audience.graphql"),a.audience);b("useCometFeedStoryMatchDebugger")(a);a=(a=a.story)==null?void 0:a.privacy_scope;if(a==null)throw b("unrecoverableViolation")("scope cannot be null in CometFeedStoryAudienceStrategy","comet_feed");var c=a.description;a=a.icon_image;a=a==null?void 0:a.name;if(c==null||a==null)throw b("unrecoverableViolation")("description and iconImageName cannot be null in CometFeedStoryAudienceStrategy","comet_feed");return j.jsxs(j.Fragment,{children:[j.jsx(b("CometFeedStoryMetaSectionMiddot.react"),{}),j.jsx("span",{className:"ormqv51v l9j0dhe7 q9uorilb",children:j.jsx(b("CometTooltip.react"),{align:"middle",position:"above",tooltip:c,children:j.jsx(b("TetraIcon.react"),{alt:c,color:"secondary",icon:k(a)})})})]})}e.exports=a}),null);
__d("CometFeedARIAProperties.react",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(Object.freeze({}));e.exports=c}),null);
__d("useGHLLinkProps",["React","gkx"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useState,i="#";function a(a){var b=a.href,c=a.onFocus,d=a.onHoverStart;a=h(i);var e=a[0],f=a[1];a=g(function(a){f(b),c!==void 0&&c(a)},[c,b]);var j=g(function(a){f(b),d!==void 0&&d(a)},[b,d]);return{href:e,onFocus:a,onHoverStart:j}}e.exports=b("gkx")("1157984")?a:function(a){return a}}),null);
__d("GHLLink.react",["CometLink.react","React","useGHLLinkProps"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.href,d=a.onFocus,e=a.onHoverStart;a=babelHelpers.objectWithoutPropertiesLoose(a,["href","onFocus","onHoverStart"]);c=b("useGHLLinkProps")({href:c,onFocus:d,onHoverStart:e});return g.jsx(b("CometLink.react"),babelHelpers["extends"]({},c,a))}e.exports=a}),null);
__d("CometFeedStoryTimestampStrategy.react",["requireCond","CometAdPreviewContext","CometFeedARIAProperties.react","CometFeedStoryMetaSectionMiddot.react","cr:1008801","CometRelativeTimestamp.react","CometRelay","CometTimestamp.react","CometTrackingNodeProvider.react","GHLLink.react","React","recoverableViolation","useCometFeedStoryMatchDebugger","useServerTime","CometFeedStoryTimestampStrategy_timestamp.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometAdPreviewContext").useCometAdPreviewContext;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");c=b("React");var k=c.useContext;d=b("React");var l=d.useEffect,m=d.useRef,n=d.useState,o=g!==void 0?g:g=b("CometFeedStoryTimestampStrategy_timestamp.graphql"),p=1e3*60*60*24;function a(a){var c;a=i(o,a.timestamp);b("useCometFeedStoryMatchDebugger")(a);var d=k(b("CometFeedARIAProperties.react")),e=h(),f=b("useServerTime")(),g=(c=a.story)==null?void 0:c.creation_time;c=n(q(f,g==null?0:g).toString());var p=c[0];c[1];var r=m(!1);l(function(){g==null&&!r.current&&(b("recoverableViolation")("time cannot be nullish in CometFeedStoryTimestampStrategy","comet_feed"),r.current=!0)},[g]);if(g==null)return null;c=(c=a.story)==null?void 0:c.url;a=(a=a.story)==null?void 0:a.ghl_label;f=q(f,g).toString();d=j.jsx("span",babelHelpers["extends"]({},d.timestampTargetProps,{ref:d.timestampTargetRef,suppressHydrationWarning:!0,children:!e&&a!=null&&b("cr:1008801")&&p===f?j.jsx(b("cr:1008801"),{label:a,text:f}):f}));return j.jsxs(b("CometTrackingNodeProvider.react"),{trackingNode:229,children:[j.jsx(b("CometFeedStoryMetaSectionMiddot.react"),{}),j.jsx("span",{"data-testid":void 0,children:c!=null?j.jsx(b("GHLLink.react"),{href:c,children:d}):d})]})}function q(a,c){c=new Date(c*1e3);var d=c.valueOf()>a.valueOf(),e=a.valueOf()-c.valueOf()<p;return!d&&e?b("CometRelativeTimestamp.react").getRelativeTimestamp(a,c,"shortened"):b("CometTimestamp.react").getTimestamp(a,c)}e.exports=a}),null);
__d("CometSearchMatchedTermsContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c={matches:[]};e.exports=a.createContext(c)}),null);
__d("useCometUFICommentBodyTransforms",["CometEmojiTransform","CometEmoticonTransform","CometHighlightTransform","CometLineBreakTransform","CometSearchMatchedTermsContext","React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useContext,h=c.useMemo,i=[b("CometEmoticonTransform")(),b("CometEmojiTransform")(),b("CometLineBreakTransform")];function a(){var a=g(b("CometSearchMatchedTermsContext"));return h(function(){return a!=null&&a.matches.length>0?[].concat(i,[b("CometHighlightTransform")({matches:a.matches})]):i},[a])}e.exports=a}),null);
__d("CometUFICommentBodyTextWithEntities.react",["requireCond","CometHovercardEntityRenderer","CometLinkedEntityRenderer","CometRelay","CometShortenedExternalUrlEntityRenderer","CometTextWithEntitiesRelay.react","cr:1408562","React","useCometUFICommentBodyTransforms","CometUFICommentBodyTextWithEntities_comment.graphql","CometUFICommentBodyTextWithEntities_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React"),k={"*":[b("CometLinkedEntityRenderer")],Event:[c=b("CometHovercardEntityRenderer")],ExternalUrl:[b("CometShortenedExternalUrlEntityRenderer")],Group:[c],Page:[c],User:[c],VideoTimeIndex:b("cr:1408562")?[b("cr:1408562")]:[]};function a(a){var c=a.comment,d=a.textWithEntities;a=a.withParagraphs;a=a===void 0?!0:a;c=i(g!==void 0?g:g=b("CometUFICommentBodyTextWithEntities_comment.graphql"),c);d=i(h!==void 0?h:h=b("CometUFICommentBodyTextWithEntities_textWithEntities.graphql"),d);var e=b("useCometUFICommentBodyTransforms")();return d==null?null:j.jsx(b("CometTextWithEntitiesRelay.react"),{maxLength:Boolean(c.is_locally_composed)?void 0:420,maxLines:Boolean(c.is_locally_composed)?void 0:3,renderers:k,textWithEntities:d,transforms:e,truncationStyle:Boolean(c.is_locally_composed)?void 0:"see-more",withLineBreaks:!0,withParagraphs:a})}e.exports=a}),null);