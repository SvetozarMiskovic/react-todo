(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),o=n(8),r=n.n(o),c=n(5),a=n(3),l=n(7),d=(n(13),n(0));var u=function(t){return Object(d.jsx)("option",{id:t.listDetails.id,value:t.listDetails.id,children:t.listDetails.title})};var j=function(t){return Object(d.jsxs)("div",{className:"todo-select",children:[Object(d.jsx)("button",{onClick:function(){var e=prompt("Please name your list!","New List");if(e){var n=(new Date).getTime();t.setListInformation(n,e)}},type:"button",className:"newListBtn",children:"Create a list"}),Object(d.jsx)("select",{name:"select-list",id:"select-list",children:t.lists.map((function(t){return Object(d.jsx)(u,{listDetails:t},t.id)}))})]})};n(15);var f=function(t){return Object(d.jsxs)("div",{className:"todo-input",children:[Object(d.jsx)("label",{htmlFor:"todoInput",children:"Add a daily task!"}),Object(d.jsx)("input",{type:"text",name:"todoInput",id:"todoInput",placeholder:"Write something...",onChange:t.setInputText}),Object(d.jsx)("input",{onClick:function(){var e=(new Date).getTime();if(document.querySelectorAll(".list").length>0){if(t.inputText){var n=parseInt(document.getElementById("select-list").value);t.setTaskToList(n,e),document.querySelector("input[type=text]").value=""}}else if(t.inputText){var s=prompt("Please name your list!","New List");t.createTaskAndList(e,s),document.querySelector("input[type=text]").value=""}},type:"submit",id:"submitBtn",value:"Add a task"})]})};n(16);var m=function(t){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(f,{inputText:t.inputText,setTaskToList:t.setTaskToList,setInputText:t.setInputText,setListInformation:t.setListInformation,createTaskAndList:t.createTaskAndList}),Object(d.jsx)(j,{lists:t.lists,setListInformation:t.setListInformation})]})};n(17);var b=function(t){function e(t,e){return e.edit-t.edit}function n(t,e){return t.edit-e.edit}return Object(d.jsxs)("div",{className:"sort",children:[Object(d.jsx)("label",{htmlFor:"sort",children:"Sort by:"}),Object(d.jsxs)("select",{onChange:function(s){var i=s.target.value,o=t.lists.sort("Newest updates"===i?e:n);t.setLists(Object(c.a)(o))},name:"sort",id:"sort",children:[Object(d.jsx)("option",{value:"Newest updates",children:"Newest updates"}),Object(d.jsx)("option",{value:"Oldest updates",children:"Oldest updates"})]})]})};n(18),n(19),n(20);var p=function(){return Object(d.jsx)("div",{className:"empty",children:Object(d.jsx)("h2",{children:"There are no lists created!"})})};n(21),n(22);var v=function(t){return Object(d.jsx)("h2",{className:"title",children:t.title})};n(23);var x=function(t){return Object(d.jsx)("i",{onClick:function(e){var n=e.target;t.removeList(parseInt(n.parentElement.id))},className:"fas fa-trash-alt deleteList"})};n(24);var O=function(t){return Object(d.jsxs)("li",{id:t.todo.todoID,edit:"",children:[Object(d.jsx)("span",{children:t.todo.todoText}),Object(d.jsx)("i",{onClick:function(e){var n=e.target,s=parseInt(n.parentElement.id),i=n.parentElement.parentElement.parentElement,o=parseInt(i.id);t.removeTodo(o,s)},className:"fas fa-trash-alt deleteItem"})]})};var h=function(t){return Object(d.jsx)("ul",{children:t.todos.map((function(e){return Object(d.jsx)(O,{removeTodo:t.removeTodo,todo:e},e.todoID)}))})};var T=function(t){return Object(d.jsxs)("div",{className:"list",id:t.listDetails.id,edit:t.listDetails.edit,children:[Object(d.jsx)(x,{removeList:t.removeList}),Object(d.jsx)(v,{title:t.listDetails.title}),Object(d.jsx)(h,{removeTodo:t.removeTodo,todos:t.listDetails.todos})]})};var I=function(t){return 0===t.lists.length?Object(d.jsx)(p,{}):Object(d.jsx)("div",{className:"task-holder",children:t.lists.map((function(e){return Object(d.jsx)(T,{removeTodo:t.removeTodo,removeList:t.removeList,listDetails:e},e.id)}))})};n(25);var L=function(t){return 0===t.lists.length?null:Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){t.clearAll()},className:"clear-all-btn",children:"Clear All"})})};var g=function(){var t=Object(s.useState)(""),e=Object(l.a)(t,2),n=e[0],i=e[1],o=Object(s.useState)((function(){var t=JSON.parse(localStorage.getItem("Lists"));return t||[]})),r=Object(l.a)(o,2),u=r[0],j=r[1];return Object(s.useEffect)((function(){localStorage.setItem("Lists",JSON.stringify(u))})),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{inputText:n,setListInformation:function(t,e){j(u.concat([{id:t,edit:t,title:e,todos:[]}]))},setInputText:function(t){var e=t.target.value;i(e)},setTaskToList:function(t,e){var s=(new Date).getTime();j(u.map((function(i){return i.id!==t?i:Object(a.a)(Object(a.a)({},i),{},{todos:[].concat(Object(c.a)(i.todos),[{todoID:e,todoText:n}]),edit:s})}))),i("")},createTaskAndList:function(t,e){j([{id:t,edit:t,title:e,todos:[{todoID:"".concat(t+1),todoText:n}]}]),i("")},lists:u}),Object(d.jsx)(b,{lists:u,setLists:j}),Object(d.jsx)(I,{removeTodo:function(t,e){var n=(new Date).getTime();j(u.map((function(s){return s.id!==t?s:Object(a.a)(Object(a.a)({},s),{},{todos:s.todos.filter((function(t){return parseInt(t.todoID)!==e})),edit:n})})))},removeList:function(t){j(u.filter((function(e){return e.id!==t})))},lists:u}),Object(d.jsx)(L,{lists:u,clearAll:function(){j([])}})]})};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.4ac25532.chunk.js.map