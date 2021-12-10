import React from 'react';
import '../styles/TaskHolder.css';
import Empty from './Empty';
import SingleList from './SingleList';

function compareAsc(a, b) {
  return b.edit - a.edit;
}

function compareDesc(a, b) {
  return a.edit - b.edit;
}

function TaskHolder(props) {
  if (!props.lists.length) {
    return <Empty />;
  } else {
    props.lists.sort(props.sort === 'asc' ? compareAsc : compareDesc);

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
}

export default TaskHolder;
