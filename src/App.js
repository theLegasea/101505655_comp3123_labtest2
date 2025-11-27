import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const apiKey = "20fd0bd4e1e3767428c9f326c6470f97";

    const fetchWeather = async () => {
        if (city.trim() === "") {
            setError("Please enter a city name")
        }
        setError("");
        setLoading(true);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Could not fetch weather data");
                }
                return response.json();
            }).then(data => {
            setWeather(data);
            console.log(weather);
            setLoading(false);
        }).catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }

    return (
        <div className="min-vh-100 d-flex align-items-center" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
            <div className="container">
                <div className="card col-md-6 mx-auto shadow-lg">
                    <div className="card-body">
                        <h2 className="text-center mb-3">Weather Tracking</h2>
                        <div className="d-flex justify-content-center">
                            <input
                                type="text"
                                className="form-control mb-2 flex-grow-1"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />

                            <button className="btn btn-primary mb-2" onClick={fetchWeather}>
                                {loading ? <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> : "Get Weather"}
                            </button>
                        </div>
                        {/*TODO: if weather fetched - content,
                     while weather loads - spinner?,
                     if weather fails to fetch*/}
                        {error && (<p className="alert alert-danger text-center">{error}</p>)}

                        {weather && (
                            <>
                                <div className="text-center mb-4">
                                    <h2>{weather.name}</h2>
                                    <h1 className="display-1">{Math.round(weather.main.temp)}°C</h1>
                                    <p className="lead text-capitalize">{weather.weather[0].description}</p>
                                </div>

                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <div className="card-body bg-light rounded">
                                            <small className="text-muted">Feels Like</small>
                                            <p className="fs-4 mb-0">{Math.round(weather.main.feels_like)}°C</p>
                                        </div>
                                    </div>

                                    <div className="col-6 mb-3">
                                        <div className="card-body bg-light rounded">
                                            <small className="text-muted">Humidity</small>
                                            <p className="fs-4 mb-0">{weather.main.humidity}%</p>
                                        </div>
                                    </div>

                                    <div className="col-6 mb-3">
                                        <div className="card-body bg-light rounded">
                                            <small className="text-muted">Wind Speed</small>
                                            <p className="fs-4 mb-0">{weather.wind.speed} m/s</p>
                                        </div>
                                    </div>

                                    <div className="col-6 mb-3">
                                        <div className="card-body bg-light rounded">
                                            <small className="text-muted">Pressure</small>
                                            <p className="fs-4 mb-0">{weather.main.pressure} hPa</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {!weather && !error && !loading && (
                        <p className="text-center text-muted">Enter a city name to check the current weather.</p>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
