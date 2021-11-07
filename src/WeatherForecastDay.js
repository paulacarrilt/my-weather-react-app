import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];

    return days[day];
  }
  let icon = `http://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`;
  return (
    <div className="WeatherForecastDay">
      {day()}
      <img src={icon} alt="sun" width="50" />
      <div className="minmax">
        <strong>{Math.round(props.forecastData.temp.max)}°</strong> |{" "}
        {Math.round(props.forecastData.temp.min)}°
      </div>
    </div>
  );
}
