(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],[,,,,,,,,,,,,,function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(1),i=s.n(n),o=s(7),c=s.n(o),r=s(8),a=s(3),l=s(5),d=(s(13),s(0));var u=function(t){return Object(d.jsx)("option",{id:t.listDetails.id,value:t.listDetails.id,children:t.listDetails.title})};var j=function(t){return t.lists.sort("asc"===t.sort?t.compareAsc:t.compareDesc),Object(d.jsxs)("div",{className:"todo-select",children:[Object(d.jsx)("button",{onClick:function(){var e=prompt("Please name your list!","New List");if(e){var s=(new Date).getTime();t.setListInformation(s,e)}},type:"button",className:"newListBtn",children:"Create a list"}),Object(d.jsx)("select",{name:"select-list",id:"select-list",children:t.lists.map((function(t){return Object(d.jsx)(u,{listDetails:t},t.id)}))})]})};s(15);var m=function(t){return Object(d.jsxs)("div",{className:"todo-input",children:[Object(d.jsx)("label",{htmlFor:"todoInput",children:"Add a daily task!"}),Object(d.jsx)("input",{type:"text",name:"todoInput",id:"todoInput",placeholder:"Write something...",onChange:t.setInputText}),Object(d.jsx)("input",{onClick:function(){var e=(new Date).getTime();if(document.querySelectorAll(".list").length>0){if(t.inputText){var s=parseInt(document.getElementById("select-list").value);t.setTaskToList(s,e),document.querySelector("input[type=text]").value=""}}else if(t.inputText){var n=prompt("Please name your list!","New List");t.createTaskAndList(e,n),document.querySelector("input[type=text]").value=""}},type:"submit",id:"submitBtn",value:"Add a task"})]})};s(16);var p=function(t){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(m,{inputText:t.inputText,setTaskToList:t.setTaskToList,setInputText:t.setInputText,setListInformation:t.setListInformation,createTaskAndList:t.createTaskAndList}),Object(d.jsx)(j,{lists:t.lists,setListInformation:t.setListInformation,compareAsc:t.compareAsc,compareDesc:t.compareDesc,sort:t.sort})]})};s(17);var f=function(t){return Object(d.jsxs)("div",{className:"sort",children:[Object(d.jsx)("label",{htmlFor:"sort",children:"Sort by:"}),Object(d.jsxs)("select",{onChange:function(){"asc"===t.sort?t.setSort("desc"):t.setSort("asc")},name:"sort",id:"sort",children:[Object(d.jsx)("option",{value:"Newest updates",children:"Newest updates"}),Object(d.jsx)("option",{value:"Oldest updates",children:"Oldest updates"})]})]})};s(18),s(19),s(20);var b=function(){return Object(d.jsx)("div",{className:"empty",children:Object(d.jsx)("h2",{children:"There are no lists created!"})})};s(21),s(22);var v=function(t){return Object(d.jsx)("h2",{className:"title",children:t.title})};s(23);var O=function(t){return Object(d.jsx)("i",{onClick:function(e){var s=e.target;t.removeList(parseInt(s.parentElement.id))},className:"fas fa-trash-alt deleteList"})};s(24);var x=function(t){return Object(d.jsxs)("li",{id:t.todo.todoID,edit:"",children:[Object(d.jsx)("span",{children:t.todo.todoText}),Object(d.jsx)("i",{onClick:function(e){var s=e.target,n=parseInt(s.parentElement.id),i=s.parentElement.parentElement.parentElement,o=parseInt(i.id);t.removeTodo(o,n)},className:"fas fa-trash-alt deleteItem"})]})};var h=function(t){return Object(d.jsx)("ul",{children:t.todos.map((function(e){return Object(d.jsx)(x,{removeTodo:t.removeTodo,todo:e},e.todoID)}))})};var T=function(t){return Object(d.jsxs)("div",{className:"list",id:t.listDetails.id,edit:t.listDetails.edit,children:[Object(d.jsx)(O,{removeList:t.removeList}),Object(d.jsx)(v,{title:t.listDetails.title}),Object(d.jsx)(h,{removeTodo:t.removeTodo,todos:t.listDetails.todos})]})};var I=function(t){return t.lists.length?(t.lists.sort("asc"===t.sort?t.compareAsc:t.compareDesc),Object(d.jsx)("div",{className:"task-holder",children:t.lists.map((function(e){return Object(d.jsx)(T,{removeTodo:t.removeTodo,removeList:t.removeList,listDetails:e},e.id)}))})):Object(d.jsx)(b,{})};s(25);var L=function(t){return t.lists.length?Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){t.clearAll()},className:"clear-all-btn",children:"Clear All"})}):null};var D=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),s=e[0],i=e[1],o=Object(n.useState)((function(){var t=JSON.parse(localStorage.getItem("Lists"));return t||[]})),c=Object(l.a)(o,2),u=c[0],j=c[1],m=Object(n.useState)("asc"),b=Object(l.a)(m,2),v=b[0],O=b[1];function x(t,e){return e.edit-t.edit}function h(t,e){return t.edit-e.edit}return Object(n.useEffect)((function(){localStorage.setItem("Lists",JSON.stringify(u))})),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{inputText:s,setListInformation:function(t,e){j(u.concat([{id:t,edit:t,title:e,todos:[]}]))},setInputText:function(t){var e=t.target.value;i(e)},setTaskToList:function(t,e){var n=(new Date).getTime();j(u.map((function(i){return i.id!==t?i:Object(a.a)(Object(a.a)({},i),{},{todos:[].concat(Object(r.a)(i.todos),[{todoID:e,todoText:s}]),edit:n})}))),i("")},createTaskAndList:function(t,e){j([{id:t,edit:t,title:e,todos:[{todoID:"".concat(t+1),todoText:s}]}]),i("")},lists:u,compareAsc:x,compareDesc:h,sort:v}),Object(d.jsx)(f,{lists:u,setLists:j,sort:v,setSort:O}),Object(d.jsx)(I,{removeTodo:function(t,e){var s=(new Date).getTime();j(u.map((function(n){return n.id!==t?n:Object(a.a)(Object(a.a)({},n),{},{todos:n.todos.filter((function(t){return parseInt(t.todoID)!==e})),edit:s})})))},removeList:function(t){j(u.filter((function(e){return e.id!==t})))},lists:u,sort:v,setLists:j,compareAsc:x,compareDesc:h}),Object(d.jsx)(L,{lists:u,clearAll:function(){j([])}})]})};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.ecc352ad.chunk.js.map