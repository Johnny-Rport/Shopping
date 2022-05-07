import React, { useEffect, useRef, useState } from 'react';
import style from '../Pages/css/home.module.css'
import { keys, descr } from './product_handler';

interface prop {
    id: string
    description: string
}

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
            return keys.map((name, index)=> {
                
                return(<li key={name}>{name} <Detailbtn id={name} description={descr[index]} /></li>)
            })
        } 
    }

    return(
        <React.Fragment>
            {check_list()} 
        </React.Fragment>
    )
}

function Detailbtn(prop: prop){
    const [display_descr, setDisplay] = useState(false)
    let [content, setContent] = useState('Details')
    
    useEffect(()=> {
        detail_clicked()
    })

    // Checks for button state, Aligns with Parent element for accurate description, and outputs it
    function detail_clicked() {
        if (!display_descr) {return setContent(content = 'Details') } // Default State, if not clicked
        else if(display_descr){return keys.map((name) => { //If clicked Display corresponding description
            if (name === prop.id) {
                setContent(content = prop.description)
            }        
        })}
    }

    return(
        <React.Fragment>
            <button onClick={() => {setDisplay(!display_descr)}}>{content}</button>
        </React.Fragment>
    )
}

export default Cartitem