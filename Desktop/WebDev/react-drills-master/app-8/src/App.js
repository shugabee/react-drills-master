import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    axios.get("https://taylorswiftapi.herokuapp.com/get").then((res) => {
      console.log(res.data.quote);
      setLyrics(res.data.quote);
    });
  }, []);

  return (
    <div className="App">
      <h2>Taylor Swift is LYFE</h2>
      {/* <button onClick={clickHandler}>Give me a lyric</button> */}

      <div>{lyrics}</div>
    </div>
  );
}

export default App;
