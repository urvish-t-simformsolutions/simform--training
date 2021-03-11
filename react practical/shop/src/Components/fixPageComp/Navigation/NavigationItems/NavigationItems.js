import React from "react";
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
import { Link } from 'react-router-dom'

const NavigationItems = (props) => {
    return (
        <span>
            <ul className="NavigationItems">
                <NavigationItem  ><Link to="/">Home</Link></NavigationItem>
                <NavigationItem>About</NavigationItem>
                <NavigationItem><Link to="/product">Product</Link></NavigationItem>
                <NavigationItem><Link to="/login">Login</Link></NavigationItem>
                <NavigationItem><Link to="/profile">Profile</Link></NavigationItem>

                <NavigationItem>Contact</NavigationItem>
            </ul>
        </span>

    )
}

export default NavigationItems