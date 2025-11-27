import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const  App = () => {

    const[city,setCity] = useState("");
    const[weather,setWeather] = useState(null);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    const apiKey = "20fd0bd4e1e3767428c9f326c6470f97";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
