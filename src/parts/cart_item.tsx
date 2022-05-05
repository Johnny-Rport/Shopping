import React, { useState } from 'react';
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
            return keys.map((name, index)=> {
                
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

    // Retrieves element, parent element for accurate description, and outputs it
    function detail_clicked(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setDisplay(!display_descr)
        let key = event.currentTarget.parentElement?.firstChild?.nodeValue! //Parent Element Item       

        if (display_descr) {return event.currentTarget.textContent! = 'Details' } // Default State, if not clicked
        else if(!display_descr){return keys.map((name, index) => { //If clicked Display corresponding descriptions
            if (name === key) {
                event.currentTarget.textContent! = descr[index]
            }
        })}
    }

    return(
        <React.Fragment>
            <button onClick={detail_clicked}>Details</button>
        </React.Fragment>
    )
}


export default Cartitem