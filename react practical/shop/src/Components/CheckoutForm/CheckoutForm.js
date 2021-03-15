import React, { Component, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import './CheckoutForm.css'

const CheckoutForm = (props) => {


    const { currentUser } = useAuth()
    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        // email: currentUser.email,
        phoneNo: '',
        adLine1: '',
        adLine2: '',
        adLine3: '',
        country: '',
        city: '',
        state: '',
        pincode: '',
        orderNote: ''
    })

    const [disabled, setDisabled] = useState(false)
    const setValue = (e) => {

        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
    }
    let value = formDetails.email
    if (currentUser) {
        value = currentUser.email
    }

    return (
        <div>
            <form className="checkout_form" method="post">
                <div className="field-1">
                    <input className="input" onChange={(e) => { setValue(e) }} type="text" placeholder="First name" name="firstName" required />
                </div>
                <div className="field-1">
                    <input className="input" onChange={(e) => { setValue(e) }} type="text" placeholder="Last name" name="lastName" required />
                </div>
                <div className="field-1">
                    <input className="input" onChange={(e) => { setValue(e) }} type="text" placeholder="Phone Number" name="phoneNumber" length="10" required />
                </div>
                <div className="field-1">
                    <input className="input" onChange={(e) => { setValue(e) }} type="email" placeholder="Email" name="email" value={value} disabled />
                </div>
                <div className="field-2">
                    <input className="input" onChange={(e) => { setValue(e) }} type="text" placeholder="Address line 1" name="adLine1" required />
                </div>
                <div className="field-2">
                    <input className="input" onChange={(e) => { setValue(e) }} type="text" placeholder="Address line 2" name="adLine2" required />
                </div>
                <div className="field-2">
                    <input className="input" onChange={(e) => { setValue(e) }} type="text" placeholder="Address line 3" name="adLine3" required />
                </div>
                <div className="field-1">
                    <select name="country" onClick={(e) => { setValue(e) }} required>
                        <option value="india">india</option>
                    </select>
                </div>
                <div className="field-1">
                    <select name="state" onClick={(e) => { setValue(e) }} required>
                        <option value="gujarat">gujarat</option>
                    </select>
                </div>
                <div className="field-1">
                    <select name="city" onClick={(e) => { setValue(e) }} required>
                        <option value="india">Ahmedabad</option>
                    </select>
                </div>
                <div className="field-1">
                    <input className="input" onChange={(e) => { setValue(e) }} type="text" placeholder="Pincode" name="pincode" length="6" required />
                </div>
                <div className="checkout_text">
                    <textarea name="orderNote" onChange={(e) => { setValue(e) }} rows="1" placeholder="Order Notes"></textarea>
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;
