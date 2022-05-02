import React from 'react';
import style from '../Pages/css/home.module.css'
import { items_in_cart } from './product_handler';

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
// TODO Everything works, the bug is fixed, but this function is being picky about what to display, fix it, it is a dictionary not an array
function DisplayItems(){
    // This function replaces list if there are no items
    // let keys: string[] = []
    function check() {
        if (items_in_cart.size === 0) {
            return "There are no items in your cart. Do not worry, take your time!"
        } else {
            // keys = []
            for (const item of items_in_cart.entries()) {
                // keys.push(item[0])
                return(<li>{item[0]}</li>)
            }

        }
    }

    return(
        <React.Fragment>
            {/* {keys.map((name)=> {
                return( <li>{name}</li>)
            })} */}
            {check()} 
        </React.Fragment>
    )
}

function Detailbtn(){
    // Add a new description trait so when item is passed to product handler it also carries its description with it. simple
    return(
        <React.Fragment>
            <button>Details</button>
        </React.Fragment>
    )
}


export default Cartitem