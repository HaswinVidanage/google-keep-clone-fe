(this["webpackJsonpkeep-fe"]=this["webpackJsonpkeep-fe"]||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),o=a.n(r),i=a(17),c=a.n(i),s=(a(153),a(154),a(16)),l=a(136),d=a(48),j=a(21),u=a(263),p=a(46),b=a.n(p),m=a(61),g=a(11),h=a(6),O=a(221),x=a(219),f=a(138),v=a(102),y=a(265),C=a(224),w=a(32),k=a(33),S=function(e,t){localStorage.setItem(e,t)},N=function(e){return localStorage.getItem(e)},F={TOKEN:"token"},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"An error occurred";return Object(k.upperFirst)(Object(k.toLower)(e.trim()))},W=Object(h.a)((function(e){return{pageWrapper:{height:"100vh",display:"flex",flexDirection:"column",flexGrow:"1",width:"100%"},pageContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:"1"},boxWrapper:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(3)},logo:{height:e.spacing(7),padding:e.spacing(0,0,1,0)},textWelcome:{},textRegister:{textDecoration:"none",color:e.palette.secondary.dark},textRegisterText:{paddingTop:e.spacing(3)},textNotice:{lineHeight:"unset",textAlign:"center",paddingTop:e.spacing(2)},textAttribution:{padding:e.spacing(0,2,2,0),textAlign:"right"},textCreator:{textDecoration:"none",color:e.palette.secondary.dark},loginButtonRoot:{marginTop:e.spacing(3)},loginButtonText:{color:e.palette.secondary.contrastText,textTransform:"capitalize"},inputRoot:{"&$inputFocused $inputNotchedOutline":{borderColor:e.palette.secondary.main}},inputNotchedOutline:{},inputFocused:{},inputLabelRoot:{"&$inputFocused":{color:e.palette.secondary.main}}}}))((function(e){var t=e.classes,a={classes:{root:t.inputRoot,notchedOutline:t.inputNotchedOutline,focused:t.inputFocused}},o={classes:{root:t.inputLabelRoot,focused:t.inputFocused}},i=Object(r.useState)(""),c=Object(g.a)(i,2),s=c[0],l=c[1],u=Object(r.useState)(""),p=Object(g.a)(u,2),h=p[0],W=p[1],I=Object(w.b)("\n\tmutation login ($email: String!, $password: String!) {\n\t  login(input: {email: $email, password: $password})\n\t}\n"),B=Object(g.a)(I,2),D=B[0],E=B[1],T=Object(j.g)(),L=(Object(j.h)().state||{from:{pathname:"/"}}).from,M=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:s,password:h},e.next=4,E(a);case 4:n=e.sent,A(Object(k.get)(n,"data.login",""));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){""!==e&&(S(F.TOKEN,e),""!==N(F.TOKEN)&&T.replace(L))};return Object(n.jsx)(x.a,{container:!0,children:Object(n.jsxs)("div",{className:t.pageWrapper,children:[Object(n.jsxs)(O.a,{maxWidth:"md",className:t.pageContainer,children:[Object(n.jsx)(f.a,{elevation:3,children:Object(n.jsxs)("form",{className:t.boxWrapper,onSubmit:M,children:[Object(n.jsx)("img",{className:t.logo,src:"../assets/logo.png",alt:"logo"}),Object(n.jsx)(v.a,{className:t.textWelcome,color:"textSecondary",variant:"subtitle1",children:"Welcome back!"}),Object(n.jsx)(y.a,{type:"email",error:D.error,InputLabelProps:o,InputProps:a,name:"email",onChange:function(e){return l(e.target.value)},label:"Email",variant:"outlined",fullWidth:!0,margin:"normal"}),Object(n.jsx)(y.a,{error:D.error,InputLabelProps:o,InputProps:a,name:"password",onChange:function(e){return W(e.target.value)},label:"Password",type:"password",variant:"outlined",fullWidth:!0,margin:"normal",helperText:D.error&&R(Object(k.get)(D,"error.graphQLErrors[0].message","Server error occurred. Please try again."))}),Object(n.jsx)(C.a,{classes:{root:t.loginButtonRoot,label:t.loginButtonText},type:"submit",disabled:D.fetching||""===s||""===h,variant:"contained",color:"secondary",disableElevation:!0,fullWidth:!0,size:"large",children:"Log In"}),Object(n.jsxs)(v.a,{className:t.textNotice,color:"textSecondary",variant:"caption",children:["Your user login & data will be deleted",Object(n.jsx)("br",{}),"on container restart, and happens so",Object(n.jsx)("br",{}),"often as I'm running this on Free Tier",Object(n.jsx)("br",{})]})]})}),Object(n.jsxs)(v.a,{className:t.textRegisterText,color:"textSecondary",variant:"body2",children:["Don't have an account?",Object(n.jsx)(d.b,{className:t.textRegister,to:"/register",children:"Register"})]})]}),Object(n.jsxs)(v.a,{className:t.textAttribution,color:"textSecondary",variant:"body2",children:["Created by ",Object(n.jsx)("a",{className:t.textCreator,href:" https://github.com/HaswinVidanage/google-keep-clone-fe",children:"Haswin Vidanage"})]})]})})})),I=a(268),B=a(45),D=a(225),E=a(31),T=a(233),L=a(234),M=a(235),A=a(236),P=a(231),z=a(237),$=a(238),H=a(239),V=a(240),_=a(241),K=a(242),U=a(243),G=a(222),q=a(267),Q=a(227),J=a(226),Y=(a(135),Object(r.createContext)(null)),X=Object(r.createContext)(null);function Z(e){var t=e.children,a=e.user,o=Object(r.useState)(a&&a.darkMode),i=Object(g.a)(o,2),c=i[0],s=i[1],l=Object(r.useState)(a&&a.listMode),d=Object(g.a)(l,2),j=d[0],u=d[1],p=[{name:a&&a.name,email:a&&a.email,isDarkMode:c,isListView:j},{toggleDarkMode:function(){return s(!c)},toggleView:function(){return u(!j)}}];return Object(n.jsx)(Y.Provider,{value:p,children:t})}function ee(e){var t=e.children,a=Object(r.useState)(!0),o=Object(g.a)(a,2),i=o[0],c=o[1],s=Object(r.useState)(""),l=Object(g.a)(s,2),d=l[0],j=l[1],u=Object(r.useState)(""),p=Object(g.a)(u,2),b=p[0],m=p[1],h=[{isNavBarOpen:i,noteInEditMode:d,selectedLabelId:b},{toggleNavBar:function(){return c(!i)},setNoteInEditMode:j,setSelectedLabelId:m}];return Object(n.jsx)(X.Provider,{value:h,children:t})}var te=function(){return Object(r.useContext)(Y)},ae=function(){return Object(r.useContext)(X)},ne=Object(D.a)((function(e){return{popover:{background:e.custom.palette.profilePopColor,width:e.spacing(40),borderRadius:e.shape.borderRadius},container:{display:"flex",padding:e.spacing(2),flexDirection:"column",alignItems:"center"},avatar:{width:e.spacing(6),height:e.spacing(6),margin:e.spacing(1),background:e.palette.background.default},userInfo:{display:"flex",flexDirection:"column",alignItems:"center",paddingLeft:e.spacing(1)},userName:Object(s.a)(Object(s.a)({},e.custom.fontFamily.metropolis),{},{fontSize:"1rem",fontWeight:500}),userEmail:Object(s.a)(Object(s.a)({},e.custom.fontFamily.roboto),{},{fontSize:"0.9rem"}),bar:{padding:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center"},buttonSignout:Object(s.a)(Object(s.a)({},e.custom.fontFamily.metropolis),{},{borderRadius:e.spacing(.5),padding:e.spacing(.5,2),fontSize:"0.8rem",fontWeight:500,textTransform:"none"})}}));function re(e){var t=e.anchorEl,a=e.isOpen,r=e.onClose,o=ne(),i=Object(E.a)(),c=a?"profile-popover":void 0,s=te(),l=Object(g.a)(s,1)[0],d=l.name,u=l.email,p=Object(j.g)();return Object(n.jsx)("div",{children:Object(n.jsxs)(G.a,{id:c,open:a,anchorEl:t,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},classes:{paper:o.popover},children:[Object(n.jsxs)("div",{className:o.container,children:[Object(n.jsx)(q.a,{alt:d,className:o.avatar,children:Object(n.jsx)(J.a,{htmlColor:i.custom.palette.iconColor,fontSize:"large"})}),Object(n.jsxs)("div",{className:o.userInfo,children:[Object(n.jsx)(v.a,{className:o.userName,variant:"h6",component:"span",color:"textPrimary",children:d}),Object(n.jsx)(v.a,{className:o.userEmail,variant:"body1",component:"span",color:"textSecondary",children:u})]})]}),Object(n.jsx)(Q.a,{}),Object(n.jsx)("div",{className:o.bar,children:Object(n.jsx)(C.a,{variant:"outlined",size:"small",onClick:function(){var e;e=F.TOKEN,localStorage.removeItem(e),p.push("/")},classes:{root:o.buttonSignout},children:"Sign out"})})]})})}var oe=a(230),ie=a(232),ce=a(228),se=a(266),le=a(269),de=a(101),je=Object(D.a)((function(e){return{search:{display:"flex",justifyContent:"center",maxWidth:"100%",transition:e.transitions.create("all",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),marginLeft:e.spacing(1)},searchIcon:{width:e.spacing(7),height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{flex:1,alignItems:"center"},inputInput:{width:"100%"}}})),ue=function(e){var t=e.onSearchClose,a=je(),o=Object(de.a)(),i=Object(r.useState)(!1),c=Object(g.a)(i,2),s=c[0],l=c[1],d=Object(r.useState)(""),j=Object(g.a)(d,2),u=j[0],p=j[1],b=Object(r.useState)(!1),m=Object(g.a)(b,2),h=m[0],O=m[1];return Object(n.jsx)(ce.a,{onClickAway:function(){t(),l(!1)},children:Object(n.jsxs)(I.a,{className:a.search,borderRadius:o.shape.borderRadius,bgcolor:s?o.palette.background.default:o.palette.background.highlight,boxShadow:s?2:0,height:"3rem",children:[Object(n.jsx)("div",{className:a.searchIcon,children:Object(n.jsx)(oe.a,{})}),Object(n.jsx)(se.a,{placeholder:"Search",classes:{root:a.inputRoot,input:a.inputInput},value:u,onClick:function(){return l(!0)},inputProps:{"aria-label":"search"},onChange:function(e){return p(e.target.value)},onKeyDown:function(e){l(!0),"Enter"===e.key&&(O(!0),l(!1),t())}}),s?Object(n.jsx)(P.a,{hidden:!s,onClick:function(){p(""),l(!1),t()},children:Object(n.jsx)(ie.a,{htmlColor:o.custom.palette.iconColor})}):null,Object(n.jsx)(le.a,{open:h,message:"Search not implemented ;)",autoHideDuration:2e3,onClose:function(){O(!1)}})]})})},pe=Object(D.a)((function(e){return{grow:{flexGrow:1},containerBorder:{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:e.palette.divider},menuButton:Object(B.a)({},e.breakpoints.up("md"),{marginRight:e.spacing(1)}),logoContainer:{display:"flex",justifyContent:"stretch"},logo:Object(B.a)({display:"none",height:e.spacing(5.5),padding:e.spacing(0,1,0,0)},e.breakpoints.up("sm"),{display:"block"}),title:Object(s.a)(Object(s.a)({},e.custom.fontFamily.metropolis),{},Object(B.a)({display:"none"},e.breakpoints.up("xs"),{display:"flex",alignItems:"center"})),searchbarContainer:Object(B.a)({flexGrow:1,marginLeft:e.spacing(1)},e.breakpoints.up("md"),{flexGrow:0,width:e.spacing(90),marginLeft:e.spacing(9)})}})),be=function(){var e="primary-search-account-menu",t=pe(),a=Object(E.a)(),o=Object(r.useState)(!1),i=Object(g.a)(o,2),c=i[0],s=i[1],l=Object(r.useState)(!1),d=Object(g.a)(l,2),j=d[0],u=d[1],p=Object(r.useRef)(),b=Object(T.a)({disableHysteresis:!0,threshold:0}),m=Object(L.a)(a.breakpoints.down("xs")),h=te(),O=Object(g.a)(h,2),x=O[0],f=x.isDarkMode,v=x.isListView,y=O[1],C=y.toggleDarkMode,w=y.toggleView,k=ae(),S=Object(g.a)(k,2)[1].toggleNavBar,N=Object(r.useCallback)((function(){C()}),[C,f]),F=Object(r.useCallback)((function(){w()}),[w,v]);return Object(n.jsx)("div",{className:t.grow,children:Object(n.jsxs)(M.a,{elevation:b?4:0,className:b?null:t.containerBorder,children:[Object(n.jsxs)(A.a,{children:[Object(n.jsx)(P.a,{edge:"start",className:t.menuButton,"aria-label":"open drawer",onClick:S,children:Object(n.jsx)(z.a,{htmlColor:a.custom.palette.iconColor})}),m?j?Object(n.jsx)(ge,{onSearchClose:function(){return u(!1)}}):Object(n.jsx)(me,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(me,{}),Object(n.jsx)(ge,{onSearchClose:function(){return u(!1)}})]}),Object(n.jsx)("div",{className:t.grow}),m&&!j?Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{"aria-label":"search","aria-controls":e,onClick:function(){return u(!0)},children:Object(n.jsx)($.a,{htmlColor:a.custom.palette.iconColor})})}):null,Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{"aria-label":"toggle dark theme","aria-controls":e,onClick:N,children:f?Object(n.jsx)(H.a,{htmlColor:a.custom.palette.iconColor}):Object(n.jsx)(V.a,{htmlColor:a.custom.palette.iconColor})})}),m?null:Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{"aria-label":v?"toggle tile view":"toggle list view","aria-controls":e,onClick:F,children:v?Object(n.jsx)(_.a,{htmlColor:a.custom.palette.iconColor}):Object(n.jsx)(K.a,{htmlColor:a.custom.palette.iconColor})})}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{edge:"end",ref:p,"aria-label":"account of current user","aria-controls":e,"aria-haspopup":"true",onClick:function(){return s(!0)},children:Object(n.jsx)(U.a,{htmlColor:a.custom.palette.iconColor})})})]}),Object(n.jsx)(re,{anchorEl:p.current,isOpen:c,onClose:function(){return s(!1)}})]})})};function me(){var e=pe();return Object(n.jsxs)("div",{className:e.logoContainer,children:[Object(n.jsx)("img",{className:e.logo,src:"../../assets/logo.png",alt:"logo"}),Object(n.jsx)(v.a,{color:"textSecondary",className:e.title,variant:"h6",noWrap:!0,children:"Notes"})]})}function ge(e){var t=e.onSearchClose,a=pe();return Object(n.jsx)("div",{className:a.searchbarContainer,children:Object(n.jsx)(ue,{ml:8,onSearchClose:t})})}var he=a(245),Oe=a(244),xe=a(246),fe=a(247),ve=a(248),ye=a(249),Ce=a(250),we=a(251),ke=a(252),Se=a(253),Ne=a(254),Fe=a(255),Re=a(256),We=Object(D.a)((function(e){return{root:{display:"grid",marginTop:32,marginBottom:16,backgroundColor:e.palette.primary},paper:{margin:"auto",width:598,backgroundColor:e.palette.primary},inputWrapper:{display:"flex",justifyContent:"flex",alignItems:"center",borderRadius:e.shape.borderRadius,backgroundColor:e.palette.primary,borderWidth:"1px",borderColor:e.palette.divider,height:"inherit"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(B.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:2*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),takeNoteInput:{paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:2*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},tools:{display:"flex",flexDirection:"row"},toolsWrapper:{all:"inherit"},collapsedContainer:{display:"flex"},paperWrapper:{transition:e.transitions.create("all",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.short}),borderColor:e.custom.palette.itemBorderColor,borderWidth:e.spacing(.1),borderStyle:"solid"},wrapper:{display:"flex",flexDirection:"column"},takeNoteContainer:{display:"flex",flexDirection:"row"},takeNoteFooter:{display:"flex",flexDirection:"row",flexWrap:"wrap",height:34,marginRight:15,marginLeft:15},closeBtnWrapper:{display:"flex",justifyContent:"flex-end",flexWrap:"wrap"}}})),Ie=function(e){var t=We(),a=Object(E.a)(),o=Object(r.useState)(!1),i=Object(g.a)(o,2),c=i[0],s=i[1],l=Object(r.useState)(""),d=Object(g.a)(l,2),j=d[0],u=d[1],p=Object(r.useState)(""),h=Object(g.a)(p,2),O=h[0],v=h[1],y=Object(w.b)("\n\tmutation createNote($title: String!, $content: String!) {\n\t  createNote(input:{title: $title, content: $content}) {\n\t    id\n\t    title\n\t    content\n\t    user {\n\t      id\n\t      name\n\t      email\n\t    }\n\t  }\n\t}\n"),k=Object(g.a)(y,2),S=(k[0],k[1]),N=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!1),t={title:j,content:O},""!==j.trim()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,S(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=Object(r.useState)("default"),R=Object(g.a)(F,2),W=R[0];R[1];return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(ce.a,{onClickAway:function(){c&&N()},children:Object(n.jsx)(f.a,{elevation:5,classes:{root:t.paperWrapper},style:{backgroundColor:a.custom.palette.noteBackground[W]},className:t.paper,children:Object(n.jsxs)(Oe.a,{classes:{wrapperInner:t.wrapper},collapsedHeight:"3rem",in:c,children:[Object(n.jsxs)("div",{className:t.inputWrapper,children:[Object(n.jsx)(se.a,{placeholder:"Title",classes:{root:t.inputRoot,input:t.inputInput},onFocus:function(){return s(!0)},onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("div",{className:t.tools,children:c?Object(n.jsx)("div",{className:t.toolsWrapper,children:Object(n.jsx)(P.a,{color:"inherit",children:Object(n.jsx)(he.a,{children:Object(n.jsx)(xe.a,{})})})}):Object(n.jsxs)("div",{className:t.toolsWrapper,children:[Object(n.jsx)(P.a,{color:"inherit",children:Object(n.jsx)(he.a,{children:Object(n.jsx)(fe.a,{})})}),Object(n.jsx)(P.a,{color:"inherit",children:Object(n.jsx)(he.a,{children:Object(n.jsx)(ve.a,{})})}),Object(n.jsx)(P.a,{color:"inherit",children:Object(n.jsx)(he.a,{children:Object(n.jsx)(ye.a,{})})})]})})]}),c&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:t.takeNoteContainer,children:Object(n.jsx)(se.a,{placeholder:"Take a note...",multiline:!0,autoFocus:!0,classes:{root:t.inputRoot,input:t.takeNoteInput},onChange:function(e){return v(e.target.value)}})}),Object(n.jsx)("div",{className:t.takeNoteFooter,children:Object(n.jsxs)(x.a,{container:!0,spacing:1,children:[Object(n.jsx)(x.a,{item:!0,md:1,children:Object(n.jsx)(P.a,{color:"inherit",size:"small",disabled:!0,children:Object(n.jsx)(he.a,{children:Object(n.jsx)(Ce.a,{})})})}),Object(n.jsx)(x.a,{item:!0,md:1,children:Object(n.jsx)(P.a,{color:"inherit",size:"small",disabled:!0,children:Object(n.jsx)(he.a,{children:Object(n.jsx)(we.a,{})})})}),Object(n.jsx)(x.a,{item:!0,md:1,children:Object(n.jsx)(P.a,{color:"inherit",size:"small",disabled:!0,children:Object(n.jsx)(he.a,{children:Object(n.jsx)(ke.a,{})})})}),Object(n.jsx)(x.a,{item:!0,md:1,children:Object(n.jsx)(P.a,{color:"inherit",size:"small",disabled:!0,children:Object(n.jsx)(he.a,{children:Object(n.jsx)(ye.a,{})})})}),Object(n.jsx)(x.a,{item:!0,md:1,children:Object(n.jsx)(P.a,{color:"inherit",size:"small",disabled:!0,children:Object(n.jsx)(he.a,{children:Object(n.jsx)(Se.a,{})})})}),Object(n.jsx)(x.a,{item:!0,md:1,children:Object(n.jsx)(P.a,{color:"inherit",size:"small",disabled:!0,children:Object(n.jsx)(he.a,{children:Object(n.jsx)(Ne.a,{})})})}),Object(n.jsx)(x.a,{item:!0,md:1,children:Object(n.jsx)(P.a,{color:"inherit",size:"small",disabled:!0,children:Object(n.jsx)(he.a,{children:Object(n.jsx)(Fe.a,{})})})}),Object(n.jsx)(x.a,{item:!0,md:1,children:Object(n.jsx)(P.a,{color:"inherit",size:"small",disabled:!0,children:Object(n.jsx)(he.a,{children:Object(n.jsx)(Re.a,{})})})}),Object(n.jsx)(x.a,{item:!0,md:4,xs:12,children:Object(n.jsx)("div",{className:t.closeBtnWrapper,children:Object(n.jsx)(C.a,{size:"small",style:{textTransform:"none",fontWeight:"bold"},onClick:function(){N()},children:"Close"})})})]})})]})]})})})})},Be=Object(D.a)((function(e){return{content:{transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:e.mixins.drawer.minWidth-e.spacing(2.5),marginRight:-1*e.spacing(3)},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},todoCreateContainer:{display:"flex",padding:e.spacing(4,0),margin:e.spacing(0,1)},todoCreateWrapper:{flex:1,maxWidth:e.spacing(75),margin:"0 auto"},todosWrapper:{margin:"0 auto",columnWidth:e.spacing(29),columnGap:"0.5rem"},todoWrapper:{width:e.spacing(29),margin:"0 auto",breakInside:"avoid",pageBreakInside:"avoid",padding:"0.5rem 0",transition:e.transitions.create("all",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.standard})},noteCard:{minWidth:240,minHeight:300,borderRadius:8,display:"flex",alignItems:"start",padding:16,flexDirection:"column",backgroundColor:e.custom.palette.noteBackground.orange},noteTitle:{},noteBody:{display:"flex",alignContent:"left"}}})),De=function(e){var t=Be(),a=Object(w.c)({query:"\n\tquery notes {\n\t  notes {\n\t    id\n\t    title\n\t    content\n\t  }\n\t}\n"}),o=Object(g.a)(a,2),i=o[0],c=o[1],s=i.data,l=(i.fetching,i.error,Object(k.get)(s,"notes",[]));Object(r.useEffect)((function(){c()}),[]);var d=Object(E.a)(),j=Object(L.a)(d.breakpoints.down("xs")),u=Object(L.a)(d.breakpoints.up("sm")),p=Object(L.a)(d.breakpoints.up("md")),b=Object(L.a)(d.breakpoints.up("lg")),m=Object(L.a)(d.breakpoints.up("xl")),h=m?8:b?4:p?3:u?2:1,O=m?"100%":b?"1000px":p?"730px":u?"480px":"100%",x=te(),y=Object(g.a)(x,1)[0].isListView;return O=y?p||b?d.spacing(75):"100%":O,Object(n.jsx)("div",{className:t.todosWrapper,style:{columnCount:y?1:h,width:O},children:l.map((function(e){return Object(n.jsx)("div",{className:t.todoWrapper,style:{width:j||y?"100%":null},children:Object(n.jsxs)(f.a,{className:t.noteCard,children:[Object(n.jsx)("div",{className:t.noteTitle,children:Object(n.jsx)(v.a,{variant:"subtitle1",align:"left",children:e.title})}),Object(n.jsx)("div",{className:t.noteBody,children:Object(n.jsx)(v.a,{variant:"body2",align:"left",children:e.content})})]})},e.id)}))})},Ee=Object(D.a)((function(e){return{content:{transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:e.mixins.drawer.minWidth-e.spacing(2.5),marginRight:-1*e.spacing(3)},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},todoCreateContainer:{display:"flex",padding:e.spacing(4,0),margin:e.spacing(0,1)},todoCreateWrapper:{flex:1,maxWidth:e.spacing(75),margin:"0 auto"},todosWrapper:{margin:"0 auto",columnWidth:e.spacing(29),columnGap:"0.5rem"},todoWrapper:{width:e.spacing(29),margin:"0 auto",breakInside:"avoid",pageBreakInside:"avoid",padding:"0.5rem 0",transition:e.transitions.create("all",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.standard})}}})),Te=function(e){var t=Ee(),a=Object(E.a)(),r=Object(L.a)(a.breakpoints.down("xs")),o=Object(L.a)(a.breakpoints.up("sm")),i=Object(L.a)(a.breakpoints.up("md")),c=Object(L.a)(a.breakpoints.up("lg")),s=Object(L.a)(a.breakpoints.up("xl")),l=s?8:c?4:i?3:o?2:1,d=s?"100%":c?"1000px":i?"730px":o?"480px":"100%",j=te(),u=Object(g.a)(j,1)[0].isListView,p=ae(),b=Object(g.a)(p,1)[0].isNavBarOpen;return d=u?i||c?a.spacing(75):"100%":d,console.log("HDV theme: ",a),Object(n.jsx)("main",{children:Object(n.jsxs)("div",{className:r||!b?t.contentShift:t.content,children:[Object(n.jsx)("div",{className:t.todoCreateContainer,children:Object(n.jsx)("div",{className:t.todoCreateWrapper,children:Object(n.jsx)(Ie,{})})}),Object(n.jsx)("div",{className:t.todosWrapper,style:{columnCount:u?1:l,width:d},children:Object(n.jsx)(De,{})})]})})},Le=a(270),Me=a(223),Ae=a(261),Pe=a(132),ze=a.n(Pe),$e=a(258),He=a(259),Ve=a(260),_e=ze()((function(e){return{listItemRoot:{borderRadius:e.spacing(0,3,3,0)},listItemSelected:{backgroundColor:"".concat(e.palette.secondary.light," !important")}}})),Ke=function(e){var t=e.text,a=e.icon,r=e.isSelected,o=e.onClick,i=_e();return Object(n.jsxs)($e.a,{button:!0,selected:r,classes:{selected:i.listItemSelected,root:i.listItemRoot},onClick:o,children:[Object(n.jsx)(He.a,{children:a}),Object(n.jsx)(Ve.a,{primary:t})]})},Ue=Object(D.a)((function(e){return{drawer:{width:e.mixins.drawer.minWidth,flexShrink:0},drawerPaper:{background:e.palette.background.default,width:e.mixins.drawer.minWidth,border:0},sectionTitle:{padding:e.spacing(2,1,0,2),color:e.palette.text.secondary},toolbar:e.mixins.toolbar}}));function Ge(){var e=Ue(),t=Object(E.a)(),a=Object(L.a)(t.breakpoints.down("xs")),r=ae(),o=Object(g.a)(r,1)[0],i=o.isNavBarOpen,c=o.toggleNavBar;return Object(n.jsxs)(Le.a,{variant:a?"temporary":"persistent",anchor:"left",open:i,onClose:c,classes:{root:e.drawer,paper:e.drawerPaper},children:[Object(n.jsx)("div",{className:e.toolbar}),Object(n.jsx)(Me.a,{children:Object(n.jsx)(Ke,{text:"Notes",isSelected:!0,icon:Object(n.jsx)(Ae.a,{htmlColor:t.custom.palette.iconColor}),onClick:function(){}})}),Object(n.jsx)(Q.a,{})]})}var qe=a(257),Qe=a(262),Je=a(100),Ye=a(99),Xe=a(134),Ze=a(272),et=a.p+"static/media/Metropolis-Medium.b635e832.woff",tt=a.p+"static/media/Metropolis-SemiBold.6ea948bc.woff",at=a.p+"static/media/Roboto-Regular.31012f9b.woff",nt=a.p+"static/media/Roboto-Medium.b14ca2d2.woff",rt=a.p+"static/media/Roboto-Bold.3f2cbde6.woff",ot={MetropolisRegular:{fontFamily:"Metropolis",fontStyle:"normal",fontDisplay:"swap",fontWeight:400,src:"\n      local('Metrolpolis'),\n      local('Metrolpolis-Medium'),\n      url(".concat(et,") format('woff')\n    ")},MetropolisBold:{fontFamily:"Metropolis",fontStyle:"normal",fontDisplay:"swap",fontWeight:500,src:"\n      local('Metrolpolis'),\n      local('Metrolpolis-Bold'),\n      url(".concat(tt,") format('woff')\n    ")},RobotoRegular:{fontFamily:"Roboto",fontStyle:"normal",fontDisplay:"swap",fontWeight:400,src:"\n      local('Roboto'),\n      local('Roboto-Regular'),\n      url(".concat(at,") format('woff')\n    ")},RobotoMedium:{fontFamily:"Roboto",fontStyle:"normal",fontDisplay:"swap",fontWeight:500,src:"\n        local('Roboto'),\n        local('Roboto-Medium'),\n        url(".concat(nt,") format('woff')\n      ")},RobotoBold:{fontFamily:"Roboto",fontStyle:"normal",fontDisplay:"swap",fontWeight:700,src:"\n      local('Roboto'),\n      local('Roboto-Bold'),\n      url(".concat(rt,") format('woff')\n    ")}},it={fontFamily:["Roboto","Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},ct={fontFamily:["Metropolis","Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),letterSpacing:"0.015rem"},st=Object(Xe.a)({type:"light",palette:{primary:{main:"#FFF"},secondary:{main:Qe.a[500],light:"#feefc3"},error:{main:Je.a.A400},background:{default:"#FFF",highlight:"#F1F3F4"}},typography:Object(s.a)(Object(s.a)({},it),{},{overline:{fontWeight:500,fontSize:"0.7rem"}}),shape:{borderRadius:"0.5rem"},zIndex:{appBar:1200,drawer:1100},mixins:{drawer:{minWidth:280}},overrides:{MuiCssBaseline:{"@global":{"@font-face":[ot.MetropolisRegular,ot.MetropolisBold,ot.RobotoRegular,ot.RobotoMedium,ot.RobotoBold]}},MuiListItemText:{primary:Object(s.a)(Object(s.a)({},ct),{},{fontWeight:500,fontSize:"0.87rem"})}},custom:{fontFamily:{roboto:it,metropolis:ct},palette:{iconColor:"#5f6368",itemBorderColor:"#DDDDDD",iconHighlight:Ye.a[900],notesCheckbox:Ye.a[700],profilePopColor:"#FFF",noteBackground:{default:"#0000",red:"#F28B82",orange:"#FBBC04",yellow:"#FFF475",green:"#CCFF90",cyan:"#A7FFEB",lightblue:"#CBF0F8",darkblue:"#AECBFA",purple:"#D7AEFB",pink:"#FDCFE8",brown:"#E6C9A8",grey:"#E8EAED"},noteColorCheck:"#0007",labelBackground:"#0002"}}}),lt=Object(Xe.a)({type:"dark",palette:{primary:{main:"#202124"},secondary:{main:Qe.a[500],light:"#41331C"},error:{main:Je.a.A400},background:{default:"#202124",highlight:"#535456"},text:{primary:"#E8EAED",secondary:"#FFFFFFDE"}},typography:Object(s.a)(Object(s.a)({},it),{},{overline:{fontWeight:500,fontSize:"0.7rem"}}),shape:{borderRadius:"0.5rem"},zIndex:{appBar:1200,drawer:1100},mixins:{drawer:{minWidth:280}},overrides:{MuiCssBaseline:{"@global":{"@font-face":[ot.MetropolisRegular,ot.MetropolisBold,ot.RobotoRegular,ot.RobotoMedium,ot.RobotoBold]}},MuiListItemText:{primary:Object(s.a)(Object(s.a)({},ct),{},{fontWeight:500,fontSize:"0.87rem"})}},custom:{fontFamily:{roboto:it,metropolis:ct},palette:{iconColor:"#949596",itemBorderColor:"#5F6368",iconHighlight:"#888A8B",notesCheckbox:"#5F6368",profilePopColor:"#2D2E30",noteBackground:{default:"#0000",red:"#5C2B29",orange:"#614A19",yellow:"#635D18",green:"#345920",cyan:"#16504B",lightblue:"#2D555E",darkblue:"#1E3A5F",purple:"#42275E",pink:"#5B2245",brown:"#442F19",grey:"#3C3F43"},noteColorCheck:"#FFF7",labelBackground:"#0002"}}}),dt=Object(Ze.a)(st),jt=Object(Ze.a)(lt),ut=function(){var e=te(),t=Object(g.a)(e,1)[0].isDarkMode;return Object(n.jsxs)(qe.a,{theme:t?jt:dt,children:[Object(n.jsx)(u.a,{}),Object(n.jsx)(be,{}),Object(n.jsx)(Ge,{}),Object(n.jsx)(O.a,{fixed:!0,maxWidth:!1,children:Object(n.jsx)(I.a,{mt:8,children:Object(n.jsx)(Te,{})})})]})},pt=function(){var e=Object(w.c)({query:"\n\tquery userConfig {\n\t  userConfig {\n\t    id\n\t    isDarkMode\n\t    isListMode\n\t    user {\n\t      id\n\t      name\n\t      email\n\t    }\n\t  }\n\t}\n"}),t=Object(g.a)(e,2),a=t[0],o=t[1],i=a.data;a.fetching,a.error;Object(r.useEffect)((function(){o()}),[]);var c=Object(k.get)(i,"userConfig",{});return Object(n.jsx)(Z,{user:c.user,children:Object(n.jsx)(ee,{children:Object(n.jsx)(ut,{})})})},bt=a(271),mt=a(264),gt=function(){return Object(n.jsx)(bt.a,{open:!0,children:Object(n.jsx)(mt.a,{color:"inherit"})})},ht=Object(D.a)((function(e){return{pageWrapper:{height:"100vh",display:"flex",flexDirection:"column"},pageContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:"1"},boxWrapper:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(3)},textWelcome:Object(s.a)({},e.custom.fontFamily.metropolis),textLogin:{textDecoration:"none",color:e.palette.secondary.dark},textLoginText:Object(s.a)(Object(s.a)({},e.custom.fontFamily.metropolis),{},{paddingTop:e.spacing(3)}),textNotice:Object(s.a)(Object(s.a)({},e.custom.fontFamily.roboto),{},{lineHeight:"unset",textAlign:"center",paddingTop:e.spacing(2)}),textAttribution:{padding:e.spacing(0,2,2,0),textAlign:"right"},textCreator:{textDecoration:"none",color:e.palette.secondary.dark},registerButtonRoot:{marginTop:e.spacing(3)},registerButtonText:Object(s.a)(Object(s.a)({},e.custom.fontFamily.metropolis),{},{color:e.palette.secondary.contrastText,textTransform:"capitalize"}),logo:{height:e.spacing(7),padding:e.spacing(0,0,1,0)},inputRoot:{"&$inputFocused $inputNotchedOutline":{borderColor:e.palette.secondary.main}},inputNotchedOutline:{},inputFocused:{},inputLabelRoot:{"&$inputFocused":{color:e.palette.secondary.main}}}})),Ot=function(e){var t,a=ht(),o=Object(r.useState)(""),i=Object(g.a)(o,2),c=i[0],s=i[1],l=Object(r.useState)(""),u=Object(g.a)(l,2),p=u[0],h=u[1],x=Object(r.useState)(""),N=Object(g.a)(x,2),W=N[0],I=N[1],B=Object(w.b)("\n\tmutation createUser ($name: String!, $email: String!, $password: String!){\n\t  createUser(input: {name: $name, email: $email, password: $password})\n\t}\n"),D=Object(g.a)(B,2),E=D[0],T=D[1],L=Object(j.g)(),M={classes:{root:a.inputRoot,notchedOutline:a.inputNotchedOutline,focused:a.inputFocused}},A={classes:{root:a.inputLabelRoot,focused:a.inputFocused}},P=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:c,email:p,password:W},e.next=3,T(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return E.data?(t=Object(k.get)(E,"data.createUser",""),console.log("HDV token: ",t),""!==t&&(S(F.TOKEN,t),L.push("/")),Object(n.jsx)(n.Fragment,{})):E.fetching?Object(n.jsx)(gt,{}):Object(n.jsxs)("div",{className:a.pageWrapper,children:[Object(n.jsxs)(O.a,{maxWidth:"md",className:a.pageContainer,children:[Object(n.jsx)(f.a,{elevation:3,children:Object(n.jsxs)("form",{className:a.boxWrapper,onSubmit:function(e){e.preventDefault(),P()},children:[Object(n.jsx)("img",{className:a.logo,src:"../assets/logo.png",alt:"logo"}),Object(n.jsx)(v.a,{className:a.textWelcome,color:"textSecondary",variant:"subtitle1",children:"Hello!"}),Object(n.jsx)(y.a,{required:!0,InputLabelProps:A,InputProps:M,name:"name",label:"Name",type:"text",variant:"outlined",value:c,onChange:function(e){return s(e.target.value)},error:E.error,fullWidth:!0,margin:"normal"}),Object(n.jsx)(y.a,{required:!0,InputLabelProps:A,InputProps:M,name:"email",label:"Email",type:"email",variant:"outlined",value:p,error:E.error,helperText:"Use any dummy email. I don't collect emails ;)",onChange:function(e){return h(e.target.value)},fullWidth:!0,margin:"normal"}),Object(n.jsx)(y.a,{required:!0,InputLabelProps:A,InputProps:M,name:"password",label:"Password",type:"password",variant:"outlined",value:W,error:E.error,helperText:E.error&&R(Object(k.get)(E,"error.graphQLErrors[0].message","Server error occurred. Please try again.")),onChange:function(e){return I(e.target.value)},fullWidth:!0,margin:"normal"}),Object(n.jsx)(C.a,{classes:{root:a.registerButtonRoot,label:a.registerButtonText},type:"submit",disabled:""===p||""===W||""===c,variant:"contained",color:"secondary",disableElevation:!0,fullWidth:!0,size:"large",children:"Register"}),Object(n.jsxs)(v.a,{className:a.textNotice,color:"textSecondary",variant:"caption",children:["Your user login & data will be deleted",Object(n.jsx)("br",{}),"on container restart, and happens so",Object(n.jsx)("br",{}),"often as I'm running this on Free Tier",Object(n.jsx)("br",{})]})]})}),Object(n.jsxs)(v.a,{className:a.textLoginText,color:"textSecondary",variant:"body2",children:["Already have an account?",Object(n.jsx)(d.b,{className:a.textLogin,to:"/login",children:"Log In"})]})]}),Object(n.jsxs)(v.a,{className:a.textAttribution,color:"textSecondary",variant:"body2",children:["Created by ",Object(n.jsx)("a",{className:a.textCreator,href:" https://github.com/HaswinVidanage/google-keep-clone-fe",children:"Haswin Vidanage"})]})]})},xt=function(e){var t=e.children,a=Object(l.a)(e,["children"]),r=N(F.TOKEN);return Object(n.jsx)(j.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){var a=e.location;return r?t:Object(n.jsx)(j.a,{to:{pathname:"/login",state:{from:a}}})}}))},ft=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u.a,{}),Object(n.jsx)(d.a,{children:Object(n.jsxs)(j.d,{children:[Object(n.jsx)(xt,{exact:!0,path:"/",children:Object(n.jsx)(pt,{})}),Object(n.jsx)(j.b,{path:"/login",children:Object(n.jsx)(W,{})}),Object(n.jsx)(j.b,{path:"/register",children:Object(n.jsx)(Ot,{})})]})})]})},vt=a(59),yt=a(133),Ct=Object(vt.b)({url:Object({NODE_ENV:"production",PUBLIC_URL:"/keep-fe",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,fetchOptions:function(){var e=N(F.TOKEN);return e?{headers:{Authorization:e}}:{}},exchanges:[vt.c,vt.a,vt.d,Object(yt.a)({retryIf:function(e){if(e&&e.graphQLErrors.length>0||e.networkError)return!0}})]});var wt=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(qe.a,{theme:dt,children:[Object(n.jsx)(u.a,{}),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(w.a,{value:Ct,children:Object(n.jsx)(ft,{})})})]})})},kt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,273)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(wt,{})}),document.getElementById("root")),kt()}},[[184,1,2]]]);
//# sourceMappingURL=main.17926ab0.chunk.js.map