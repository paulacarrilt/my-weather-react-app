import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
  let apiKey = "255c628f3138fd0c120d0f964422f059";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  function handleResponse(response) {
    console.log(response.data.main.temp);
  }
  axios.get(apiUrl).then(handleResponse);

  let weatherData = {
    city: "Armidale",
    date: "Oct 10th 2021",
    time: "20:21",
    temperature: 21,
    humidity: 60,
    wind: 5,
    description: "Sunny",
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="weatherContainer">
          <h1>
            <small>Weather</small>
          </h1>
          <form className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control shadow-sm"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                placeholder="Enter"
                className="btn btn-primary"
              />
            </div>
          </form>
          <div className="row">
            <p>{weatherData.city}</p>
            <p>{weatherData.date}</p>
            <p>{weatherData.time}</p>
          </div>
          <br />
          <div className="row">
            <div className="col-4" id="search-temp">
              {weatherData.temperature}
              <span className="units">C</span>
            </div>
            <div className="col-4">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.DPU3emY5zTkp5kavA7rIzwHaHa&pid=Api&P=0&w=300&h=300"
                alt="sunny image"
                width="50"
              />
            </div>
            <div className="col-4">
              <div className="sideNotes">humidity: {weatherData.humidity}%</div>
              <div className="sideNotes">wind: {weatherData.wind}km/hr</div>
              <div className="sideNotes">{weatherData.description}</div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-2">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_498861.png"
                alt="sunny image"
                width="35"
              />
              <br />
              <br />
              <div className="sideUnits">Tue</div>
              <div className="sideUnits">
                21/<span className="min">9</span>
              </div>
            </div>
            <div className="col-2">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_498859.png"
                alt="sunny image"
                width="35"
              />
              <br />
              <br />
              <div className="sideUnits">Wed</div>
              <div className="sideUnits">
                21/<span className="min">9</span>
              </div>
            </div>
            <div className="col-2">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_498867.png"
                alt="sunny image"
                width="35"
              />
              <br />
              <br />
              <div className="sideUnits">Thru</div>
              <div className="sideUnits">
                21/<span className="min">9</span>
              </div>
            </div>
            <div className="col-2">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.DPU3emY5zTkp5kavA7rIzwHaHa&pid=Api&P=0&w=300&h=300"
                alt="sunny image"
                width="35"
              />
              <br />
              <br />
              <div className="sideUnits">Fri</div>
              <div className="sideUnits">
                21/<span className="min">9</span>
              </div>
            </div>
            <div className="col-2">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_498859.png"
                alt="sunny image"
                width="35"
              />
              <br />
              <br />
              <div className="sideUnits">Sat</div>
              <div className="sideUnits">
                21/<span className="min">9</span>
              </div>
            </div>
            <div className="col-2">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_498867.png"
                alt="sunny image"
                width="35"
              />
              <br />
              <br />
              <div className="sideUnits">Sun</div>
              <div className="sideUnits">
                21/<span className="min">9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
