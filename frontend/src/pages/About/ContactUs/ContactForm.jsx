import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/pexels-yankrukov-8199169.jpg';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    // Simulate a form submission process
    setTimeout(() => {
      setLoading(false);
      setSuccess('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Linear Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"
      ></div>

      <div className="relative w-full max-w-2xl bg-white bg-opacity-80 p-10 rounded-3xl shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8 animate__animated animate__fadeIn">
          Contact Us
        </h2>

        {/* Error and Success Messages */}
        {error && (
          <motion.p
            className="text-red-500 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.p>
        )}
        {success && (
          <motion.p
            className="text-green-500 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCheckCircle className="inline mr-2" />
            {success}
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Your Name
            </label>
            <div className="flex items-center mt-2">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 pl-10 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your name"
                required
              />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Your Email
            </label>
            <div className="flex items-center mt-2">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your email"
                required
              />
            </div>
          </motion.div>

          {/* Message Input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 mt-2 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder="Write your message here"
              rows="5"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div className="w-full">
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 bg-blue-600 text-white text-lg font-semibold rounded-xl ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              } transition duration-300 ease-in-out`}
            >
              {loading ? 'Sending...' : <><FaPaperPlane className="inline mr-2" /> Send Message</>}
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
