// LoginSignup.jsx
import React from 'react'
import './LoginSignup.css';
function LoginSignup() {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='your name'/>
                    <input type="email" placeholder='Email Address'/>
                     <input type="password" placeholder='Password'/>
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Aldready have an account? <span>Login here <span></span></span></p>
            <div className='loginsignup-agree'>
                <input type="checkbox" name='' id='' />
                <p>Continuing I agreee with the terms of use and privacy</p>
            </div>
            </div>
        </div>
    )
}

export default LoginSignup


