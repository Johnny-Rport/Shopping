import React, { LegacyRef, useRef } from 'react';
import style from '../Pages/css/home.module.css'

function Buybtn(){
    const button = useRef<HTMLInputElement>(null)

    // Sends clicked item to product handler and keeps track of what is clicked, no quantity
    function grabParent() {
        let a = button.current!.parentElement!.id
        console.log(a)
    }

    

    return (
        <React.Fragment>
            <input ref={button} type='button' className={style.buyBut} value='Buy Now!' onClick={grabParent}/>
        </React.Fragment>
    )
}

export default Buybtn