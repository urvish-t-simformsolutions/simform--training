import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import CartIcon from '../Cart/Cart'

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <Logo />
            <nav >
                <NavigationItems />
            </nav>
            <CartIcon />
        </header>
    )
}

export default Toolbar