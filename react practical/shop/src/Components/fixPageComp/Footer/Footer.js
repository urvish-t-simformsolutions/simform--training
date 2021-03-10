import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Logo/Logo'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer_part">
                <div className="footer_top">
                    <div className="footer_nav">
                        <div className="foot_logo">
                            <Logo />
                        </div>
                        <div className="foot_nav">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/product">Products</Link>
                            <Link to="/SignUp">SignUp</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="footer_social">
                            <Link to="/">  <i className="fa fa-facebook"></i></Link>
                            <Link to="/">  <i className="fa fa-instagram"></i></Link>
                            <Link to="/">  <i className="fa fa-google-plus"></i></Link>
                            <Link to="/">  <i className="fa fa-linkedin"></i></Link>
                        </div>
                    </div>

                </div>
                <div className="footer_bottom">
                    <div className="bottom_contain">
                        <div>
                            this is college project
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer