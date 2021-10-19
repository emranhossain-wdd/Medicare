import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {
    const { handleEmailValue, handlePasswordValue, error, handleRegistration } = useAuth();

    return (
        <>
            <h1 className="text-5xl font-bold bg-blue-600 text-white py-8 mb-6">Please Register</h1>
            <div className="flex flex-col items-center">
                <form onSubmit={handleRegistration} className="text-left">
                    <label htmlFor="email">Your Email</label><br />
                    <input onBlur={handleEmailValue} className="w-60 py-1 border-2 rounded-md border-blue-600 focus:border-blue-600 mb-6" type="email" name="" id="email" required /><br />
                    <label htmlFor="password">Your Password</label><br />
                    <input onBlur={handlePasswordValue} className="w-60 py-1 border-2 rounded-md border-blue-600 focus:border-blue-600" type="password" name="" id="password" required /><br />
                    <i>{error}</i> <br />
                    <input className="w-60 bg-blue-600 text-white rounded-md font-semibold py-2 mt-6" type="submit" value="Register" />
                </form>
                <p className="mt-6">Already have an Account ? <Link to="/login" className="text-blue-500">login</Link></p>
            </div>
        </>
    );
};

export default SignUp;