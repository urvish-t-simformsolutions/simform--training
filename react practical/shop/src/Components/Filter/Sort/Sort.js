import React from 'react'
import './Sort.css'
const Sort = (props) => {
    return (
        <div >
            <select className="sel-sort">
                <option value="default">Default</option>
                <option value="Category1">Category1</option>
                <option value="Category2">Category2</option>
            </select>
        </div>
    )
}

export default Sort