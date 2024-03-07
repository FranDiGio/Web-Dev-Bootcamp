import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const date = new Date();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {date.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
