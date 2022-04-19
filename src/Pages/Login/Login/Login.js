import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary mt-2 text-center'> Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p> Are you new?<Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>
            <p> Forget Password?<button className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}> Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;