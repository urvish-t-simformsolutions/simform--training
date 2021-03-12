import React from "react";
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
import { Link } from 'react-router-dom'
import { useAuth } from "../../../../Context/AuthContext";

const NavigationItems = (props) => {
    const { currentUser } = useAuth()
    return (
        <span>
            <ul className="NavigationItems">
                <NavigationItem  ><Link to="/">Home</Link></NavigationItem>
                <NavigationItem>About</NavigationItem>
                <NavigationItem><Link to="/product">Product</Link></NavigationItem>
                {currentUser?.uid ? null : <NavigationItem><Link to="/login">Login</Link></NavigationItem>}
                {currentUser?.uid ? <NavigationItem><Link to="/profile">Profile</Link></NavigationItem> : null}



                <NavigationItem>Contact</NavigationItem>
            </ul>
        </span>

    )
}

export default NavigationItems