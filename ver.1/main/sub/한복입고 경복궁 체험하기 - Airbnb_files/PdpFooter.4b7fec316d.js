__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isContentVisibilitySupported=function(){return'CSS'in window&&CSS.supports('content-visibility: auto')},e.useOnSizeChanged=function({dimension:h="both",disabled:s,threshold:u=5}){const[l,o]=(0,t.useState)(null),[b,c]=(0,t.useState)({height:null,width:null});return(0,n.useOnResize)({disabled:s,element:l,onlyWhen:({height:t,previousHeight:n,previousWidth:s,width:l})=>{const o=null===n||Math.abs(t-n)>u,b=null===s||Math.abs(l-s)>u;return'height'===h?o:'width'===h?b:b||o},onResize:({height:t,width:n})=>{c({height:t,width:n})}}),{...b,element:l,ref:o}};var t=r(d[0]),n=r(d[1])}),"07c736",["d7ed8e","f620b8"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(u.default,{}),(0,n.jsx)(t.default,{}),(0,n.jsx)(l.default,{})]})};babelHelpers.interopRequireDefault(r(d[0]));var l=babelHelpers.interopRequireDefault(r(d[1])),t=babelHelpers.interopRequireDefault(r(d[2])),u=babelHelpers.interopRequireDefault(r(d[3])),s=babelHelpers.interopRequireDefault(r(d[4])),f=babelHelpers.interopRequireDefault(r(d[5])),n=r(d[6])}),"13ce79",["d7ed8e","de29b9","5338c5","e14b0d","d30ce8","747f4d","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;babelHelpers.interopRequireDefault(r(d[0]));var l=babelHelpers.interopRequireDefault(r(d[1])),t=babelHelpers.interopRequireDefault(r(d[2])),u=babelHelpers.interopRequireDefault(r(d[3])),f=babelHelpers.interopRequireDefault(r(d[4])),o=r(d[5]);var n=function(){return(0,o.jsx)(l.default,{children:(0,o.jsx)(t.default,{footerFooter:(0,o.jsx)(u.default,{}),children:(0,o.jsx)(f.default,{})})})};e.default=n}),"4072f4",["d7ed8e","f02f7b","67257a","a50612","13ce79","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({dls19:{spacing:{primitives:n},responsive:{queries:o}}}){return{paddingLeft:n.outerSpacing_xsmallAndAbove,paddingRight:n.outerSpacing_xsmallAndAbove,[o.smallAndAbove]:{paddingLeft:n.outerSpacing_smallAndAbove,paddingRight:n.outerSpacing_smallAndAbove},[o.mediumAndAbove]:{paddingLeft:n.outerSpacing_mediumAndAbove,paddingRight:n.outerSpacing_mediumAndAbove},[o.mediumPlusAndAbove]:{paddingLeft:n.outerSpacing_mediumPlusAndAbove,paddingRight:n.outerSpacing_mediumPlusAndAbove},[o.largeAndAbove]:{paddingLeft:n.outerSpacing_largeAndAbove,paddingRight:n.outerSpacing_largeAndAbove},[o.xlargeAndAbove]:{paddingLeft:n.outerSpacing_xlargeAndAbove,paddingRight:n.outerSpacing_xlargeAndAbove}}}}),"45bff3",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){const f=l.default.getBootstrap('storefronts_summer_2022_launch_page_footer_link_enabled'),u=l.default.getBootstrap('storefronts_giftcards_footer_link_enabled');return(0,n.jsxs)(o.default,{title:(0,n.jsx)(t.default,{k:"shared.Airbnb"}),children:[(0,n.jsx)(s.default,{href:"/press/news",loggingID:"simpleFooter.about.press",children:(0,n.jsx)(t.default,{k:"simple_nav.footer.newsroom"})}),f?(0,n.jsx)(s.default,{href:"/2022-summer",loggingID:"simpleFooter.about.2022summer",children:(0,n.jsx)(t.default,{k:"simple_nav.footer.learn_about_new_features"})}):(0,n.jsx)(s.default,{href:"/2021-winter",loggingID:"simpleFooter.about.2021winter",children:(0,n.jsx)(t.default,{k:"simple_nav.footer.learn_about_new_features"})}),(0,n.jsx)(s.default,{href:"https://news.airbnb.com/what-makes-airbnb-airbnb",loggingID:"simpleFooter.about.foundersLetter",children:(0,n.jsx)(t.default,{k:"simple_nav.footer.letter_from_founders"})}),(0,n.jsx)(s.default,{href:"/careers",loggingID:"simpleFooter.about.careers",children:(0,n.jsx)(t.default,{k:"simple_nav.footer.careers"})}),(0,n.jsx)(s.default,{href:"https://investors.airbnb.com",loggingID:"simpleFooter.about.investors",children:(0,n.jsx)(t.default,{k:"simple_nav.footer.investors"})}),u&&(0,n.jsx)(s.default,{href:"/giftcards",loggingID:"simpleFooter.about.giftcards",children:(0,n.jsx)(t.default,{k:"GiftCard.title_plural"})})]})};babelHelpers.interopRequireDefault(r(d[0]));var t=babelHelpers.interopRequireDefault(r(d[1])),l=babelHelpers.interopRequireDefault(r(d[2])),s=babelHelpers.interopRequireDefault(r(d[3])),o=babelHelpers.interopRequireDefault(r(d[4])),n=r(d[5])}),"5338c5",["d7ed8e","19c98a","6b945b","b09ca4","84c823","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=()=>({styleReset:{marginTop:0,marginBottom:0,fontSize:'unset',fontWeight:'unset'}})}),"592500",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]),s=babelHelpers.interopRequireDefault(r(d[3]));const p=(0,o.extendStyles)(s.default,({dls19:t})=>({footerContainer:{paddingBottom:80,'@supports (padding: env(safe-area-inset-bottom))':{paddingBottom:"calc(80px + env(safe-area-inset-bottom))"},'@supports (padding: constant(safe-area-inset-bottom))':{paddingBottom:"calc(80px + constant(safe-area-inset-bottom))"},[t.responsive.queries.mediumAndAbove]:{paddingBottom:0}}}));var l=(0,t.withStyles)(p)(n.BaseFooterWrapper);e.default=l}),"67257a",["bf663a","c27e82","c4a6b4","893f9b"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=(0,babelHelpers.interopRequireDefault(r(d[0])).default)({svgContents:"<path d=\"m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z\" />",svgProps:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},'IcCompactGlobe16',{defaultSize:16});e.default=t}),"735468",["42b5b2"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){const n=t.default.getBootstrap('gx.aircover_footer_entrypoint');return(0,p.jsxs)(s.default,{title:(0,p.jsx)(o.default,{k:"simple_nav.footer.support"}),children:[(0,p.jsx)(l.default,{href:"/help/home?from=footer",loggingID:"simpleFooter.support.help",children:(0,p.jsx)(o.default,{k:"simple_nav.footer.help_center"})}),n&&(0,p.jsx)(l.default,{href:"/aircover",loggingID:"simpleFooter.support.aircover",children:(0,p.jsx)(o.default,{k:"simple_nav.footer.aircover"})}),(0,p.jsx)(l.default,{href:"/trust",loggingID:"simpleFooter.support.trust",children:(0,p.jsx)(o.default,{k:"simple_nav.footer.safety_information"})}),(0,p.jsx)(l.default,{href:"/accessibility",loggingID:"simpleFooter.support.accessibility",children:(0,p.jsx)(o.default,{k:"simple_nav.footer.supporting_people_with_disabilities"})}),(0,p.jsx)(l.default,{href:"/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19",loggingID:"simpleFooter.support.cancellationOptions",children:(0,p.jsx)(o.default,{k:"simple_nav.footer.cancellation_options"})}),(0,p.jsx)(l.default,{href:"/d/covidsafety",loggingID:"simpleFooter.support.covid19",children:(0,p.jsx)(o.default,{k:"simple_nav.footer.covid19_response"})}),(0,p.jsx)(l.default,{href:"/neighbors",loggingID:"simpleFooter.support.neighborhoodSupport",children:(0,p.jsx)(o.default,{k:"simple_nav.footer.report_neighborhood_concerns"})})]})};babelHelpers.interopRequireDefault(r(d[0]));var o=babelHelpers.interopRequireDefault(r(d[1])),t=babelHelpers.interopRequireDefault(r(d[2])),l=babelHelpers.interopRequireDefault(r(d[3])),s=babelHelpers.interopRequireDefault(r(d[4])),p=r(d[5])}),"747f4d",["d7ed8e","19c98a","6b945b","b09ca4","84c823","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]);const o=(0,s.extendStyles)(n.baseFooterLinkSectionStylesFn,({dls19:t})=>({container:{':not(:last-child)':{paddingBottom:t.spacing.primitives.size_medium,marginBottom:t.spacing.primitives.size_medium,borderBottom:"1px solid "+t.palette.deco},[t.responsive.queries.largeAndAbove]:{flex:'1 0 0%',paddingLeft:t.spacing.primitives.gutter_smallAndAbove,paddingRight:t.spacing.primitives.gutter_smallAndAbove,':not(:last-child)':{paddingBottom:0,marginBottom:0,borderBottom:0}}},title:{color:t.palette.hof,...t.typography.base.md,fontWeight:t.typography.weight.bold},list:{[t.responsive.queries.mediumAndAbove]:{display:'flex',flexWrap:'wrap',marginLeft:-t.spacing.primitives.gutter_smallAndAbove,marginRight:-t.spacing.primitives.gutter_smallAndAbove},[t.responsive.queries.largeAndAbove]:{display:'block',marginLeft:0,marginRight:0}},listItem:{marginTop:12,[t.responsive.queries.mediumAndAbove]:{flexBasis:"33.333333333333336%",paddingLeft:t.spacing.primitives.gutter_smallAndAbove,paddingRight:t.spacing.primitives.gutter_smallAndAbove},[t.responsive.queries.largeAndAbove]:{marginTop:t.spacing.primitives.size_small,paddingLeft:0,paddingRight:0}}}));var p=(0,t.withStyles)(o)(n.BaseFooterLinkSection);e.default=p}),"84c823",["bf663a","c27e82","9f515c"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),n=babelHelpers.interopRequireDefault(r(d[1])),o=babelHelpers.interopRequireDefault(r(d[2])),s=r(d[3]),p=(0,t.extendStyles)(s.baseFooterWrapperStylesFn,({dls19:t})=>({footerContainer:{position:'relative',backgroundColor:t.palette.faint,borderTop:"1px solid "+t.palette.deco},contentContainer:{...(0,n.default)({dls19:t}),margin:'0 auto'},contentContainer_fullWidth:{maxWidth:t.responsive.breakpoints.xlargeAndAbove},contentContainer_maxWidth:{...(0,o.default)(t.responsive.breakpoints.xlargeAndAbove)},mainContent:{padding:'32px 0',[t.responsive.queries.mediumAndAbove]:{display:'flex',flexDirection:'column',paddingTop:t.spacing.primitives.size_large,paddingBottom:t.spacing.primitives.size_large},[t.responsive.queries.largeAndAbove]:{flexDirection:'row',paddingTop:6*t.spacing.primitives.baseUnit,paddingBottom:6*t.spacing.primitives.baseUnit,marginLeft:-t.spacing.primitives.gutter_smallAndAbove,marginRight:-t.spacing.primitives.gutter_smallAndAbove}},footerFooterContent:{paddingTop:t.spacing.primitives.size_medium,paddingBottom:t.spacing.primitives.size_medium,borderTop:"1px solid "+t.palette.deco}}));e.default=p}),"893f9b",["c27e82","45bff3","139b42","c4a6b4"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;babelHelpers.interopRequireDefault(r(d[0]));var t=r(d[1]),l=babelHelpers.interopRequireDefault(r(d[2])),s=r(d[3]);var u=(0,t.withStyles)(l.default)((function({children:t,css:l,styles:u}){return(0,s.jsx)("h3",{...l(u.styleReset),children:t})}));e.default=u}),"96b67d",["d7ed8e","bf663a","592500","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BaseFooterLinkSection=function({title:l,children:o,styles:c,css:u}){return(0,s.jsxs)("section",{...u(c.container),children:[(0,s.jsx)("div",{...u(c.title),children:(0,s.jsx)(n.default,{children:l})}),(0,s.jsx)("ul",{...u(c.list),children:t.default.Children.map(o,t=>t&&(0,s.jsx)("li",{...u(c.listItem),children:t}))})]})},e.baseFooterLinkSectionStylesFn=void 0;var t=babelHelpers.interopRequireDefault(r(d[0])),n=babelHelpers.interopRequireDefault(r(d[1])),l=r(d[2]),s=r(d[3]);const o=(0,l.extendableStyleFn)(()=>({container:{},title:{},list:{listStyle:'none',margin:0,padding:0},listItem:{}}));e.baseFooterLinkSectionStylesFn=o}),"9f515c",["d7ed8e","96b67d","c27e82","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,f.jsx)(l.default,{copyright:(0,f.jsx)(t.default,{}),localeSelectors:(0,f.jsx)(u.default,{}),socialMedia:(0,f.jsx)(s.default,{})})};babelHelpers.interopRequireDefault(r(d[0]));var l=babelHelpers.interopRequireDefault(r(d[1])),t=babelHelpers.interopRequireDefault(r(d[2])),u=babelHelpers.interopRequireDefault(r(d[3])),s=babelHelpers.interopRequireDefault(r(d[4])),f=r(d[5])}),"a50612",["d7ed8e","97c895","4e0c0a","074f58","660059","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useEvent=function(n,u){const c=(0,t.useRef)(null);(0,t.useRef)(!1);return(0,t.useLayoutEffect)(()=>{c.current=n}),(0,t.useCallback)((...t)=>{const n=c.current;if(!n)throw new Error('useEvent can not be called before the first render completes.');return n(...t)},[])};var t=r(d[0])}),"b83838",["d7ed8e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useResizeObserverPolyfill=void 0;var s=r(d[0]);e.useResizeObserverPolyfill=()=>{const[t,l]=(0,s.useState)('ResizeObserver'in window);return(0,s.useEffect)(()=>{if(t)return;(async()=>{if('ResizeObserver'in window==!1){const s=await r(d[2])(d[1],"resize-observer-polyfill").then(babelHelpers.interopRequireWildcard);window.ResizeObserver=s.default,l(!0)}})()},[t]),t}}),"d208a7",["d7ed8e","8610eb","b8ad06"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;babelHelpers.interopRequireDefault(r(d[0]));var t=babelHelpers.interopRequireDefault(r(d[1])),o=babelHelpers.interopRequireDefault(r(d[2])),n=babelHelpers.interopRequireDefault(r(d[3])),l=r(d[4]),s=r(d[5]);var u=function(){const{locale:u}=(0,l.useLocalizationSettings)();return(0,s.jsxs)(n.default,{title:(0,s.jsx)(t.default,{k:"simple_nav.footer.community"}),children:[(0,s.jsx)(o.default,{href:"https://www.airbnb.org?locale="+u,loggingID:"simpleFooter.community.airbnborg",children:(0,s.jsx)(t.default,{k:"simple_nav.footer.airbnb_org_open_homes"})}),(0,s.jsx)(o.default,{href:"https://www.airbnb.org/refugees",loggingID:"simpleFooter.community.afghanRefugees",openInNewWindow:!0,children:(0,s.jsx)(t.default,{k:"simple_nav.footer.support_afghan_refugees"})}),(0,s.jsx)(o.default,{href:"/against-discrimination",loggingID:"simpleFooter.community.againstDiscrimination",children:(0,s.jsx)(t.default,{k:"simple_nav.footer.combating_discrimination"})})]})};e.default=u}),"d30ce8",["d7ed8e","19c98a","b09ca4","84c823","f02f7b","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,l.jsxs)(t.default,{title:(0,l.jsx)(o.default,{k:"simple_nav.footer.hosting_category"}),children:[(0,l.jsx)(s.default,{href:"/host/homes?from_footer=1",loggingID:"simpleFooter.hosting.hostYourHome",children:(0,l.jsx)(o.default,{k:"simple_nav.footer.try_hosting"})}),(0,l.jsx)(s.default,{href:"/aircover-for-hosts",loggingID:"simpleFooter.hosting.aircover",children:(0,l.jsx)(o.default,{k:"simple_nav.footer.aircover_for_hosts_new"})}),(0,l.jsx)(s.default,{href:"/resources",loggingID:"simpleFooter.hosting.resources",children:(0,l.jsx)(o.default,{k:"simple_nav.footer.hosting_resources"})}),(0,l.jsx)(s.default,{href:"/help/community?s=footer",loggingID:"simpleFooter.hosting.communityCenter",children:(0,l.jsx)(o.default,{k:"simple_nav.footer.community_forums"})}),(0,l.jsx)(s.default,{href:"/help/responsible-hosting",loggingID:"simpleFooter.hosting.responsibleHosting",children:(0,l.jsx)(o.default,{k:"simple_nav.footer.hosting_responsibly"})})]})};babelHelpers.interopRequireDefault(r(d[0]));var o=babelHelpers.interopRequireDefault(r(d[1])),t=babelHelpers.interopRequireDefault(r(d[2])),s=babelHelpers.interopRequireDefault(r(d[3])),l=r(d[4])}),"e14b0d",["d7ed8e","19c98a","84c823","b09ca4","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useOnResize=function({disabled:s,element:c,onlyWhen:o,onResize:l}){const h=(0,u.useResizeObserverPolyfill)(),f=(0,t.useRef)(null),v=(0,t.useRef)(null),R=(0,t.useRef)(null),b=(0,t.useRef)(null),z=(0,n.useEvent)(t=>{var n;let u,s;if(null!==(n=t[0].borderBoxSize)&&void 0!==n&&n.length){const{blockSize:n,inlineSize:c}=t[0].borderBoxSize[0];s=n,u=c}else s=t[0].contentRect.height,u=t[0].contentRect.width;s!==f.current&&(R.current=f.current,f.current=s),u!==v.current&&(b.current=v.current,v.current=u),o&&!o({entries:t,height:s,previousHeight:R.current,previousWidth:b.current,width:u})||l({entries:t,previousHeight:R.current,previousWidth:b.current,width:u,height:s})});(0,t.useEffect)(()=>{if(!h||!c||s)return;const t=new ResizeObserver(z);return t.observe(c),()=>t.disconnect()},[s,c,h,z])};var t=r(d[0]),n=r(d[1]),u=r(d[2])}),"f620b8",["d7ed8e","b83838","d208a7"]);
__r("6898d5").extend({"shared.Airbnb":"에어비앤비","simple_nav.footer.newsroom":"뉴스룸","simple_nav.footer.learn_about_new_features":"새로운 기능에 대해 알아보기","simple_nav.footer.letter_from_founders":"에어비앤비 공동창업자의 메시지","simple_nav.footer.careers":"채용정보","simple_nav.footer.investors":"투자자 정보","GiftCard.title_plural":"기프트카드","simple_nav.footer.support":"에어비앤비 지원","simple_nav.footer.help_center":"도움말 센터","simple_nav.footer.aircover":"에어커버","simple_nav.footer.safety_information":"안전 정보","simple_nav.footer.supporting_people_with_disabilities":"장애인 지원","simple_nav.footer.cancellation_options":"예약 취소 옵션","simple_nav.footer.covid19_response":"에어비앤비의 코로나19 대응 방안","simple_nav.footer.report_neighborhood_concerns":"이웃 민원 신고","simple_nav.footer.community":"커뮤니티","simple_nav.footer.airbnb_org_open_homes":"Airbnb.org: 재난 구호 숙소","simple_nav.footer.support_afghan_refugees":"아프간 난민 지원","simple_nav.footer.combating_discrimination":"차별 철폐를 위한 노력","simple_nav.footer.hosting_category":"호스팅","simple_nav.footer.try_hosting":"호스팅 시작하기","simple_nav.footer.aircover_for_hosts_new":"호스트를 위한 에어커버","simple_nav.footer.hosting_resources":"호스팅 자료 둘러보기","simple_nav.footer.community_forums":"커뮤니티 포럼 방문하기","simple_nav.footer.hosting_responsibly":"책임감 있는 호스팅"});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/simple-footer/variants/base/PdpFooter.81fa65f04c.js.map