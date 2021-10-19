import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="bg-blue-500 text-white py-14 space-y-4">
                <h1 className="text-5xl font-bold">Blogs</h1>
                <p className="w-5/6 md:w-5/12 mx-auto text-gray-200 text-lg tracking-widest font-semibold">Medical services provided to the injured worker [shall] must not be more than the nature of the compensable injury or the process of recovery requires.</p>
                <button className="bg-white text-blue-600 text-2xl px-6 py-4 font-bold rounded-lg">Contact Us</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-9/12 gap-6 mx-auto py-12">
                {
                    blogs?.map(blog => <Blog
                        key={blog.id}
                        blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;