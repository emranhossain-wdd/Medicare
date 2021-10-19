import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <div className="bg-blue-500 text-white py-14 space-y-4">
                <h1 className="text-5xl font-bold">Our Doctors</h1>
                <p className="w-5/6 md:w-5/12 mx-auto text-gray-200 text-lg tracking-widest font-semibold">Medical doctors provided to the injured worker [shall] must not be more than the nature of the compensable injury or the process of recovery requires.</p>
                <button className="bg-white text-blue-600 text-2xl px-6 py-4 font-bold rounded-lg">Contact Us</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-9/12 gap-4 mx-auto py-12">
                {
                    doctors?.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;