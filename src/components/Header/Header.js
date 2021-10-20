import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    // for toggling the mobile menu button 
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            };
        };
        window.addEventListener('resize', hideMenu);

        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    })

    const toggleButton = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-9/12 mx-auto">
            {/* header top */}
            <div className="md:flex justify-between py-4 md:py-8 border-b-2">
                <ul className="md:flex space-x-8">
                    <li className="flex justify-center hover:text-blue-500 font-medium text-gray-500"><span className="text-blue-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg></span>(404) 850 - 7080</li>
                    <li className="flex justify-center hover:text-blue-500 font-medium text-gray-500"><span className="text-blue-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg></span>info@medicare.com</li>
                </ul>
                <p className="flex items-center"><img className="rounded-full w-8 mr-2" src={user?.photoURL} alt="" />{user?.email}</p>
            </div>
            {/* main header */}
            <div className="flex justify-between items-center py-4 md:py-8">
                <Link to="/"><div className="flex items-center">
                    <img src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e326b2ece191136a59cf714_logo-white.svg"} alt="" />
                    <span className="text-2xl font-semibold">re</span>
                </div></Link>
                {/* menu for desktop */}
                <ul className="hidden md:flex items-center space-x-8 font-semibold text-gray-700">
                    <li><NavLink to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#2563eb"
                        }}
                    >Home</NavLink></li>
                    <li><NavLink to="/doctors"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#2563eb"
                        }}
                    >Doctors</NavLink></li>
                    <li><NavLink to="/services"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#2563eb"
                        }}
                    >Services</NavLink></li>
                    <li><NavLink to="/blogs"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#2563eb"
                        }}
                    >Blogs</NavLink></li>
                    <li><NavLink to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#2563eb"
                        }}
                    >About Us</NavLink></li>
                    {user.email ?
                        <button onClick={logOut}
                            className="font-semibold bg-blue-600 text-white px-6 py-1 rounded-md"
                        >Log Out</button>
                        : <li><NavLink to="/login"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#2563eb"
                            }}
                        >Login</NavLink></li>}
                    {
                        user.email ? "" : <li className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-1"><Link to="/signup">Sign Up</Link></li>
                    }

                </ul>
                {/* mobile button here */}
                <button onClick={toggleButton} className="text-blue-500 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
            </div>
            {/* mobile menu goes here */}
            <div className={isOpen ? "grid space-y-2 mb-2" : "hidden"}>
                <Link to="/"><span className="bg-blue-200 rounded-md px-20 hover:bg-blue-400">Home</span></Link>
                <Link to="/doctors"><span className="bg-blue-200 rounded-md px-20 hover:bg-blue-400">Doctors</span></Link>
                <Link to="/services"><span className="bg-blue-200 rounded-md px-20 hover:bg-blue-400">Services</span></Link>
                <Link to="/blogs"><span className="bg-blue-200 rounded-md px-20 hover:bg-blue-400">Blogs</span></Link>
                <Link to="/about"><span className="bg-blue-200 rounded-md px-20 hover:bg-blue-400">About Us</span></Link>
                {user.email ?
                    <button onClick={logOut}
                        className="font-semibold bg-blue-600 text-white px-6 py-1 rounded-md"
                    >Log Out</button>
                    : <Link to="/login"><span className="bg-blue-200 rounded-md px-20 hover:bg-blue-400">Login</span></Link>}
                {
                    user.email ? "" : <Link to="/signup"><span className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-20 py-1">Sign Up</span></Link>
                }
            </div>
        </div>
    );
};

export default Header;