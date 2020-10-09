import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Icons.css";

const Icons = ({ iconsList }) => (
  <div className="icons">
    {iconsList.map((icon) => (
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
    ))}
  </div>
);

export default Icons;
