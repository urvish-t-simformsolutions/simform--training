import React from 'react'
import '../ListItems/ListItems.css'

function ListItems({ item }) {
    return (
      <div className="section">
        {item.map((itemList) => {
          return (
            <div key={itemList.id} className="list">
              <div>
                  <h1 className="sec-heading">{itemList.title}</h1>
                  <div className="grid-col">
                  <img src={itemList.image} alt="/"/>
                  <div className="list-items">
                    <h3>Dimension</h3>
                  <p>{itemList.dimension}</p>
                  <h3>Price</h3>
                  <p>Rs:{itemList.price}</p>  
                  <button className="add-cart">Add Cart</button>
                  </div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default ListItems;