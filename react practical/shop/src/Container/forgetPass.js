import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import './Login/Login.css'


const ForgetPass = () => {
    const emailRef = useRef()

    const [alertCss, setAlertCss] = useState("danger");
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { resetPassword } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("open your Inbox")
        } catch {
            setError("failed to Reset ")
        }
        setLoading(false)
    }

    return (
        <>
            <div className="login" style={{ margin: 'auto' }}>
                <div className="login_inner">

                    <h2 style={{ marginBottom: "50px" }}>Reset Password</h2>
                    {error && <div className={alertCss}>{error}</div>}
                    {message && <div className={alertCss}>{message}</div>}

                    <form className="form" onSubmit={handleSubmit}>
                        <div className="fields">
                            <input className="input" type="email" id="name" name="name" placeholder="Enter your Email" defaultValue="" ref={emailRef} />
                        </div>
                        <div className="button">
                            <button disable={loading} type="submit" className="btn_3">
                                reset Password
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgetPass