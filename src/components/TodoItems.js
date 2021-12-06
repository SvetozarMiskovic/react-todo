import React from 'react';
import '../styles/TodoItems.css';
import ListItem from './ListItem';

function TodoItems(props) {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <ListItem
            removeTodo={props.removeTodo}
            key={todo.todoID}
            todo={todo}
          />
        );
      })}
    </ul>
  );
}

export default TodoItems;
