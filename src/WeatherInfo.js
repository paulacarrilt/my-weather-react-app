import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h2>{props.data.city}</h2>
        <p>
          <FormattedDate date={props.data.date} />
        </p>
        <p>{props.data.time}</p>
      </div>
      <br />
      <div className="row">
        <div className="col-4" id="search-temp">
          {props.data.temp}
          <span className="units">C</span>
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
      <br />
      <br />
      <div className="row">
        <div className="col-2">
          <img
            src="https://pic.onlinewebfonts.com/svg/img_498861.png"
            alt="sunny"
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
            alt="sunny"
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
            alt="sunny"
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
            alt="sunny"
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
            alt="sunny"
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
            alt="sunny"
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
  );
}
