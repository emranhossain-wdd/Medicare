import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = props => {
    const { id, name, department, img, description } = props.doctor;

    return (
        <div className="border rounded-md shadow-md hover:shadow-lg">
            <img src={img} alt="" />
            <div className="text-left space-y-4 p-6">
                <h3 className="text-2xl font-bold">{name}</h3>
                <h4 className="text-lg text-blue-500">{department}</h4>
                <p className="leading-7 text-lg font-medium tracking-wider text-gray-600">{description}</p>
                <div className="flex space-x-3">
                    <span className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <span className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                </div>
                <Link to={`/doctors/${id}`}><button className="px-10 md:px-28 rounded py-3 mt-8 border-2 border-blue-500 text-blue-500 font-semibold text-md">Learn More</button></Link>
            </div>
        </div>
    );
};

export default Doctor;