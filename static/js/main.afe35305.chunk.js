(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,n){e.exports=n.p+"static/media/user.d03d2e47.png"},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(46),a=n(14);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return c({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},13:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3CIee",follow:"users_follow__3A_Tg",unfollow:"users_unfollow__XYZ_S",user:"users_user__3yBdk",flex_user:"users_flex_user__2s3eb",hr_div:"users_hr_div__3xGez",users:"users_users__7e6lG",people:"users_people__2lnlv",flex2:"users_flex2__1llI6",name:"users_name__2W4dT",status:"users_status__26Z0B",location:"users_location__2Epm1"}},134:function(e,t,n){e.exports=n.p+"static/media/preloader.8cac8f62.svg"},135:function(e,t,n){e.exports={preloader:"Preloader_preloader__bpelo"}},137:function(e,t,n){e.exports=n.p+"static/media/logo.d5b78940.png"},165:function(e,t,n){e.exports=n(294)},17:function(e,t,n){e.exports={block_navbar:"Navbar_block_navbar__3zSMR",nav:"Navbar_nav__2PPEy",item:"Navbar_item__KePkq",activeLink:"Navbar_activeLink__22IQ8"}},170:function(e,t,n){},171:function(e,t,n){},21:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1cPNt",error:"FormsControls_error__1b9Xy",formSummaryError:"FormsControls_formSummaryError__3NL9R",login:"FormsControls_login__2Kytd",login_header:"FormsControls_login_header__1SPx8",login_triangle:"FormsControls_login_triangle__2S5bD",btn_login:"FormsControls_btn_login__1Pveo",form_login:"FormsControls_form_login__1h54A"}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(56),a=n(0),o=n.n(a),c=n(21),s=n.n(c),i=n(89),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:s.a.formControl+" "+(c?s.a.error:"")},o.a.createElement("div",null,a),c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("p",null,o.a.createElement("input",Object.assign({className:s.a.input},t,n))))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",c)}},294:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(66),c=n.n(o),s=(n(170),n(40)),i=n(41),u=n(43),l=n(42),p=n(44),f=(n(171),n(17)),m=n.n(f),d=n(23),g=function(){return a.a.createElement("div",{className:m.a.block_navbar},a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/profile",activeClassName:m.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},a.a.createElement(d.b,{to:"/dialogs",activeClassName:m.a.activeLink},"Messages")),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},a.a.createElement(d.b,{to:"/users",activeClassName:m.a.activeLink},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",null,"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",null,"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",null,"Settings"))))},b=n(33),h=n(19),v=n(6),_=n.n(v),E=n(12),O=n(46),w=n(14),y=n(9);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var j=function(e,t,n,r){return e.map((function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},r):e}))};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},k=function(e){return{type:"FOLLOW",userId:e}},x=function(e){return{type:"UNFOLLOW",userId:e}},I=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},U=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},T=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},D=function(){var e=Object(E.a)(_.a.mark((function e(t,n,r,a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(T(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return C({},e,{users:j(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return C({},e,{users:j(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return C({},e,{users:t.users});case"SET_CURRENT_PAGE":return C({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return C({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return C({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return C({},e,{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},L=n(56),F=n(96),z=n(37),R=n.n(z),G=n(92),M=n.n(G),H=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(t/n),l=[],p=1;p<=u;p++)l.push(p);var f=Math.ceil(u/i),m=Object(r.useState)(1),d=Object(F.a)(m,2),g=d[0],b=d[1],h=(g-1)*i+1,v=g*i;return a.a.createElement("div",{className:M()(R.a.paginator)},g>1&&a.a.createElement("button",{className:R.a.btn_pagination,onClick:function(){b(g-1)}},"PREV"),l.filter((function(e){return e>=h&&e<=v})).map((function(e){return a.a.createElement("div",{className:R.a.span},a.a.createElement("span",{className:M()(Object(w.a)({},R.a.selectedPage,o===e),R.a.pageNumber),key:e,onClick:function(t){c(e)}},e))})),f>g&&a.a.createElement("button",{className:R.a.btn_pagination,onClick:function(){b(g+1)}},"NEXT"))},B=n(13),W=n.n(B),V=n(107),X=n.n(V),Y=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",{className:W.a.user},a.a.createElement("div",{className:W.a.flex_user},a.a.createElement("div",{className:W.a.flex1},a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:X.a,className:W.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{className:W.a.unfollow,disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{className:W.a.follow,disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow")))),a.a.createElement("div",{className:W.a.flex2},a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",{className:W.a.name},t.name),a.a.createElement("div",{className:W.a.status},t.status)),a.a.createElement("span",null,a.a.createElement("div",{className:W.a.location},"user.location.country"),a.a.createElement("div",{className:W.a.location},"user.location.city"))))),a.a.createElement("div",{className:W.a.hr_div},a.a.createElement("hr",null)))},Z=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,c=e.users,s=Object(L.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",{className:W.a.users},a.a.createElement(H,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}),a.a.createElement("div",{className:W.a.people},c.map((function(e){return a.a.createElement(Y,{user:e,followingInProgress:s.followingInProgress,key:e.id,unfollow:s.unfollow,follow:s.follow})}))),a.a.createElement(H,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}))},Q=n(52),K=n(8),q=n(136),J=Object(q.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),$=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},re=function(e){return e.usersPage.followingInProgress},ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(Q.a,null):null,a.a.createElement(Z,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),oe=Object(K.d)(Object(h.b)((function(e){return{users:J(e),pageSize:$(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:re(e)}}),{follow:function(e){return function(){var t=Object(E.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,y.d.follow.bind(y.d),k);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,y.d.unfollow.bind(y.d),x);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:I,toggleFollowingProgress:T,getUsers:function(e,t){return function(){var n=Object(E.a)(_.a.mark((function n(r){var a;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(U(!0)),r(I(e)),n.next=4,y.d.getUsers(e,t);case 4:a=n.sent,r(U(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ae),ce=n(38),se=n.n(ce),ie=n(137),ue=n.n(ie),le=function(e){return a.a.createElement("header",{className:se.a.header},a.a.createElement("a",{href:"/Profile"},a.a.createElement("img",{src:ue.a})),a.a.createElement("div",{className:se.a.loginBlock},e.isAuth?a.a.createElement("div",{className:se.a.flex_logout},a.a.createElement("div",null,a.a.createElement("p",{className:se.a.p_logout},e.login)),a.a.createElement("div",{className:se.a.header_logout},a.a.createElement("button",{className:"btn btn-primary",onClick:e.logout},"Log out"))):a.a.createElement(d.b,{to:"/login"},a.a.createElement("p",{className:se.a.log},"Login"))))},pe=n(28);function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de="samurai-network/auth/SET_USER_DATA",ge={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},be=function(e,t,n,r){return{type:de,payload:{userId:e,email:t,login:n,isAuth:r}}},he=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},ve=function(){return function(){var e=Object(E.a)(_.a.mark((function e(t){var n,r,a,o,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,c=r.email,t(be(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_e=function(){return function(){var e=Object(E.a)(_.a.mark((function e(t){var n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(he(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return me({},e,{},t.payload);default:return e}},Oe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(le,this.props)}}]),t}(a.a.Component),we=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(E.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.data.resultCode&&t(be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),ye=n(129),Pe=n(27),je=n(67),Se=n(21),Ce=n.n(Se),Ne=Object(ye.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{className:Ce.a.form_login,onSubmit:t},Object(Pe.c)("Email","email",[je.b],Pe.a),Object(Pe.c)("Password","password",[je.b],Pe.a,{type:"password"}),Object(Pe.c)(null,"rememberMe",[],Pe.a,{type:"checkbox"}),r&&a.a.createElement("img",{src:r}),r&&Object(Pe.c)("Symbols from image","captcha",[je.b],Pe.a,{}),n&&a.a.createElement("div",{className:Ce.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("p",null,"remember me")),a.a.createElement("div",null,a.a.createElement("p",{className:Ce.a.p_btn},a.a.createElement("button",{className:Ce.a.btn_login},"Login"))))})),ke=Object(h.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(E.a)(_.a.mark((function a(o){var c,s;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?o(ve()):(10===c.data.resultCode&&o(_e()),s=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(pe.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(b.a,{to:"/profile"}):a.a.createElement("div",{className:Ce.a.login},a.a.createElement("div",{className:Ce.a.login_triangle}),a.a.createElement("h1",{className:Ce.a.login_header},"SIGN IN"),a.a.createElement(Ne,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}));function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ue={initialized:!1,globalError:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Ie({},e,{initialized:!0});default:return e}},De=n(95),Ae=n(128),Le={},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;arguments.length>1&&arguments[1];return e},ze=n(139),Re=n(130),Ge=Object(K.c)({profilePage:De.b,dialogsPage:Ae.a,sidebar:Fe,usersPage:A,auth:Ee,form:Re.a,app:Te}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,He=Object(K.e)(Ge,Me(Object(K.a)(ze.a)));window.__store__=He;var Be=He,We=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"loading...")},a.a.createElement(e,t))}},Ve=a.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),Xe=a.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Ye=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).catchAllUnhandledErrors=function(e,t){alert("Some error occured")},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(we,null),a.a.createElement(g,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(b.d,null,a.a.createElement(b.b,{exact:!0,path:"/",render:function(){return a.a.createElement(b.a,{to:"/profile"})}}),a.a.createElement(b.b,{path:"/dialogs",render:We(Ve)}),a.a.createElement(b.b,{path:"/profile/:userId?",render:We(Xe)}),a.a.createElement(b.b,{path:"/users",render:function(){return a.a.createElement(oe,null)}}),a.a.createElement(b.b,{path:"/login",render:function(){return a.a.createElement(ke,null)}}),a.a.createElement(b.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))):a.a.createElement(Q.a,null)}}]),t}(r.Component),Ze=Object(K.d)(b.g,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ve());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ye),Qe=function(e){return a.a.createElement(d.a,null,a.a.createElement(h.a,{store:Be},a.a.createElement(Ze,null)))};n(293);c.a.render(a.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,t,n){e.exports={paginator:"Paginator_paginator__1wkyD",pageNumber:"Paginator_pageNumber__3ZEQp",selectedPage:"Paginator_selectedPage__s8dQQ",span:"Paginator_span__3Oc4A",btn_pagination:"Paginator_btn_pagination__Eo7an"}},38:function(e,t,n){e.exports={header:"Header_header__2OXtu",loginBlock:"Header_loginBlock__CDsn6",flex_logout:"Header_flex_logout__1MFSn",p_logout:"Header_p_logout__2ijSb",header_logout:"Header_header_logout__bMbts",log:"Header_log__2uf45"}},52:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(134),c=n.n(o),s=n(135),i=n.n(s);t.a=function(e){return a.a.createElement("div",{className:i.a.preloader},a.a.createElement("img",{src:c.a}))}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},9:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(133),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"fd66f373-421c-4ca6-8935-44249ad31346"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return _}));var r=n(6),a=n.n(r),o=n(12),c=n(46),s=n(14),i=n(9),u=n(28);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},m=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"SET_STATUS",status:e}},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(d(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(g(o)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return p({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return p({},e,{status:t.status});case"SET_USER_PROFILE":return p({},e,{profile:t.profile});case"DELETE_POST":return p({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SAVE_PHOTO_SUCCESS":return p({},e,{profile:p({},e.profile,{photos:t.photos})});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.afe35305.chunk.js.map