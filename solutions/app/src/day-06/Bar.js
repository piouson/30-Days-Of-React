import React from "react";

const Bar = ({ label, value, maxValue }) => {
  const width = Math.round((value / maxValue) * 100) + "%";
  return (
    <div className="bar-row">
      <p className="bar-label">{label}</p>
      <div className="bar">
        <div className="bar-fill" style={{ width: width }}>
          {width}
        </div>
      </div>
      <p className="bar-value">{value.toLocaleString()}</p>
    </div>
  );
};

export default Bar;
