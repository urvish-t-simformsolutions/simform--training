import React from 'react';
import './profileForm.css'

const ProfileForm = (props) => {

    return (
        <form className="checkout_form" method="post">
            <div className="field-1">
                <input className="input" onChange={(e) => { props.setValue(e) }}
                    value={props.formDetails.firstName} type="text" placeholder="First name"
                    name="firstName" required disabled={props.disabled} />
            </div>
            <div className="field-1">
                <input className="input" onChange={(e) => { props.setValue(e) }}
                    value={props.formDetails.lastName} type="text" placeholder="Last name"
                    name="lastName" required disabled={props.disabled} />
            </div>
            <div className="field-1">
                <input className="input" onChange={(e) => { props.setValue(e) }}
                    value={props.formDetails.phoneNo} type="text" placeholder="Phone Number"
                    name="phoneNo" length="10"
                    required disabled={props.disabled} />
            </div>
            <div className="field-1">
                <input className="input" onChange={(e) => { props.setValue(e) }}
                    type="email" placeholder="Email" name="email"
                    value={props.value} disabled />
            </div>
            <div className="field-2">
                <input className="input" onChange={(e) => { props.setValue(e) }}
                    value={props.formDetails.adLine1} type="text" placeholder="Address line 1"
                    name="adLine1" required disabled={props.disabled} />
            </div>
            <div className="field-2">
                <input className="input" onChange={(e) => { props.setValue(e) }}
                    value={props.formDetails.adLine2} type="text" placeholder="Address line 2"
                    name="adLine2" required disabled={props.disabled} />
            </div>
            <div className="field-2">
                <input className="input" onChange={(e) => { props.setValue(e) }}
                    value={props.formDetails.adLine3} type="text" placeholder="Address line 3"
                    name="adLine3" required disabled={props.disabled} />
            </div>
            <div className="field-1">
                <select name="country" onClick={(e) => { props.setValue(e) }}
                    defaultValue="india"
                    required disabled={props.disabled}>
                    <option value="india" >india</option>
                </select>
            </div>
            <div className="field-1">
                <select name="state" onClick={(e) => { props.setValue(e) }}
                    defaultValue="gujarat"
                    required disabled={props.disabled}>
                    <option value="gujarat">gujarat</option>
                </select>
            </div>
            <div className="field-1">
                <select name="city" onClick={(e) => { props.setValue(e) }}
                    defaultValue="ahmebadabad"
                    required disabled={props.disabled}>
                    <option value="ahmedabad">Ahmedabad</option>
                </select>
            </div>
            <div className="field-1">
                <input className="input" onChange={(e) => { props.setValue(e) }}
                    value={props.formDetails.pincode} type="text" placeholder="Pincode"
                    name="pincode" length="6" required disabled={props.disabled} />
            </div>
        </form>
    )
}

export default ProfileForm