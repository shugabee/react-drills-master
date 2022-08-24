import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [text, setText] = useState("");

  return(
    <div className='App'>
      <input onChange={(e) => setText(e.target.value)}/>
      <p>{text}</p>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: ""
//     };
//   };

// handleChange(value) {
//   this.setState({ message: value });
// }

// render() {
//   return (
//     <div className='App'>
//       <input onChange={e => this.handleChange(e.target.value)} type ="text" />
//       <p>{this.state.message}</p>
//     </div>
//   );
// } 
// }

export default App;
