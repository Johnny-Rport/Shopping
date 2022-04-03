import React from 'react';
import './App.css';
import Navmenu from './parts/nav';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navmenu/>
      <Outlet/>
    </div>
  );
}

export default App;
