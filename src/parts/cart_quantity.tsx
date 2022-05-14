import React, { Fragment} from 'react';
import style from '../Pages/css/home.module.css'
import { keys, price, quantity } from './product_handler';

function Cartquantity(){
    return (
        <div className={style.list}> <h4>Quantity of Items</h4>
        <DisplayTotal/>
        <DisplayQuantity/>
        </div>
    )
}

function DisplayTotal(){
    let total_quantity = 0;
    let total_price = 0;

   function sum(value: string) {
        if (value === 'quantity') {
            quantity.map((value) => {
                return total_quantity += value
            })
            return total_quantity
            
        } else if(value === 'price') {
            price.map((value, index) => {
                return total_price += (value * quantity[index])
            })
            return total_price.toFixed(2)
        }
   }

    return(
        <aside>You have {sum('quantity')} items in your cart. With a total of ${sum('price')}.</aside>
    )
}

function DisplayQuantity() {
    // Checks list and updates list accordingly
    function check_list() {
        if (keys.length === 0) {return 'You have a cost-free cart. No charging here!'}
        else if (keys.length !== 0) {
            return keys.map((name, index) => {
                return(<li key={name}>{name} x {quantity[index]} = ${price[index] * quantity[index]}</li>)
            })
        }
    } 
    

    return(
        <Fragment>
            <ul>{check_list()}</ul>
        </Fragment>
    )
}

export default Cartquantity