import React, { useState } from 'react';
import { FaPlay, FaGraduationCap, FaLaptop, FaSignInAlt, FaQuoteLeft, FaCalendarAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import work from '../../assets/workshop.jpg';

const Workshop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-11/12 mb-16 container mx-auto py-16 px-6 lg:px-16 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section: Image with Video Icon */}
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={work}
            alt="Workshop"
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-red-600 rounded-full cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out shadow-lg"
            onClick={openModal}
          >
            <FaPlay className="text-white text-4xl" />
          </motion.div>

          {/* Video Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity">
              <div className="bg-white p-6 rounded-xl shadow-2xl relative max-w-2xl w-full mx-4 transform transition-transform scale-95 hover:scale-100">
                <button 
                  onClick={closeModal} 
                  className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-125"
                >
                  &times;
                </button>
                <iframe 
                  className="w-full h-64 rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/your-video-id" 
                  title="Video" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
                <div className="mt-4 flex justify-center space-x-4">
                  {[
                    { icon: FaFacebook, color: 'text-blue-600', url: "https://www.facebook.com/sharer/sharer.php?u=your-url" },
                    { icon: FaTwitter, color: 'text-blue-400', url: "https://twitter.com/intent/tweet?url=your-url" },
                    { icon: FaLinkedin, color: 'text-blue-700', url: "https://www.linkedin.com/shareArticle?mini=true&url=your-url" },
                  ].map(({ icon: Icon, color, url }, idx) => (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl ${color} hover:opacity-80`}
                      title="Share"
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Section: Title and Description */}
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Join Our Workshops!</h2>
          <p className="text-gray-200 mb-6">
            Enhance your skills and knowledge with our interactive workshops tailored to help you succeed. Whether you're looking to advance in your career or explore new interests, our workshops offer something for everyone. Join us and unlock your potential!
          </p>

          {/* Cards for Graduation Rate and Virtual Classes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <motion.div
              className="p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <FaGraduationCap className="text-red-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold">99% Graduation Rate</h3>
              <p className="text-gray-300">Join thousands of successful graduates who have transformed their lives.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <FaLaptop className="text-red-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold">Smooth Virtual Classes</h3>
              <p className="text-gray-300">Experience seamless online learning from the comfort of your home.</p>
            </motion.div>
          </div>

          {/* Upcoming Workshops Section */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-red-600 mb-4">Upcoming Workshops</h3>
            <div className="flex flex-col space-y-4">
              <motion.div className="p-4 bg-gray-700 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-red-600 text-2xl mr-2" />
                  <h4 className="text-xl font-semibold">Robot Operating System</h4>
                </div>
                <p className="text-gray-300">Date: November 15, 2024</p>
                <p className="text-gray-300">Time: 10:00 AM - 12:00 PM</p>
              </motion.div>
              <motion.div className="p-4 bg-gray-700 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-red-600 text-2xl mr-2" />
                  <h4 className="text-xl font-semibold">Advanced JavaScript</h4>
                </div>
                <p className="text-gray-300">Date: November 22, 2024</p>
                <p className="text-gray-300">Time: 2:00 PM - 4:00 PM</p>
              </motion.div>
            </div>
          </div>

          {/* Quick Join Button */}
          <motion.button
            className="flex items-center bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <FaSignInAlt className="mr-2" />
            Quick Join
          </motion.button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-red-600 mb-6">What Our Participants Say</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <motion.div
            className="flex flex-col p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
            <p className="text-gray-300 italic">“This workshop changed my life! I learned so much and met great people.”</p>
            <div className="mt-4">
              <span className="font-bold">John Doe</span>
              <span className="text-gray-400">, Software Engineer</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
            <p className="text-gray-300 italic">“The instructors were fantastic! I feel much more confident in my skills.”</p>
            <div className="mt-4">
              <span className="font-bold">Jane Smith</span>
              <span className="text-gray-400">, Marketing Manager</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
