import React from "react";

export default function WeatherForecast() {
  return (
    <div className="Weather-Forecast">
      <div className="row">
        <div className="col-2">
          Sat
          <img
            src="http://openweathermap.org/img/wn/10n@2x.png"
            alt="sun"
            width="50"
          />
          <div className="minmax">
            <strong>19°</strong> | 7°
          </div>
        </div>
      </div>
    </div>
  );
}
