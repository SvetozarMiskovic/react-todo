import React from 'react';
import '../styles/Sort.css';
function Sort(props) {
  return (
    <div className="sort">
      <label htmlFor="sort">Sort by:</label>
      <select
        onChange={() => {
          props.sort === 'asc' ? props.setSort('desc') : props.setSort('asc');
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
