import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const [taskinput, setTaskInput] = useState('')
  const [toDoList, setToDoList] = useState(['laundry'])

  const addToDoHandler = () => {
    let toDoListCopy = toDoList.slice()
    toDoListCopy.push(taskinput)
    setToDoList(toDoListCopy)
    setTaskInput('')
  }

  return (
    <div className="App">
      <h1>My To-Do list</h1>
      <input value={taskinput} onChange={(e) => setTaskInput(e.target.value)} />
      <button onClick={addToDoHandler}>Add</button>
      {toDoList.map((todo, i) => <p>{todo}</p>)}
    </div>
  );
}

export default App;
