import React from 'react'
import Footer from '../Components/Footer/Footer'
import Toolbar from '../Components/Navigation/Toolbar/Toolbar'
const Layout = (props) => {
    return (
        <>
            <Toolbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout