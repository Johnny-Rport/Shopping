import React, { Fragment } from 'react';
import style from '../Pages/css/home.module.css'
import { keys, price, quantity, weight } from './product_handler';

// TODO: Input weight across all of the items, and display total price and quantity at the bottom, always
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
                <InputAll/>
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
                        <section key={`${name}_wght`}>{weight[index]} lb</section>
                        <section key={`${name}_qnty`}>{quantity[index]}</section>
                        <section key={`${name}_twght`}>{(weight[index] * quantity[index]).toFixed(2)} lbs</section>
                        <section key={`${name}_tprice`}>${(price[index] * quantity[index]).toFixed(2)}</section>
                    </Fragment>
                )
            })
        }
    }

    return(
        <Fragment>{check_list()}</Fragment>
    )
}

function InputAll(){
    let total_quantity = 0
    let total_price = 0
    let total_weight = 0

    function sum(value: string) {
        switch(value) {
            case 'quantity':
                    quantity.map((value) => {
                        return total_quantity += value
                    })
                    return total_quantity                    

            case 'price':
                    price.map((value, index) => {
                        return total_price += (value * quantity[index])
                    })
                    return total_price.toFixed(2)

            case 'weight':
                    weight.map((value, index) => {
                        return total_weight += (value * quantity[index])
                    })
                    return total_weight.toFixed(2)                
        }
    }

    return(
        <Fragment>
            <section key={'All'}>All</section>
            <section key={`All_price`}>N/A</section>
            <section key={`All_wght`}>N/A</section>
            <section key={`All_qnty`}>{sum('quantity')}</section>
            <section key={`All_twght`}>{sum('weight')} lbs</section>
            <section key={`All_tprice`}>${sum('price')}</section>
        </Fragment>
    )
}

export default Cartprice