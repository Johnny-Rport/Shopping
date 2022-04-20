import React from 'react';
import style from './css/home.module.css'
import Cartitem from '../parts/cart_item';
import Cartquantity from '../parts/cart_quantity';
import Cartprice from '../parts/cart_price';


function Cart() {
  return (
    <div>
      <h1 className={style.header}>Let's see your Premium Cart!</h1>
      <div className={style.grid}>
          <Cartitem/>  
          <Cartquantity/>
          <Cartprice/>
      </div>
    
    </div>
  );
}

export default Cart;
