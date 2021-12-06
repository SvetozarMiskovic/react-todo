import React from 'react';
import '../styles/Sort.css';
function Sort(props) {
  function compareAsc(a, b) {
    return b.edit - a.edit;
  }

  function compareDesc(a, b) {
    return a.edit - b.edit;
  }

  return (
    <div className="sort">
      <label htmlFor="sort">Sort by:</label>
      <select
        onChange={e => {
          const selected = e.target.value;
          const sorted = props.lists.sort(
            selected === 'Newest updates' ? compareAsc : compareDesc
          );
          props.setLists([...sorted]);
        }}
        name="sort"
        id="sort"
      >
        <option value="Newest updates">Newest updates</option>
        <option value="Oldest updates">Oldest updates</option>
      </select>
    </div>
  );
}

export default Sort;
