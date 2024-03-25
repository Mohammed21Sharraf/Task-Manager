import React from 'react'
import './SignIn.scss'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const SignIn = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Sign In</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' />
                <PersonIcon className='icons'/>
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Password' />
                <LockIcon className='icons'/>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </form>
    </div>
  )
}

export default SignIn