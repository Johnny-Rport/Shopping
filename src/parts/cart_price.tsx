import React, { Fragment, useRef } from 'react';
import style from '../Pages/css/home.module.css'
import { keys, price, quantity } from './product_handler';

function Cartprice(){
    return (
        <div> <h4>Price Breakdown</h4>
            <span className={style.price_grid}>
                
                {/* This section is first */}
                <section>Name</section>
                <section>Price</section>
                <section>Weight</section>
                <section>Total Quantity</section>
                <section>Total Weight</section>
                <section>Total Price</section>

                <InputGrid/>
            </span>
        </div>
        
    )
}

function InputGrid(){

    function check_list() {

        if (keys.length !== 0) {
            return keys.map((name, index) => {
                
                return(
                    <Fragment>
                        <section key={name}>{name}</section>
                        <section key={`${name}_price`}>${price[index]}</section>
                        <section key={`${name}_wght`}>n/a</section>
                        <section key={`${name}_qnty`}>{quantity[index]}</section>
                        <section key={`${name}_twght`}>N/A</section>
                        <section key={`${name}_tprice`}>${price[index] * quantity[index]}</section>
                    </Fragment>
                )
            })
        }
    }
    
    return(
        <Fragment>{check_list()}</Fragment>
    )
}

export default Cartprice