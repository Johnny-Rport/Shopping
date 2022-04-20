import React from 'react';
import style from  './css/home.module.css'
import vaccumPic from '../image/vaccum.png'
import broomPic from '../image/broom.png'
import dishwasherPic from '../image/dishwasher.png'
import laundryPic from '../image/laundry.png'
import lawnPic from '../image/lawn.png'
import hosePic from '../image/hose.png'
import Buybtn from '../parts/buy_button';


function Items() {
  return (
    <div>
    <h1 className={style.header}>Premium Appliances!</h1>
    <div className={style.grid}>
      <div>
          <img src={vaccumPic} alt='looks like its broken'></img> <Buybtn/>
          <p className={style.content}>This Premium Vaccum gets cleaning done like never before! It has amazing speed and will make your day easy.</p>
        </div>
        <div>
          <img src={broomPic} alt='looks like its broken'></img> <Buybtn/>
          <p className={style.content}>The Premium Broom is one of our toughest appliances and will get the job done in a way you've never seen!</p>
        </div>
        <div>
          <img src={dishwasherPic} alt='looks like its broken'></img> <Buybtn/>
          <p className={style.content}>A Premium Dishwasher for the best and most premium plates. This dishwasher will make your food taste better!</p>
        </div>
        <div>
          <img src={laundryPic} alt='looks like its broken'></img> <Buybtn/>
          <p className={style.content}>Have a huge load to clean, wash, and dry? Do not worry for the Premium Washer and Dryer combo will fix all your problems!</p>
        </div>
        <div>
          <img src={lawnPic} alt='looks like its broken'></img> <Buybtn/>
          <p className={style.content}>This Premium Lawnmower will cut forests down like nothing. So make sure to use its power well in accordance to your lawn.</p>
        </div>
        <div>
          <img src={hosePic} alt='looks like its broken'></img> <Buybtn/>
          <p className={style.content}>Used by our proud firefighters, the Premium Hose has enough hosepower to put out a many fires. Get yours NOW!</p>
        </div>
    </div>

  </div>
  );
}

export default Items;
