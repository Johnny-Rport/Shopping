import React, { useRef } from 'react';
import style from '../Pages/css/home.module.css'
import { Add_product} from './product_handler';

function Buybtn(){
    const button = useRef<HTMLInputElement>(null)
    const quantity = useRef<HTMLInputElement>(null)

    // Sends clicked item to product handler and keeps track of what is clicked
    function grabItem() {
        let key = button.current!.parentElement!.id
        let qnty = quantity.current!.valueAsNumber
        if (qnty < 0 || isNaN(qnty) || qnty === 0){ quantity.current!.value = '0'; return qnty = 0} // Prevents negatives, strings, or a zero from being accepted
        else{Add_product(key, qnty)}
        
    }

    

    return (
        <React.Fragment>
            <input ref={button} type='button' className={style.buyBut} value='Buy Now!' onClick={grabItem}/>  
            <input ref={quantity} type='number'  className={style.numBtn} placeholder='Quantity' />
        </React.Fragment>
    )
}


export default Buybtn