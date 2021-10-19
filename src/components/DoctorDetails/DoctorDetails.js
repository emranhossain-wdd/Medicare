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
            <div className="bg-blue-500 text-white py-14 space-y-4">
                <h1 className="text-5xl font-bold">{singleDoctor?.name}</h1>
                <p className="w-5/6 md:w-5/12 mx-auto text-gray-200 text-lg tracking-widest font-semibold">{singleDoctor?.description}</p>
                <button className="bg-white text-blue-600 text-2xl px-6 py-4 font-bold rounded-lg">Contact Us</button>
            </div>
            <img className="mx-auto" src={singleDoctor?.img} alt="" />
        </div>
    );
};

export default DoctorDetails;