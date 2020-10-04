import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import "./Icons.css";

const techTitle = "Front End Technologies";

const htmlDiv = (
  <div>
    <FontAwesomeIcon icon={faHtml5} />
  </div>
);

const cssDiv = (
  <div>
    <FontAwesomeIcon icon={faCss3Alt} />
  </div>
);

const jsDiv = (
  <div>
    <FontAwesomeIcon icon={faJs} />
  </div>
);

const reactDiv = (
  <div>
    <FontAwesomeIcon icon={faReact} />
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

const iconsBox = (
  <div className="box icons-box">
    <h1>{techTitle}</h1>
    {icons}
  </div>
);

export default iconsBox;
