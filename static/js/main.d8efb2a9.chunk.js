(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),l=a(10),i=a(7),s=a(11),u=a(12),m=a(14),d=a(13),p=a(15),f=a(5),h=a.n(f),E=a(8),b=a(9),v=a.n(b),y="https://5d1ac8b7dd81710014e87e54.mockapi.io/api/todos",g=a(36),w=a(18),O=function(e,t){switch(t.type){case"ADD_TODO":return Object(w.a)({},e,{todos:[].concat(Object(g.a)(e.todos),[t.payload])});case"UPDATE_TODO":return Object(w.a)({},e,{todos:e.todos.map(function(e){return e.id===t.payload.id?e=t.payload:e})});case"DELETE_TODO":return Object(w.a)({},e,{todos:e.todos.filter(function(e){return e.id!==t.payload})});default:return e}},k=Object(n.createContext)({}),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],dispatch:function(e){return a.setState(function(t){return O(t,e)})}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(y);case 2:t=e.sent,this.setState({todos:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),j=k.Consumer,D=function(){return r.a.createElement(j,null,function(e){var t=e.todos.reduce(function(e,t){return e+(t.isCompleted?0:1)},0);return r.a.createElement(r.a.Fragment,null,t)})},x=function(){return r.a.createElement("h1",{className:"display-5 mb-2"},"Todo"," ",r.a.createElement("span",{className:"text-info"},"(",r.a.createElement(D,null),")"))},T=function(){var e,t=function(){var t=Object(E.a)(h.a.mark(function t(a,n){var r,c,o;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),0!==(r=e.value).length){t.next=4;break}return t.abrupt("return");case 4:return c={text:r,isCompleted:!1},t.next=7,v.a.post(y,c);case 7:o=t.sent,n({type:"ADD_TODO",payload:o.data}),e.value="";case 10:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement(j,null,function(a){var n=a.dispatch;return r.a.createElement("form",{onSubmit:function(e){return t(e,n)}},r.a.createElement("div",{className:"form-row align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInput"},"Task"),r.a.createElement("input",{type:"text",ref:function(t){return e=t},className:"form-control mb-2",id:"inlineFormInput",placeholder:"What needs to be done?"})),r.a.createElement("div",{className:"col-auto"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},r.a.createElement("i",{className:"fas fa-plus"})))))})},S=function(e){var t=e.todo,a=function(){var e=Object(E.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat(y,"/").concat(a));case 2:t({type:"DELETE_TODO",payload:a});case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),n=function(){var e=Object(E.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.isCompleted=!a.isCompleted,e.next=3,v.a.put("".concat(y,"/").concat(a.id),a);case 3:t({type:"UPDATE_TODO",payload:a});case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(j,null,function(e){var c=e.dispatch;return r.a.createElement("li",{className:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},r.a.createElement("div",{style:{textDecoration:t.isCompleted?"line-through":null},onClick:function(e){return n(c,t)}},t.text),r.a.createElement("button",{className:"btn btn-danger",onClick:function(e){return a(c,t.id)}},r.a.createElement("i",{className:"fas fa-minus-circle"})))})},C=function(){return r.a.createElement(j,null,function(e){var t=e.todos;return r.a.createElement(r.a.Fragment,null,0===t.length?r.a.createElement("p",{className:"text-center"},"No task."):r.a.createElement("ul",{className:"list-group"},t.map(function(e){return r.a.createElement(S,{key:e.id,todo:e})})))})},A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={date:new Date},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),clearInterval(this.timerID)}},{key:"tick",value:function(){console.log("tick"),this.setState({date:new Date})}},{key:"render",value:function(){return console.log("render"),r.a.createElement("div",null,r.a.createElement("h2",null,"Time is ",this.state.date.toLocaleTimeString(),"."))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isShowTime:!1},a.handleToggleShowtime=function(){a.setState({isShowTime:!a.state.isShowTime})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.isShowTime;return r.a.createElement(n.Fragment,null,r.a.createElement(x,null),r.a.createElement(T,null),r.a.createElement(C,null),r.a.createElement("div",{className:"m-2"},e&&r.a.createElement(A,null),r.a.createElement("button",{className:"btn btn-info",onClick:this.handleToggleShowtime},e?"Hide":"Show")))}}]),t}(n.Component),I=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Page"),r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"Show how to create Todo-list using react -> context api -> hooks"),r.a.createElement("footer",{className:"blockquote-footer"},"Read more"," ",r.a.createElement("cite",null,r.a.createElement("a",{href:"https://github.com/somprasongd/todo-react-app",target:"_blank"},r.a.createElement("span",{className:"text-danger"},"On GitHub"))))))};var _=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404 "),"Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page dose not exist."))};var U=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},r.a.createElement("i",{className:"fas fa-tasks"})," Todo-list React"),r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(l.c,{className:"nav-item nav-link",to:"/todos"},"Todo (",r.a.createElement(D,null),")"),r.a.createElement(l.c,{className:"nav-item nav-link",to:"/about"},"About")))))},P=function(e){return r.a.createElement(N,null,r.a.createElement(U,null),r.a.createElement("main",{className:"container mt-3"},e.children))},W=function(){return r.a.createElement(P,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/todos",component:F}),r.a.createElement(i.b,{path:"/about",component:I}),r.a.createElement(i.a,{from:"/",exact:!0,to:"/todos"}),r.a.createElement(i.b,{component:_})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.d8efb2a9.chunk.js.map