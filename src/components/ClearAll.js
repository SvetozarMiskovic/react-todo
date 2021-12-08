import React from 'react';
import '../styles/ClearAll.css';
function ClearAll(props) {
  if (!props.lists.length) {
    return null;
  } else
    return (
      <div>
        <button
          onClick={() => {
            props.clearAll();
          }}
          className="clear-all-btn"
        >
          Clear All
        </button>
      </div>
    );
}

export default ClearAll;
