import React, { Component } from 'react'
import './Cart.css'
import * as actions from '../../Store/Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//import axios from "axios";

class Cart extends Component {

    componentDidMount() {
        //this.props.setData()
        this.props.onPriceUpdate()
        // axios.get("https://auth-development-5a0c3-default-rtdb.firebaseio.com/pillows.json")
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }
    componentDidUpdate() {
        this.props.onPriceUpdate()
    }

    state = {
        updateCart: false,
        toggle: false,

    }

    onClick = this.onClick.bind(this);
    decrementValue = this.decrementValue.bind(this);
    incrementValue = this.incrementValue.bind(this);


    onClick() {
        this.setState((currentState) => ({
            updateCart: !currentState.updateCart,
        }))
    }
    decrementValue(i) {
        this.props.onDecrement(i)
        this.setState((currentState) => ({
            toggle: !currentState.toggle,
        }))
    }
    incrementValue(i) {
        this.props.onIncrement(i)
        this.setState((currentState) => ({
            toggle: !currentState.toggle,
        }))
    }
    render() {

        let bucket = null;
        if (this.props.cart.length < 1) {
            bucket = (
                <div className="empty-bucket">
                    Your Cart is Empty :(
                </div>
            )
        } else {
            bucket = (
                <div className="table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                            {this.props.cart.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td >
                                            <div>
                                                <img src={item.cart.image} alt="/" />
                                                <span className="cart-name">{item.cart.type}</span>
                                            </div>
                                            <div>
                                                {this.state.updateCart ?
                                                    <button type="submit" className="btn_5"
                                                        onClick={() => this.props.onRemoveFromCart(i)}>
                                                        Remove
                                                    </button>
                                                    : null}
                                            </div>
                                        </td>
                                        <td >
                                            <strong> Rs: {item.cart.price}</strong>
                                        </td>
                                        <td>
                                            {this.state.updateCart ?
                                                <div className="product_count ">
                                                    <span className="product_count_item " onClick={() => this.decrementValue(i)}> <i className="fa fa-minus"></i></span>
                                                    <span className="product_count_item value">
                                                        {item.quantity}
                                                    </span>
                                                    <span className="product_count_item" onClick={() => this.incrementValue(i)}> <i className="fa fa-plus"></i></span>
                                                </div> : item.quantity}

                                        </td>
                                        <td>
                                            <strong> Rs: {item.cart.price * item.quantity}</strong>
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr >
                                <td className="update-cart"> <button
                                    onClick={this.onClick}
                                    className="btn_4"> {this.state.updateCart ? 'Save Changes' : 'Update Cart'}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>
                            <tr className="total-price">
                                <td></td>
                                <td></td>
                                <td>
                                    <h4>
                                        Subtotal:
                                    </h4>
                                </td>
                                <td>
                                    <h4>
                                        Rs: {this.props.totalPrice}
                                    </h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link className="btn_6" to="/checkout">Proceed to checkout</Link>
                </div>
            )
        }

        return (
            <>
                <section>
                    <div className="cart_list_container">
                        <h1>Cart List</h1>
                    </div>
                </section>

                <section className="section_padding">
                    <div className="container">
                        {bucket}
                    </div>
                </section>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cartDetail.cart,
        totalPrice: state.cartDetail.totalPrice,
        pillows: state.cartDetail.pillows
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveFromCart: (i) => dispatch(actions.removeFromCart(i)),
        onPriceUpdate: () => dispatch(actions.priceUpdate()),
        onIncrement: (index) => dispatch(actions.increment(index)),
        onDecrement: (index) => dispatch(actions.decrement(index)),
        setData: () => dispatch(actions.setData())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)

