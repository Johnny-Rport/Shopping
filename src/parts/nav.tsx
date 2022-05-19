import { Link } from 'react-router-dom'
import './css/nav.css'

// TODO: Make the navbar nonreliant on the button and more reliant on mouse hover
function Navbar() {
    return(
        <div className='header'>
            <Link to='/shopping'> <button className='navbtn'>Home</button></Link>
            <Link to='Items' ><button className='navbtn'>Items</button></Link>
            <Link to='Food' ><button className='navbtn'>Food</button></Link>
            <Link to='Sales' ><button className='navbtn'>Sales</button></Link>
            <Link to='Cart' ><button className='navbtn'>Cart</button></Link>
        </div>
        
    )
}

export default Navbar
