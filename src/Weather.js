import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data.dt);
    setWeatherData({
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  function search() {
    let apiKey = "255c628f3138fd0c120d0f964422f059";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weatherContainer">
            <h1>Weather</h1>
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a City"
                  className="form-control shadow-sm"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  placeholder="Enter"
                  className="btn btn-primary w-100"
                />
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
