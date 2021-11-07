import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <div id="search-temp">
        {props.celsius}
        <span className="units">°C</span>
      </div>
    </div>
  );
}
