import React from 'react';

const Appointments = () => {
    return (
        <div className="md:flex items-center text-left border-t bg-blue-500">
            <div className="w-5/6 md:w-3/6 px-0 md:px-8 pl-0 md:pl-16 mx-auto space-y-5 mb-4 md:mb-0 text-white">
                <h4 className="text-xl font-semibold">BOOK AN APPOINTMENT</h4>
                <h1 className="text-5xl font-bold">Our Medical Team is Ready to Help You.</h1>
                <p className="text-xl tracking-wider font-semibold">An improved relationship between healthcare professionals and family members is important for all parties involved; healthcare professionals can use the knowledge of family members.</p>
                <div className="flex space-x-3">
                    <button className="bg-white text-blue-500 font-bold px-8 py-4 rounded">Contact Us</button>
                    <button className="flex border border-white hover:bg-blue-600 text-white px-10 py-4 rounded-md font-bold"><span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg></span>(404) 850 - 7080</button>
                </div>
            </div>
            <div>
                <img className="w-10/12 mx-auto md:mx-0 md:ml-auto" src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e62ff3851beef849fbef15d_image-call-to-action.jpg"} alt="" />
            </div>
        </div>
    );
};

export default Appointments;