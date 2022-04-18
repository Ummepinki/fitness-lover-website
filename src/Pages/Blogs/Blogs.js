import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center mt-2'>
            <h3>Q.1 Difference between authorization and authentication?</h3>
            <p>Ans:Authentication is the process of verifying who someone is,whereas authorization is the process of verifying what is specifice application,files, and data a user has access to.</p>
            <br />
            <h3>Q.2 Why are you using firebase and what other option do you have to implement authentication?</h3>
            <p>Ans:Firebase manages all data real-time in the database.so the exchange of data to and from the database is easy and quick.</p>
            <p>1.Token based authentication.2.Biometric authentication </p>
            <br />
            <h3>Q.3 What other services does firebase provide  then authentication?</h3>
            <p>Ans:Provides identity solution for the emails, password and other important apps such as  Facebook.Twitter.</p>
        </div>
    );
};

export default Blogs;