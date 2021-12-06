import React from 'react';
import '../styles/TodoInput.css';
function TodoInput(props) {
  return (
    <div className="todo-input">
      <label htmlFor="todoInput">Add a daily task!</label>
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="Write something..."
        onChange={props.setInputText}
      />
      <input
        onClick={() => {
          const timestamp = new Date().getTime();
          if (document.querySelectorAll('.list').length > 0) {
            if (props.inputText) {
              const targetList = parseInt(
                document.getElementById('select-list').value
              );
              props.setTaskToList(targetList, timestamp);

              document.querySelector('input[type=text]').value = '';
            }
          } else {
            if (props.inputText) {
              const listName = prompt('Please name your list!', 'New List');
              props.createTaskAndList(timestamp, listName);
              document.querySelector('input[type=text]').value = '';
            }
          }
        }}
        type="submit"
        id="submitBtn"
        value="Add a task"
      />
    </div>
  );
}

export default TodoInput;
