import React from 'react'
import './Productitems.css'
import { Link } from 'react-router-dom'

const ProductItems = (props) => {

    return (
        <div className='list_container'>
            {props?.list?.map((itemList) => {
                return (
                    <div key={itemList.id} className="list">
                        <div className="grid-col">
                            <img src={itemList.image} alt="/" />
                            <Link to={{
                                pathname: "/productDetail",
                                state: {
                                    item: itemList,
                                }
                            }} className="description">{itemList.type}</Link>
                            <div className="price">
                                <h4>buy for Rs: {itemList.price} Only</h4>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div >
    )
}

export default ProductItems