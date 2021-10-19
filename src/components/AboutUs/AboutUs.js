import React from 'react';

const AboutUs = () => {
    return (
        <div className="md:flex items-center text-left border-t">
            <div className="w-5/6 md:w-3/6 px-0 md:px-8 pl-0 md:pl-16 mx-auto space-y-5 mb-4 md:mb-0">
                <h4 className="text-xl font-semibold text-blue-500">ABOUT US_</h4>
                <h1 className="text-5xl font-bold">Our Qualified Team is Ready to Help You!</h1>
                <p className="text-xl tracking-wider font-semibold text-gray-500">An improved relationship between healthcare professionals and family members is important for all parties involved; healthcare professionals can use the knowledge of family members.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-2xl px-8 py-4 rounded">Contact Us</button>
            </div>
            <div>
                <img className="w-10/12 mx-auto md:mx-0 md:ml-auto" src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e5607170aff9d7b52f2ff90_about-us-image-medica-template-webflow-elements.jpg"} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;