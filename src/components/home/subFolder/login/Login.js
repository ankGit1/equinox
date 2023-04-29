import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'


function Login() {
    const navigate = useNavigate()
    const formSubmit = () =>{
        navigate('/')
    }
    return (
        <div className='createIdentity__topDiv'>
            <form onSubmit={formSubmit}>
            <div className='createIdentity__title'>Sign In</div>
            <div>
                <input type='email' placeholder='email' required />
            </div>
            <div>
                <input type='password' placeholder='password' required />
            </div>
            <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Login