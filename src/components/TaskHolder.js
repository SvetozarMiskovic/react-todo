import React from 'react';
import '../styles/TaskHolder.css';
import SingleList from './SingleList';
function TaskHolder(props) {
  return (
    <div className="task-holder">
      {props.lists.map(list => {
        return (
          <SingleList
            removeTodo={props.removeTodo}
            removeList={props.removeList}
            key={list.id}
            listDetails={list}
          />
        );
      })}
    </div>
  );
}

export default TaskHolder;
