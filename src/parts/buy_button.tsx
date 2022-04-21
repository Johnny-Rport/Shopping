import React, { useRef } from 'react';
import style from '../Pages/css/home.module.css'
import { Product } from './product_handler';

function Buybtn(){
    const button = useRef<HTMLInputElement>(null)
    const quantity = useRef<HTMLInputElement>(null)

    // Sends clicked item to product handler and keeps track of what is clicked
    function grabParent() {
        let a = button.current!.parentElement!.id
        let b = quantity.current!.value
        console.log(a)
        console.log(b)
    }

    

    return (
        <React.Fragment>
            <input ref={button} type='button' className={style.buyBut} value='Buy Now!' onClick={grabParent}/>  
            <input ref={quantity} type='number' className={style.numBtn} placeholder='Quantity' />
        </React.Fragment>
    )
}


export default Buybtn