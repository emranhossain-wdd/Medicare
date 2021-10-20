import React, { useState, useEffect } from 'react';
import Appointments from '../Appointments/Appointments';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import ShortSummary from '../ShortSummary/ShortSummary';

const Home = () => {
    // data load for services to showing home ui
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Hero />
            <ShortSummary />
            {/* services */}
            <div className="space-y-3">
                <h4 className="text-lg font-medium text-gray-500">OUR SERVICES</h4>
                <h2 className="text-4xl font-bold">Specialties</h2>
                <p className="w-5/6 md:w-4/12 mx-auto text-lg font-medium font-gray-500 tracking-wider">Medical services provided to the nature of the compensable injury or the process of recovery requires.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-9/12 gap-4 mx-auto py-12">
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
            <Appointments />
        </div>
    );
};

export default Home;