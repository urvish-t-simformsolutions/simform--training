import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <Link to="/Cart" className="cart">
                <i className="fa fa-shopping-cart fa-lg"></i>
            </Link>
        </div>
    )
}

export default Cart 