import React from "react";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Thrusday", "Friday", "Saturday"];
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  return (
    <div>
      {days[day]} {hours}:{minutes}
    </div>
  );
}
