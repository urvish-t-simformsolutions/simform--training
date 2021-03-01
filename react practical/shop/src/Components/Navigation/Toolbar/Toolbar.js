import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import Cart from '../Cart/Cart'

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <Logo />
            <nav >
                <NavigationItems />
            </nav>
            <Cart />
        </header>
    )
}

export default Toolbar