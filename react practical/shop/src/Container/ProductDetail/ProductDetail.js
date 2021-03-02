import React, { useState } from 'react'
import './ProductDetail.css'


const ProductDetail = (props) => {

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
            <div className="fullimage">
                <div className="container">
                    <img className="img_des" src={props.location.state.item.image} alt="/"></img>
                </div>
                <div className="product_details">
                    <div className="info">
                        <h3>{props.location.state.item.description}:{props.location.state.item.id} </h3>
                        <h3>  rebound pillows </h3>
                        <p>
                            Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.
</p>
                    </div>
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
                        <div className="add_to_cart">
                            <a href="/cart" className="btn_4" onClick={() => props.addToCart(props.item, value, price)}>add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail