(this.webpackJsonpqrscaner=this.webpackJsonpqrscaner||[]).push([[0],{29:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n(0),r=n(19),c=n.n(r),o=n(14),i=n(2),l=n(9),j=n(10),u=n(12),d=n(11),h=n(20),b=(n(29),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={login:"",password:""},t.onSubmit=function(e){var n=h.a.encode(t.state.login+":"+t.state.password);localStorage.setItem("jwt",n),t.setState({login:""}),t.setState({password:""})},t.onLoginChange=function(e){t.setState({login:e.target.value})},t.onPasswordChange=function(e){t.setState({password:e.target.value})},t}return Object(j.a)(n,[{key:"render",value:function(){return!0===this.props.item?Object(s.jsx)(i.a,{to:"/scan"}):Object(s.jsx)("div",{className:"my-5 mx-md-5",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-6 mx-auto",children:Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("div",{className:"card-body",children:Object(s.jsxs)("form",{className:"text-center",onSubmit:this.onSubmit,children:[Object(s.jsx)("h3",{className:"font-weight-bold my-4 pb-2 text-center dark-grey-text",children:"Log In"}),Object(s.jsx)("input",{type:"text",required:!0,className:"form-control mb-4",onChange:this.onLoginChange,placeholder:"Login",value:this.state.login}),Object(s.jsx)("input",{type:"password",required:!0,onChange:this.onPasswordChange,className:"form-control",placeholder:"Password",value:this.state.password}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("button",{type:"submit",className:"btn castom-btn btn-rounded my-4 waves-effect",children:"Submit"})})]})})})})})})}}]),n}(a.Component)),m=n(22),p=n.n(m),O=(n(42),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"link-container",children:[Object(s.jsx)("strong",{children:"You Result:"}),Object(s.jsx)("a",{href:this.props.item,target:"_blank",children:this.props.item})]})}}]),n}(a.Component)),x=(n(43),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={result:null},t.handleScan=function(e){e&&t.setState({result:e})},t.handleError=function(t){console.error(t)},t}return Object(j.a)(n,[{key:"render",value:function(){if(!1===this.props.item)return Object(s.jsx)(i.a,{to:"/login"});if(null!==this.state.result)return Object(s.jsxs)("div",{className:"container-result",children:[Object(s.jsx)(i.a,{to:"/result?r={{".concat(this.state.result,"}}")}),Object(s.jsx)(O,{item:this.state.result})]});return Object(s.jsx)("div",{className:"scaner-cont",children:Object(s.jsx)(p.a,{delay:200,resolution:1200,onError:this.handleError,onScan:this.handleScan,style:{margin:"0 0 1rem 0",width:320},className:"qr-conteiner"})})}}]),n}(a.Component)),f=function(){var t=!!localStorage.getItem("jwt");return Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{item:t}),Object(s.jsx)(x,{item:t})]})},g=(n(44),function(){return Object(s.jsx)(o.a,{basename:"/qrscaner-react",children:Object(s.jsx)("section",{className:"container my-5 px-0 z-depth-1 p-5 my-md-5 text-center main-section",children:Object(s.jsx)(i.b,{path:"/",component:f})})})});c.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.aa6a4586.chunk.js.map