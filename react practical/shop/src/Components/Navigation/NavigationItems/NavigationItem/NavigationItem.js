
import React from 'react';
import './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <ul className="NavigationItem">
            <li>
                {props.children}
            </li>
        </ul>
    )
}

export default NavigationItem