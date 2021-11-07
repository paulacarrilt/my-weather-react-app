import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    return (
      <div>
        {days[day]} {hours}:0{minutes}
      </div>
    );
  } else {
    return (
      <div>
        {days[day]} {hours}:{minutes}
      </div>
    );
  }
}
