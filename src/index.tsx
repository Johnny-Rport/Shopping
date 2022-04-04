import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import Items from './Pages/Items'
import Food from './Pages/Food';
import Sales from './Pages/Sales'
import Cart from './Pages/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/shopping' element={<App />}>
        <Route index element= {<Home />}/>
        <Route path='Items' element= {<Items />}/>
        <Route path='Food' element= {<Food />}/>
        <Route path='Sales' element = {<Sales />}/>
        <Route path='Cart' element= {<Cart />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
