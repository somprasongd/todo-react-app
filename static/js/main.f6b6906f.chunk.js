(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(18),c=n.n(l),i=n(8),r=n(3),s=n(4),u=n(6),m=n(5),d=n(7),f=n(2),h=n.n(f);var p=function(e){var t=e.count;return o.a.createElement("div",null,o.a.createElement("h1",null,"Todo (",t,")"))};var v=function(e){var t,n=e.onAdd;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(t.value),t.value=""}},o.a.createElement("div",{className:"form-row align-items-center"},o.a.createElement("div",{className:"col"},o.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInput"},"Task"),o.a.createElement("input",{type:"text",ref:function(e){return t=e},className:"form-control mb-2",id:"inlineFormInput",placeholder:"What needs to be done?"})),o.a.createElement("div",{className:"col-auto"},o.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},o.a.createElement("i",{className:"fas fa-plus"})))))};var g=function(e){var t=e.todo,n=e.onToggle,a=e.onDelete;return o.a.createElement("li",{className:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},o.a.createElement("div",{style:{textDecoration:t.isCompleted?"line-through":null},onClick:function(e){return n(t.id)}},t.text),o.a.createElement("button",{className:"btn btn-danger",onClick:function(e){return a(t.id)}},o.a.createElement("i",{className:"fas fa-minus-circle"})))};var b=function(e){var t=e.todos,n=e.onToggle,a=e.onDelete;return o.a.createElement(o.a.Fragment,null,0===t.length?o.a.createElement("p",{className:"text-center"},"No task."):o.a.createElement("ul",{className:"list-group"},t.map(function(e){return o.a.createElement(g,{key:e.id,todo:e,onToggle:n,onDelete:a})})))},E=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={date:new Date},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),clearInterval(this.timerID)}},{key:"tick",value:function(){console.log("tick"),this.setState({date:new Date})}},{key:"render",value:function(){return console.log("render"),o.a.createElement("div",null,o.a.createElement("h2",null,"Time is ",this.state.date.toLocaleTimeString(),"."))}}]),t}(a.Component),k=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleAdd=function(t){if(0!==t.length){var n={text:t,isCompleted:!1};h.a.post(e.apiUrl,n).then(function(t){var n=Object(i.a)(e.state.todos);n.push(t.data),e.setState({todos:n})})}},e.handleRemove=function(t){var n=e.state.todos.filter(function(e){return e.id!==t});h.a.delete("".concat(e.apiUrl,"/").concat(t)).then(function(t){e.setState({todos:n})})},e.handleToggleComplete=function(t){var n=Object(i.a)(e.state.todos),a=n.find(function(e){return e.id===t});a.isCompleted=!a.isCompleted,h.a.put("".concat(e.apiUrl,"/").concat(t),a).then(function(t){e.setState({todos:n})})},e.state={todos:[],isShowTime:!1},e.apiUrl="https://5d1ac8b7dd81710014e87e54.mockapi.io/api/todos",e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get(this.apiUrl).then(function(t){e.setState({todos:t.data})})}},{key:"count",value:function(e){return e.reduce(function(e,t){return e+(t.isCompleted?0:1)},0)}},{key:"render",value:function(){var e=this,t=this.state,n=t.todos,a=t.isShowTime,l=this.count(n);return o.a.createElement("div",{className:"container mt-5"},o.a.createElement(p,{count:l}),o.a.createElement(v,{onAdd:this.handleAdd}),o.a.createElement(b,{todos:n,onToggle:this.handleToggleComplete,onDelete:this.handleRemove}),o.a.createElement("div",{className:"m-2"},a&&o.a.createElement(E,null),o.a.createElement("button",{className:"btn btn-info",onClick:function(t){return e.setState({isShowTime:!a})}},a?"Hide":"Show")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.f6b6906f.chunk.js.map