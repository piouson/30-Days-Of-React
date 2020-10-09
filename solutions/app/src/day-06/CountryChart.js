import React from "react";
import Bar from "./Bar";
import "../css/CountryChart.css";
import { countryLabel } from "./country-label";

const CountryChart = ({ data }) => {
  const maxPopulation = Math.max(...data.map((item) => item.population));
  
  return (
    <div className="box chart">
      <h2>30 Days Of React</h2>
      <h3>World Population</h3>
      <p>Ten most populated countries</p>
      {data.map((item, index) => (
        <Bar
          key={index + item.country}
          label={countryLabel(item.country)}
          value={item.population}
          maxValue={maxPopulation}
        />
      ))}
    </div>
  );
};

export default CountryChart;
