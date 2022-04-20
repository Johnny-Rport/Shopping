import { useState} from 'react'
import { Link } from 'react-router-dom'
import './css/nav.css'


function Navbar() {
    const [menuOpen, setMenu] = useState(false)
    const [navButs, setHide] = useState(false)
    let menuClass = menuOpen ? 'menu': 'altmenu' 

    const hideNav = () => {
        return navButs ? {}: {display: 'none'}
    }

    const menuclicked = () => {
        setMenu(!menuOpen)
        setHide(!navButs)
    }

    return(
        <div  className='header' >
            <button className={menuClass} onClick={menuclicked}>menu</button>
            <Link to='/shopping' style={hideNav()}><button className='navbut'>Home</button></Link>
            <Link to='Items' style={hideNav()}><button className='navbut'>Items</button></Link>
            <Link to='Food' style={hideNav()}><button className='navbut'>Food</button></Link>
            <Link to='Sales' style={hideNav()}><button className='navbut'>Sales</button></Link>
            <Link to='Cart' style={hideNav()}><button className='navbut'>Cart</button></Link>
        </div>
        
    )
}

export default Navbar
