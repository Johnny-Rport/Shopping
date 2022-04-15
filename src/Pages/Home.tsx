import React from 'react';
import {Link} from 'react-router-dom'
import style from './css/home.module.css'
import itemPic from '../image/item.png'
import foodPic from '../image/food.png'
import salePic from '../image/sale.png'

function Home() { 
  const storeName = 'Premium Shop'

  return (
    <div>
      <h1 className={style.header}>Welcome to {storeName}!</h1>
      <div className={style.grid}>
      <div>
          <img src={itemPic}  alt='looks like its broken'></img> <Link to='Items' className={style.link}>Let's Go</Link>
          <p className={style.content}>Check out the best sales only here at the {storeName}! These premium prices guarantee 100% satisfaction</p>
        </div>
        <div>
          <img src={foodPic} alt='looks like its broken'></img> <Link to='Food' className={style.link}>Let's Go</Link>
          <p className={style.content}>Check out the best sales only here at the {storeName}! These premium prices guarantee 100% satisfaction</p>
        </div>
        <div>
          <img src={salePic}  alt='looks like its broken'></img> <Link to='Sales' className={style.link}>Let's Go</Link>
          <p className={style.content}>Check out the best sales only here at the {storeName}! These premium prices guarantee 100% satisfaction</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
