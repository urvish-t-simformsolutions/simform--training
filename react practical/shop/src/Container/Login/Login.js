
import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { useAuth } from '../../Context/AuthContext'


const SignUp = () => {
    const [alertCss, setAlertCss] = useState("danger");
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    useEffect(() => {
        console.log(currentUser);
    })
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/profile')
        } catch {
            setError("failed to Login ")
        }
        setLoading(false)
    }



    return (
        <>
            <section>
                <div className="login_container">
                    <h1>Login</h1>
                </div>
            </section>
            <section className="section_padding">
                <div className="container">
                    <div className="createAcc">

                        <h2>Already part of us?</h2>
                        <p>There are advances being made in science and technology
everyday, and a good example of this is the</p>
                        <Link className="btn_3" to="/SignUp">Create An Account</Link>

                    </div>
                    <div className="login">
                        <div className="login_inner">

                            <h3>Not part of us?<br />
                            Join us by signing up here</h3>

                            {error && <div className={alertCss}>{error}</div>}

                            <form className="form" onSubmit={handleSubmit}>
                                <div className="fields">
                                    <input className="input" type="email" id="name" name="name" placeholder="Enter your Email" defaultValue="" ref={emailRef} />
                                </div>
                                <div className="fields">
                                    <input className="input" type="password" id="password" placeholder="Password" defaultValue="" ref={passwordRef} />
                                </div>

                                <div className="button">
                                    <button disabled={loading} type="submit" className="btn_3">
                                        Log In
                                        </button>
                                    <a className="lost_pass" href="/forgetPass">forget password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SignUp