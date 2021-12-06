import React from 'react';

function Option(props) {
  return (
    <option id={props.listDetails.id} value={props.listDetails.id}>
      {props.listDetails.title}
    </option>
  );
}

export default Option;
