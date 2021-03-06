import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Berlin" />
      <p className="sign">
        Coded by{" "}
        <a
          href="https://github.com/paulacarrilt"
          alt="mygit"
          target="_blank"
          rel="noreferrer"
        >
          Paula Carril Torrens
        </a>
      </p>
    </div>
  );
}

export default App;
