import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import { connect } from 'react-redux'
class CartIcon extends Component {


    render() {

        let cart = null
        if (this.props.cart.length > 0) {
            cart = (
                <div className="cart-value">{this.props.cart.length}</div>
            )
        } else {
            cart = null
        }

        return (

            < div>
                <Link to="/Cart" className="cart">
                    <i className="fa fa-shopping-cart fa-lg"></i>
                </Link>
                {cart}
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartDetail.cart
    }
}

export default connect(mapStateToProps)(CartIcon) 