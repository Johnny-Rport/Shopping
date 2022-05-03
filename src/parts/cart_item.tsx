import React, { useState } from 'react';
import style from '../Pages/css/home.module.css'
import { keys, descr } from './product_handler';

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
    // TODO Add a new description trait so when item is passed to product handler it also carries its description with it. simple
    const [display_descr, setDisplay] = useState(false)
    let name: string

    function detail_clicked(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setDisplay(!display_descr)
        name = event.currentTarget.parentElement?.firstChild?.nodeValue!
        content()
    }

    const content = () => {
        if (display_descr) {return 'details'}
        else if(!display_descr){return keys.map((key, index)=> {
            if (name === key) {return console.log(descr[index])}
        })}
    }

    return(
        <React.Fragment>
            {/* <button onClick={detail_clicked}>{content}</button> */}
            <button onClick={detail_clicked}>detail</button>
        </React.Fragment>
    )
}


export default Cartitem