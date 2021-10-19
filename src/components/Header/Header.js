import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="w-9/12 mx-auto">
            <div className="md:flex justify-between py-8 border-b-2">
                <ul className="md:flex space-x-8">
                    <li className="flex"><span className="text-blue-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg></span>(404) 850 - 7080</li>
                    <li className="flex"><span className="text-blue-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg></span>info@medicare.com</li>
                </ul>
                <p className="flex items-center"><img className="rounded-full w-8 mr-2" src={user?.photoURL} alt="" />{user?.email}</p>
            </div>
            <div className="md:flex justify-between items-center py-8">
                <div className="flex items-center">
                    <img src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e326b2ece191136a59cf714_logo-white.svg"} alt="" />
                    <span className="text-2xl font-semibold">re</span>
                </div>
                <ul className="md:flex space-x-8 font-semibold text-gray-700">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/doctors">Doctors</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    {user.email ?
                        <button onClick={logOut}
                            className="font-semibold bg-blue-600 text-white px-6 py-1 rounded-md"
                        >Log Out</button>
                        : <li><Link to="/login">Login</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Header;