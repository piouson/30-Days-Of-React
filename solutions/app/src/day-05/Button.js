import React from "react";

const Button = ({ style, onClick, text }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

export default Button;
