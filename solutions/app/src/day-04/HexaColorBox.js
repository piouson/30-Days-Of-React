import React from "react";
import "../css/HexaColorBox.css";
import { hexaColor } from "./hexadecimal-colors";

const HexaColorBox = () => {
  const arr = [];
  for (let i=0; i<5; i++) {
    arr.push(hexaColor());
  }

  return (
    <div className="box color-boxes">
      {arr.map((item, index) => (
        <div
          className="color-box"
          key={index+item.toString()}
          style={{backgroundColor: item}}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default HexaColorBox;
