import { element } from 'prop-types'
import React from 'react'
import './TableDetail.css'

const TableDetail = (props) => {
    return (
        <div className="specs">
            <table className="specs-detail">
                <tbody>
                    <tr>
                        <th>
                            Brand
            </th>
                        <td>
                            {props.item.brand}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Material
            </th>
                        <td>
                            {props.item.specs.material}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Cover
            </th>
                        <td>
                            {props.item.specs.cover}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Sizes available
            </th>
                        <td>
                            {props.item.specs.size.map((element, i) => {
                                return <span className="size-detail" key={i}>{element}</span>
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default TableDetail