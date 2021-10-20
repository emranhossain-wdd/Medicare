import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { handleEmailValue, handlePasswordValue, handleSignIn, error, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <>
            <h1 className="text-5xl font-bold bg-blue-600 text-white py-8">Please login</h1>
            <div className="md:flex items-center justify-center mt-6">
                {/* email and password login field */}
                <form onSubmit={handleSignIn} className="text-center md:text-left border-r-2 mr-0 pr-0 md:mr-8 md:pr-8 mb-8 md:mb-0">
                    <label htmlFor="email">Your Email</label><br />
                    <input onBlur={handleEmailValue} className="w-56 py-1 border-2 rounded-md border-blue-600 focus:border-blue-600 mb-2 md:mb-6" type="email" name="" id="email" /><br />
                    <label htmlFor="password">Your Password</label><br />
                    <input onBlur={handlePasswordValue} className="w-56 py-1 border-2 rounded-md border-blue-600 focus:border-blue-600" type="password" name="" id="password" /><br />
                    <i>{error}</i> <br />
                    <input className="w-56 bg-blue-600 text-white rounded-md font-semibold py-2 mt-2 md:mt-6" type="submit" value="Submit" />
                </form>
                {/* log in using google */}
                <div className="space-y-2">
                    <h3 className="text-xl">Another way to Login?</h3>
                    <button
                        onClick={handleGoogleLogin}
                        className="rounded-md bg-blue-600 font-semibold text-white px-10 py-2">Google Login</button>
                </div>
            </div>
            <p className="mt-8">Don't have an Account ? <Link to="/signup" className="text-blue-500">Sign up here</Link></p>
        </>
    );
};

export default Login;