import React from 'react';
import '../styles/SingleList.css';
import Title from './Title';
import DeleteIcon from './DeleteIcon';
import TodoItems from './TodoItems';
function SingleList(props) {
  return (
    <div
      className="list"
      id={props.listDetails.id}
      edit={props.listDetails.edit}
    >
      <DeleteIcon removeList={props.removeList} />
      <Title title={props.listDetails.title} />
      <TodoItems
        removeTodo={props.removeTodo}
        todos={props.listDetails.todos}
      />
    </div>
  );
}

export default SingleList;
