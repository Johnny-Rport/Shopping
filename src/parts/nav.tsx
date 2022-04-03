import React from 'react'
import { Link } from 'react-router-dom'
import './css/nav.css'

function Navbar() {
    const menu = document.getElementsByTagName('a')!
    let hide = false
    const header = React.useRef<HTMLDivElement>(null)
    const navi = React.useRef<HTMLButtonElement>(null)
    
    const hideNav = () => {

        if (hide !== true) {
            header.current!.style.backgroundColor = 'white'
            navi.current!.style.backgroundColor = 'hsl(200,100%,50%)'
            hide = true
            for (let i = 0; i < menu.length; i++) {
                const element = menu[i];
                element.setAttribute('hidden', '')  
            }
            
        } else {
            header.current!.style.backgroundColor = 'hsl(200, 100%, 50%)'
            navi.current!.style.backgroundColor = 'white'

            hide = false
            for (let i = 0; i < menu.length; i++) {
                const element = menu[i];
                element.removeAttribute('hidden')
                
            }
        }

    }

    return(
        <div ref={header} className='header' >
            <button ref={navi}  className='menu' onClick={hideNav}>menu</button>
            <Link to='/shopping'><button className='navbut'>Home</button></Link>
            <Link to='Items'><button className='navbut'>Items</button></Link>
            <Link to='Food'><button className='navbut'>Food</button></Link>
            <Link to='Cart'><button className='navbut'>Cart</button></Link>
        </div>
        
    )
}

export default Navbar