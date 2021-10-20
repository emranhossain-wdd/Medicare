import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PrivateDetailsShared from '../PrivateDetailsShared/PrivateDetailsShared';

const BlogDetails = () => {
    const { id } = useParams();
    const [blogDetails, setBlogDetails] = useState([]);
    const [singleBlog, setSingleBlog] = useState({});

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogDetails(data))
    }, [])

    useEffect(() => {
        const foundBlog = blogDetails.find(blog => blog.id === parseInt(id));
        setSingleBlog(foundBlog)
    }, [blogDetails])

    return (
        <div>
            <div className="bg-blue-500 text-white py-14 space-y-4">
                <h1 className="w-5/6 md:w-5/12 mx-auto text-5xl font-bold">{singleBlog?.name}</h1>
                <p className="w-5/6 md:w-5/12 mx-auto text-gray-200 text-lg tracking-widest font-semibold">{singleBlog?.description}</p>
            </div>
            <img className="mx-auto mt-6" src={singleBlog?.img} alt="" />
            <PrivateDetailsShared name={singleBlog?.name} />
        </div>
    );
};

export default BlogDetails;