// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg7xnF25m1w0aS3ljktls9ifzRCuxEwfw",
    authDomain: "independent-service-prov-30c3b.firebaseapp.com",
    projectId: "independent-service-prov-30c3b",
    storageBucket: "independent-service-prov-30c3b.appspot.com",
    messagingSenderId: "535905830227",
    appId: "1:535905830227:web:2dc0ddad37be0faccf0da6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);

export default app;
