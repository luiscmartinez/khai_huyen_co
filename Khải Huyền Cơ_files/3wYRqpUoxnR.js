if (self.CavalryLogger) { CavalryLogger.start_js(["BPTWh"]); }

__d("MediaManagerInboxTabPermissionCheck",["PageAdminTypes"],(function(a,b,c,d,e,f){"use strict";a=function(a){return a.mediaManagerPageType==="PAGE"&&(a.adminType===b("PageAdminTypes").MANAGER||a.adminType===b("PageAdminTypes").CONTENT_CREATOR||a.adminType===b("PageAdminTypes").MODERATOR)};e.exports={mediaManagerInboxTabPermissionCheck:a}}),null);