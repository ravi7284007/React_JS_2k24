import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import RatingStars from "./RatingStars";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/* <RatingStars maxRating={9} /> */}
    {/* <RatingStars maxRating={10} /> */}
  </>
);
