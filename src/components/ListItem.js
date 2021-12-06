import React from 'react';

function ListItem(props) {
  return (
    <li id={props.todo.todoID} edit="">
      <span>{props.todo.todoText}</span>
      <i
        onClick={e => {
          const element = e.target;
          const todoID = parseInt(element.parentElement.id);
          const list = element.parentElement.parentElement.parentElement;
          const listID = parseInt(list.id);

          props.removeTodo(listID, todoID);
        }}
        className="fas fa-trash-alt deleteItem"
      ></i>
    </li>
  );
}

export default ListItem;
