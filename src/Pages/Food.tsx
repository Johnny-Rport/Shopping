import React from 'react';
import style from './css/home.module.css'
import apple from '../image/apples.png'
import banana from '../image/bananas.png'
import watermelon from '../image/watermelon.png'
import meat from '../image/meat.png'
import soda from '../image/sodas.png'
import water from '../image/waters.png'

function Food() {
  return (
    <div>
      <h1 className={style.header}>Premium Foods!</h1>
      <div className={style.grid}>
          <div>
            <img src={apple} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>These Premium Apples are freshly picked from our local farms! They bring a delight like no other by hindering both hunger and thirst.</p>
          </div>
          <div>
            <img src={banana} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}> We're bringing back our Premium Bananas! Like many of our foods, they are fresh and sourced from local farms and guaranteed to bring satisfaction. </p>
          </div>
          <div>
            <img src={watermelon} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>One of our most recognizable and beloved fruits are the Premium Watermelons! They can feed entire parties leaving everybody with a full belly.</p>
          </div>
          <div>
            <img src={meat} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>Enjoy the delight and divine taste of the Premium Meat. We take great pride in providing the best meats to our customers!</p>
          </div>
          <div>
            <img src={soda} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>Having an unquenchable thirst? Don't worry for our Premium Sodas are the perfect beverages to quench any thirst of any size!</p>
          </div>
          <div>
            <img src={water} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>Want something healthier? Our Premium Water collected from the very clouds themselves offer a drinking experience like no other!</p>
          </div>
      </div>
    </div>
  );
}

export default Food;
