import React, { Component } from 'react'
import './Cart.css'
import * as actions from '../../Store/Action'
import { connect } from 'react-redux'


class Cart extends Component {

    componentDidMount() {
        this.props.onPriceUpdate()
    }
    componentDidUpdate() {
        this.props.onPriceUpdate()
    }



    render() {



        let bucket = null;
        if (this.props.cart.length < 1) {
            bucket = (
                <div className="empty-bucket">
                    Your Cart is Empty
                </div>
            )
        } else {
            bucket = (
                <div className="table">
                    <table>
                        <tbody>
                            <tr>
                                <th className="product">
                                    Product
                    </th>
                                <th>
                                    Price
                    </th>
                                <th>
                                    Quantity
                    </th>
                                <th>
                                    Total
                    </th>
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
                                                <button type="submit" className="btn_5" onClick={() => this.props.onRemoveFromCart(i)}>
                                                    Remove
                                        </button>
                                            </div>
                                        </td>
                                        <td >
                                            <strong> Rs: {item.cart.price}</strong>
                                        </td>
                                        <td>

                                            <div className="product_count ">
                                                <span className="product_count_item " onClick={() => this.props.onDecrement(i)}> <i className="fa fa-minus"></i></span>
                                                <span className="product_count_item value"
                                                //type="text" value={value} min="0" max="10" 
                                                >
                                                    {item.quantity}
                                                </span>
                                                <span className="product_count_item" onClick={() => this.props.onIncrement(i)}> <i className="fa fa-plus"></i></span>
                                            </div>

                                        </td>
                                        <td>
                                            <strong> Rs: {item.cart.price * item.quantity}</strong>
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr className="total-price">
                                <td>                                </td>
                                <td>                                </td>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveFromCart: (i) => dispatch(actions.removeFromCart(i)),
        onPriceUpdate: () => dispatch(actions.priceUpdate()),
        onIncrement: (index) => dispatch(actions.increment(index)),
        onDecrement: (index) => dispatch(actions.decrement(index))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)

