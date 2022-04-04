import React from 'react';
import style from  './css/Items.module.css'


function Items() {
  return (
    <div>
    <h1 className={style.header}>Premium Appliances!</h1>
    <div className={style.grid}>
      <div className={style.gridvaccum}>
          <img alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
          <p className='content'>This Premium Vaccum gets cleaning done like never before! It has amazing speed and will make your day easy.</p>
        </div>
        <div className={style.gridbroom}>
          <img alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
          <p className='content'>The Premium Broom is one of our toughest appliances and will get the job done in a way you've never seen!</p>
        </div>
        <div className={style.griddishwasher}>
          <img alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
          <p className='content'>A Premium Dishwasher for the best and most premium plates. This dishwasher will make your food taste better!</p>
        </div>
        <div className={style.gridlaundry}>
          <img alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
          <p className='content'>Have a huge load to clean, wash, and dry? Do not worry for the Premium Washer and Dryer combo will fix all your problems!</p>
        </div>
        <div className={style.gridlawn}>
          <img alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
          <p className='content'>This Premium Lawnmower will cut forests down like nothing. So make sure to use its power well in accordance to your lawn.</p>
        </div>
        <div className={style.gridhose}>
          <img alt='looks like its broken'></img> <button className={style.buyBut}>Buy Now!</button>
          <p className='content'>Used by our proud firefighters, the Premium Hose has enough hosepower to put out a many fires. Get yours NOW!</p>
        </div>
    </div>

  </div>
  );
}

export default Items;
