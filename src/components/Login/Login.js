import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication();

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="Your Name" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;