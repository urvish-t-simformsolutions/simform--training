import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TableDetail from '../../Components/TableDetail/TableDetail'
import './ProductDetail.css'
import * as actions from '../../Store/Action'
import { connect } from 'react-redux'


const ProductDetail = (props) => {
    console.log(props)

    const [value, setValue] = useState(1)
    const [price, setPrice] = useState(props.location.state.item.price)

    const increment = () => {
        if (value < 10) {
            setValue(value + 1)
            setPrice(price + props.location.state.item.price)
        }
    }
    const decrement = () => {
        if (value > 1) {
            setValue(value - 1)
            setPrice(price - props.location.state.item.price)
        }
    }
    return (

        <>
            <section className="pd_bg">
            </section>
            <section>
                <div className="fullimage">
                    <div className="container">
                        <img className="img_des" src={props.location.state.item.image} alt="/"></img>
                    </div>
                    <div className="product_details">
                        <div className="info">
                            <h3>{props.location.state.item.type} </h3>

                            <p>
                                {props.location.state.item.description}
                            </p>
                        </div>
                        <TableDetail item={props.location.state.item} />

                        <div className="card_area">
                            <div className="product_count_area">
                                <p>Quantity</p>
                                <div className="product_count ">
                                    <span className="product_count_item " onClick={decrement}> <i className="fa fa-minus"></i></span>
                                    <input className="product_count_item " type="text" value={value} min="0" max="10" />
                                    <span className="product_count_item" onClick={increment}> <i className="fa fa-plus"></i></span>
                                </div>

                                <p>Rs: {price}</p>

                            </div>
                            <div className="add_to_cart" >
                                <button
                                    onClick={() => { props.onAddToCart(props.location.state.item, value, price) }}
                                    // to={{
                                    //     pathname: "/Cart",
                                    //     state: {
                                    //         item: props.location.state.item,
                                    //         quantity: value,
                                    //         price: price
                                    //     }
                                    // }} 
                                    className="btn_4"
                                // onClick={() => props.addToCart(props.item, value, price)}
                                > add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

// const mapStateToProps = state => {
//     return {
//         cart: state.cardDetail.cart,
//         quantity: state.cardDetail.quantity,
//         price: state.cardDetail.price
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (cart, quantity, price) => dispatch(actions.addToCart(cart, quantity, price))
    }
}

export default connect(null, mapDispatchToProps)(ProductDetail)