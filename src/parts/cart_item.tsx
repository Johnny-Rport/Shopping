import React from 'react';
import style from '../Pages/css/home.module.css'

function Cartitem(){
    return (
        <div className={style.list}> <h4>Items in Cart (Mock)</h4>
            <ul>
                <li>Apples <button>Details</button></li>
                <li>Soda  <button>Details</button></li>
                <li>Broom  <button>Details</button></li>
                <li>Silverware  <button>Details</button></li>
            </ul>

            <div>Template above: Lists items (without quantity) followed by button that will give item description in the item page in a format like this</div>
        </div>
    )
}

export default Cartitem