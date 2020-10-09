import React from "react";
import Grid from "./Grid";
import "../css/HexaColorGrid.css";

const HexaColorGrid = ({ colors, size }) => (
  <div className="box text-center hexa-color-grid">
    <h2>30 Days Of React</h2>
    <p role="doc-subtitle">Hexadecimal Colors</p>
    <Grid items={colors} colSize={size} />
  </div>
);

export default HexaColorGrid;
