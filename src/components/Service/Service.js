import React from 'react';
import { Link } from 'react-router-dom';

const Service = props => {
    const { id, name, img, description } = props.service;

    return (
        <div className="border rounded-md shadow-md hover:shadow-lg px-6 mt-12 pb-6">
            <img className="-m-12 pl-10 pb-16" src={img} alt="" />
            <div className="text-left space-y-4">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="leading-7 text-lg font-medium tracking-wider text-gray-600">{description}</p>
                <Link to={`/services/${id}`}><button className="px-10 md:px-28 rounded py-3 mt-8 border-2 border-blue-500 text-blue-500 font-semibold text-md">Learn More</button></Link>
            </div>
        </div>
    );
};

export default Service;