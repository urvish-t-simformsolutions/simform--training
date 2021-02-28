import React, { useState } from 'react'
import './Product.css'
import items from '../../data/Data.js'
import ProductItems from '../../Components/ProductItems/ProductItems'
import Search from '../../Components/Filter/Search/Search'
import Sort from '../../Components/Filter/Sort/Sort'
const Product = (props) => {
    const [itemList, setItemList] = useState(items)
    return (
        <>
            <section>
                <div className="product_list_container">
                    <h1>Product List</h1>
                </div>
            </section>

            <section className="section_padding">
                <div className="container">
                    <div className="form_items">
                        <div>
                            <Search />
                        </div>
                        <div>
                            <Sort />
                        </div>
                    </div>
                    <div className="product_list">
                        <ProductItems list={itemList} />
                    </div>
                </div>
            </section>

        </>

    )
}

export default Product 