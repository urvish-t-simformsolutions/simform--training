import React, { useState, useEffect } from 'react'
import './Product.css'
import items from '../../data/Data.js'
import ProductItems from '../../Components/ProductItems/ProductItems'
import { Link } from 'react-router-dom'
import Filter from '../../Components/Filter/Filter'

//import Search from '../../Components/Filter/Search/Search'
//import Sort from '../../Components/Filter/Sort/Sort'


const Product = (props) => {
    const temp = [...items]
    const [itemList, setItemList] = useState(temp)
    const [copyList1, setCopyList1] = useState(temp);
    const [offSet, setOffSet] = useState(6);
    const [sortBy, setSortby] = useState("");


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleScroll = (event) => {
        const scrollTop =
            (document.documentElement?.scrollTop) ||
            document.body.scrollTop;
        const scrollHeight =
            (document.documentElement?.scrollHeight) ||
            document.body.scrollHeight;


        if (scrollTop + window.innerHeight + 10 >= scrollHeight) {
            return setOffSet(prev => prev + 6)
        }
    }

    const reset = () => {
        // sortArr('');
        setSortby('')
        setItemList(items)

    }

    const searchTerm = value => {
        if (value === '') {
            setItemList(temp)
        }
        else {
            const newTerm = copyList1.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            setItemList(newTerm)
        }
    }

    const sortArr = type => {
        setSortby(type)
        if (type === 'High to Low') {
            const sorted = copyList1.sort((a, b) => b.price - a.price)
            setItemList(JSON.parse(JSON.stringify(sorted)))
        }
        else if (type === 'Low to High') {
            const sorted = copyList1.sort((a, b) => a.price - b.price)
            setItemList(JSON.parse(JSON.stringify(sorted)))
        }
        else if (type === '') {
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
                        <Filter sortBy={sortBy} sortArr={sortArr} searchTerm={searchTerm} reset={reset} />
                    </div>
                    <div className="product_list" onScroll={handleScroll}>
                        <ProductItems list={itemList.slice(0, offSet)} />
                    </div>
                </div>

            </section>

        </>

    )
}

export default Product 