import React from 'react'
import './ProductDetail.css'


const ProductDetail = (props) => {

    return (

        <>
            <section className="pd_bg">
            </section>
            <div className="fullimage">
                <div className="container">
                    <img src={props.location.state.itemList.image} alt="/"></img>
                </div>
                <div className="product_details">
                    <div className="info">
                        <h3>{props.location.state.itemList.description}:{props.location.state.itemList.id} </h3>
                        <h3>  rebound pillows </h3>
                        <p>
                            Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.
</p>
                    </div>
                    <div className="card_area">
                        <div className="product_count_area">
                            <p>Quantity</p>
                            <div className="product_count ">
                                <span className="product_count_item "> <i className="fa fa-minus"></i></span>
                                <input className="product_count_item " type="text" value="1" min="0" max="10" />
                                <span className="product_count_item"> <i className="fa fa-plus"></i></span>
                            </div>
                            <p>$5</p>

                        </div>
                        <div className="add_to_cart">
                            <a href="/" className="btn_3">add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail