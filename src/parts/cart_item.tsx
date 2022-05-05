import React, { useEffect, useRef, useState } from 'react';
import style from '../Pages/css/home.module.css'
import { keys, descr } from './product_handler';

function Cartitem(){
    return (
        <div className={style.list}> <h4>Items in Cart</h4>
        <aside>Click <em>Details</em> for the descriptions of the items!</aside>
            <ul>
                <DisplayItems/>
            </ul>
        </div>
    )
}

function DisplayItems(){

    // This function checks for items
    function check_list() {
        if (keys.length === 0) {
            return "There are no items in your cart. Do not worry, take your time!"
        } else if (keys.length !== 0) {
            return keys.map((name)=> {
                
                return(<li key={name}>{name} <Detailbtn/></li>)
            })
        } 
    }

    return(
        <React.Fragment>
            {check_list()} 
        </React.Fragment>
    )
}

function Detailbtn(){
    const [display_descr, setDisplay] = useState(false)
    const element = useRef<HTMLButtonElement>(null)
    let [content, setContent] = useState('Details')
    let key = element.current?.parentElement?.firstChild?.textContent! //Parent Key
    
    useEffect(()=> {
        detail_clicked()
    })

    // Checks for button state, Aligns with Parent element for accurate description, and outputs it
    function detail_clicked() {
        if (!display_descr) {return setContent(content = 'Details') } // Default State, if not clicked
        else if(display_descr){return keys.map((name, index) => { //If clicked Display corresponding description
            if (name === key) {
                setContent(content = descr[index])
            }        
        })}
    }

    return(
        <React.Fragment>
            <button ref={element} onClick={() => {setDisplay(!display_descr)}}>{content}</button>
        </React.Fragment>
    )
}

export default Cartitem