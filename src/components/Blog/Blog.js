import React from 'react';
import { Link } from 'react-router-dom';

const Blog = props => {
    const { id, name, img, description } = props.blog;

    return (
        <div className="border rounded-md shadow-md hover:shadow-lg">
            <img className="" src={img} alt="" />
            <div className="text-left space-y-4 p-6">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="leading-7 text-lg font-medium tracking-wider text-gray-600">{description}</p>
                <Link to={`/blogs/${id}`}><button className=" flex mt-8 text-blue-500 font-semibold text-md">Read More
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button></Link>
            </div>
        </div>
    );
};

export default Blog;