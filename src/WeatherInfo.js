import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemp from "./WeatherTemp.js";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h2>{props.data.city}</h2>
        <div className="formattedDate">
          <FormattedDate date={props.data.date} />
        </div>
        <div>{props.data.time}</div>
      </div>
      <br />
      <div className="row">
        <div className="col-4" id="search-temp">
          <WeatherTemp celsius={props.data.temp} />
        </div>
        <div className="col-4">
          <img src={props.data.icon} alt="sunny" width="70" />
        </div>
        <div className="col-4">
          <div className="sideNotes">humidity: {props.data.humidity}%</div>
          <div className="sideNotes">wind: {props.data.wind}km/hr</div>
          <div className="sideNotes">{props.data.description}</div>
        </div>
      </div>
    </div>
  );
}
