(this["webpackJsonpstay-fit"]=this["webpackJsonpstay-fit"]||[]).push([[0],{100:function(e,t,s){},101:function(e,t,s){},102:function(e,t,s){},198:function(e,t,s){},199:function(e,t,s){},201:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),r=s(33),a=s.n(r),i=s(5),o=s.n(i),l=s(7),u=s(4),_=s(9),j=s(6),d=(s(84),s(85),s(35)),h=s.n(d),b=s(37),x=s.n(b),p=s(1),m=Object(j.g)((function(e){var t=Object(c.useState)(""),s=Object(u.a)(t,2),n=s[0],r=s[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),_=i[0],j=i[1],d=function(){var t=Object(l.a)(o.a.mark((function t(s){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),t.next=3,e.login(n,_);case 3:t.sent&&e.history.push("/");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("form",{onSubmit:d,className:"form__login",children:[Object(p.jsxs)("div",{className:"".concat(e.error?"form__login__email error":"form__login__email"),children:[Object(p.jsx)(h.a,{className:"icon-email",style:{fontSize:30,color:"#fff"}}),Object(p.jsx)("input",{type:"email",className:"form__login__email__input",placeholder:"".concat(e.error?"Invalid email":"stayfit@gmail.com"),onChange:function(e){return r(e.target.value)},value:n})]}),Object(p.jsxs)("div",{className:"".concat(e.error?"form__login__password error":"form__login__password"),children:[Object(p.jsx)(x.a,{className:"icon-password",style:{fontSize:30,color:"#fff"}}),Object(p.jsx)("input",{type:"password",className:"form__login__password__input",placeholder:"".concat(e.error?"Invalid password":"password"),onChange:function(e){return j(e.target.value)},value:_})]}),Object(p.jsx)("input",{type:"submit",value:"Login",className:"button__login"})]})})),O=(s(92),function(e){return Object(p.jsx)("div",{className:"spinner__container",children:Object(p.jsx)("div",{className:"spinner__overlay",children:Object(p.jsx)("div",{className:"spinner"})})})}),f=function(e){return Object(p.jsxs)(p.Fragment,{children:[e.loading?Object(p.jsx)(O,{}):null,Object(p.jsxs)("h1",{className:"title",children:[Object(p.jsx)("span",{className:"title__text title__text--1",children:"Stay Fi"}),Object(p.jsx)("span",{className:"title__text title__text--2",children:"T"})]}),Object(p.jsx)(m,{login:e.login,error:e.error}),Object(p.jsxs)("p",{className:"link__signup",children:["Don't have an account?"," ",Object(p.jsx)(_.b,{to:"/signup",children:Object(p.jsx)("span",{className:"link__signup--text",children:"Signup here"})})]})]})},g=(s(93),s(73)),v=s.n(g),N=Object(j.g)((function(e){var t=Object(c.useState)(""),s=Object(u.a)(t,2),n=s[0],r=s[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),j=i[0],d=i[1],b=Object(c.useState)(""),m=Object(u.a)(b,2),O=m[0],f=m[1],g=Object(c.useState)(!1),N=Object(u.a)(g,2),S=N[0],w=N[1],y=Object(c.useState)(!1),k=Object(u.a)(y,2),C=k[0],E=k[1],I=Object(c.useState)(!1),T=Object(u.a)(I,2),z=T[0],J=T[1],L=Object(c.useState)(""),P=Object(u.a)(L,2),D=P[0],F=P[1],A=function(){var t=Object(l.a)(o.a.mark((function t(s){var c,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),n&&j&&O){t.next=4;break}return F("Please fill out all fields"),t.abrupt("return");case 4:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,email:j,password:O})},t.prev=5,t.next=8,fetch("http://localhost:5000/api/users",c);case 8:return r=t.sent,t.next=11,r.json();case 11:if(a=t.sent,r.ok){t.next=14;break}throw new Error(a);case 14:e.history.push("/"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),F(t.t0.message);case 20:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{className:"title",children:[Object(p.jsx)("span",{className:"title__text title__text--1",children:"Stay Fi"}),Object(p.jsx)("span",{className:"title__text title__text--2",children:"T"})]}),Object(p.jsxs)("form",{onSubmit:A,className:"form__signup",children:[Object(p.jsxs)("div",{className:"".concat(!n&&S?"form__signup__username form__signup__error":"form__signup__username"),children:[Object(p.jsx)(v.a,{className:"icon-person",style:{fontSize:30,color:"#fff"}}),Object(p.jsx)("input",{type:"text",className:"form__signup__username__input",placeholder:"username",onChange:function(e){return r(e.target.value)},value:n,required:!0,onBlur:function(){return w(!0)}})]}),Object(p.jsxs)("div",{className:"".concat(!j&&C?"form__signup__email form__signup__error":"form__signup__email"),children:[Object(p.jsx)(h.a,{className:"icon-email",style:{fontSize:30,color:"#fff"}}),Object(p.jsx)("input",{type:"email",className:"form__signup__email__input",placeholder:"stayfit@gmail.com",onChange:function(e){return d(e.target.value)},value:j,required:!0,onBlur:function(){return E(!0)}})]}),Object(p.jsxs)("div",{className:"".concat(!O&&z?"form__signup__password form__signup__error":"form__signup__password"),children:[Object(p.jsx)(x.a,{className:"icon-password",style:{fontSize:30,color:"#fff"}}),Object(p.jsx)("input",{type:"password",className:"form__signup__password__input",placeholder:"password",onChange:function(e){return f(e.target.value)},value:O,required:!0,onBlur:function(){return J(!0)}})]}),D&&Object(p.jsx)("p",{className:"signup__error",children:D}),Object(p.jsx)("input",{type:"submit",value:"Signup",className:"button__signup"})]}),Object(p.jsx)(_.b,{to:"/login",children:Object(p.jsx)("p",{className:"signup__cancel",children:"Back to Login"})})]})})),S=(s(94),s(95),Object(j.g)((function(e){return Object(p.jsx)("button",{onClick:function(){e.logout&&e.logout(),e.history.push(e.logout?"/login":"/")},className:"header__button",children:e.text})}))),w=s(38),y=s.n(w),k=s(39),C=s.n(k),E=s(40),I=s.n(E),T=s(41),z=s.n(T),J=function(e){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)("div",{className:"home__header",children:Object(p.jsx)(S,{text:"logout",logout:e.logout})}),Object(p.jsx)("div",{className:"home__nav",children:Object(p.jsxs)("ul",{className:"home__nav__list",children:[Object(p.jsx)(_.b,{to:"/workout",children:Object(p.jsxs)("li",{className:"home__nav__list__item",children:[Object(p.jsx)("div",{className:"home__nav__list__item--bg",children:Object(p.jsx)(y.a,{style:{fontSize:100}})}),Object(p.jsx)("p",{className:"home__nav__list__item__text",children:"workout"})]})}),Object(p.jsx)(_.b,{to:"/history",children:Object(p.jsxs)("li",{className:"home__nav__list__item",children:[Object(p.jsx)("div",{className:"home__nav__list__item--bg",children:Object(p.jsx)(C.a,{style:{fontSize:100}})}),Object(p.jsx)("p",{className:"home__nav__list__item__text",children:"history"})]})}),Object(p.jsx)(_.b,{to:"/progress",children:Object(p.jsxs)("li",{className:"home__nav__list__item",children:[Object(p.jsx)("div",{className:"home__nav__list__item--bg",children:Object(p.jsx)(I.a,{style:{fontSize:100}})}),Object(p.jsx)("p",{className:"home__nav__list__item__text",children:"progress"})]})}),Object(p.jsx)(_.b,{to:"/records",children:Object(p.jsxs)("li",{className:"home__nav__list__item",children:[Object(p.jsx)("div",{className:"home__nav__list__item--bg",children:Object(p.jsx)(z.a,{style:{fontSize:100}})}),Object(p.jsx)("p",{className:"home__nav__list__item__text",children:"records"})]})})]})})]})},L=s(25),P=(s(96),s(20)),D=s.n(P),F=(s(97),s(98),s(52)),A=s.n(F),B=function(e){var t=JSON.parse(localStorage.getItem("user")).userId;return Object(p.jsxs)("div",{className:"exercise__list__item__container",children:[Object(p.jsx)("p",{onClick:function(){return e.showLogExercise(e.exercise)},className:"exercise__list__item",children:e.exercise.name}),e.showEdit&&t===e.exercise.user_id&&Object(p.jsx)(A.a,{className:"exercise__list__item__icon",style:{fontSize:25},onClick:function(){return e.delete(e.exercise.exercise_id)}})]})},M=function(e){var t=Object(c.useState)(),s=Object(u.a)(t,2),n=s[0],r=s[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),o=i[0],l=i[1],_=Object(c.useState)(),j=Object(u.a)(_,2),d=(j[0],j[1]);Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));if(e){var t=e.token,s=e.userId;fetch("http://localhost:5000/api/exercises/".concat(s),{headers:{Authorization:t}}).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return r(null)}))}else r(null)}),[]);var h=function(e){fetch("http://localhost:5000/api/routine-data/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return r(n.filter((function(t){return t.exercise_id!==e.exercise_id})))})).catch((function(e){return d(e)}))};return Object(p.jsxs)("div",{className:"exercise__list",children:[Object(p.jsxs)("div",{className:"exercise__list__headers",children:[Object(p.jsx)("div",{onClick:function(){return e.showList(!1)},className:"exercise__list__headers__cancel",children:"cancel"}),Object(p.jsx)("div",{onClick:function(){return l(!o)},className:"exercise__list__headers__edit ".concat(o?"exercise__list__headers__edit--active":""),children:"edit"}),Object(p.jsx)(D.a,{className:"exercise__list__headers__add",style:{fontSize:35},onClick:e.showAddExercise})]}),Object(p.jsx)("div",{className:"exercise__list__container",children:n&&n.map((function(t){return Object(p.jsx)(B,{exercise:t,delete:h,showEdit:o,showLogExercise:e.showLogExercise},t.exercise_id)}))})]})},W=(s(99),function(e){var t=Object(c.useState)(""),s=Object(u.a)(t,2),n=s[0],r=s[1],a=Object(c.useState)(),i=Object(u.a)(a,2),o=(i[0],i[1]);return Object(p.jsxs)("div",{className:"exercise__create",children:[Object(p.jsx)("p",{className:"exercise__create__title",children:"Exercise Name"}),Object(p.jsx)("input",{placeholder:"barbell squat",type:"text",className:"exercise__create__input",onChange:function(e){return r(e.target.value)}}),Object(p.jsx)("p",{className:"exercise__create__error ".concat(!n||n.length>=3?"hidden":""),children:"Exercise must be at least 3 characters"}),Object(p.jsx)("button",{onClick:function(){var t=JSON.parse(localStorage.getItem("user")).userId.toString();if(n&&!(n.length<3)&&t){var s={user_id:t,name:n},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};fetch("http://localhost:5000/api/exercises",c).then((function(e){return e.json()})).then((function(e){return o})).catch((function(e){return console.error(e)})),e.hideCreateExercise()}},className:"exercise__create__btn--add",children:"Add Exercise"}),Object(p.jsx)("button",{onClick:e.hideCreateExercise,className:"exercise__create__btn--cancel",children:"Cancel"})]})}),q=(s(100),function(e){var t=Object(c.useState)(),s=Object(u.a)(t,2),n=s[0],r=s[1],a=Object(c.useState)(),i=Object(u.a)(a,2),_=i[0],j=i[1],d=Object(c.useState)([{set:1,weight:"",reps:""}]),h=Object(u.a)(d,2),b=h[0],x=h[1],m=Object(c.useState)(""),O=Object(u.a)(m,2),f=O[0],g=O[1],v=Object(c.useState)(),N=Object(u.a)(v,2),S=(N[0],N[1]);Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));if(t){var s=t.userId;r(e.exercise.exercise_id),j(s)}}),[]);var w=function(e){if(Number(e.target.value)||""===e.target.value){var t=Object(L.a)(b);t[e.target.dataset.index][e.target.dataset.category]=e.target.value,x(t)}},y=function(e){try{b.map((function(t){var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reps:t.reps,weight:t.weight,routine_exercise_id:e.toString(),user_id:_.toString()})};fetch("http://localhost:5000/api/stats",s).then((function(e){return e.json()})).then((function(e){return S(e)})).catch((function(e){return g(e.message)}))}))}catch(t){g(t.message)}},k=function(){var e=Object(l.a)(o.a.mark((function e(){var t,s,c,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,fetch("http://localhost:5000/api/routines/null-date/".concat(_));case 5:return t=e.sent,e.next=8,t.json();case 8:if(!((s=e.sent).length>0)){e.next=11;break}return e.abrupt("return",new Promise((function(e,t){e(s[0].routine_id)})));case 11:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:_.toString()})},e.next=14,fetch("http://localhost:5000/api/routines",c);case 14:return n=e.sent,e.next=17,n.json();case 17:return r=e.sent,e.abrupt("return",new Promise((function(e,t){e(r.routine_id)})));case 21:e.prev=21,e.t0=e.catch(2),g(e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(t){var s,c,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,(s=t)&&n){e.next=6;break}return e.abrupt("return");case 6:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({routine_id:s.toString(),exercise_id:n.toString()})},e.next=9,fetch("http://localhost:5000/api/routine-exercises",c);case 9:return r=e.sent,e.next=12,r.json();case 12:return a=e.sent,e.abrupt("return",new Promise((function(e,t){e(a.routine_exercise_id)})));case 16:e.prev=16,e.t0=e.catch(2),g(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"log__exercise",children:[Object(p.jsx)("h3",{className:"log__exercise__title",children:e.exercise.name}),Object(p.jsxs)("div",{className:"log__exercise__data",children:[Object(p.jsxs)("div",{className:"log__exercise__data__columns",children:[Object(p.jsx)("h4",{className:"log__exercise__data__column",children:"Set"}),Object(p.jsx)("h4",{className:"log__exercise__data__column",children:"Weight"}),Object(p.jsx)("h4",{className:"log__exercise__data__column",children:"Reps"})]}),Object(p.jsx)("div",{className:"log__exercise__data__rows",children:b.map((function(e,t){return Object(p.jsxs)("div",{className:"log__exercise__data__row",children:[Object(p.jsx)("input",{placeholder:"set",type:"text",className:"log__exercise__data__row__item",value:e.set,readOnly:!0,"data-category":"set","data-index":t}),Object(p.jsx)("input",{placeholder:"weight",type:"text",className:"log__exercise__data__row__item","data-category":"weight","data-index":t,value:b[t].weight,onChange:w}),Object(p.jsx)("input",{placeholder:"reps",type:"text",className:"log__exercise__data__row__item","data-category":"reps","data-index":t,value:b[t].reps,onChange:w})]},t)}))})]}),Object(p.jsx)(D.a,{onClick:function(){x([].concat(Object(L.a)(b),[{set:b.length+1,weight:"",reps:""}]))},style:{fontSize:50},className:"add__set__button"}),Object(p.jsxs)("div",{className:"log__exercise__buttons",children:[Object(p.jsx)("button",{onClick:Object(l.a)(o.a.mark((function t(){var s,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b.map((function(e){Object.values(e).forEach((function(e,t){if(!e)throw new Error("Please fill out all fields")}))})),t.next=4,k();case 4:return s=t.sent,t.next=7,C(s);case 7:c=t.sent,y(c),e.hideLogExercise(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),g(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),className:"log__exercise__button",children:"Log Exercise"}),Object(p.jsx)("button",{onClick:e.hideLogExercise,className:"cancel__exercise__button",children:"Cancel"})]}),f&&Object(p.jsx)("p",{className:"log__exercise__error",children:f})]})}),R=s(74),Y=s.n(R),H=function(e){var t=Object(c.useState)(!1),s=Object(u.a)(t,2),r=s[0],a=s[1],i=Object(c.useState)(!1),_=Object(u.a)(i,2),j=_[0],d=_[1],h=Object(c.useState)(!1),b=Object(u.a)(h,2),x=b[0],m=b[1],O=Object(c.useState)(null),f=Object(u.a)(O,2),g=f[0],v=f[1],N=Object(c.useState)(),w=Object(u.a)(N,2),k=w[0],C=w[1],E=Object(c.useState)(),I=Object(u.a)(E,2),T=I[0],z=I[1],J=Object(c.useState)(!1),P=Object(u.a)(J,2),F=P[0],A=P[1],B=Object(c.useState)(),R=Object(u.a)(B,2),H=(R[0],R[1]);Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t,s,c,n,r,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("user"))){e.next=3;break}return e.abrupt("return");case 3:return s=t.userId,e.prev=4,e.next=7,fetch("http://localhost:5000/api/routines/null-date/".concat(s));case 7:return c=e.sent,e.next=10,c.json();case 10:if(!((n=e.sent).length<1)){e.next=13;break}return e.abrupt("return");case 13:return r=n[0].routine_id,z(r),e.next=17,fetch("http://localhost:5000/api/routine-data/".concat(s,"/").concat(r));case 17:return a=e.sent,e.next=20,a.json();case 20:i=e.sent,C(i),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(4),H(e.t0.message);case 27:case"end":return e.stop()}}),e,null,[[4,24]])}))),[r,j,x]);var U,G=function(){var e=Object(l.a)(o.a.mark((function e(t,s){var c,n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Number(t)&&Number(s)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("http://localhost:5000/api/stats/".concat(s,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,r=Object(L.a)(k),a=r.filter((function(e){return e.routine_exercise_id!==n[0].routine_exercise_id})),C(a);case 11:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T){e.next=2;break}return e.abrupt("return");case 2:return t={method:"PATCH",headers:{"Content-Type":"application/json"}},e.prev=3,e.next=6,fetch("http://localhost:5000/api/routines/".concat(T),t);case 6:return s=e.sent,e.next=9,s.json();case 9:e.sent,C(null),z(null),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),H(e.t0.message);case 17:A(!0),setTimeout((function(){A(!1)}),5e3);case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}();return U=r?Object(p.jsx)(M,{showList:a,showAddExercise:function(){d(!0),a(!1)},showLogExercise:function(e){m(!0),a(!1),v(e)}}):j?Object(p.jsx)(W,{hideCreateExercise:function(){return d(!1)}}):x?Object(p.jsx)(q,{hideLogExercise:function(){m(!1)},exercise:g}):Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsxs)("div",{className:"workout__select",onClick:function(){return a(!0)},children:[Object(p.jsx)("p",{className:"workout__select__title",children:"select exercise"}),Object(p.jsx)(D.a,{className:"workout__select__icon",style:{fontSize:30}})]}),Object(p.jsxs)("div",{className:"workout__data",children:[Object(p.jsx)("div",{className:"workout__data__ctn",children:k&&!!k.length&&k.map((function(e,t,s){var c=s[t-1];s[t+1];return c&&c.name===e.name?null:Object(p.jsxs)("div",{className:"workout__data__exercise",children:[Object(p.jsx)("p",{className:"workout__data__exercise__name",children:e.name}),Object(p.jsx)(Y.a,{style:{fontSize:35},className:"workout__data__exercise__delete",onClick:function(){return G(e.exercise_id,T)}})]},t)}))}),k&&k.length?Object(p.jsx)("button",{onClick:K,className:"log__workout",children:"Log Workout"}):null]})]}),Object(p.jsxs)("div",{className:"workout",children:[Object(p.jsxs)("div",{className:"workout__header",children:[Object(p.jsx)(S,{text:"home"}),Object(p.jsx)(S,{text:"logout",logout:e.logout})]}),Object(p.jsx)("div",{className:"workout__title",children:Object(p.jsx)(y.a,{className:"workout__icon",style:{fontSize:100}})}),U,Object(p.jsx)("div",{className:"message__modal ".concat(F?"":"hidden"),children:Object(p.jsx)("p",{className:"message__text",children:"Workout Logged"})})]})},U=s(76),G=(s(101),function(e){var t=Object(c.useState)(new Date),s=Object(u.a)(t,2),r=s[0],a=(s[1],Object(c.useState)()),i=Object(u.a)(a,2),o=i[0],l=i[1],_=Object(c.useState)(),j=Object(u.a)(_,2),d=j[0],h=j[1],b=Object(c.useState)(),x=Object(u.a)(b,2),m=x[0],O=x[1],f=Object(c.useState)(),g=Object(u.a)(f,2),v=(g[0],g[1]),N=function(e){var t=e.getFullYear(),s=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,c=e.getDate()<10?"0"+e.getDate():e.getDate();return"".concat(t,"-").concat(s,"-").concat(c)};return Object(c.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("user")).userId;h(e);var t=[];fetch("http://localhost:5000/api/routines/".concat(e)).then((function(e){return e.json()})).then((function(e){e.map((function(e){if(e.date_end){var s=e.date_end.split("T");t.push(s[0])}})),l(t)})).catch((function(e){return v(e)}))}()}),[]),Object(p.jsxs)("div",{className:"history",children:[Object(p.jsxs)("div",{className:"history__header",children:[Object(p.jsx)(S,{text:"home"}),Object(p.jsx)(S,{text:"logout",logout:e.logout})]}),Object(p.jsx)("div",{className:"history__icon",children:Object(p.jsx)(C.a,{style:{fontSize:100}})}),Object(p.jsx)("p",{className:"history__instructions",children:"Select a date to view a past routine."}),Object(p.jsxs)("p",{className:"history__instructions-2",children:["Dates in ",Object(p.jsx)("span",{children:"green"})," have exercise data"]}),Object(p.jsx)("div",{className:"history__calendar",children:Object(p.jsx)(U.a,{onChange:function(e,t){fetch("http://localhost:5000/api/routine-data/data/".concat(d,"/").concat(N(e))).then((function(e){return e.json()})).then((function(e){O(e)})).catch((function(e){return v(e)}))},value:r,tileClassName:function(e){var t=e.date;e.view;if(o)return o.find((function(e){return e===N(t)}))?"bg-green":void 0}})}),Object(p.jsx)("div",{className:"history__routine",children:m&&m.map((function(e,t,s){var c=s[t-1];s[t+1];return c&&c.name===e.name?Object(p.jsx)("p",{className:"history__routine__set",children:"".concat(e.weight," x ").concat(e.reps)},t):Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)("p",{className:"history__routine__exercise",children:e.name}),Object(p.jsx)("p",{className:"history__routine__set",children:"".concat(e.weight," x ").concat(e.reps)})]},t)}))})]})}),K=(s(102),s(75)),Q=function(e){var t=Object(c.useState)(),s=Object(u.a)(t,2),n=s[0],r=s[1],a=Object(c.useState)(),i=Object(u.a)(a,2),o=(i[0],i[1]);return Object(c.useEffect)((function(){!function(){var t=e.exercise.user_id,s=e.exercise.exercise_id,c=[],n=[];r(null),o(null),fetch("http://localhost:5000/api/progress/".concat(t,"/").concat(s)).then((function(e){return e.json()})).then((function(e){e.map((function(e){var t=new Date(e.date_end),s=t.getMonth()+1+"-"+t.getDate()+"-"+t.getFullYear();n.push(s),c.push(e.max)})),r({labels:n,datasets:[{label:"weight",data:c,backgroundColor:"#27e77f",borderColor:"#27e77f",borderWidth:2,fill:!1}]})})).catch((function(e){return console.error(e)}))}()}),[e.exercise]),Object(p.jsx)("div",{className:"graph",children:n&&Object(p.jsx)(K.Line,{data:n,options:{title:{display:!0,text:"".concat(e.exercise.name.toUpperCase()),fontSize:20},responsive:!0,maintainAspectRatio:!1,showLine:!0}})})},V=function(e){var t=Object(c.useState)(),s=Object(u.a)(t,2),n=s[0],r=s[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),_=i[0],j=i[1],d=Object(c.useState)(),h=Object(u.a)(d,2),b=h[0],x=h[1];return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t,s,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("user"))){e.next=3;break}return e.abrupt("return");case 3:return s=t.userId,e.next=6,fetch("http://localhost:5000/api/max/".concat(s));case 6:return c=e.sent,e.next=9,c.json();case 9:n=e.sent,r(n);case 11:case"end":return e.stop()}}),e)}))),[]),Object(p.jsxs)("div",{className:"progress",children:[Object(p.jsxs)("div",{className:"progress__header",children:[Object(p.jsx)(S,{text:"home"}),Object(p.jsx)(S,{text:"logout",logout:e.logout})]}),Object(p.jsx)("div",{className:"progress__title",children:Object(p.jsx)(I.a,{style:{fontSize:100}})}),!b&&Object(p.jsx)("div",{className:"progress__instructions",children:"Select an exercise to view a graph of your progress"}),b&&Object(p.jsx)(Q,{exercise:b}),Object(p.jsxs)("div",{onClick:function(){return j(!0)},className:"progress__select__exercise",children:[Object(p.jsx)("p",{className:"progress__select__exercise--text",children:"select exercise"}),Object(p.jsx)(D.a,{className:"progress__select__icon",style:{fontSize:30}})]}),n&&_&&Object(p.jsxs)("div",{className:"progress__exercise__container",children:[Object(p.jsx)("div",{className:"progress__exercise__cancel",children:Object(p.jsx)("span",{onClick:function(){return j(!1)},children:"cancel"})}),Object(p.jsx)("div",{className:"progress__exercise__list",children:n.map((function(e){return Object(p.jsx)("p",{onClick:function(){x(e),j(!1)},className:"progress__exercise",children:e.name},e.exercise_id)}))})]})]})},X=(s(198),function(e){var t=Object(c.useState)(),s=Object(u.a)(t,2),n=s[0],r=s[1];return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t,s,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("user"))){e.next=3;break}return e.abrupt("return");case 3:return s=t.userId,e.next=6,fetch("http://localhost:5000/api/max/".concat(s));case 6:return c=e.sent,e.next=9,c.json();case 9:n=e.sent,r(n);case 11:case"end":return e.stop()}}),e)}))),[]),Object(p.jsxs)("div",{className:"records",children:[Object(p.jsxs)("div",{className:"records__header",children:[Object(p.jsx)(S,{text:"home"}),Object(p.jsx)(S,{text:"logout",logout:e.logout})]}),Object(p.jsx)("div",{className:"records__title",children:Object(p.jsx)(z.a,{className:"records__icon",style:{fontSize:100}})}),Object(p.jsx)("div",{className:"records__instructions",children:Object(p.jsx)("p",{className:"records__instructions--1",children:"Each row is the heaviest weight lifted for the given exercise"})}),Object(p.jsxs)("div",{className:"records__data",children:[Object(p.jsxs)("div",{className:"records__data__label",children:[Object(p.jsx)("p",{className:"records__data__label--exercise",children:"Exercise"}),Object(p.jsx)("p",{className:"records__data__label--weight",children:"Weight"})]}),n&&n.length?n.map((function(e){return Object(p.jsxs)("div",{className:"records__data__row",children:[Object(p.jsx)("p",{className:"records__data__row--exercise",children:e.name}),Object(p.jsx)("p",{className:"records__data__row--weight",children:e.max_weight})]},e.exercise_id)})):Object(p.jsx)("p",{className:"records__message",children:"No exercise data available"})]})]})}),Z=s(26),$=s(77),ee=function(e){var t=e.component,s=Object($.a)(e,["component"]);return!!JSON.parse(localStorage.getItem("user"))?Object(p.jsx)(j.b,Object(Z.a)(Object(Z.a)({},s),{},{render:function(e){return Object(p.jsx)(t,Object(Z.a)(Object(Z.a)({},s),e))}})):Object(p.jsx)(j.a,{to:"/login"})},te=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),s=(t[0],t[1]),n=Object(c.useState)(),r=Object(u.a)(n,2),a=r[0],i=r[1],d=Object(c.useState)(!1),h=Object(u.a)(d,2),b=h[0],x=h[1],m=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&c||i("Please enter email and password"),x(!0),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:c})},e.prev=3,e.next=6,fetch("http://localhost:5000/api/authenticate",n);case 6:return r=e.sent,e.next=9,r.json();case 9:if(a=e.sent,r.ok){e.next=12;break}throw new Error(a);case 12:s(a.token),localStorage.setItem("user",JSON.stringify({userId:a.userId,token:a.token})),i(null),e.next=22;break;case 17:return e.prev=17,e.t0=e.catch(3),i(e.t0.message||"Something went wrong"),x(!1),e.abrupt("return",!1);case 22:return x(!1),e.abrupt("return",!0);case 24:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t,s){return e.apply(this,arguments)}}(),O=function(){s(null),i(null),localStorage.removeItem("user")};return Object(p.jsx)(_.a,{children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{path:"/login",render:function(){return Object(p.jsx)(f,{error:a,loading:b,login:m})}}),Object(p.jsx)(j.b,{path:"/signup",component:N}),Object(p.jsx)(ee,{path:"/workout",logout:O,component:H}),Object(p.jsx)(ee,{path:"/history",logout:O,component:G}),Object(p.jsx)(ee,{path:"/progress",logout:O,component:V}),Object(p.jsx)(ee,{path:"/records",logout:O,component:X}),Object(p.jsx)(ee,{path:"/",exact:!0,logout:O,component:J})]})})};s(199);a.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(te,{})}),document.getElementById("root"))},84:function(e,t,s){},85:function(e,t,s){},92:function(e,t,s){},93:function(e,t,s){},94:function(e,t,s){},95:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){},99:function(e,t,s){}},[[201,1,2]]]);
//# sourceMappingURL=main.d6eeead3.chunk.js.map