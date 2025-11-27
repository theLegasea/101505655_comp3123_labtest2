import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

const  App = () => {

    const[city,setCity] = useState("");
    const[weather,setWeather] = useState(null);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState("");
    const apiKey = "20fd0bd4e1e3767428c9f326c6470f97";

    const fetchWeather = async () => {
        if(city.trim() === "") {
            setError("Please enter a city name")
        }
        setError("");
        setLoading(true);

        fetch("https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric")
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not fetch weather data");
            }
            return response.json();
        }).then(data => {
            setWeather(data);
            setLoading(false);
        }).catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }

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
