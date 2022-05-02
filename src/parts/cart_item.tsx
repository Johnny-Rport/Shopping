import React from 'react';
import style from '../Pages/css/home.module.css'
import { items_in_cart } from './product_handler';

function Cartitem(){
    return (
        <div className={style.list}> <h4>Items in Cart</h4>
            <ul>
                <DisplayItems/>
            </ul>

            <div>Template above: Lists items (without quantity) followed by button that will give item description in the item page in a format like this</div>
        </div>
    )
}

function DisplayItems(){
    // This function replaces list if there are no items
    function check() {
        if (items_in_cart.length === 0) {
            return "There are no items in your cart. Do not worry, take your time!"
        }
    }

    return(
        <React.Fragment>{           
            items_in_cart.map((item)=> //Displays all items in the cart
                {
                return(<li key={item.key}>{item.key} <Detailbtn/></li>)
                })} 
            {check()} 
        </React.Fragment>
    )
}

function Detailbtn(){
    return(
        <React.Fragment>
            <button>Details</button>
        </React.Fragment>
    )
}


export default Cartitem