import React from 'react'
import './Login.css'

const Login = () => {
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

                        <h2>New to our Shop?</h2>
                        <p>There are advances being made in science and technology
everyday, and a good example of this is the</p>
                        <a href="/" className="btn_3">Create an Account</a>

                    </div>
                    <div className="login">
                        <div className="login_inner">

                            <h3>Welcome Back ! <br />
                                    Please Sign in now</h3>
                            <form class="form" action="#" method="post" novalidate="novalidate">
                                <div class="fields">
                                    <input type="text" id="name" name="name" value="" placeholder="Username" />
                                </div>
                                <div class="fields">
                                    <input type="password" id="password" name="password" value="" placeholder="Password" />
                                </div>
                                <div className="button">
                                    <button type="submit" value="log in " class="btn_3">
                                        log in
                                        </button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Login