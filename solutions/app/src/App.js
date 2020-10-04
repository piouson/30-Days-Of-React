import React from 'react';
import './App.css';
import './day-03/Profile.css';
import ProfileBox from './day-03/Profile';
import iconsBox from './day-03/Icons';
import signupBox from './day-03/Form';
import HexaColorBox from './day-04/HexaColorBox';

function App() {
  return (
    <div className="App">
      {iconsBox}
      <ProfileBox />
      {signupBox}
      <HexaColorBox />
    </div>
  );
}

export default App;
