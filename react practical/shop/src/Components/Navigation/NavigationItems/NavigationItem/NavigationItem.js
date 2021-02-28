
import React from 'react';
import './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <ul className="NavigationItem">
            <li>
                <a href="/">
                    {props.children}
                </a>
            </li>
        </ul>
    )
}

export default NavigationItem