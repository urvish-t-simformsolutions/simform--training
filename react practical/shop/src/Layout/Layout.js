import React from 'react'
import Footer from '../Components/fixPageComp/Footer/Footer'
import Toolbar from '../Components/fixPageComp/Navigation/Toolbar/Toolbar'
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