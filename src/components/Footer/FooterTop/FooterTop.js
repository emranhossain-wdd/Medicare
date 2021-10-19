import React from 'react';

const FooterTop = () => {
    return (
        <div className="w-9/12 mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 text-left">
                <div className="space-y-4">
                    <div className="flex items-center">
                        <img src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e326b2ece191136a59cf714_logo-white.svg"} alt="" />
                        <span className="text-2xl font-semibold">re</span>
                    </div>
                    <p className="text-lg tracking-wide font-semibold text-gray-500">An improved relationship between healthcare professionals and family members is important for all parties involved.</p>
                </div>
                <div className="px-0 md:px-12 my-8 md:my-0 space-y-3">
                    <h4 className="text-xl font-bold">Contact Us</h4>
                    <p className="flex font-semibold text-gray-500 text-lg hover:text-blue-500"><span className="text-blue-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg></span>(404) 850 - 7080</p>
                    <p className="flex font-semibold text-gray-500 text-lg hover:text-blue-500"><span className="text-blue-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg></span>9663 Fulton Drive Carol Stream, IL 60188</p>
                    <p className="flex font-semibold text-gray-500 text-lg hover:text-blue-500"><span className="text-blue-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg></span>info@medicare.com</p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xl font-bold">Book an Appointment</h4>
                    <p className="text-lg tracking-wide font-semibold text-gray-500">Get details about coverage for screenings, shots, and other preventive services. Things to know. When you make your appointment</p>
                    <button className="flex bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-md font-bold"><span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg></span>(404) 850 - 7080</button>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;