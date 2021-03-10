import React, { useState, useEffect } from 'react'
import './Product.css'
import items from '../../data/pillows.json'
import ProductItems from '../../Components/ProductItems/ProductItems'
import * as actions from '../../Store/Action'
import Filter from '../../Components/Filter/Filter'
import { Link } from 'react-router-dom'
import Feature from '../../Components/fixPageComp/Feature/Feature'
import Newsletter from '../../Components/fixPageComp/Newsletter/Newsletter'
import { connect, useDispatch, useSelector } from 'react-redux'

//import Search from '../../Components/Filter/Search/Search'
//import Sort from '../../Components/Filter/Sort/Sort'
 

const Product = (props) => {

    const temp = [...items]
    const [itemList, setItemList] = useState(temp)
    const [copyList1, setCopyList1] = useState(temp);
    const [offSet, setOffSet] = useState(6);
    const [sortBy, setSortby] = useState("");
    const [searchField, setSearchField] = useState("")

    const pillows = useSelector(state => state.cartDetail.pillows);
    const setData = useDispatch(actions.setData());

    console.log(pillows)
    useEffect(() => {
        setData();
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


        if (scrollTop + window.innerHeight + 2000 >= scrollHeight) {
            return setOffSet(prev => prev + 6)
        }
    }

    const reset = () => {
        setSortby('')
        setItemList(items)
        setSearchField("")

    }

    const searchTerm = value => {
        setSearchField(value)
        if (value === '') {
            setItemList(temp)
        }
        else {
            const newTerm = copyList1.filter((item) => item.type.toLowerCase().includes(value.toLowerCase()))
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
                        <Filter sortBy={sortBy} sortArr={sortArr} searchTerm={searchTerm} reset={reset} searchField={searchField} />
                    </div>
                    <div className="product_list" onScroll={handleScroll}>
                        <ProductItems list={itemList.slice(0, offSet)} />
                    </div>

                </div>

            </section>

            <div className="faq-button">
                <Link to="/faq" className="faq-btn">
                    FAQ
                </Link>

            </div>
            <Feature />
            <Newsletter />
        </>

    )
}

// const mapStateToProps = (state) => {
//     return {
//         // pillows: state.CartDetail.pillows
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         setData: () => dispatch(actions.setData)
//     }
// }

export default Product