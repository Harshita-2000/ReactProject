(this.webpackJsonpusers=this.webpackJsonpusers||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(4),c=a.n(s),r=a(3),i=a.n(r),o=a(5),j=a(6),l=(a(12),a(0)),d=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),a=t[0],s=t[1],c=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users?page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),s(a.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)("h1",{className:"navbar-heading",children:"Harshita Networks"})}),Object(l.jsx)("div",{className:"card-container",children:a?a.map((function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-top",children:Object(l.jsx)("img",{src:e.avatar,alt:"sarwar",className:"card-img"})}),Object(l.jsxs)("div",{className:"card-bottom",children:[Object(l.jsx)("h4",{children:"".concat(e.first_name," ").concat(e.last_name)}),Object(l.jsx)("p",{children:e.email})]})]},e.id)})):Object(l.jsx)("button",{className:"navbar-btn",onClick:c,children:"Get Users"})})]})};a(14);c.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2f41b1ee.chunk.js.map