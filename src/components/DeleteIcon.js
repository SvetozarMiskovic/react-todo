import React from 'react';
import '../styles/DeleteIcon.css';
function DeleteIcon(props) {
  return (
    <i
      onClick={e => {
        const element = e.target;

        props.removeList(parseInt(element.parentElement.id));
      }}
      className="fas fa-trash-alt deleteList"
    ></i>
  );
}

export default DeleteIcon;
