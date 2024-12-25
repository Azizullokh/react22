import React from 'react';
import './App.css'
import HelloWorld from './comonent/hello world'
import Animals from './comonent/gallery';
import Colors from './comonent/color';
import Weekdays from './comonent/weekdays';
import Happy from './comonent/happy/happy';
import Cities from './comonent/FamousCities/city';
import Seasons from './comonent/Seasoncolors/season';
import SimpleMenu from './comonent/SimpleMEnu/simple';

function App() {
  return (
    <div className="div">
     <HelloWorld/>
     <Animals/>
     <Colors/>
     <Weekdays/>
     <Happy/>
     <Cities/>
     <Seasons/>
     <SimpleMenu/>
    </div>
  )
}

export default App
