import React from 'react';

const Hero = () => {
    return (
        <div className="md:flex items-center text-left border-t">
            <div className="w-5/6 md:w-3/6 px-0 md:px-8 pl-0 md:pl-16 mx-auto space-y-5 mb-4 md:mb-0">
                <h4 className="text-xl font-semibold text-blue-500">HOSPITAL CENTER_</h4>
                <h1 className="text-5xl font-bold">Healthcare for Family’s Health</h1>
                <p className="text-xl tracking-wider font-semibold text-gray-500">An improved relationship between healthcare professionals and family members is important for all parties involved; healthcare professionals can use the knowledge of family members.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-2xl px-8 py-4 rounded">Book an Appointment</button>
            </div>
            <div>
                <img className="absolute ml-10 mt-14 hidden md:block" src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e310425e800ca41f276c5f9_background-object-1-hero.svg"} alt="" />
                <img className="w-10/12 mx-auto md:mx-0 md:ml-auto" src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e5607096725fd85292f230f_hero-image-medica-template-webflow-elements.jpg"} alt="" />
                <img className="absolute ml-20 -mt-96 hidden md:block" src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e310615cf36f636714a14ee_background-object-2-hero.svg"} alt="" />
            </div>
        </div>
    );
};

export default Hero;