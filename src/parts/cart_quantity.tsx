import React from 'react';
import style from '../Pages/css/home.module.css'

function Cartquantity(){
    return (
        <div className={style.list}> <h4>Quantity of Items</h4>
        <ul>
            <li>Vaccum x 1 = (Total) price</li>
            <li>Broom x 2 = (Total) price</li>
            <li>Sode x 3 = (Total) price</li>
        </ul>

            <aside>Quantity breakdown here, shows true list where quantity can be seen and price, not detailed but general sum</aside>
        </div>
    )
}

export default Cartquantity