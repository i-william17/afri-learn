import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRegCalendarAlt, FaUserAlt, FaTimes, FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import endpoint from '../../endpoint';

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]); // To hold the fetched blogs
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  // Fetch data from the backend when the component is mounted
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${endpoint}/api/blogs`); // Replace with your backend URL
        setBlogsData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching blogs. Please try again.');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <div className="text-center">
          <FaSpinner className="animate-spin text-6xl text-red-600" />
          <p className="mt-4 text-lg">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-16">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-6 lg:px-16 bg-gray-900 text-white">
      {/* Top Text Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-red-600">Latest Blogs</h2>
        <p className="text-gray-300 text-lg">
          Explore our latest insights and articles to help you navigate your educational journey.
        </p>
      </motion.div>

      {/* Blogs Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((blog, index) => (
          <motion.div
            key={blog._id} // Use the unique _id from the backend response
            className="bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onClick={() => openModal(blog)}
          >
            {/* Category */}
            <div className="p-4">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {blog.category}
              </span>
            </div>
            {/* Image */}
            <img
              src={blog.image} // Use the image from the backend response
              alt={blog.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            {/* Date and Writer Info */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center text-gray-400">
                <FaRegCalendarAlt className="mr-1" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaUserAlt className="mr-1" />
                <span>{blog.writer}</span>
              </div>
            </div>
            {/* Title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-300 hover:text-red-500 transition-colors duration-300">
                {blog.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <motion.div
            className="bg-white rounded-lg shadow-2xl w-full max-w-8xl h-screen p-8 relative overflow-y-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mb-5 absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              <FaTimes />
            </button>
            {/* Blog Content */}
            <div>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedBlog.title}</h2>
              <div className="flex items-center justify-between text-gray-600 text-sm mb-6">
                <span className="flex items-center">
                  <FaRegCalendarAlt className="mr-1" />
                  {selectedBlog.date}
                </span>
                <span className="flex items-center">
                  <FaUserAlt className="mr-1" />
                  {selectedBlog.writer}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed font-semibold text-[14px]">{selectedBlog.content}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
