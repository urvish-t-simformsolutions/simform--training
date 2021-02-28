import React from "react";
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'

const NavigationItems = (props) => {
    return (
        <span>
            <ul className="NavigationItems">
                <NavigationItem>Home</NavigationItem>
                <NavigationItem>About</NavigationItem>
                <NavigationItem>Product</NavigationItem>
                <NavigationItem>Contact</NavigationItem>
            </ul>
        </span>

    )
}

export default NavigationItems