import React, { useEffect, useState } from 'react'
import './Cart.css'
import * as actions from '../../Store/Action'
import { connect } from 'react-redux'


const Cart = (props) => {
    const [cart, setCart] = useState()
    setCart(props.cart)
    // useEffect(() => {
    //     console.log(props)
    //     if (props.cart) {
    //         setCart(props.cart)
    //     }
    // }, [])
    let bucket = null
    if (!props.cart) {
        bucket = (
            <div> Your cart is Empty</div>
        )
    }

    else {
        bucket = (<div className="table">
            <table>
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
                <tr >
                    <td>
                        <div>
                            <img src={cart.item.image} alt="/" />
                            <span className="cart-name">{cart.item.type}</span>
                        </div>
                    </td>
                    <td>
                        <strong> Rs: {cart.item.price}</strong>
                    </td>
                    <td>
                        {cart.quantity}
                    </td>
                    <td>
                        <strong> Rs: {cart.price}</strong>
                    </td>
                </tr>
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
const mapStateToProps = state => {
    return {
        cart: state.cardDetail.cart,
        quantity: state.cardDetail.quantity,
        price: state.cardDetail.price
    }
}



export default connect(mapStateToProps)(Cart)

