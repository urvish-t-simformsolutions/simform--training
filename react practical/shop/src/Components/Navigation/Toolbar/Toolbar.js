import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import Search from '../SearchIcon/Search'

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <Logo />
            <nav >
                <NavigationItems />
            </nav>
            <Search />
        </header>
    )
}

export default Toolbar