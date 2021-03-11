import React, { Component } from 'react';
import './CheckoutForm.css'

const CheckoutForm = (props) => {
    let value = ''
    if (props.currentUser) {
        value = props.currentUser.email
    }

    return (
        <form className="checkout_form" action="#" method="post">
            <div className="field-1">
                <input className="input" type="text" placeholder="First name" id="firstName" />
            </div>
            <div className="field-1">
                <input className="input" type="text" placeholder="Last name" id="lastName" />
            </div>
            <div className="field-1">
                <input className="input" type="text" placeholder="Phone Number" id="phoneNumber" length="10" />
            </div>
            <div className="field-1">
                <input className="input" type="email" placeholder="Email" id="email" value={value} />
            </div>
            <div className="field-2">
                <input className="input" type="text" placeholder="Address line 1" id="adLine1" />
            </div>
            <div className="field-2">
                <input className="input" type="text" placeholder="Address line 2" id="adLine2" />
            </div>
            <div className="field-2">
                <input className="input" type="text" placeholder="Address line 3" id="adLine3" />
            </div>
            <div className="field-1">
                <select name="Country" id="country">
                    <option>india</option>
                </select>
            </div>
            <div className="field-1">
                <select name="State" id="state">
                    <option>gujarat</option>
                </select>
            </div>
            <div className="field-1">
                <select name="City" id="city">
                    <option>Ahmedabad</option>
                </select>
            </div>
            <div className="field-1">
                <input className="input" type="text" placeholder="Pincode" id="pincode" length="6" />
            </div>
            <div className="checkout_text">
                <textarea name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
            </div>
        </form>
    );
}

export default CheckoutForm;
