import React from 'react';
import CreateSelectList from './Create&SelectList';
import TodoInput from './TodoInput';

import '../styles/Header.css';
function Header(props) {
  return (
    <div className="wrapper">
      <TodoInput
        inputText={props.inputText}
        setTaskToList={props.setTaskToList}
        setInputText={props.setInputText}
        setListInformation={props.setListInformation}
        createTaskAndList={props.createTaskAndList}
      />
      <CreateSelectList
        lists={props.lists}
        setListInformation={props.setListInformation}
      />
    </div>
  );
}

export default Header;
