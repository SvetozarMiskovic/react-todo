import React, { useState, useEffect } from 'react';

import Header from './Header';
import Sort from './Sort';
import '../styles/App.css';
import TaskHolder from './TaskHolder';
import ClearAll from './ClearAll';

function App() {
  const [inputText, setInput] = useState('');
  const [lists, setLists] = useState(() => {
    const lsLists = JSON.parse(localStorage.getItem('Lists'));
    return lsLists ? lsLists : [];
  });
  const [sort, setSort] = useState('asc');

  function setInputTextHandler(e) {
    const value = e.target.value;
    setInput(value);
  }

  function setListInformationHandler(id, title) {
    setLists(
      lists.concat([
        {
          id: id,
          edit: id,
          title: title,
          todos: [],
        },
      ])
    );
  }

  useEffect(() => {
    localStorage.setItem('Lists', JSON.stringify(lists));
  });

  function createTaskAndListHandler(id, title) {
    setLists([
      {
        id: id,
        edit: id,
        title: title,
        todos: [{ todoID: `${id + 1}`, todoText: inputText }],
      },
    ]);
    setInput('');
  }
  function setTaskToListHandler(targetList, id) {
    const editTimestamp = new Date().getTime();

    setLists(
      lists.map(list => {
        if (list.id !== targetList) return list;

        return {
          ...list,
          todos: [...list.todos, { todoID: id, todoText: inputText }],
          edit: editTimestamp,
        };
      })
    );
    setInput('');
  }

  function removeListHandler(id) {
    setLists(
      lists.filter(list => {
        return list.id !== id;
      })
    );
  }

  function removeTodoHandler(listID, todoID) {
    const editTimestamp = new Date().getTime();

    setLists(
      lists.map(list => {
        if (list.id !== listID) return list;
        return {
          ...list,
          todos: list.todos.filter(todo => {
            return parseInt(todo.todoID) !== todoID;
          }),
          edit: editTimestamp,
        };
      })
    );
  }
  function clearAllHandler() {
    setLists([]);
  }
  return (
    <div className="App">
      <Header
        inputText={inputText}
        setListInformation={setListInformationHandler}
        setInputText={setInputTextHandler}
        setTaskToList={setTaskToListHandler}
        createTaskAndList={createTaskAndListHandler}
        lists={lists}
      />
      <Sort lists={lists} setLists={setLists} sort={sort} setSort={setSort} />
      <TaskHolder
        removeTodo={removeTodoHandler}
        removeList={removeListHandler}
        lists={lists}
        sort={sort}
        setLists={setLists}
      />

      <ClearAll lists={lists} clearAll={clearAllHandler} />
    </div>
  );
}

export default App;
