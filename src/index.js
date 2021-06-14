import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/js/all.js";
import Simplehabit from "./components/simpleHabit";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Simplehabit />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
