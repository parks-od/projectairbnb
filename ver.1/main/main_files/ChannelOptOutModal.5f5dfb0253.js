__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BaseModalHeader=v,e.baseModalHeaderStyleFn=void 0;babelHelpers.interopRequireDefault(r(d[0]));var l=r(d[1]),s=r(d[2]),n=babelHelpers.interopRequireDefault(r(d[3])),t=babelHelpers.interopRequireDefault(r(d[4])),o=r(d[5]);let c,u,x,f,p,h=l=>l;function v({css:t,styles:c,theme:u,children:x,renderTrailing:f,linariaClassNames:p,...h},{headingLevel:v}){const b=(0,s.useCx)(),w=Boolean(v);let y;return x&&(y=(0,o.jsx)("div",{className:b(null==p?void 0:p.ellipsisContent),...(0,l.maybeRwsCss)(t,null==c?void 0:c.ellipsisContent),children:x}),w&&(y=(0,o.jsx)(n.default,{children:y}))),(0,o.jsxs)("header",{...h,className:b(null==p?void 0:p.header),...(0,l.maybeRwsCss)(t,null==c?void 0:c.header),children:[(0,o.jsx)("div",{className:b(null==p?void 0:p.leading),...(0,l.maybeRwsCss)(t,null==c?void 0:c.leading)}),(0,o.jsx)("div",{className:b(null==p?void 0:p.content),...(0,l.maybeRwsCss)(t,null==c?void 0:c.content),children:y}),(0,o.jsx)("div",{className:b(null==p?void 0:p.trailing),...(0,l.maybeRwsCss)(t,null==c?void 0:c.trailing),children:f&&f()})]})}v.contextTypes={headingLevel:t.default};const b={header:(0,s.cssFragment)(c||(c=h`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  `)),leading:(0,s.cssFragment)(u||(u=h`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 16px;
    text-align: left;
  `)),content:(0,s.cssFragment)(x||(x=h`
    overflow: hidden;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
  `)),ellipsisContent:(0,s.cssFragment)(f||(f=h`
    overflow: hidden;
    text-overflow: ellipsis;
  `)),trailing:(0,s.cssFragment)(p||(p=h`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 16px;
    text-align: right;
  `))},w=(0,l.deprecatedExtendableStylesFn)('BaseModalHeader',()=>({header:(0,l.cssFragmentToRws)(b.header),leading:(0,l.cssFragmentToRws)(b.leading),content:(0,l.cssFragmentToRws)(b.content),ellipsisContent:(0,l.cssFragmentToRws)(b.ellipsisContent),trailing:(0,l.cssFragmentToRws)(b.trailing)}));e.baseModalHeaderStyleFn=w}),"382402",["d7ed8e","0acceb","5f1f1f","b4773a","6ba7b2","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.modalBodyStylesFn=e.default=e.UnstyledModalBody=void 0;var t=babelHelpers.interopRequireWildcard(r(d[0])),l=r(d[1]),o=r(d[2]),n=babelHelpers.interopRequireDefault(r(d[3])),s=r(d[4]),u=babelHelpers.interopRequireDefault(r(d[5])),f=babelHelpers.interopRequireDefault(r(d[6])),c=r(d[7]),y=r(d[8]);const b=({css:l,styles:o,theme:n,disableTabindexContentScroll:s,forwardedRef:c,...b})=>{const[p,x]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(c&&'current'in c){const t=null==c?void 0:c.current;t&&'function'!=typeof t&&!(0,u.default)(t)&&(0,f.default)(t)&&x(!0)}},[c]),(0,y.jsx)("div",{ref:c,tabIndex:s||!p?void 0:0,...l(o.bodyContainer),...b})};e.UnstyledModalBody=b;const p=(0,l.extendableStyleFn)(({dls19:t})=>({bodyContainer:{padding:c.MODAL_PADDING_24,flex:'1 1 auto',overflowY:'auto',WebkitOverflowScrolling:'touch',...(0,s.resetFocusStyles)(),...(0,n.default)({...(0,s.focusTransitionStyles)(),boxShadow:`0px 0px 0px 2px ${t.palette.hof}, ${t.elevation.tertiary}`})}}));e.modalBodyStylesFn=p;const x=(0,o.withStyles)(p)(b);var v=t.default.forwardRef((l,o)=>{const n=(0,t.useRef)(null);return(0,y.jsx)(x,{...l,forwardedRef:o||n})});e.default=v}),"4327be",["d7ed8e","c27e82","bf663a","78ea50","1cfcd9","dcbf41","53f8dc","da755f","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=t=>{const l=t.clientHeight<t.scrollHeight,c=t.clientWidth<t.scrollWidth;return l||c};e.default=t}),"53f8dc",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),o=r(d[1]),l=r(d[2]),s=r(d[3]);const n=(0,o.extendStyles)(s.modalHeaderStyleFn,()=>({header:{borderBottom:0}}));var u=(0,t.withStyles)(n)(l.BaseModalHeader);e.default=u}),"7ea72b",["bf663a","c27e82","382402","ea4cbe"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MODAL_PADDING_24=e.MODAL_PADDING_16=e.MODAL_HEIGHT_64=e.MODAL_HEIGHT_48=void 0;e.MODAL_PADDING_16=16;e.MODAL_PADDING_24=24;e.MODAL_HEIGHT_48=48;e.MODAL_HEIGHT_64=64}),"da755f",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;babelHelpers.interopRequireDefault(r(d[0]));var t=r(d[1]),l=babelHelpers.interopRequireDefault(r(d[2])),o=babelHelpers.interopRequireDefault(r(d[3])),n=babelHelpers.interopRequireDefault(r(d[4])),s=babelHelpers.interopRequireDefault(r(d[5])),u=babelHelpers.interopRequireDefault(r(d[6])),c=r(d[7]);var f=(0,t.withStyles)(({dls19:{palette:t,typography:{titles:l,weight:o,base:n}}})=>({modalTitle:{...l.sm,fontWeight:o.medium,color:t.hof,marginBottom:8},modalSubtitle:{...n.md,fontWeight:o.book,color:t.foggy},modalContent:{position:'relative'}}))((function({category:t,unsubAllType:f,title:p,description:b,channelPreferences:h,disablePushNotification:j,allowPushNotification:y,isInPwa:x,onUpdate:P,css:v,styles:q}){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.default,{}),(0,c.jsxs)(o.default,{"data-testid":"channel-optout-modal",children:[(0,c.jsxs)(s.default,{children:[(0,c.jsx)("div",{...v(q.modalTitle),children:(0,c.jsx)(n.default,{children:p})}),b&&(0,c.jsx)("div",{...v(q.modalSubtitle),children:b})]}),(0,c.jsx)("div",{...v(q.modalContent),children:(0,c.jsx)(u.default,{category:t,unsubAllType:f,channelPreferences:h,disablePushNotification:j,allowPushNotification:y,isInPwa:x,onUpdate:P})})]})]})}));e.default=f}),"dafd34",["d7ed8e","bf663a","7ea72b","4327be","b4773a","3f0874","0d7d45","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=babelHelpers.interopRequireDefault(r(d[0]));var u=u=>{if(u){if((0,t.default)(u)!==u)return!0}return!1};e.default=u}),"dcbf41",["1d31c2"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.modalHeaderStyleFn=e.default=void 0;var t=r(d[0]),o=r(d[1]),l=r(d[2]),n=r(d[3]);const p=(0,o.extendStyles)(l.baseModalHeaderStyleFn,({dls19:t})=>({header:{minHeight:n.MODAL_HEIGHT_48,borderBottom:"1px solid "+t.palette.bebe,paddingTop:0,paddingBottom:0,paddingLeft:n.MODAL_PADDING_24,paddingRight:n.MODAL_PADDING_24,color:t.palette.hof,[t.responsive.queries.mediumAndAbove]:{minHeight:n.MODAL_HEIGHT_64},fontSize:t.typography.base.lg.fontSize,lineHeight:t.typography.base.lg.lineHeight,fontWeight:t.typography.weight.bold}}));e.modalHeaderStyleFn=p;var s=(0,t.withStyles)(p)(l.BaseModalHeader);e.default=s}),"ea4cbe",["bf663a","c27e82","382402","da755f"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/notification-settings/components/ChannelOptOutModal.5abff4b9b4.js.map