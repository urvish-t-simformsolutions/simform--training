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

    const [temp, setTemp] = useState([])

    const [productList, setProductList] = useState(temp)
    const [offSet, setOffSet] = useState(6);
    const [sortBy, setSortby] = useState('')
    const [searchField, setSearchField] = useState('')

    useEffect(() => {
        if (searchField === '') {
            props.setData(searchField, sortBy)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)

    }, []);

    useEffect(() => {
        if (props.pillows) {
            setTemp(props.pillows)
            setProductList(props.pillows)
        }
    }, [props.pillows])




    /************************for infinite scroll****************/
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
    /****************************filter functions********************/
    const reset = () => {
        setSortby('')
        sortArr('')
        // setProductList(props.pillows)
        setSearchField('')

    }

    const searchTerm = value => {
        props.setData(value, sortBy)
        setSearchField(value)
        //sortArr(sortBy)
    }

    const sortArr = type => {
        props.setData(searchField, type)
        setSortby(type)

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
                        <ProductItems list={productList.slice(0, offSet)} />
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

const mapStateToProps = state => {
    return {
        pillows: state.productData.pillows
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setData: (search, sort) => dispatch(actions.setData(search, sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)