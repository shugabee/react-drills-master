import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const clickHandler = () => {
    alert(`Username: ${userName} Password: ${password}`)
  }

  return (
    <div className="App">
      <input onChange={(e) => setUserName(e.target.value)}/>
      <input onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={clickHandler}>Login</button>
    </div>
  );
}

export default App;
