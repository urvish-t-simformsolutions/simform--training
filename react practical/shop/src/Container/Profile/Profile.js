import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../Context/AuthContext'
import { useHistory } from 'react-router-dom'
import './profile.css'
import * as actions from '../../Store/Action'
import { connect } from 'react-redux';
import ProfileForm from '../../Components/profileForm/ProfileForm';

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
    }, [])

    useEffect(() => {
        //debugger
        if (props.userDetailsDb) {
            setFormDetails(props.userDetailsDb.details)
            setUserDetails(props.userDetailsDb)
            //    debugger
            if (userDetails.firstName === '') {

                setEnterDetails(true)
                setDisabled(false)
            }
            else {
                setEnterDetails(false)
                setDisabled(true)
            }
        }
    }, [props.userDetailsDb])



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
        }
    }

    let value = ""
    if (currentUser) {
        value = currentUser.email
    }
    async function handleLogout() {
        props.clearOnLogout()
        setError('')
        try {
            await logout()
            history.pushState('/login ')
        } catch {
            setError('failed to logout')
        }
    }

    let details = 'loading'
    if (!props.loading) {
        details = (
            <ProfileForm formDetails={formDetails} setValue={setValue} disabled={disabled} value={value} />
        )
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
                    {details}
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
        disabled: state.profileDetail.disabled,
        loading: state.profileDetail.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkFormDetails: (email) => dispatch(actions.checkFormDetails(email)),
        setForm: (details) => dispatch(actions.setFormDetails(details)),
        getFromDetails: () => dispatch(actions.showFormDetails()),
        clearOnLogout: () => dispatch(actions.clearOnLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
