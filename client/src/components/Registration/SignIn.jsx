// eslint-disable-next-line 
import React, {useState} from 'react'
import './SignIn.scss'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/authSlice';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {e.preventDefault();
		dispatch(
			signin({
				email: state.email,
				password: state.password,
			})
		);};
    const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	}; 
    return (
        <div className='wrapper'>
            <form action="" onSubmit={handleSubmit}>
                <h1>Sign In &#128516;</h1>
                <div className='input-box'>
                    <input  type='email'
							name='email'
							value={state.email}
							id=''
							placeholder='Enter Email'
							onChange={handleChange}
                             />
                    <PersonIcon className='icons' />
                </div>
                <div className='input-box'>
                    <input type="password" 
                            placeholder='Password'
                            name='password'
                            value={state.password}
                            id='' 
                            onChange={handleChange} 
                            />
                    <LockIcon className='icons' />
                </div>
                <button type='submit'>Login</button>
                <div className='register-link'>
                    <p>Don't have an account? <a className='register' href="" onClick={() => navigate("/")}>Sign Up</a></p>
                </div>
            </form>
        </div>
    )
}

export default SignIn