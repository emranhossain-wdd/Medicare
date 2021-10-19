import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    useEffect(() => {
        const foundService = serviceDetails.find(service => service.id === parseInt(id));
        setSingleService(foundService)
    }, [serviceDetails])

    // console.log(singleService)
    return (
        <div>
            <div className="bg-blue-500 text-white py-14 space-y-4">
                <img className="mx-auto" src={singleService?.img} alt="" />
                <h1 className="text-5xl font-bold">{singleService?.name}</h1>
                <p className="w-5/6 md:w-5/12 mx-auto text-gray-200 text-lg tracking-widest font-semibold">{singleService?.description}</p>
                <button className="bg-white text-blue-600 text-2xl px-6 py-4 font-bold rounded-lg">Contact Us</button>
            </div>
        </div>
    );
};

export default ServiceDetails;