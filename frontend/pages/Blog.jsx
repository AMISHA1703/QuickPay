import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_URL}/blogs/`)
      .then(response => {
        setBlogs(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8"> Blogs on Payment Methods</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg   w-full shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="p-6 ">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{blog.title}</h2>
              <p className="text-gray-700 text-base line-clamp-3">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
