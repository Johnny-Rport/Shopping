import React from 'react';
import style from './css/home.module.css'
import TV from '../image/tv.png'
import Laptop from '../image/laptop.png'
import Tablet from '../image/tablet.png'
import Silverware from '../image/silverware.png'
import Pillow from '../image/pillow.png'
import Egg from '../image/eggs.png'
import Buybtn from '../parts/buy_button';

function Sales() { 
  
  return (
    <div>
      <h1 className={style.header}>Premium Sales!</h1>
      <div className={style.grid}>
          <div>
            <img src={TV} alt='looks like its broken'></img> <Buybtn/>
            <p className={style.content}>We are proud to issue the very first Premium TV! This eletronic powerhouse includes all of the various channels and streaming services for free! None can beat this deal!</p>
          </div>
          <div>
            <img src={Laptop} alt='looks like its broken'></img> <Buybtn/>
            <p className={style.content}>Another revered tool of ours is the Premium Laptop. In addition, it is equipped with a powerful processor that can handle all the graphic, software, and editing software to your needs!</p>
          </div>
          <div>
            <img src={Tablet} alt='looks like its broken'></img> <Buybtn/>
            <p className={style.content}>Need a screen that is mobile, lightweight, and handheld? We have the perfect solution for you. The Premium Tablet has the best reading, browsing, and organizing experience when compared to our competitors. 100% satisfaction gauranteed.</p>
          </div>
          <div>
            <img src={Silverware} alt='looks like its broken'></img> <Buybtn/>
            <p className={style.content}>Everybody needs the perfect tool to eat their food. Hence why our Premium Silverware is on sale for 99%! It's been proven in many scientific studies to enhance the flavor of the food you eat.</p>
          </div>
          <div>
            <img src={Pillow} alt='looks like its broken'></img> <Buybtn/>
            <p className={style.content}>Is your pillow too hot? Do you feel that you can't sleep because of how rigid your head is? Do not fear for our Premium Pillows will relieve stress, tiredness, and improve sleep. It's been proven to give our customers the best sleeping experience!</p>
          </div>
          <div>
            <img src={Egg} alt='looks like its broken'></img> <Buybtn/>
            <p className={style.content}>These Premium Eggs will make your breakfast 100 times better! As proven by very credible scientists, the nutrients from our locally sourced eggs transform any breakfast from a generic dish to an excellent meal. </p>
          </div>
      </div>
    </div>
  );
}

export default Sales;
