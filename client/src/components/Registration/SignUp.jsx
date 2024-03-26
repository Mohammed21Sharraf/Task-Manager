// eslint-disable-next-line 
import React, {useState} from 'react'
import './SignUp.scss'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice';


const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();

		dispatch(
			register({
				username: state.username,
				password: state.password,
				email: state.email,
			})
		);
    };
    const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Welocome to task manager!</h1>
                <h3> Create Account &#128513; </h3>
                <div className='input-box'>
                    <input  type="text" 
                            placeholder='Username' 
                            name='username'
							value={state.username}
							onChange={handleChange} />
                    <PersonIcon className='icons' />
                </div>
                <div className='input-box'>
                    <input type="email"
                            placeholder='Email'
                            name='email'
							value={state.email}
							id='' 
                            onChange={handleChange}/>
                    <EmailIcon className='icons' />
                </div>
                <div className='input-box'>
                    <input  type="password" 
                            placeholder='Password'
                            name='password'
                            value={state.password}
                            id='' 
                            onChange={handleChange}
                    />
                    <LockIcon className='icons' />
                </div>
                <button type='submit'>Register</button>
                <div className='register-link'>
                    <p>Already have an account? <a className='register' href="" onClick={() => navigate("/login")}>Sign In</a></p>
                </div>
            </form>
        </div>
    )
}

export default SignUp