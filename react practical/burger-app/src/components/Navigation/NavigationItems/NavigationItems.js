import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Checkout</NavigationItem>
    </ul>
)

export default NavigationItems