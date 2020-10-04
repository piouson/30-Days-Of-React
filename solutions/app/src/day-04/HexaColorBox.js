import React from "react";
import "./HexaColorBox.css";

const hexaColor = () => {
  const str = "0123456789abcdef";
  let color = "";
  for (let i=0; i<6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

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
