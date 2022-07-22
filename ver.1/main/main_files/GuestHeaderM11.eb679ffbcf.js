__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MAX_CONTENT_WIDTH_CSS_VAR=void 0,e.default=function(t){return{maxWidth:t,'@supports(--a:a)':{maxWidth:`var(--page-shell-max-content-width, ${'number'==typeof t?t+"px":t})`}}},e.maxContentWidthStyleLinaria=function(s){const u='number'==typeof s?s+"px":s;return(0,t.cssFragment)(n||(n=o`
    max-width: ${0};

    @supports (--a: a) {
      max-width: var(${0}, ${0});
    } ;
  `),u,"--page-shell-max-content-width",u)};var t=r(d[0]);let n,o=t=>t;e.MAX_CONTENT_WIDTH_CSS_VAR="--page-shell-max-content-width"}),"139b42",["5f1f1f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(l){const u=(0,t.useRef)(null);return{onBlur:(0,n.default)(t=>{var n;const o=t.relatedTarget;let s=o;const c=!(null==o||!o.getAttribute||'string'!=typeof(null==o?void 0:o.getAttribute('tabindex'))),f=!(null==o||!o.contains(t.target));c&&f&&(s=null),!s||null!==(n=u.current)&&void 0!==n&&n.contains(s)||l(t)}),ref:u}};var t=r(d[0]),n=babelHelpers.interopRequireDefault(r(d[1]))}),"185e34",["d7ed8e","7e47fa"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){if((0,t.useContext)(l.LinariaExperimentContext))return(0,N.jsx)(s.BaseExpandableContainer,{...n,linariaClassNames:p});return(0,N.jsx)(_,{...n})};r(d[0]);var t=babelHelpers.interopRequireWildcard(r(d[1])),n=r(d[2]),o=r(d[3]),c=babelHelpers.interopRequireDefault(r(d[4])),l=(r(d[5]),r(d[6])),s=r(d[7]),I=babelHelpers.interopRequireWildcard(r(d[8])),N=r(d[9]);const T=(0,o.extendStyles)(I.default,({dls19:t})=>({container:{[c.default]:t.palette.rausch,'::after':{boxShadow:'rgba(0, 0, 0, 0.08) 0px 1px 1px'}},container_standard:{'::after':{height:'100%',opacity:1,transform:'initial',transition:`transform ${I.HEADER_TRANSITION_DURATION} ${I.HEADER_TRANSITION_TIMING_FUNCTION}, opacity ${I.HEADER_TRANSITION_DURATION} ${I.HEADER_TRANSITION_TIMING_FUNCTION}`}},container_immersive:{'::after':{height:'100%',opacity:0,transform:'scaleY(2)',transition:`transform ${I.HEADER_TRANSITION_DURATION} ${I.HEADER_TRANSITION_TIMING_FUNCTION}, opacity ${I.HEADER_TRANSITION_DURATION} ${I.HEADER_TRANSITION_TIMING_FUNCTION}`}},container_expanded:{'::after':{height:'100%',opacity:1,transform:'scaleY(2)',transition:`transform ${I.HEADER_TRANSITION_DURATION} ${I.HEADER_TRANSITION_TIMING_FUNCTION}`,'@media (max-width: 949px)':{transform:'scaleY(3)'}}}})),_=(0,n.withStyles)(T)(s.BaseExpandableContainer),p={container:"c15gdd3h",containerWithBanner:"cuwtqxk",containerStandard:"cx8czm6",containerImmersive:"c1a9nxuz",containerExpanded:"czuve39",containerExpandedBeforeScroll:"c1yz3ohe",containerStuck:"c1170rnt",containerDisableScroll:"c1gfe7sj",containerBorderless:"cthomng",content:"c1y90419",contentMaxWidth:"ctl0wgq",contentFullWidth:"ctifl8c",contentLogo:"c1b5mviy",contentLinks:"csb38sw",contentSearch:"cqvtwb5",contentSearchEmpty:"cm5545g",placeholder:"p16eef02",placeholderExpanded:"pv0fghq",banner:"b138ulzp",overlay:"oj8myzo"}}),"1e379d",["f03cc4","d7ed8e","bf663a","c27e82","9f6c27","5f1f1f","d917d7","94655e","915fa3","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){const[u,o]=(0,t.useState)(!1),c=(0,n.useNativeResizeObserver)((t,n)=>{var u;const c=null===(u=t[0])||void 0===u?void 0:u.target;null!=c&&c.clientHeight&&(o(!0),n.disconnect())});return(0,t.useEffect)(()=>{if(!c)return;const t=setTimeout(()=>o(!0),3e3);return c.observe(document.body),()=>{clearTimeout(t),c.disconnect()}},[c]),u};var t=r(d[0]),n=r(d[1])}),"2f0063",["d7ed8e","7c16ab"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useImmersive=e.ImmersiveContext=void 0;var t=babelHelpers.interopRequireWildcard(r(d[0]));const s=t.default.createContext(!1);e.ImmersiveContext=s,s.displayName='ImmersiveContext';e.useImmersive=()=>(0,t.useContext)(s)}),"421e67",["d7ed8e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),l=r(d[1]),u=babelHelpers.interopRequireDefault(r(d[2])),n=babelHelpers.interopRequireDefault(r(d[3])),s=r(d[4]),o=babelHelpers.interopRequireDefault(r(d[5]));const f=(0,l.extendStyles)(o.default,({dls19:t})=>({container:{[u.default]:t.palette.rausch}}));var p=(0,n.default)((0,t.withStyles)(f)(s.BaseExpandableContainer),{placeholder:!1});e.default=p}),"5824de",["bf663a","c27e82","9f6c27","a15623","94655e","915fa3"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HEADER_HEIGHT=void 0;e.HEADER_HEIGHT=80}),"5a16cc",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ExpandedStateContext=void 0,e.ExpandedStateProvider=function({children:u,expanded:s,setExpanded:x}){const c=(0,t.useMemo)(()=>[s,x],[s,x]);return(0,n.jsx)(o.Provider,{value:c,children:u})},e.useExpandedState=function(){const n=(0,t.useState)(!1);return(0,t.useContext)(o)||n};var t=babelHelpers.interopRequireWildcard(r(d[0])),n=r(d[1]);const o=t.default.createContext(void 0);e.ExpandedStateContext=o,o.displayName='ExpandedStateContext'}),"633504",["d7ed8e","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ExploreSkeletonField=void 0,e.ShimmerIfSkeleton=function({children:t,...n}){const o=I();let c=(0,u.jsx)(u.Fragment,{children:t});o&&(c=(0,u.jsx)(s.default,{width:"auto",height:"auto",cornerRadius:l.theme.cornerRadius.small8px.borderRadius,...n,children:t}));return c},e.default=I,e.getExploreFadeInAnimation=function(t){return(0,l.cssFragment)(c||(c=f`
    animation-name: fade-in;
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-delay: ${0};

    @keyframes fade-in {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `),h[t])},e.useIsExploreFadeIn=function(){const n=I(),o=(0,t.useInitialRender)();return n&&o};babelHelpers.interopRequireDefault(r(d[0]));var t=r(d[1]),n=r(d[2]),o=r(d[3]),l=r(d[4]),s=babelHelpers.interopRequireDefault(r(d[5])),u=r(d[6]);let c,f=t=>t;const p=(0,o.createUIKey)('explore-skeleton',{getDefault:()=>!1});function I(){const[t]=(0,n.useUIState)(p);return t}e.ExploreSkeletonField=p;const h={HEADER:'0ms',CATEGORIES:'100ms',LISTINGS:'200ms'}}),"658726",["d7ed8e","1af765","9e67c0","978c20","5f1f1f","a960fd","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),l=r(d[1]),u=r(d[2]),n=babelHelpers.interopRequireDefault(r(d[3])),s=babelHelpers.interopRequireDefault(r(d[4])),o=babelHelpers.interopRequireDefault(r(d[5]));const f=(0,l.extendStyles)(n.default,({dls19:t})=>({container:{[s.default]:t.palette.rausch},container_unstuck:{'::after':{opacity:0}}}));var p=(0,o.default)((0,t.withStyles)(f)(u.BaseExpandableContainer),{immersive:!1,placeholder:!1});e.default=p}),"67beb3",["bf663a","c27e82","94655e","915fa3","9f6c27","a15623"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useNativeResizeObserver=void 0;var s=r(d[0]),t=r(d[1]);e.useNativeResizeObserver=u=>{const[v,n]=(0,s.useState)(),o=(0,t.useResizeObserverPolyfill)();return(0,s.useEffect)(()=>{if(!o)return;const s=new ResizeObserver(u);n(s)},[o]),v}}),"7c16ab",["d7ed8e","d208a7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;babelHelpers.interopRequireDefault(r(d[0]));var t=r(d[1]),l=r(d[2]),n=babelHelpers.interopRequireDefault(r(d[3])),s=r(d[4]),o=babelHelpers.interopRequireDefault(r(d[5])),u=r(d[6]),c=r(d[7]),p=r(d[8]);const f=(0,t.extendStyles)(o.default,({dls19:t})=>({container:{[n.default]:t.palette.rausch,'::after':{boxShadow:'rgba(0, 0, 0, 0.08) 0px 1px 1px'}},extraBottomMargin:{marginBottom:8}}));var b=(0,l.withStyles)(f)((function(t){const{css:l,styles:n}=t,[o]=(0,c.useUIState)(u.ActivePlacementField,'ALONG_SIDEBAR');return(0,p.jsx)("div",{...l('SIDEBAR'!==o&&n.extraBottomMargin),children:(0,p.jsx)(s.BaseExpandableContainer,{...t,search:null})})}));e.default=b}),"827b4b",["d7ed8e","c27e82","bf663a","9f6c27","94655e","915fa3","a07f25","9e67c0","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({metadata:S,platformNetworkStatus:j,section:k}){const y=(0,x.useCx)(),{sections:H,sectionPlacements:N}=k,q=(0,b.useIsExploreFadeIn)(),A=(0,u.useSectionRegistryContext)(),R=(0,t.useMemo)(()=>(0,s.default)(['LEADING','MIDDLE','TRAILING'],N,H),[N,H]),{pathname:T}=(0,n().useLocation)();if((function(t){const o=(0,n().matchPath)(t,{path:"/s/:location/"+I.TAB_PATHS.experience_tab}),s=(0,n().matchPath)(t,{path:"/s/:location/"+I.TAB_PATHS.all_tab});return o||s})(T))return(0,v.jsx)(D.default,{metadata:S,platformNetworkStatus:j,section:k});if(!H||!N)return(0,o.default)({expectedFields:['sections','sectionPlacements'],response:k});const P={identifier:'GuestHeader',contextTypes:[c.ImmersiveContext,p.ExpandedStateContext,f.FullWidthContent],metadata:S||{pageTitle:''},platformNetworkStatus:j};return(0,v.jsx)("div",{className:y(q&&C,E),children:(0,v.jsx)(h.BaseExpandableContainer,{linariaClassNames:L,placeholder:!1,loggingID:"simpleHeader.variant.guestPlatformHeader",shouldLogImpression:!0,logo:R.LEADING&&(0,v.jsx)(l.default,{...P,registryConfig:A,sectionContainers:R.LEADING}),search:R.MIDDLE&&(0,v.jsx)(l.default,{...P,registryConfig:A,sectionContainers:R.MIDDLE}),links:R.TRAILING&&(0,v.jsx)(l.default,{...P,registryConfig:A,sectionContainers:R.TRAILING})})})};var t=babelHelpers.interopRequireWildcard(r(d[0]));r(d[1]);function n(){const t=r(d[2]);return n=function(){return t},t}var o=babelHelpers.interopRequireDefault(r(d[3])),s=babelHelpers.interopRequireDefault(r(d[4])),c=r(d[5]),l=babelHelpers.interopRequireDefault(r(d[6])),u=r(d[7]),p=r(d[8]),f=(r(d[9]),r(d[10]),r(d[11])),x=r(d[12]),b=r(d[13]),h=(r(d[14]),r(d[15])),I=(babelHelpers.interopRequireDefault(r(d[16])),r(d[17])),D=babelHelpers.interopRequireDefault(r(d[18])),v=r(d[19]);const C="fv2lekm",E="c1kn6kxw",L=Object.freeze({container:"c1kffd0v",containerWithBanner:"ctesl2l",containerStandard:"cxy853f",containerImmersive:"c1s07pgv",containerExpanded:"cn7o9ly",containerExpandedBeforeScroll:"cb1qjmy",containerStuck:"c1g36qz5",containerDisableScroll:"casp94v",containerBorderless:"cazj9f1",content:"cdfwt5b",contentMaxWidth:"cgf6h58",contentFullWidth:"cqul55",contentLogo:"c1xsvlgx",contentLinks:"cylj8v3",contentSearch:"cwdm1ai",contentSearchEmpty:"czzdeq7",placeholder:"p12wko04",placeholderExpanded:"p9gvzth",banner:"b1kng7jo",overlay:"o8h0gdx"})}),"8349af",["d7ed8e","f03cc4","126016","b6cec9","08917c","421e67","172385","08e02a","633504","139b42","ffd0b0","9da624","5f1f1f","658726","915fa3","94655e","9f6c27","87d380","ed27b0","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var p=r(d[0]),t=babelHelpers.interopRequireDefault(r(d[1])),n=r(d[2]);let l;var c=(0,p.cssFragment)(l||(l=(p=>p)`
  padding-left: ${0};
  padding-right: ${0};

  ${0} {
    padding-left: ${0};
    padding-right: ${0};
  }

  ${0} {
    padding-left: ${0};
    padding-right: ${0};
  }

  ${0} {
    padding-left: ${0};
    padding-right: ${0};
  }

  ${0} {
    padding-left: ${0};
    padding-right: ${0};
  }

  ${0} {
    padding-left: ${0};
    padding-right: ${0};
  } ;
`),t.default.spacing.micro24px,t.default.spacing.micro24px,n.mediaQueries.smallAndAbove,t.default.spacing.micro24px,t.default.spacing.micro24px,n.mediaQueries.mediumAndAbove,t.default.spacing.macro40px,t.default.spacing.macro40px,n.mediaQueries.mediumPlusAndAbove,t.default.spacing.macro40px,t.default.spacing.macro40px,n.mediaQueries.largeAndAbove,t.default.spacing.macro80px,t.default.spacing.macro80px,n.mediaQueries.xlargeAndAbove,t.default.spacing.macro80px,t.default.spacing.macro80px);e.default=c}),"8b41f4",["5f1f1f","a2ecf6","6ac4d4"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sharedExpandableContainerStylesFragments=e.default=e.HEADER_TRANSITION_TIMING_FUNCTION=e.HEADER_TRANSITION_DURATION=void 0;var t=r(d[0]),n=babelHelpers.interopRequireDefault(r(d[1])),o=r(d[2]),s=r(d[3]),c=babelHelpers.interopRequireDefault(r(d[4])),l=r(d[5]),p=r(d[6]),u=babelHelpers.interopRequireDefault(r(d[7])),f=r(d[8]),h=r(d[9]),x=r(d[10]);let b,_,A,F,$,y,E,I,R,H,T,v,w,N,S,D,O,k,z,Q,C=t=>t;e.HEADER_TRANSITION_DURATION='250ms';e.HEADER_TRANSITION_TIMING_FUNCTION='ease';const G={container:(0,f.cssFragment)(b||(b=C`
    height: ${0}px;
    position: fixed;
    left: 0;
    width: 100%;
    z-index: ${0};

    &::before {
      background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
      content: '';
      height: 140%;
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;
      transition: ${0}ms opacity ease;

      ${0} {
        transition: none;
      }
    }

    &::after {
      box-shadow: rgba(0, 0, 0, 0.08) 0 1px 12px;
      transform-origin: 50% 0%;
      /* added a opacity delay because Safari does this weird re-sizing thingy that shows up otherwise */
      transition: transform ${0}ms ease, opacity ${0}ms ease ${0}ms;
      background: ${0};
      content: '';
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;

      ${0} {
        transition: none;
      }
    }
  `),o.HEADER_HEIGHT,n.default.header,150,p.prefersReducedMotionQuery,150,150,75,c.default.palette.white,p.prefersReducedMotionQuery),container_withBanner:(0,f.cssFragment)(_||(_=C`
    position: absolute;
  `)),container_standard:(0,f.cssFragment)(A||(A=C`
    &::after {
      opacity: 1;
    }
  `)),container_immersive:(0,f.cssFragment)(F||(F=C`
    color: ${0};

    &::before {
      opacity: 0.4;
    }
  `),c.default.palette.white),container_expanded:(0,f.cssFragment)($||($=C`
    &::after {
      opacity: 1;
      transform: scaleY(${0});

      ${0} {
        transform: scaleY(${0});
      }
    }
  `),244/o.HEADER_HEIGHT,l.mediaQueries.mediumPlusAndAbove,180/o.HEADER_HEIGHT),container_expandedBeforeScroll:(0,f.cssFragment)(y||(y=C`
    &::after {
      opacity: 0;
    }
  `)),container_stuck:(0,f.cssFragment)(E||(E=C`
    position: fixed;
    top: 0;

    &::after {
      opacity: 1;
    }
  `)),container_disableScroll:(0,f.cssFragment)(I||(I=C`
    position: absolute;
  `)),container_borderless:(0,f.cssFragment)(R||(R=C`
    &::after {
      box-shadow: none;
    }
  `)),content:(0,f.cssFragment)(H||(H=C`
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 1;
  `)),content_maxWidth:(0,f.cssFragment)(T||(T=C`
    ${0}
    ${0}
    margin: 0 auto;
  `),(0,s.maxContentWidthStyleLinaria)(l.breakpoints.xlargeAndAbove),u.default),content_fullWidth:(0,f.cssFragment)(v||(v=C`
    padding: 0 ${0};
  `),c.default.spacing.micro24px),contentLogo:(0,f.cssFragment)(w||(w=C`
    flex: 0 0 auto;

    ${0} {
      flex: 1 0 140px; /* same as contentLinks to ensure contentSearch is centered */
    } ;
  `),l.mediaQueries.mediumPlusAndAbove),contentLinks:(0,f.cssFragment)(N||(N=C`
    flex: 1 0 auto;

    ${0} {
      flex: 1 0 140px;
    } ;
  `),l.mediaQueries.mediumPlusAndAbove),contentSearch:(0,f.cssFragment)(S||(S=C`
    flex: 0 1 auto;
    min-width: 348px; /* 300px + 48px padding */
    padding: 0 24px;

    ${0} {
      text-align: center;
    } ;
  `),l.mediaQueries.mediumPlusAndAbove),contentSearch_empty:(0,f.cssFragment)(D||(D=C`
    flex: 0 1 auto;
    min-width: 0;
    padding: 0 24px;
  `)),placeholder:(0,f.cssFragment)(O||(O=C`
    height: ${0}px;
  `),o.HEADER_HEIGHT),placeholder_expanded:(0,f.cssFragment)(k||(k=C`
    height: ${0}px;

    ${0} {
      height: ${0}px;
    } ;
  `),214,l.mediaQueries.mediumPlusAndAbove,150),banner:(0,f.cssFragment)(z||(z=C`
    position: relative;
    z-index: ${0};
  `),n.default.header+1),overlay:(0,f.cssFragment)(Q||(Q=C`
    background-color: rgba(0, 0, 0, 0.25);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${0};
    height: 100vh;
  `),n.default.header-1)};e.sharedExpandableContainerStylesFragments=G;var P=(0,t.extendStyles)(x.baseExpandableContainerStylesFn,()=>Object.fromEntries(Object.entries(G).map(([t,n])=>[t,(0,h.cssFragmentToRws)(n)])));e.default=P}),"915fa3",["c27e82","a77dea","5a16cc","139b42","a2ecf6","6ac4d4","eb6750","8b41f4","5f1f1f","0acceb","94655e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseExpandableContainerStylesFn=e.BaseExpandableContainer=void 0;var n=babelHelpers.interopRequireWildcard(r(d[0])),l=babelHelpers.interopRequireDefault(r(d[1])),o=r(d[2]),t=babelHelpers.interopRequireDefault(r(d[3])),s=babelHelpers.interopRequireDefault(r(d[4])),c=r(d[5]),u=babelHelpers.interopRequireDefault(r(d[6])),v=r(d[7]),p=r(d[8]),b=r(d[9]),x=r(d[10]),h=babelHelpers.interopRequireDefault(r(d[11])),f=babelHelpers.interopRequireDefault(r(d[12])),_=r(d[13]);const y=(0,l.default)('HeaderContainer',[])((function({banner:l,css:y,disableScroll:S=!1,expandedBeforeScroll:C=!1,immersive:k=!1,borderless:E=!1,links:w,logo:R,placeholder:j=!k,search:B,styles:L,linariaClassNames:W}){const D=(0,p.useCx)(),H=(0,o.useFullWidthContent)(),N=(0,s.default)(0,S?20:0)&&!S,[q,F]=(0,t.default)(!0),P=N&&!(l&&q),[I,M]=(0,n.useState)(C&&!P),T=I&&(!C||P),[A,O]=(0,n.useState)(!1),[U,z]=(0,n.useState)(k&&!P&&!T);(0,n.useEffect)(()=>z(k&&!P&&!T),[k,P,T]),(0,n.useEffect)(()=>{C&&M(!P)},[C,P]),(0,u.default)('keydown',n=>{T&&('Escape'===n.key?(n.preventDefault(),M(!1)):'Tab'!==n.key&&'Control'!==n.key&&'Alt'!==n.key&&'CapsLock'!==n.key&&'Insert'!==n.key||O(!0))}),(0,n.useEffect)(()=>{const n=()=>O(!1);return A&&T&&window.addEventListener('scroll',n,{once:!0}),()=>{window.removeEventListener('scroll',n)}},[A,T]),(0,h.default)(()=>M(!1),T&&!A,50);const G=(0,f.default)(n=>{if(T){var l,o;if(null===(l=n.relatedTarget)||void 0===l||null===(o=l.closest)||void 0===o?void 0:o.call(l,'[role=dialog]'))return;M(!1)}});return(0,_.jsxs)(_.Fragment,{children:[l&&(0,_.jsx)("div",{...(0,v.maybeRwsCss)(y,null==L?void 0:L.banner),ref:F,children:l}),(0,_.jsx)(x.ExpandedStateProvider,{expanded:I,setExpanded:M,children:(0,_.jsx)(c.ImmersiveContext.Provider,{value:U,children:(0,_.jsx)(b.ExpandedBeforeScrollContext.Provider,{value:C,children:(0,_.jsx)("header",{className:D(null==W?void 0:W.container,l&&(null==W?void 0:W.containerWithBanner),U&&(null==W?void 0:W.containerImmersive),!U&&!I&&(null==W?void 0:W.containerStandard),P?null==W?void 0:W.containerStuck:null==W?void 0:W.containerUnstuck,I&&!U&&(null==W?void 0:W.containerExpanded),I&&!T&&(null==W?void 0:W.containerExpandedBeforeScroll),S&&(null==W?void 0:W.containerDisableScroll),E&&!I&&(null==W?void 0:W.containerBorderless)),...(0,v.maybeRwsCss)(y,null==L?void 0:L.container,l&&(null==L?void 0:L.container_withBanner),U&&(null==L?void 0:L.container_immersive),!U&&!I&&(null==L?void 0:L.container_standard),P?null==L?void 0:L.container_stuck:null==L?void 0:L.container_unstuck,I&&!U&&(null==L?void 0:L.container_expanded),I&&!T&&(null==L?void 0:L.container_expandedBeforeScroll),S&&(null==L?void 0:L.container_disableScroll),E&&!I&&(null==L?void 0:L.container_borderless)),...G,children:(0,_.jsxs)("div",{className:D(null==W?void 0:W.content,H?null==W?void 0:W.contentFullWidth:null==W?void 0:W.contentMaxWidth),...(0,v.maybeRwsCss)(y,null==L?void 0:L.content,H?null==L?void 0:L.content_fullWidth:null==L?void 0:L.content_maxWidth),children:[(0,_.jsx)("div",{className:D(null==W?void 0:W.contentLogo),...(0,v.maybeRwsCss)(y,null==L?void 0:L.contentLogo),children:R}),(0,_.jsx)("div",{className:D(B?null==W?void 0:W.contentSearch:null==W?void 0:W.contentSearchEmpty),...(0,v.maybeRwsCss)(y,B?null==L?void 0:L.contentSearch:null==L?void 0:L.contentSearch_empty),children:B}),(0,_.jsx)("div",{className:D(null==W?void 0:W.contentLinks),...(0,v.maybeRwsCss)(y,null==L?void 0:L.contentLinks),children:w})]})})})})}),T&&(0,_.jsx)("div",{className:D(null==W?void 0:W.overlay),...(0,v.maybeRwsCss)(y,null==L?void 0:L.overlay),onClick:()=>M(!1)}),j&&(0,_.jsx)("div",{className:D(null==W?void 0:W.placeholder,C&&(null==W?void 0:W.placeholderExpanded)),...(0,v.maybeRwsCss)(y,null==L?void 0:L.placeholder,C&&(null==L?void 0:L.placeholder_expanded))})]})}));e.BaseExpandableContainer=y;const S=(0,v.deprecatedExtendableStylesFn)('BaseExpandableContainer',()=>({banner:{},container:{},container_withBanner:{},container_standard:{},container_immersive:{},container_expanded:{},container_expandedBeforeScroll:{},container_unstuck:{},container_stuck:{},container_disableScroll:{},container_borderless:{},content:{},content_maxWidth:{},content_fullWidth:{},contentLogo:{},contentSearch:{},contentSearch_empty:{},contentLinks:{},placeholder:{},placeholder_expanded:{}}));e.baseExpandableContainerStylesFn=S}),"94655e",["d7ed8e","bc1c90","9da624","b7e2d8","d76bff","421e67","d3a353","0acceb","5f1f1f","dd33e1","633504","aaa61a","185e34","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default="--header_brand-color"}),"9f6c27",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(l,n,f=0){const s=(0,t.useRef)(null);(0,t.useEffect)(()=>{s.current=n?window.pageYOffset:null},[n]),(0,u.default)('scroll',()=>{const t=s.current;null!=t&&Math.abs(t-window.pageYOffset)>f&&(s.current=null,l())})};var t=r(d[0]),u=babelHelpers.interopRequireDefault(r(d[1]))}),"aaa61a",["d7ed8e","d3a353"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,{rootMargin:u,threshold:c=0}={}){const o=(0,t.useRef)(null),s=(0,t.useRef)(),[f,l]=(0,t.useState)(n),b=(0,t.useCallback)(t=>{s.current&&(o.current&&s.current.unobserve(o.current),t&&s.current.observe(t)),o.current=t},[]);return(0,t.useEffect)(()=>{if(g.window&&window.IntersectionObserver)return s.current=new window.IntersectionObserver(([{intersectionRatio:t}])=>{l(!!t)},{threshold:[c,c<1?c+1e-4:c-1e-4],rootMargin:u}),o.current&&s.current.observe(o.current),()=>{s.current&&s.current.disconnect()}},[u,c]),[f,b]};var t=r(d[0])}),"b7e2d8",["d7ed8e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useResizeObserverPolyfill=void 0;var s=r(d[0]);e.useResizeObserverPolyfill=()=>{const[t,l]=(0,s.useState)('ResizeObserver'in window);return(0,s.useEffect)(()=>{if(t)return;(async()=>{if('ResizeObserver'in window==!1){const s=await r(d[2])(d[1],"resize-observer-polyfill").then(babelHelpers.interopRequireWildcard);window.ResizeObserver=s.default,l(!0)}})()},[t]),t}}),"d208a7",["d7ed8e","8610eb","b8ad06"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ExpandedBeforeScrollContext=void 0;const t=babelHelpers.interopRequireDefault(r(d[0])).default.createContext(!1);e.ExpandedBeforeScrollContext=t,t.displayName='ExpandedBeforeScrollContext'}),"dd33e1",["d7ed8e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),l=r(d[1]),o=r(d[2]),n=babelHelpers.interopRequireDefault(r(d[3])),u=babelHelpers.interopRequireDefault(r(d[4]));const c=(0,l.extendStyles)(n.default,({dls19:t})=>({container_unstuck:{'::before':{backgroundImage:'none'},'::after':{opacity:0},contentLogo:{color:t.palette.hof}}}));var f=(0,u.default)((0,t.withStyles)(c)(o.BaseExpandableContainer),{placeholder:!1});e.default=f}),"e0042c",["bf663a","c27e82","94655e","915fa3","a15623"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.isFullWidthContent=x;var t=babelHelpers.interopRequireWildcard(r(d[0]));function n(){const t=r(d[1]);return n=function(){return t},t}r(d[2]);var s=babelHelpers.interopRequireDefault(r(d[3])),l=babelHelpers.interopRequireDefault(r(d[4])),o=r(d[5]),u=babelHelpers.interopRequireDefault(r(d[6])),c=babelHelpers.interopRequireDefault(r(d[7])),f=babelHelpers.interopRequireDefault(r(d[8])),p=babelHelpers.interopRequireDefault(r(d[9])),R=babelHelpers.interopRequireDefault(r(d[10])),T=babelHelpers.interopRequireDefault(r(d[11])),b=r(d[12]),D=r(d[13]),S=(r(d[14]),r(d[15]),r(d[16])),A=r(d[17]),E=r(d[18]),I=babelHelpers.interopRequireDefault(r(d[19])),_=r(d[20]),N=r(d[21]),P=babelHelpers.interopRequireDefault(r(d[22])),h=r(d[23]);const C="f1pgpnck",H="c17hyt0r";function x(t,s){if((0,n().matchPath)(t,{path:["/s/:location/"+E.TAB_PATHS.home_tab,"/s/:location/"+E.TAB_PATHS.select_home_tab]}))return!0;const l=(0,n().matchPath)(t,{path:"/s/:location/"+E.TAB_PATHS.experience_tab}),o=(0,I.default)(s);return!(!l||!(o.checkin||o.checkout||o.flexible_trip_dates))}var v=function({metadata:E,platformNetworkStatus:I,section:v}){var L;const O=(0,_.useCx)(),{immersive:q,marqueeMode:M,sections:y,sectionPlacements:G,fixed:j}=v,{pathname:F,search:k}=(0,n().useLocation)(),B=x(F,k),{setNavPlacementPosition:W}=(0,S.useNavPlacementPosition)();(0,t.useEffect)(()=>{'STOREFRONTS_CUSTOM_TRANSPARENT_OREO'===M&&W('STATIC')},[]);const w=(0,P.default)(),U=(0,b.useSectionRegistryContext)(),K=(0,t.useMemo)(()=>(0,l.default)(['LEADING','MIDDLE','TRAILING','TOP'],G,y),[G,y]),X=(0,N.useIsExploreFadeIn)();if(!y||!G)return(0,s.default)({expectedFields:['sections','sectionPlacements'],response:v});const z={identifier:'GuestHeader',contextTypes:[o.ImmersiveContext,D.ExpandedStateContext],metadata:E||{pageTitle:''},platformNetworkStatus:I},J=K.MIDDLE&&'BIG_SEARCH'===(null===(L=K.MIDDLE[0])||void 0===L?void 0:L.sectionComponentType);let Q=c.default;return null!=M&&M.startsWith('TRANSPARENT_LIGHT')?Q=f.default:'TRANSPARENT_DARK'===M?Q=p.default:'STOREFRONTS_CUSTOM_TRANSPARENT_OREO'===M?Q=R.default:'FLEX_DESTINATIONS_SEARCH'===M&&(Q=T.default),(0,h.jsx)("div",{className:O(X&&C,H),children:(0,h.jsx)(A.FullWidthContent.Provider,{value:B,children:(0,h.jsx)(Q,{disableScroll:!j||!w,loggingID:"simpleHeader.variant.guestPlatformHeader",shouldLogImpression:!0,borderless:'BORDERLESS'===M,immersive:!!q,expandedBeforeScroll:J,logo:K.LEADING&&(0,h.jsx)(u.default,{...z,registryConfig:U,sectionContainers:K.LEADING}),search:K.MIDDLE&&(0,h.jsx)(u.default,{...z,registryConfig:U,sectionContainers:K.MIDDLE}),links:K.TRAILING&&(0,h.jsx)(u.default,{...z,registryConfig:U,sectionContainers:K.TRAILING}),banner:K.TOP&&(0,h.jsx)(u.default,{...z,registryConfig:U,sectionContainers:K.TOP})})})})};e.default=v}),"ed27b0",["d7ed8e","2d51ac","f03cc4","b6cec9","08917c","421e67","172385","1e379d","67beb3","5824de","e0042c","827b4b","08e02a","633504","139b42","ffd0b0","7a51e6","9da624","87d380","99e500","5f1f1f","658726","2f0063","721ed1"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-explore-sections/sections/GuestHeaderM11/GuestHeaderM11.08ef149d16.js.map