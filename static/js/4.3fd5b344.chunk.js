(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1uFDs",dialogsItems:"Dialogs_dialogsItems__1Vjot",active:"Dialogs_active__3g0zh",messages:"Dialogs_messages__1PbKG",message:"Dialogs_message__3gENK"}},297:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(124),o=t(292),r=t.n(o),c=t(21),l=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:r.a.dialog+" "+r.a.active},s.a.createElement(c.b,{to:a},e.name))},m=function(e){return s.a.createElement("div",{className:r.a.dialog},e.message)},u=t(29),d=t(87),g=t(125),b=t(33),f=t(55),p=Object(f.a)(50),E=Object(g.a)({form:"dialog-add-message-form"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{component:b.b,validate:[f.b,p],placeholder:"Enter your message",name:"newMessageBody"})),s.a.createElement("div",null,s.a.createElement("button",null,"Send222")))})),v=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(l,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(m,{message:e.message,key:e.id})}));a.newMessageBody;return e.isAuth?s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsItems},t),s.a.createElement("div",{className:r.a.messages},s.a.createElement("div",null,n)),s.a.createElement(E,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):s.a.createElement(u.a,{to:"/login"})},_=t(16),h=t(35),j=t(36),O=t(39),y=t(37),w=t(40),D=function(e){return{isAuth:e.auth.isAuth}},N=t(7);a.default=Object(N.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),(function(e){var a=function(a){function t(){return Object(h.a)(this,t),Object(O.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,a),Object(j.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),t}(s.a.Component);return Object(_.b)(D)(a)}))(v)}}]);
//# sourceMappingURL=4.3fd5b344.chunk.js.map