(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(130),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b1775b2f-c3a5-4509-8dc9-90b5629de7c3"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},124:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(42),a=n(12);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return c({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},132:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3CIee"}},133:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},134:function(e,t,n){e.exports=n.p+"static/media/preloader.6c3daf60.svg"},163:function(e,t,n){e.exports=n(291)},168:function(e,t,n){},169:function(e,t,n){},19:function(e,t,n){e.exports={nav:"Navbar_nav__2PPEy",item:"Navbar_item__KePkq",activeLink:"Navbar_activeLink__22IQ8"}},291:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(64),c=n.n(o),i=(n(168),n(35)),u=n(36),s=n(39),l=n(37),f=n(40),p=(n(169),n(19)),m=n.n(p),g=n(21),d=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(g.b,{to:"/profile",activeClassName:m.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},a.a.createElement(g.b,{to:"/dialogs",activeClassName:m.a.activeLink},"Messages")),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},a.a.createElement(g.b,{to:"/users",activeClassName:m.a.activeLink},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",null,"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",null,"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",null,"Settings")))},b=n(29),O=n(16),h=n(8),v=n.n(h),E=n(18),w=n(42),y=n(12),P=n(11);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var S=function(e,t,n,r){return e.map((function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},r):e}))};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},I=function(e){return{type:"FOLLOW",userId:e}},N=function(e){return{type:"UNFOLLOW",userId:e}},D=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},T=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},L=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},U=function(){var e=Object(E.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(L(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return C({},e,{users:S(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return C({},e,{users:S(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return C({},e,{users:t.users});case"SET_CURRENT_PAGE":return C({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return C({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return C({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return C({},e,{followingInProgress:t.isFetching?[].concat(Object(w.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},A=n(52),F=n(126),z=n(69),R=n.n(z),G=n(131),M=n.n(G),B=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,u=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/u),m=Object(r.useState)(1),g=Object(F.a)(m,2),d=g[0],b=g[1],O=(d-1)*u+1,h=d*u;return a.a.createElement("div",{className:R.a.paginator},d>1&&a.a.createElement("button",{onClick:function(){b(d-1)}},"PREV"),l.filter((function(e){return e>=O&&e<=h})).map((function(e){return a.a.createElement("span",{className:M()(Object(y.a)({},R.a.selectedPage,o===e),R.a.pageNumber),key:e,onClick:function(t){c(e)}},e)})),p>d&&a.a.createElement("button",{onClick:function(){b(d+1)}},"NEXT"))},W=n(132),H=n.n(W),X=n(133),Q=n.n(X),V=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(g.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Q.a,className:H.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},Y=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,c=e.users,i=Object(A.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",null,a.a.createElement(B,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}),a.a.createElement("div",null,c.map((function(e){return a.a.createElement(V,{user:e,followingInProgress:i.followingInProgress,key:e.id,unfollow:i.unfollow,follow:i.follow})}))))},Z=n(48),q=n(7),J=n(135),K=Object(J.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),$=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},re=function(e){return e.usersPage.followingInProgress},ae=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(Z.a,null):null,a.a.createElement(Y,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),oe=Object(q.d)(Object(O.b)((function(e){return{users:K(e),pageSize:$(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:re(e)}}),{follow:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(n,e,P.c.follow.bind(P.c),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(n,e,P.c.unfollow.bind(P.c),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:D,toggleFollowingProgress:L,getUsers:function(e,t){return function(){var n=Object(E.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(T(!0)),r(D(e)),n.next=4,P.c.getUsers(e,t);case 4:a=n.sent,r(T(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ae),ce=n(90),ie=n.n(ce),ue=function(e){return a.a.createElement("header",{className:ie.a.header},a.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),a.a.createElement("div",{className:ie.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")," "):a.a.createElement(g.b,{to:"/login"},"Login")))},se=n(34);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe="samurai-network/auth/SET_USER_DATA",me={userId:null,email:null,login:null,isAuth:!1},ge=function(e,t,n,r){return{type:pe,payload:{userId:e,email:t,login:n,isAuth:r}}},de=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var n,r,a,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,c=r.email,t(ge(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return fe({},e,{},t.payload);default:return e}},Oe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(ue,this.props)}}]),t}(a.a.Component),he=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),ve=n(125),Ee=n(33),we=n(55),ye=n(53),Pe=n.n(ye),je=Object(ve.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(Ee.c)("Email","email",[we.b],Ee.a),Object(Ee.c)("Password","password",[we.b],Ee.a,{type:"password"}),Object(Ee.c)(null,"rememberMe",[],Ee.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:Pe.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),Se=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(E.a)(v.a.mark((function r(a){var o,c;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(de()):(c=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(se.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(b.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(je,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}));function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke={initialized:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Ce({},e,{initialized:!0});default:return e}},Ne=n(93),De=n(124),Te={},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;arguments.length>1&&arguments[1];return e},Ue=n(137),xe=n(127),Ae=Object(q.c)({profilePage:Ne.b,dialogsPage:De.a,sidebar:Le,usersPage:x,auth:be,form:xe.a,app:Ie}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,ze=Object(q.e)(Ae,Fe(Object(q.a)(Ue.a)));window.__store__=ze;var Re=ze,Ge=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"loading...")},a.a.createElement(e,t))}},Me=a.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),Be=a.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),We=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(he,null),a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(b.b,{path:"/dialogs",render:Ge(Me)}),a.a.createElement(b.b,{path:"/profile/:userId?",render:Ge(Be)}),a.a.createElement(b.b,{path:"/users",render:function(){return a.a.createElement(oe,null)}}),a.a.createElement(b.b,{path:"/login",render:function(){return a.a.createElement(Se,null)}}))):a.a.createElement(Z.a,null)}}]),t}(r.Component),He=Object(q.d)(b.f,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(de());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(We),Xe=function(e){return a.a.createElement(g.a,null,a.a.createElement(O.a,{store:Re},a.a.createElement(He,null)))};c.a.render(a.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(52),a=n(0),o=n.n(a),c=n(53),i=n.n(c),u=(n(55),n(87)),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("div",null,a),c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",c)}},48:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(134),c=n.n(o);t.a=function(e){return a.a.createElement("div",{style:{backgroundColor:"white"}},a.a.createElement("img",{src:c.a}))}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1cPNt",error:"FormsControls_error__1b9Xy",formSummaryError:"FormsControls_formSummaryError__3NL9R"}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__1wkyD",pageNumber:"Paginator_pageNumber__3ZEQp",selectedPage:"Paginator_selectedPage__s8dQQ"}},90:function(e,t,n){e.exports={header:"Header_header__2OXtu",loginBlock:"Header_loginBlock__CDsn6"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return b}));var r=n(8),a=n.n(r),o=n(18),c=n(42),i=n(12),u=n(11);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},p=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"SET_STATUS",status:e}},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return l({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return l({},e,{status:t.status});case"SET_USER_PROFILE":return l({},e,{profile:t.profile});case"DELETE_POST":return l({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.794ecb6d.chunk.js.map