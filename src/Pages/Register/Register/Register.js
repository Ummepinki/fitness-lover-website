import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder='email added' />
                <input type="password" name="password" id="" placeholder='password added' />
                <input type="submit" value=" Register" />

            </form>
            <p> Already have an account?<Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please login</Link></p>
        </div>
    );
};

export default Register;