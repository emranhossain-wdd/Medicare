import React from 'react';

const ShortSummary = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 md:w-9/12 mx-auto shadow-xl py-16 mb-16">
            {/* 1 */}
            <div className="flex items-start justify-center w-10/12 mx-auto">
                <img className="w-12" src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e31091fc3a640f77d1141b1_contact-bar-phone-icon.svg"} alt="" />
                <div className="text-left pl-4 space-y-2">
                    <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                    <p><a href="tel:4048507080">(404) 850 - 7080</a></p>
                    <p><a href="mailto:info@medicare.com">info@medicare.com</a></p>
                </div>
            </div>
            {/* 2 */}
            <div className="flex items-start justify-center w-10/12 mx-auto my-8 md:my-0">
                <img className="w-12" src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e310cbae800ca9e25770f6e_contact-bar-clock-icon.svg"} alt="" />
                <div className="text-left pl-4 space-y-2">
                    <h3 className="text-2xl font-bold mb-6">Open Hours</h3>
                    <p>Mon - Fri: 8:00am to 5:00pm</p>
                    <p>Saturday: 9:00am to 3:30pm</p>
                    <p>Sunday: 9:00am to 3:30pm</p>
                </div>
            </div>
            {/* 3 */}
            <div className="flex items-start justify-center w-10/12 mx-auto">
                <img className="w-12" src={"https://assets.website-files.com/5e30f06b05f79621331ddc25/5e310cb3cf36f64d2f4a3c0f_contact-bar-medicine-icon.svg"} alt="" />
                <div className="text-left pl-4 space-y-2">
                    <h3 className="text-2xl font-bold mb-6">Services</h3>
                    <p>Cardiology</p>
                    <p>Gastroenterologist</p>
                    <p>Orthopaedic</p>
                </div>
            </div>
        </div>
    );
};

export default ShortSummary;