import React, { useState } from 'react'
import './Product.css'
import items from '../../data/Data.js'
import ProductItems from '../../Components/ProductItems/ProductItems'
//import Search from '../../Components/Filter/Search/Search'
//import Sort from '../../Components/Filter/Sort/Sort'
const Product = (props) => {
    const [itemList, setItemList] = useState(items)
    const [copyList1, setCopyList1] = useState(items);

    const searchTerm = value => {
        if (value === '') {
            setItemList(copyList1)
        }
        else {
            const newTerm = copyList1.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            setItemList(newTerm)
        }
    }

    const sortArr = type => {
        if (type === 'desc') {
            const sorted = copyList1.sort((a, b) => b.price - a.price)
            setItemList(JSON.parse(JSON.stringify(sorted)))
        }
        else if (type === 'asc') {
            const sorted = copyList1.sort((a, b) => a.price - b.price)
            setItemList(JSON.parse(JSON.stringify(sorted)))
        }
        else if (type === 'default') {
            const sorted = copyList1.sort((a, b) => a.id - b.id)
            setItemList(JSON.parse(JSON.stringify(sorted)))
        }
    }



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
                        <div className="search">

                            <input type='text'
                                placeholder="Search....."
                                onChange={(e) => searchTerm(e.target.value)}
                                className="sea-btn" />

                        </div>
                        <div className="sel-sort">

                            <select onChange={(e) => sortArr(e.target.value)}  >
                                <option value="default">Default</option>
                                <option value="asc">Lowest</option>
                                <option value="desc">Highest</option>
                            </select>

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