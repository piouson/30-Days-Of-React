import React from "react";
import Cell from "./Cell";
import "../css/Grid.css";

const Grid = ({ items, colSize }) => {
  const gridCols = Array.from(Array(colSize))
    .map(() => "1fr")
    .join(" ");
  return (
    <div
      className="hexa-grid"
      style={{ gridTemplateColumns: gridCols }}
    >
      {items.map((item) => (
        <Cell value={item.value} color={item.color} />
      ))}
    </div>
  );
};

export default Grid;
