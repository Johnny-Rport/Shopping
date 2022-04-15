import React from 'react';
import style from './css/home.module.css'
import TV from '../image/tv.png'
import Laptop from '../image/laptop.png'
import Tablet from '../image/tablet.png'
import Silverware from '../image/silverware.png'
import Pillow from '../image/pillow.png'
import Egg from '../image/eggs.png'

// Work on descriptions 
function Sales() { 
  
  return (
    <div>
      <h1 className={style.header}>Premium Sales!</h1>
      <div className={style.grid}>
          <div>
            <img src={TV} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>These Premium Apples are freshly picked from our local farms! They bring a delight like no other by hindering both hunger and thirst.</p>
          </div>
          <div>
            <img src={Laptop} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}> We're bringing back our Premium Bananas! Like many of our foods, they are fresh and sourced from local farms and guaranteed to bring satisfaction. </p>
          </div>
          <div>
            <img src={Tablet} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>One of our most recognizable and beloved fruits are the Premium Watermelons! They can feed entire parties leaving everybody with a full belly.</p>
          </div>
          <div>
            <img src={Silverware} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>Enjoy the delight and divine taste of the Premium Meat. We take great pride in providing the best meats to our customers!</p>
          </div>
          <div>
            <img src={Pillow} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>Having an unquenchable thirst? Don't worry for our Premium Sodas are the perfect beverages to quench any thirst of any size!</p>
          </div>
          <div>
            <img src={Egg} alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
            <p className={style.content}>Want something healthier? Our Premium Water collected from the very clouds themselves offer a drinking experience like no other!</p>
          </div>
      </div>
    </div>
  );
}

export default Sales;
