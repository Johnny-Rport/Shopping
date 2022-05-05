
import { Fragment, useEffect, useRef, useState } from 'react';
import style from  './css/home.module.css'

function Price_display() {
    let key = useRef<HTMLHeadingElement>(null) //Grabs Element
    let [price, disPrice] = useState(0) //Used to display price

    useEffect(()=> {
        setPrice(key.current!.parentElement!.id) //Grabs Parent key
    })

    // Changes price according to parent id
    function setPrice(key: string) {
        switch (key) {
            case 'Vaccum':
                disPrice(price = 59.99)
                break;
            case 'Broom':
                disPrice(price = 9.99)
                break;
            case 'Dishwasher':
                disPrice(price = 499.99)
                break;
            case 'Laundry':
                disPrice(price = 799.99)
                break;
            case 'Lawn':
                disPrice(price = 99.99)
                break;
            case 'Hose':
                disPrice(price = 19.99)
                break;
            case 'Apple':
                disPrice(price = 1.99)
                break;
            case 'Banana':
                disPrice(price = 0.99)
                break;
            case 'Watermelon':
                disPrice(price = 1.99)
                break;
            case 'Meat':
                disPrice(price = 1.99)
                break;
            case 'Soda':
                disPrice(price = 0.75)
                break;
            case 'Water':
                disPrice(price = 0.25)
                break;
            case 'TV':
                disPrice(price = 299)
                break;
            case 'Laptop':
                disPrice(price = 199)
                break;
            case 'Tablet':
                disPrice(price = 99)
                break;
            case 'Silverware':
                disPrice(price = 12)
                break;
            case 'Pillow':
                disPrice(price = 10)
                break;
            case 'Egg':
                disPrice(price = 1.99)
                break;
            
        
            default:
                break;
        }
    }
    
  return (
     <Fragment>
         <h3 ref={key}>${price}</h3>
     </Fragment>
  );
}

export default Price_display;
