import React from 'react';
import '../styles/Create&SelectList.css';
import Option from './Option';

function CreateSelectList(props) {
  props.lists.sort(props.sort === 'asc' ? props.compareAsc : props.compareDesc);
  return (
    <div className="todo-select">
      <button
        onClick={() => {
          const listName = prompt('Please name your list!', 'New List');
          if (listName) {
            const timestamp = new Date().getTime();
            props.setListInformation(timestamp, listName);
          } else return;
        }}
        type="button"
        className="newListBtn"
      >
        Create a list
      </button>

      <select name="select-list" id="select-list">
        {props.lists.map(list => {
          return <Option key={list.id} listDetails={list} />;
        })}
      </select>
    </div>
  );
}

export default CreateSelectList;
