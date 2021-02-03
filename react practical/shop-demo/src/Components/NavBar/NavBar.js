import React from 'react'
//import {Link} from 'react-router-dom'
import '../NavBar/NavBar.css'

function NavBar() {
    return(
        <nav>
            <ul className="nav-links"> 
            <li>Home</li>
             <li >About</li> 
             <li>Contact Us</li>         
             <li>My Account</li>          
         </ul>
        </nav>
    );
}

export default NavBar