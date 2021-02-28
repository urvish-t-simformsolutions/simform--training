import React from 'react'
import './Productitems.css'

const ProductItems = (props) => {
    console.log(props)
    return (
        <div className='list_container'>
            {props.list.map((itemList) => {
                return (
                    <div key={itemList.id} className="list">
                        <div className="grid-col">
                            <img src={itemList.image} alt="/" />
                            <p className="description">{itemList.description}</p>
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