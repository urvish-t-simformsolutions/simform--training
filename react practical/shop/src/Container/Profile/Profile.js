import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../Context/AuthContext'
import { useHistory } from 'react-router-dom'
import './profile.css'
import * as actions from '../../Store/Action'
import { connect } from 'react-redux';
//import ProfileForm from '../../Components/profileForm/ProfileForm';

const Profile = (props) => {
    toast.configure()
    const [enterDetails, setEnterDetails] = useState(true)
    const [alertCss, setAlertCss] = useState("danger");
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const [disabled, setDisabled] = useState(false)

    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        phoneNo: '',
        adLine1: '',
        adLine2: '',
        adLine3: '',
        country: '',
        city: '',
        state: '',
        pincode: '',
    })

    const [userDetails, setUserDetails] = useState({ details: null, id: null })

    useEffect(() => {
        props.checkFormDetails(currentUser.email)
        if (props.userDetailsDb) {
            setEnterDetails(true)
            console.log(props.userDetailsDb)
            setFormDetails(props.userDetailsDb.details)
            setUserDetails(props.userDetailsDb)
        } else {
            setEnterDetails(false)
        }
    }, [])


    const setValue = (e) => {

        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
        setUserDetails({
            details: formDetails,
            id: currentUser.uid,
            email: currentUser.email
        })
    }
    // console.log(formDetails)

    const toggleHandler = () => {

        //  console.log(userDetails);
        if (enterDetails) {
            if (userDetails.id !== props.userId) {
                props.setForm(userDetails)
                setEnterDetails(!enterDetails)
                setDisabled(true)
            }
        } else {
            setEnterDetails(!enterDetails)
            setDisabled(false)
           // props.setForm(userDetails)

            //  props.updateFormDetails(userDetails)
        }
    }

    let value = ""
    if (currentUser) {
        value = currentUser.email
    }
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.pushState('/login ')
        } catch {
            setError('failed to logout')
        }
    }

    return (<>
        <section>
            <div className="profile_list_container">
                <h1>Profile</h1>
            </div>
        </section>
        <section className="section_padding">
            {error && <div className={alertCss}>{error}</div>}
            <div className="profile_contain">
                <div className="user_details">
                    <div className="">
                        <h1 className="user_name">hi,
                        {formDetails.firstName}
                        </h1>
                        <h4 className="detail_name"> your details</h4>
                    </div>
                    {/* <ProfileForm formDetails={formDetails} setValue={setValue} disabled={disabled} value={value} /> */}
                    <form className="checkout_form" method="post">
                        <div className="field-1">
                            <input className="input" onChange={(e) => { setValue(e) }}
                                value={formDetails.firstName} type="text" placeholder="First name"
                                name="firstName" required disabled={disabled} />
                        </div>
                        <div className="field-1">
                            <input className="input" onChange={(e) => { setValue(e) }}
                                value={formDetails.lastName} type="text" placeholder="Last name"
                                name="lastName" required disabled={disabled} />
                        </div>
                        <div className="field-1">
                            <input className="input" onChange={(e) => { setValue(e) }}
                                value={formDetails.phoneNo} type="text" placeholder="Phone No"
                                name="phoneNo" length="10" required disabled={disabled} />
                        </div>
                        <div className="field-1">
                            <input className="input" onChange={(e) => { setValue(e) }}
                                type="email" placeholder="Email" name="email"
                                value={value} disabled />
                        </div>
                        <div className="field-2">
                            <input className="input" onChange={(e) => { setValue(e) }}
                                value={formDetails.adLine1} type="text" placeholder="Address line 1"
                                name="adLine1" required disabled={disabled} />
                        </div>
                        <div className="field-2">
                            <input className="input" onChange={(e) => { setValue(e) }}
                                value={formDetails.adLine2} type="text" placeholder="Address line 2"
                                name="adLine2" required disabled={disabled} />
                        </div>
                        <div className="field-2">
                            <input className="input" onChange={(e) => { setValue(e) }}
                                value={formDetails.adLine3} type="text" placeholder="Address line 3"
                                name="adLine3" required disabled={disabled} />
                        </div>
                        <div className="field-1">
                            <select name="country" onClick={(e) => { setValue(e) }}
                                defaultValue={formDetails.country} required disabled={disabled}>
                                <option value="india">india</option>
                            </select>
                        </div>
                        <div className="field-1">
                            <select name="state" onClick={(e) => { setValue(e) }}
                                defaultValue={formDetails.state} required disabled={disabled}>
                                <option value="gujarat">gujarat</option>
                            </select>
                        </div>
                        <div className="field-1">
                            <select name="city" onClick={(e) => { setValue(e) }}
                                defaultValue={formDetails.city} required disabled={disabled}>
                                <option value="ahmedabad">Ahmedabad</option>
                            </select>
                        </div>
                        <div className="field-1">
                            <input className="input" onChange={(e) => { setValue(e) }}
                                value={formDetails.pincode} type="text" placeholder="Pincode"
                                name="pincode" length="6" required disabled={disabled} />
                        </div>
                    </form>
                </div>

                <div className="func_buttons">
                    <div>
                        <button type="submit" className="btn_8" onClick={toggleHandler}>
                            {enterDetails ? 'Save Details' : 'Update Details'}
                        </button>
                    </div>
                    <button type="submit" className="btn_8">
                        View Previous Orders
                    </button>
                    <button className="btn_8" onClick={handleLogout}>
                        Logout <span><i className="fa fa-sign-out" aria-hidden="true"></i></span>
                    </button>
                </div>
            </div>
        </section>
    </>);
}

const mapStateToProps = (state) => {
    return {
        userDetailsDb: state.profileDetail.userDetails,
        userId: state.profileDetail.userId,
        disabled: state.profileDetail.disabled
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkFormDetails: (email) => dispatch(actions.checkFormDetails(email)),
        setForm: (details) => dispatch(actions.setFormDetails(details)),
        getFromDetails: () => dispatch(actions.showFormDetails()),
        //  updateFormDetails: (details) => dispatch(actions.updateFormDetails(details))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
