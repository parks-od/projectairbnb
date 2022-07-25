__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.config=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]);const s={dotSize:4,horizontalPadding:2,maxDots:5,startScrollOffset:2,useVariableDotSizes:!1};e.config=s;const l=(0,n.getDotPadding)(s);e.default=({dls19:n})=>({container:{alignItems:'flex-end',display:'flex',justifyContent:'center',height:'100%'},dotsWindowContainer:{display:'flex',overflow:'hidden',paddingBottom:12,maxWidth:l*s.maxDots,'@supports (overflow: clip)':{overflow:'clip'}},dotsContainer:{alignItems:'flex-end',display:'flex',justifyContent:'center',listStyleType:'none',margin:0,padding:0,transition:`transform ${o.durations.lowLevel} ${o.easings.inOutQuad}`,[t.prefersReducedMotionQuery]:{transition:'none'}},dot:{background:n.palette.white,borderRadius:'50%',height:s.dotSize,marginLeft:s.horizontalPadding,marginRight:s.horizontalPadding,minWidth:s.dotSize,opacity:.6,transition:`opacity ${o.durations.lowLevel} ${o.easings.inOutQuad}`,width:s.dotSize,[t.prefersReducedMotionQuery]:{transition:'none'}},dot__selected:{opacity:1}})}),"310a41",["c6c95d","b9927c","c79674"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(c){const{dotSize:u,maxDots:x,startScrollOffset:S,useVariableDotSizes:b}=c,p=n(c);return function({ariaLabel:n,css:c,selectedIndex:D,styles:O,total:I}){if(I<=1)return null;const z=(function({dotPadding:t,maxDots:l,selectedIndex:o,startScrollOffset:n,total:f}){let c=0;if(f>=l&&o>n){const l=s({startScrollOffset:n,total:f});c=o>l?-(l-n)*t:-(o-n)*t}return c})({dotPadding:p,maxDots:x,selectedIndex:D,startScrollOffset:S,total:I});return(0,o.jsx)("div",{"aria-label":n||t.default.t('dls.a11y.carousel.indicatordots',{index:D+1,total:I}),role:"img",...c(O.container),children:(0,o.jsx)("div",{...c(O.dotsWindowContainer),children:(0,o.jsx)("div",{...c(O.dotsContainer,{transform:`translateX(${z}px)`}),children:(0,l.default)(I).map(t=>(0,o.jsx)("span",{...c(O.dot,D===t&&O.dot__selected,b&&{transform:`scale(${f({dotIndex:t,dotSize:u,maxDots:x,selectedIndex:D,startScrollOffset:S,total:I})})`})},t))})})})}},e.getDotPadding=n;babelHelpers.interopRequireDefault(r(d[0]));var t=babelHelpers.interopRequireDefault(r(d[1])),l=babelHelpers.interopRequireDefault(r(d[2])),o=r(d[3]);function n({dotSize:t,horizontalPadding:l}){return t+2*l}function s({startScrollOffset:t,total:l}){return l-t-1}function f({dotIndex:t,dotSize:l,maxDots:o,selectedIndex:n,startScrollOffset:f,total:c}){let u=1;if(c<=o)return u;if(n>f){n>=s({startScrollOffset:f,total:c})?t===c-o+1?u=(l-1)/l:t<=c-o&&(u=(l-2)/l):t===n-f||t===n+f?u=(l-1)/l:(t<n-f||t>n+f)&&(u=(l-2)/l)}else t===o-2?u=(l-1)/l:t>=o-1&&(u=(l-2)/l);return u}}),"c79674",["d7ed8e","6898d5","36053a","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0])),t=r(d[1]),u=babelHelpers.interopRequireDefault(r(d[2])),f=babelHelpers.interopRequireDefault(r(d[3])),o=babelHelpers.interopRequireWildcard(r(d[4]));const n=(0,u.default)(o.config);var p=(0,t.withStyles)(t=>l.default.all([(0,f.default)(t),(0,o.default)(t)],{pureComponent:!0}))(n);e.default=p}),"d2269c",["ea7605","bf663a","c79674","310a41","ed2936"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.config=void 0;var t=r(d[0]);const o={...r(d[1]).config,dotSize:6,horizontalPadding:2.5,useVariableDotSizes:!0};e.config=o;const n=(0,t.getDotPadding)(o);e.default=t=>({dotsWindowContainer:{maxWidth:n*o.maxDots},dot:{height:o.dotSize,marginLeft:o.horizontalPadding,marginRight:o.horizontalPadding,minWidth:o.dotSize,width:o.dotSize}})}),"ed2936",["c79674","310a41"]);
__r("6898d5").extend({"dls.a11y.carousel.indicatordots":"전체 %{total}장 중 %{index}번째 사진"});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/dls-current/components/content/indicatorDots/IndicatorDotsVariableSize.e701bd0140.js.map