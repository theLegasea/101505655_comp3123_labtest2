import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

const  App = () => {

    const[city,setCity] = useState("");
    const[weather,setWeather] = useState(null);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    const apiKey = "20fd0bd4e1e3767428c9f326c6470f97";

    /*TODO: fetch weather function*/


  return (
    <div className="container mt-5">
        <div className="card col-md mx-auto">
            <div className="card-body">
                <h2 className="text-center mb-3">Weather Tracking</h2>

                <input/>
                <button>Get Weather Updates</button>

            {/*TODO: if weather fetched - content,
                     while weather loads - spinner?,
                     if weather fails to fetch*/}
            </div>
        </div>
    </div>
  );
}

export default App;
