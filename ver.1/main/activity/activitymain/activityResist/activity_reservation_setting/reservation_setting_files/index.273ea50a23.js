__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.PhotoEditModalTabs=void 0;var t=babelHelpers.interopRequireWildcard(r(d[0])),o=babelHelpers.interopRequireDefault(r(d[1])),s=babelHelpers.interopRequireDefault(r(d[2])),n=babelHelpers.interopRequireDefault(r(d[3])),l=babelHelpers.interopRequireDefault(r(d[4])),u=babelHelpers.interopRequireDefault(r(d[5])),f=babelHelpers.interopRequireDefault(r(d[6])),p=babelHelpers.interopRequireDefault(r(d[7])),c=babelHelpers.interopRequireDefault(r(d[8])),h=babelHelpers.interopRequireDefault(r(d[9])),b=babelHelpers.interopRequireDefault(r(d[10])),v=babelHelpers.interopRequireDefault(r(d[11])),_=babelHelpers.interopRequireDefault(r(d[12])),x=babelHelpers.interopRequireDefault(r(d[13])),T=r(d[14]),R=babelHelpers.interopRequireDefault(r(d[15])),w=r(d[16]),S=babelHelpers.interopRequireDefault(r(d[17])),y=babelHelpers.interopRequireDefault(r(d[18])),E=r(d[19]),j=babelHelpers.interopRequireDefault(r(d[20])),D=babelHelpers.interopRequireDefault(r(d[21])),C=babelHelpers.interopRequireDefault(r(d[22])),H=r(d[23]),q=r(d[24]);let M;e.PhotoEditModalTabs=M,(function(t){t.DETAILS="DETAILS",t.EDIT="EDIT"})(M||(e.PhotoEditModalTabs=M={}));const I={brightnessValue:0,contrastValue:0,cropped:!1,filtered:!1,image:null,transformOffsetX:0,transformOffsetY:0,transformRotate:0,transformScale:1,transformTranslateX:0,transformTranslateY:0,hasEdits:!1};var P=(0,u.default)((0,T.withStyles)(({dls19:t})=>({bodyContainer:{height:'100%',display:'flex',maxWidth:t.responsive.primitives.breakpoint_xlargeAndAbove,margin:'0 auto',[t.responsive.queries.largeAndAbove]:{paddingLeft:t.spacing.micro32px,paddingRight:t.spacing.micro32px}},bodyInner:{width:'100%',[t.responsive.queries.largeAndAbove]:{display:'flex',flexDirection:'row',margin:'auto 0',justifyContent:'center'}},imageContainer:{overflow:'hidden',textAlign:'center',position:'relative',width:'100%',minWidth:'100%',[t.responsive.queries.largeAndAbove]:{width:'calc(70% - 48px)',minWidth:'auto'}},frame:{paddingBottom:'calc(2/3 * 100%)'},tabsContainer:{width:'100%',[t.responsive.queries.largeAndAbove]:{width:'30%',marginLeft:'auto'}},footerContainer:{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'},trailingButtons:{display:'flex'},cancelButton:{marginRight:t.spacing.macro24px}})),(0,l.default)('PhotoEditModal',['onSave','onClose']))((function({tabs:l,photo:u,isOpen:T,onClose:P,onSave:A,label:X=o.default.t('homes.bys.photoEditModal.accessibleTitle'),activeTab:Y,altActionText:O,altActionHandler:k,editTabTitle:B,editTabText:z,dropdownOptions:L,dropdownValue:U,caption:W,showCoverSetter:V,wasCover:G,getMediaUploadSignedUrl:N,aspectRatio:F,captionHelpText:Z,showPhotoGrid:J,css:K,styles:Q}){const[$,ee]=(0,t.useState)(I),[te,ae]=(0,t.useState)(U),[oe,re]=(0,t.useState)(W),[ie,se]=(0,t.useState)(G),[ne,le]=(0,t.useState)(null!=Y?Y:M[l[0]]),[de,ue]=(0,t.useState)(!1),[fe,pe]=(0,t.useState)(!1),[ce,he]=(0,t.useState)(!1),me=(0,t.useRef)(null),[be,ge]=(0,t.useState)(!1),[ve,_e]=(0,t.useState)(!1),xe=(0,t.useMemo)(()=>({newX:$.transformTranslateX,newY:$.transformTranslateY,newRotate:$.transformRotate}),[$.transformTranslateX,$.transformTranslateY,$.transformRotate]),Te=(0,t.useMemo)(()=>({newX:I.transformTranslateX,newY:I.transformTranslateY,newRotate:I.transformRotate}),[]),Re=(0,y.default)(xe,500)||Te,we=(0,S.default)(Re)||Te;(0,t.useEffect)(()=>{ae(U)},[U]),(0,t.useEffect)(()=>{re(W)},[W]),(0,t.useEffect)(()=>{se(G)},[G]),(0,t.useEffect)(()=>{T||se(!1)},[T]),(0,t.useEffect)(()=>{le(null!=Y?Y:M[l[0]])},[l,Y]),(0,t.useEffect)(()=>{!be&&null!=u&&u.fullSizeSrc&&ne===M.EDIT&&(ge(!0),(0,H.createImage)(u.fullSizeSrc).then(t=>{ee(o=>({...o,image:t})),_e(!0)}))},[be,ne,u]),(0,t.useEffect)(()=>{u&&(0,H.createImage)(u.src).then(t=>{ee(o=>({...o,image:t}))})},[u]),(0,t.useEffect)(()=>{de||($.hasEdits||oe!==W||te!==U)&&ue(!0)},[oe,de,te,$.hasEdits,W,U]);const Se=(0,t.useCallback)(t=>{ee(o=>({...o,...t,hasEdits:!0}))},[]),ye=(0,t.useCallback)(t=>{const o={...$,...t};if(!o.image)return;const s=(0,E.getRotatedSize)({rotate:o.transformRotate,width:o.image.width,height:o.image.height,ratio:F}),{x:n,y:l}=(0,E.getTranslationBounds)({height:s.height,width:s.width,frameWidth:s.frameWidth,frameHeight:s.frameHeight,scale:o.transformScale}),u={transformTranslateX:Math.max(Math.min(o.transformTranslateX,n[1]),n[0]),transformTranslateY:Math.max(Math.min(o.transformTranslateY,l[1]),l[0])},f=(0,E.getAdjustedOffset)({rotate:o.transformRotate,width:o.image.width,height:o.image.height});ee({...$,...o,...u,...f,hasEdits:!0})},[$]),Ee=(0,t.useCallback)((t,o)=>{ye({transformTranslateX:t,transformTranslateY:o})},[ye]),je=(0,t.useCallback)(({direction:t,transformRotate:o})=>{ye({transformRotate:'right'===t?(o+90)%360:(o+270)%360,transformScale:E.ZOOM.MIN,transformTranslateX:0,transformTranslateY:0,cropped:!1})},[ye]),De=t=>{P(t),ee(I),ae(void 0),re(void 0),pe(!1),he(!1),ue(!1),ge(!1),_e(!1)};return(0,t.useEffect)(()=>{if(!T)return;const t=[],{newX:s,newY:n,newRotate:l}=we,{newX:u,newY:f,newRotate:p}=Re;if(s!==u){const s=Math.round(-u);t.push(o.default.t('list_your_space_v2.photos_step.a11y_announce_photo_position_horizontal',{x:s}))}if(n!==f){const s=Math.round(f);t.push(o.default.t('list_your_space_v2.photos_step.a11y_announce_photo_position_vertical',{y:s}))}if(l!==p)if(0===p)t.push(o.default.t('list_your_space_v2.photos_step.edit_screen_rotate_360_alt_text'));else{const s=360-p;90===s?t.push(o.default.t('list_your_space_v2.photos_step.edit_screen_rotate_90_alt_text')):180===s?t.push(o.default.t('list_your_space_v2.photos_step.edit_screen_rotate_180_alt_text')):270===s&&t.push(o.default.t('list_your_space_v2.photos_step.edit_screen_rotate_270_alt_text'))}const c=t.join();c&&(0,R.default)({text:c,priority:w.AriaLivePriority.MEDIUM,duration:w.AriaLiveDuration.SHORT})},[T,Re,we]),(0,q.jsxs)(j.default,{accessibleTitle:X,isOpen:T,onClose:()=>De(!0),children:[(0,q.jsx)(v.default,{children:(0,q.jsx)(s.default,{k:"homes.bys.photoEditModal.title"})}),(0,q.jsx)(_.default,{children:(0,q.jsx)("div",{...K(Q.bodyContainer),children:(0,q.jsxs)("div",{...K(Q.bodyInner),children:[(0,q.jsx)("div",{...K(Q.imageContainer),children:(0,q.jsx)("div",{...K(Q.frame),children:$.image?(0,q.jsx)(D.default,{edits:$,canvasRef:me,onMoveImage:Ee,canEditPhoto:ne===M.EDIT,isSaving:fe,aspectRatio:F,showPhotoGrid:J}):null})}),(0,q.jsx)("div",{...K(Q.tabsContainer),children:(0,q.jsx)(C.default,{tabs:l,activeTab:ne,onChangeTab:le,edits:$,onHandleEditUpdates:Se,onRotateImage:je,editTabTitle:B,editTabText:z,dropdownValue:te,dropdownOptions:L,onDropdownSelect:ae,caption:oe,captionHelpText:Z,onUpdateCaption:re,showCoverSetter:V,wasCover:G,isCover:ie,onUpdateCover:se,isSaving:fe})})]})})}),(0,q.jsx)(x.default,{children:(0,q.jsxs)("div",{...K(Q.footerContainer),children:[O&&k?(0,q.jsx)(h.default,{loading:ce,children:(0,q.jsx)(c.default,{onPress:()=>{he(!0),Promise.resolve().then(()=>k&&k()).finally(()=>De(!0))},disabled:ce,children:O})}):(0,q.jsx)("div",{}),(0,q.jsxs)("div",{...K(Q.trailingButtons),children:[!n.default.getBootstrap('mys.photo_edit_modal.remove_cancel_button')&&(0,q.jsx)("div",{...K(Q.cancelButton),children:(0,q.jsx)(p.default,{type:"button",onPress:()=>De(!0),children:(0,q.jsx)(s.default,{k:"homes.bys.photoEditModal.cancel"})})}),(0,q.jsx)(b.default,{loading:fe,children:(0,q.jsx)(f.default,{disabled:!de,onPress:()=>{let t;pe(!0);const o=String((null==u?void 0:u.listingId)||''),s={photoId:null==u?void 0:u.photoId};Promise.resolve().then(()=>!ve&&null!=u&&u.fullSizeSrc?(0,H.createImage)(u.fullSizeSrc):Promise.resolve()).then(()=>$.hasEdits?(0,H.prepareCanvasForSaving)({edits:$,aspectRatio:F}):Promise.resolve()).then(o=>{oe!==W&&(s.caption=oe),te!==U&&(s.newSectionId=te),ie&&!G&&(s.isCover=ie),o&&(t=o)}).then(()=>t&&N?(0,H.uploadImagePromise)(N,o,t):Promise.resolve()).then(t=>{var o;t&&(s.image=t,null!=s&&null!==(o=s.image)&&void 0!==o&&o.filePath||Promise.reject(Error('No data for: filePath')));return A(s)}).finally(De)},type:"submit",children:(0,q.jsx)(s.default,{k:"homes.bys.photoEditModal.save"})})})]})]})})]})}));e.default=P}),"787468",["d7ed8e","6898d5","19c98a","6b945b","bc1c90","8be856","a5b531","8429b6","bd975d","776222","3235f8","ea4cbe","4327be","c2687c","bf663a","01db17","484f5a","231682","aeab95","68505d","98c166","f1e064","0faa66","f7a6fa","721ed1"]);
__r("6898d5").extend({"homes.bys.photoEditModal.accessibleTitle":"사진 수정 모달","list_your_space_v2.photos_step.a11y_announce_photo_position_horizontal":"가로 중심으로부터 %{x}픽셀","list_your_space_v2.photos_step.a11y_announce_photo_position_vertical":"세로 중심으로부터 %{y}픽셀","list_your_space_v2.photos_step.edit_screen_rotate_360_alt_text":"360도 회전 후 원래 위치로 되돌아왔습니다.","list_your_space_v2.photos_step.edit_screen_rotate_90_alt_text":"반 시계 방향으로 90도 회전했습니다.","list_your_space_v2.photos_step.edit_screen_rotate_180_alt_text":"반 시계 방향으로 180도 회전했습니다.","list_your_space_v2.photos_step.edit_screen_rotate_270_alt_text":"반 시계 방향으로 270도 회전했습니다.","homes.bys.photoEditModal.title":"사진 수정하기","homes.bys.photoEditModal.cancel":"취소","homes.bys.photoEditModal.save":"저장"});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/host-dls/components/photos/PhotoEditModal/index.4acc2ce0a7.js.map