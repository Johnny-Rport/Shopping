
import { Fragment, useEffect, useRef, useState } from 'react';
import style from  './css/home.module.css'

function Price_display() {
    let key = useRef<HTMLHeadingElement>(null) //Grabs Elements
    let id = useRef<HTMLHeadingElement>(null) 
    let [price, disPrice] = useState(0) //Used to display price
    let [weight, disWeight] = useState(0) //Used to display weight

    useEffect(()=> {
        setPrice(key.current!.parentElement!.id) //Grabs Parent key
    })

    // Changes price according to parent id
    function setPrice(key: string) {
        switch (key) {
            case 'Vaccum':
                disPrice(price = 59.99)
                disWeight(weight = 8)
                break;
            case 'Broom':
                disPrice(price = 9.99)
                disWeight(weight = 1.1)
                break;
            case 'Dishwasher':
                disPrice(price = 499.99)
                disWeight(weight = 77)
                break;
            case 'Laundry':
                disPrice(price = 799.99)
                disWeight(weight = 170 + 124)
                break;
            case 'Lawn':
                disPrice(price = 99.99)
                disWeight(weight = 100)
                break;
            case 'Hose':
                disPrice(price = 19.99)
                disWeight(weight = 27)
                break;
            case 'Apple':
                disPrice(price = 1.99)
                disWeight(weight = 0.44)
                break;
            case 'Banana':
                disPrice(price = 0.99)
                disWeight(weight = 0.34)
                break;
            case 'Watermelon':
                disPrice(price = 1.99)
                disWeight(weight = 25)
                break;
            case 'Meat':
                disPrice(price = 1.99)
                disWeight(weight = 0.55)
                break;
            case 'Soda':
                disPrice(price = 0.75)
                disWeight(weight = 1)
                break;
            case 'Water':
                disPrice(price = 0.25)
                disWeight(weight = 1.2)
                break;
            case 'TV':
                disPrice(price = 299)
                disWeight(weight = 32)
                break;
            case 'Laptop':
                disPrice(price = 199)
                disWeight(weight = 8)
                break;
            case 'Tablet':
                disPrice(price = 99)
                disWeight(weight = 0.5)
                break;
            case 'Silverware':
                disPrice(price = 12)
                disWeight(weight = 0.04)
                break;
            case 'Pillow':
                disPrice(price = 10)
                disWeight(weight = 1)
                break;
            case 'Egg':
                disPrice(price = 1.99)
                disWeight(weight = 0.01)
                break;
            
        
            default:
                break;
        }
    }
    
  return (
     <Fragment>
         <h3 ref={key}>${price}</h3>
         <h3 ref={id}>{weight} lbs</h3>
     </Fragment>
  );
}

export default Price_display;
