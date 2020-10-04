import React from "react";
import "./Icons.css";

const techTitle = "Front End Technologies";

const htmlDiv = (
  <div>
    <i className="fab fa-html5" />
  </div>
);

const cssDiv = (
  <div>
    <i className="fab fa-css3-alt" />
  </div>
);

const jsDiv = (
  <div>
    <i className="fab fa-js" />
  </div>
);

const reactDiv = (
  <div>
    <i className="fab fa-react" />
  </div>
);

const icons = (
  <div className="icons">
    {htmlDiv}
    {cssDiv}
    {jsDiv}
    {reactDiv}
  </div>
);

const IconsBox = (
  <div className="box icons-box">
    <h1>{techTitle}</h1>
    {icons}
  </div>
);

export default IconsBox;
