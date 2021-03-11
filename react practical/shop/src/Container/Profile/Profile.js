import React, { Component, useState } from 'react';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
import { useAuth } from '../../Context/AuthContext'
import { useHistory } from 'react-router-dom'
import './profile.css'

const Profile = () => {
    const [enterDetails, setEnterDetails] = useState(true)
    const [alertCss, setAlertCss] = useState("danger");
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const toggleHandler = () => {
        setEnterDetails(!enterDetails)
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
                        <h1 className="user_name">hi,User</h1>
                        <h4 className="detail_name"> your details</h4>
                    </div>
                    <CheckoutForm currentUser={currentUser} enterDetails={enterDetails} />
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
                        Logout <span><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                    </button>
                </div>
            </div>
        </section>
    </>);
}

export default Profile;
