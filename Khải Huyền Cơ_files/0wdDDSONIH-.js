if (self.CavalryLogger) { CavalryLogger.start_js(["NsNtU"]); }

__d("UFI2CommentsCountTooltipContentQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"feedbackTargetID",type:"ID!"}],b=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],c={alias:null,args:null,concreteType:"TopLevelCommentsConnection",kind:"LinkedField",name:"top_level_comments",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"total_count",storageKey:null}],storageKey:null},d=[{kind:"Literal",name:"first",value:19},{kind:"Literal",name:"orderby",value:["is_viewer","is_viewer_friend"]}],e={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"UFI2CommentsCountTooltipContentQuery",selections:[{alias:null,args:b,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[c,{alias:null,args:d,concreteType:"CommentersConnection",kind:"LinkedField",name:"commenters",plural:!1,selections:[e,{alias:null,args:null,concreteType:"CommentersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[f],storageKey:null}],storageKey:null}],storageKey:'commenters(first:19,orderby:["is_viewer","is_viewer_friend"])'}],storageKey:null}],type:"Query"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"UFI2CommentsCountTooltipContentQuery",selections:[{alias:null,args:b,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[c,{alias:null,args:d,concreteType:"CommentersConnection",kind:"LinkedField",name:"commenters",plural:!1,selections:[e,{alias:null,args:null,concreteType:"CommentersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f,g],storageKey:null}],storageKey:null}],storageKey:'commenters(first:19,orderby:["is_viewer","is_viewer_friend"])'},g],storageKey:null}]},params:{id:"1905577896176772",metadata:{},name:"UFI2CommentsCountTooltipContentQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("UFI2ReactionIconTooltipContentQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"feedbackTargetID",type:"ID!"},{defaultValue:null,kind:"LocalArgument",name:"reactionType",type:"FeedbackReactionType"}],b=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],c=[{kind:"Literal",name:"first",value:19},{kind:"Literal",name:"orderby",value:["is_viewer","is_viewer_friend"]},{kind:"Variable",name:"reaction_type",variableName:"reactionType"}],d={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"UFI2ReactionIconTooltipContentQuery",selections:[{alias:null,args:b,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:c,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[d,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[e],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"UFI2ReactionIconTooltipContentQuery",selections:[{alias:null,args:b,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:c,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[d,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e,f],storageKey:null}],storageKey:null},f],storageKey:null}]},params:{id:"1997261303640763",metadata:{},name:"UFI2ReactionIconTooltipContentQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("UFI2ReactionsCountTooltipContentQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"feedbackTargetID",type:"ID!"}],b=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],c=[{kind:"Literal",name:"first",value:19},{kind:"Literal",name:"orderby",value:["is_viewer","is_viewer_friend","importance"]}],d={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"UFI2ReactionsCountTooltipContentQuery",selections:[{alias:null,args:b,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:c,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[d],storageKey:null}],storageKey:'reactors(first:19,orderby:["is_viewer","is_viewer_friend","importance"])'}],storageKey:null}],type:"Query"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"UFI2ReactionsCountTooltipContentQuery",selections:[{alias:null,args:b,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:c,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,e],storageKey:null}],storageKey:'reactors(first:19,orderby:["is_viewer","is_viewer_friend","importance"])'},e],storageKey:null}]},params:{id:"1579110358832101",metadata:{},name:"UFI2ReactionsCountTooltipContentQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("UFI2SharesCountTooltipContentQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"feedbackTargetID",type:"ID!"}],b=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],c={alias:null,args:null,concreteType:"ResharesOfContentConnection",kind:"LinkedField",name:"reshares",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"UFI2SharesCountTooltipContentQuery",selections:[{alias:null,args:b,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[c,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"legacy_resharers",plural:!0,selections:[d],storageKey:null}],storageKey:null}],type:"Query"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"UFI2SharesCountTooltipContentQuery",selections:[{alias:null,args:b,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[c,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"legacy_resharers",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,e],storageKey:null},e],storageKey:null}]},params:{id:"2006404236105040",metadata:{},name:"UFI2SharesCountTooltipContentQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("withReflowOnMountOrUpdate",["Arbiter","React","queryThenMutateDOM","withDisplayName"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return function(c){babelHelpers.inheritsLoose(d,c);function d(){return c.apply(this,arguments)||this}var e=d.prototype;e.componentDidMount=function(){b("queryThenMutateDOM")(void 0,function(){return b("Arbiter").inform("reflow")})};e.componentDidUpdate=function(){b("queryThenMutateDOM")(void 0,function(){return b("Arbiter").inform("reflow")})};e.render=function(){return g.jsx(a,babelHelpers["extends"]({},this.props))};return d}(g.Component)}e.exports=b("withDisplayName")(a)}),null);
__d("UFI2TooltipNamesList.react",["fbt","List.react","NumberFormat","React","qex","withReflowOnMountOrUpdate"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c,d=a.names,e=a.totalCount;a=babelHelpers.objectWithoutPropertiesLoose(a,["names","totalCount"]);c=((c=b("qex")._("1113951"))!=null?c:!1)&&((c=b("qex")._("1115760"))!=null?c:!1);return h.jsxs(b("List.react"),babelHelpers["extends"]({},a,{border:"none",spacing:"none",children:[d.map(function(a,b){return h.jsx("li",{children:a},b)}),e>d.length&&h.jsx("li",{children:c?g._("and more\u2026"):g._("and {reactionCount} more\u2026",[g._param("reactionCount",b("NumberFormat").formatInteger(e-d.length))])},"and more")]}))}e.exports=b("withReflowOnMountOrUpdate")(a)}),null);
__d("withRefetchOnVisible",["React","RelayModern"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("RelayModern").fetchQuery;function a(a,b){return function(c){babelHelpers.inheritsLoose(d,c);function d(){return c.apply(this,arguments)||this}var e=d.prototype;e.$2=function(){var a=this.props,c=a.environment;a=a.queryVariables;h(c,b,a)};e.componentDidMount=function(){var a=this;this.$1=this.props.addVisibilityChangeListener(function(b){b&&a.$2()})};e.componentWillUnmount=function(){this.$1!=null&&(this.$1.remove(),this.$1=null)};e.render=function(){var b=this.props;b.addVisibilityChangeListener;b=babelHelpers.objectWithoutPropertiesLoose(b,["addVisibilityChangeListener"]);return g.jsx(a,babelHelpers["extends"]({},b))};return d}(g.Component)}e.exports=a}),null);
__d("UFI2CommentsCountTooltipContent.react",["fbt","React","RelayModern","UFI2TooltipNamesList.react","withRefetchOnVisible","UFI2CommentsCountTooltipContentQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");b("RelayModern").graphql;var j=b("RelayModern").QueryRenderer,k=h!==void 0?h:h=b("UFI2CommentsCountTooltipContentQuery.graphql");function l(a){var c,d=a.error;a=a.props;if(d)return null;if(a==null)return g._("Loading\u2026");d=a.feedback;a=(a=d==null?void 0:(a=d.commenters)==null?void 0:a.count)!=null?a:0;c=((c=d==null?void 0:(c=d.commenters)==null?void 0:c.edges)!=null?c:[]).map(function(a){return(a=a.node)==null?void 0:a.name}).filter(Boolean);if(c.length===0)return g._("No visible comments");d=(d=d==null?void 0:(d=d.top_level_comments)==null?void 0:d.total_count)!=null?d:0;d=d>50?d:a;return i.jsx(b("UFI2TooltipNamesList.react"),{"data-testid":void 0,names:c,totalCount:d})}function a(a){var b=a.environment;a=a.queryVariables;return i.jsx(j,{environment:b,fetchPolicy:"store-and-network",query:k,render:l,variables:a})}e.exports=b("withRefetchOnVisible")(a,k)}),null);
__d("UFI2ReactionIconTooltipContent.react",["invariant","React","RelayModern","UFI2ReactionIconTooltipTitle.react","UFI2TooltipNamesList.react","withRefetchOnVisible","UFI2ReactionIconTooltipContentQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");b("RelayModern").graphql;var j=b("RelayModern").QueryRenderer,k=h!==void 0?h:h=b("UFI2ReactionIconTooltipContentQuery.graphql");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){var c=a.error;a=a.props;if(c)return null;c=d.props;var e=c.i18nReactionName,f=c.placeholder;c=c.reactionType;c!=null&&c!==""||g(0,5481);if(!a)return f;f=(c=(c=a.feedback)==null?void 0:(f=c.reactors)==null?void 0:f.count)!=null?c:0;a=((c=(c=a.feedback)==null?void 0:(a=c.reactors)==null?void 0:a.nodes)!=null?c:[]).map(function(a){return a.name}).filter(Boolean);return i.jsxs("div",{"data-testid":void 0,children:[i.jsx(b("UFI2ReactionIconTooltipTitle.react"),{children:e}),i.jsx(b("UFI2TooltipNamesList.react"),{names:a,totalCount:f})]})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,b=a.environment;a=a.queryVariables;return i.jsx(j,{environment:b,fetchPolicy:"store-and-network",query:k,render:this.$1,variables:a})};return c}(i.Component);e.exports=b("withRefetchOnVisible")(a,k)}),null);
__d("UFI2ReactionsCountTooltipContent.react",["fbt","React","RelayModern","UFI2TooltipNamesList.react","withRefetchOnVisible","UFI2ReactionsCountTooltipContentQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var k=h!==void 0?h:h=b("UFI2ReactionsCountTooltipContentQuery.graphql");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){var c=a.error;a=a.props;if(c)return null;c=d.props.reactionCount;if(!a)return g._("Loading\u2026");a=((a=(a=a.feedback)==null?void 0:(a=a.reactors)==null?void 0:a.nodes)!=null?a:[]).map(function(a){return a.name}).filter(Boolean);return i.jsx(b("UFI2TooltipNamesList.react"),{"data-testid":void 0,names:a,totalCount:c})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,b=a.environment;a=a.queryVariables;return i.jsx(j,{environment:b,fetchPolicy:"store-and-network",query:k,render:this.$1,variables:a})};return c}(i.Component);e.exports=b("withRefetchOnVisible")(a,k)}),null);
__d("UFI2SharesCountTooltipContent.react",["fbt","OnVisible.react","React","RelayModern","SubscriptionsHandler","UFI2TooltipNamesList.react","clearTimeout","setTimeoutAcrossTransitions","UFI2SharesCountTooltipContentQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var k=500,l=h!==void 0?h:h=b("UFI2SharesCountTooltipContentQuery.graphql");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={renderContent:!1},d.$1=new(b("SubscriptionsHandler"))(),d.$3=function(){d.state.renderContent===!1&&(d.$1.release(),d.$1.engage())},d.$4=function(){d.state.renderContent===!1&&d.$2()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(){var a=this,c=b("setTimeoutAcrossTransitions")(function(){a.setState({renderContent:!0})},k);this.$1.addSubscriptions({remove:function(){b("clearTimeout")(c)}})};d.componentDidMount=function(){this.$2()};d.componentWillUnmount=function(){this.$1.release()};d.$5=function(a){var c=a.error;a=a.props;if(c)return null;if(!a)return g._("Loading\u2026");c=(c=(c=a.feedback)==null?void 0:(c=c.reshares)==null?void 0:c.count)!=null?c:0;a=((a=(a=a.feedback)==null?void 0:a.legacy_resharers)!=null?a:[]).map(function(a){return a==null?void 0:a.name}).filter(Boolean);return a.length===0&&c===0?g._("There are no public shares."):i.jsx(b("UFI2TooltipNamesList.react"),{"data-testid":void 0,names:a,totalCount:c})};d.render=function(){var a=this.props,c=a.environment;a=a.queryVariables;return i.jsx(b("OnVisible.react"),{onHidden:this.$3,onVisible:this.$4,children:this.state.renderContent===!0?i.jsx(j,{environment:c,fetchPolicy:"store-and-network",query:l,render:this.$5,variables:a}):i.jsx(i.Fragment,{children:g._("Loading\u2026")})})};return c}(i.PureComponent);e.exports=a}),null);