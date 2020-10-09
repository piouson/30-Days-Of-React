import React from "react";
import Grid from "./Grid";
import "../css/NumberGrid.css";

const NumberGrid = ({ numbers, size }) => (
  <div className="box text-center number-grid">
    <h2>30 Days Of React</h2>
    <p role="doc-subtitle">Number Generator</p>
    <Grid items={numbers} colSize={size} />
  </div>
)

export default NumberGrid;