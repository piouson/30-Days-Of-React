import React from "react";
// import {
//   faHtml5,
//   faCss3Alt,
//   faJs,
//   faReact
// } from "@fortawesome/free-brands-svg-icons";
import Icons from "./Icons";

//const techTitle = "Front End Technologies";

const IconsBox = ({ title, icons }) => (
  <div className="box icons-box">
    <h1>{title}</h1>
    <Icons iconsList={icons} />
  </div>
);

export default IconsBox;
