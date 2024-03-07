//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const date = new Date();
var message = "nothing";
var customStyling = {
  color: "black",
};

if (date.getHours >= 0 && date.getHours <= 12) {
  message = "morning";
  customStyling.color = "red";
} else if (date.getHours > 12 && date.getHours <= 18) {
  message = "afternoon";
  customStyling.color = "green";
} else {
  message = "evening";
  customStyling.color = "blue";
}

ReactDom.render(
  <h1 style={customStyling}>Good {message}</h1>,
  document.getElementById("root")
);
