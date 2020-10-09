import React from "react";

const Cell = ({ value, color }) => (
  <div className="hexa-cell" style={{ backgroundColor: color }}>
    <p>{value}</p>
  </div>
);

export default Cell;
