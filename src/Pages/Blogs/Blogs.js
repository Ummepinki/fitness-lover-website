import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center mt-2'>
            <h3>Q.1 Difference between authorization and authentication?</h3>
            <p>Ans:Authentication is the process of verifying who someone is,whereas authorization is the process of verifying what is specifice application,files, and data a user has access to.Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas. whereas it’s true that they’re usually employed in an equivalent context with an equivalent tool, they’re utterly distinct from one another.</p>
            <br />
            <h3>Q.2 Why are you using firebase and what other option do you have to implement authentication?</h3>
            <p>Ans:Firebase manages all data real-time in the database.so the exchange of data to and from the database is easy and quick.Firebase Database: used to store users data like chat messages, users details and other metadata
                Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc.</p>
            <p>1.Token based authentication.2.Biometric authentication </p>
            <br />
            <h3>Q.3 What other services does firebase provide  then authentication?</h3>
            <p>Ans:Provides identity solution for the emails, password and other important apps such as  Facebook.Twitter. The default security rules require users to be authenticated. Firebase Storage is basically a powerful and simple object storage, in which you can store your files easily.</p>
        </div>
    );
};

export default Blogs;