import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-red-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
        
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:space-x-8 text-xs sm:text-sm items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2 transition duration-300 hover:text-gray-200">
            <FaMapMarkerAlt className="text-lg animate-pulse" />
            <span>Jomo Kenyatta Avenue, Sparki, Kenya</span>
          </div>
          <div className="flex items-center space-x-2 transition duration-300 hover:text-gray-200">
            <FaEnvelope className="text-lg animate-pulse" />
            <span>info@afribot.africa</span>
          </div>
          <div className="flex items-center space-x-2 transition duration-300 hover:text-gray-200">
            <FaPhone className="text-lg animate-pulse" />
            <span>+123 456 789</span>
          </div>
          <div className="flex items-center space-x-2 transition duration-300 hover:text-gray-200">
            <FaGlobe className="text-lg animate-pulse" />
            <span>www.afribot.africa</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-2 md:space-x-4">
          <a
            href="https://facebook.com"
            className="transform hover:text-gray-300 transition duration-500 hover:scale-110"
          >
            <FaFacebookF className="text-lg md:text-xl" />
          </a>
          <a
            href="https://twitter.com"
            className="transform hover:text-gray-300 transition duration-500 hover:scale-110"
          >
            <FaTwitter className="text-lg md:text-xl" />
          </a>
          <a
            href="https://instagram.com"
            className="transform hover:text-gray-300 transition duration-500 hover:scale-110"
          >
            <FaInstagram className="text-lg md:text-xl" />
          </a>
          <a
            href="https://linkedin.com"
            className="transform hover:text-gray-300 transition duration-500 hover:scale-110"
          >
            <FaLinkedin className="text-lg md:text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
