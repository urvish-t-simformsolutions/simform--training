import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationItem.css'

const NavigationItem = (props) => (
    <ul className={classes.NavigationItem}>
        <li><NavLink exact
            to={props.link} 
            activeClassName={classes.active}>{props.children}</NavLink></li>
    </ul>
)

export default NavigationItem