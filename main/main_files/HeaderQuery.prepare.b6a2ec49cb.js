__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={document:void 0,getDocument:()=>r(d[1])(d[0],"./Header-document.niobe").then(babelHelpers.interopRequireWildcard).then(t=>t.default),name:'Header',type:'query',operationId:'b77500d382ece93907d870e42773e95234c3b410994006834ae7580ed4966da6'};e.default=t}),"1234e8",["81cc5f","b8ad06"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.getHeaderQueryRef=l;var t=babelHelpers.interopRequireDefault(r(d[0])),n=r(d[1]),c=babelHelpers.interopRequireDefault(r(d[2]));function l(l,s,o,u,p,h="EXPLORE"){const f=t.default.parse(u.search);return l.preloadQuery({query:c.default,variables:{cdnCacheSafe:o,hasLoggedIn:'1'===s('hli'),isInitialLoad:!0,source:h},fetchPolicy:'standby',skip:p||(0,n.isHostURL)(u.pathname,f)||(0,n.isExperienceHostURL)(u.pathname,f)})}var s=({cookie:t,initialPageCDNCached:n,location:c,niobeMinimalistClient:s,getRenderingState:o,customPrepareNiobeData:u})=>{const p=o();let h=!1;c.pathname.match(/experiences\/\d+/)&&'client-render'!==p&&(h=!0),c.pathname.match(/book\/(experiences|stays)\/\d+/)&&(h=!0),'/giftcards'===c.pathname&&(h=!0);let f=n;return'client-render'!==p&&'/'===c.pathname&&(f=!0),u.launchPdpUncaching&&'client-render'!==p&&(f=!0),{headerQueryRef:l(s,t,f,c,h)}};e.default=s}),"2ca45a",["d2b390","31172d","1234e8"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.C3PI_URLS=void 0,e.isExperienceHostURL=function(t,n){return!!('true'===(null==n?void 0:n.exp_host)||'experience_host'===(null==n?void 0:n.inbox_type)||null!=t&&t.startsWith('/messaging/exp-host'))},e.isHostURL=function(t,n){return!!('true'===(null==n?void 0:n.host)||'host'===(null==n?void 0:n.inbox_type)||null!=t&&t.startsWith('/hosting/thread')||null!=t&&t.startsWith('/messaging/hosting'))};var t=r(d[0]);const n={[t.InboxType.EXPERIENCE_HOST]:t=>"/hosting/p/inbox/exp"+(t?`/folder/all/thread/${t}/details`:''),[t.InboxType.HOST]:t=>"/hosting/p/inbox"+(t?`/folder/all/thread/${t}/details`:''),[t.InboxType.GUEST]:t=>"/guest/inbox"+(t?"/"+t:'')};e.C3PI_URLS=n;t.InboxType.EXPERIENCE_HOST,t.InboxType.HOST,t.InboxType.GUEST}),"31172d",["ff76c9"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SEND_STATUS=e.SEND_IMAGE_STANDARD_ACTION=e.SCROLL_BAR_WIDTH=e.ROLES=e.MESSAGE_INTERVAL_THRESHOLD=e.MAX_TOAST_WIDTH=e.MAX_CONTENT_WIDTH=e.MARK_THREAD_READ_DELAY=e.InboxType=e.IMAGE_URL_PREFIX_LEGACY=e.FilterType=e.FULL_IMAGE_PREFIX=e.DEFAULT_PROFILE_PIC=e.BESSIE_ACCOUNT_TYPES=e.BACKGROUND_COLOR=e.ACCEPTED_FILE_TYPES=void 0;e.IMAGE_URL_PREFIX_LEGACY='/support-api/messaging';e.FULL_IMAGE_PREFIX='https://a0.muscache.com';e.DEFAULT_PROFILE_PIC='https://a0.muscache.com/defaults/user_pic-225x225.png?v=3';e.MESSAGE_INTERVAL_THRESHOLD=3e5;e.MARK_THREAD_READ_DELAY=1e3;let E;e.SEND_IMAGE_STANDARD_ACTION='messaging__open_image_upload_dialog',e.BESSIE_ACCOUNT_TYPES=E,(function(E){E.AGENT="agent",E.USER="user",E.SERVICE="service",E.EXTERNAL_SERVICE="external_service"})(E||(e.BESSIE_ACCOUNT_TYPES=E={}));e.SCROLL_BAR_WIDTH=16;e.MAX_CONTENT_WIDTH=616;e.MAX_TOAST_WIDTH=325;e.ACCEPTED_FILE_TYPES=['image/jpg','image/jpeg','image/png','image/gif'];let _;e.BACKGROUND_COLOR='#FFFFFF',e.ROLES=_,(function(E){E.HOST="HOST"})(_||(e.ROLES=_={}));let T;e.SEND_STATUS={DRAFT:'draft',FAILED:'failed',NONE:'none',SENDING:'sending',SENT:'sent'},e.InboxType=T,(function(E){E.GUEST="guest",E.HOST="host",E.EXPERIENCE_HOST="experience_host"})(T||(e.InboxType=T={}));let A;e.FilterType=A,(function(E){E.all="all",E.hidden="hidden",E.unread="unread",E.starred="starred"})(A||(e.FilterType=A={}))}),"ff76c9",[]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/guest-header-query/HeaderQuery.prepare.24051e66b1.js.map