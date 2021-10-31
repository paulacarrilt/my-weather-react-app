import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFaTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCeTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function faTemp() {
    return Math.round(props.celsius * (9 / 5) + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <div id="search-temp">
          {props.celsius}
          <span className="units">
            C |{" "}
            <a href="/" onClick={showFaTemp}>
              F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        {faTemp()}
        <span className="units">
          <a href="/" onClick={showCeTemp}>
            {" "}
            C
          </a>{" "}
          |F
        </span>
      </div>
    );
  }
}
