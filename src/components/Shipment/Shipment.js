import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] =useAuthState(auth);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressdBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name,email,address, phone};
        console.log(shipping);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form action="" onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' id='' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} type="email" name='email' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Address"> Your Address</label>
                        <input onBlur={handleAddressdBlur} type="text" name='Address' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name='Phone' id='' required />
                    </div>
                    <p style={{ color: 'red ' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" required />
                </form>
            </div>
        </div>
    );
};

export default Shipment;