import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError(" Your two passwords didn't matched")
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form action="" onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' id='' required />
                    </div>
                    <p style={{ color: 'red ' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" required />
                </form>
                <p className='instruction'>Already have an Account ? <Link className='form-link' to='/login'>Login</Link></p>
                <div className='straight-line'>
                    <div className=''> </div>
                    <p>or</p>
                    <div className=''></div>
                </div>
                <div>
                    <button className='google-button'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;