import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
    const { id } = useParams();
    const [doctorDetails, setDoctorDetails] = useState([]);
    const [singleDoctor, setSingleDoctor] = useState({});

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctorDetails(data))
    }, [])

    useEffect(() => {
        const foundDoctor = doctorDetails.find(doctor => doctor.id === parseInt(id));
        setSingleDoctor(foundDoctor)
    }, [doctorDetails])

    return (
        <div>
            <div className="md:flex w-5/6 md:w-7/12 mx-auto">
                <img src={singleDoctor?.img} alt="" />
                <div className="space-y-3 mt-6 text-center md:text-left w-5/6 md:w-11/12 ml-0 md:ml-8 mx-auto">
                    <h4 className="text-lg font-semibold">{singleDoctor?.department}_</h4>
                    <h1 className="text-5xl font-bold">{singleDoctor?.name}</h1>
                    <div className="flex justify-center md:justify-start space-x-3">
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
                    <p className=" text-gray-500 text-lg tracking-widest font-semibold">{singleDoctor?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;