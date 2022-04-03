import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Items from './Items'
import Food from './Food';
import Cart from './Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/shopping' element={<App />}>
        <Route index element= {<Home />}/>
        <Route path='Items' element= {<Items />}/>
        <Route path='Food' element= {<Food />}/>
        <Route path='Cart' element= {<Cart />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
