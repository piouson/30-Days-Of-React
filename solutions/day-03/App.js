import React from "react";
import ReactDOM from "react-dom";
import SignupBox from "./Form";
import IconsBox from "./Icons";
import ProfileBox from "./Profile";
import "./App.css";

const app = (
  <div className="app">
    {IconsBox}
    {ProfileBox}
    {SignupBox}
  </div>
);

const rootDiv = document.querySelector("#root");
ReactDOM.render(app, rootDiv);
