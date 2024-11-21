import React, { useEffect } from 'react';
import { FaBookOpen, FaChalkboardTeacher, FaStar, FaLaptopCode, FaCertificate, FaArrowRight } from 'react-icons/fa';

const CoursesHero = () => {
  useEffect(() => {
    // Function to animate icons
    const animateIcons = () => {
      const icons = document.querySelectorAll('.icon');
      icons.forEach((icon, index) => {
        const delay = index * 0.5; // Stagger the animations
        icon.style.animationDelay = `${delay}s`;
      });
    };

    animateIcons();
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 flex flex-wrap justify-center items-center opacity-20">
        <FaBookOpen className="icon text-5xl md:text-7xl animate-bounce mx-2 transition-transform duration-500 hover:scale-110" />
        <FaChalkboardTeacher className="icon text-5xl md:text-7xl animate-bounce mx-2 transition-transform duration-500 hover:scale-110" />
        <FaStar className="icon text-5xl md:text-7xl animate-bounce mx-2 transition-transform duration-500 hover:scale-110" />
        <FaLaptopCode className="icon text-5xl md:text-7xl animate-bounce mx-2 transition-transform duration-500 hover:scale-110" />
        <FaCertificate className="icon text-5xl md:text-7xl animate-bounce mx-2 transition-transform duration-500 hover:scale-110" />
        <FaBookOpen className="icon text-5xl md:text-7xl animate-bounce mx-2 transition-transform duration-500 hover:scale-110" />
        <FaChalkboardTeacher className="icon text-5xl md:text-7xl animate-bounce mx-2 transition-transform duration-500 hover:scale-110" />
        <FaStar className="icon text-5xl md:text-7xl animate-bounce mx-2 transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Explore Our Courses</h1>
        <p className="text-lg md:text-xl mb-2 max-w-2xl mx-auto">
          Unlock your potential with our wide range of courses designed for learners at every level.
        </p>
        <p className="text-sm md:text-md mb-8 max-w-2xl mx-auto italic">
          Join our community of passionate learners today!
        </p>
        <div className="space-x-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            Get Started <FaArrowRight className='inline' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesHero;
