import React from 'react';
import './App.css';
import IconsBox from './day-05/IconsBox';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import ProfileBox from './day-05/ProfileBox';
import signupBox from "./day-03/Form";
import HexaColorBox from "./day-04/HexaColorBox";
import { user } from './day-05/user';
import NumberGrid from './day-06/NumberGrid';
import { colors, numbers } from './day-06/random-generators';
import HexaColorGrid from './day-06/HexaColorGrid';
import { tenMostPopulated } from "./day-06/most-populated-countries";
import CountryChart from './day-06/CountryChart';

function App() {
  return (
    <div className="App">
      <IconsBox
        title="Front End Technologies"
        icons={[faHtml5, faCss3Alt, faJs, faReact]}
      />
      <ProfileBox user={user} />
      {signupBox}
      <HexaColorBox />
      <NumberGrid numbers={numbers(32)} size={8} />
      <HexaColorGrid colors={colors(32)} size={8} />
      <CountryChart data={tenMostPopulated} />
    </div>
  );
}

export default App;
