import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
import './Checkout.css'


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
componentDidMount(){
   
}
    render() {
        return (
            <>
                <section>
                    <div className="checkout_container">
                        <h1>Checkout</h1>
                    </div>
                </section>
                <section className="section_padding">
                    <div className="checkout_contain">
                        <div className="detail_order">
                            <div className="bill_detail">
                                <h3>Billing Details</h3>
                                <CheckoutForm />
                            </div>
                            <div className="order_sum">
                                <div className="order_detail">
                                    <h2>Your Order</h2>
                                    <ul className="list">
                                        <li>
                                            Product
                                            <span>Total</span>
                                        </li>
                                        {this.props.cart.map((item, i) => {
                                            return (
                                                < li key={i}>
                                                    <span className="first"> {item.cart.type}</span>

                                                    <span className="last">Rs:{item.cart.price * item.quantity}</span>
                                                    <span className="middle">x{item.quantity}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <ul className="list list_2">
                                        <li>
                                            Subtotal
                                            <span>Rs:{this.props.totalPrice}</span>
                                        </li>
                                        <li>
                                            Shipping
                                            <span>Flat rate: Rs:50.00</span>
                                        </li>
                                        <li>
                                            Total
                                            <span>Rs:{this.props.totalPrice + 50}</span>
                                        </li>
                                    </ul>
                                    <Link className="btn_7" to="/checkout">Proceed for Payment</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cartDetail.cart,
        totalPrice: state.cartDetail.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);