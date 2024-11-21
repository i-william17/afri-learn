import React, { useEffect } from 'react';
import { FaBookOpen, FaChalkboardTeacher, FaStar, FaRegClock, FaThumbsUp } from 'react-icons/fa';

const DetailsHero = () => {
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
    <div className="relative bg-gradient-to-r from-green-500 to-blue-500 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-20">
        <FaBookOpen className="icon text-7xl animate-bounce mx-4 transition-transform duration-500 hover:scale-110" />
        <FaChalkboardTeacher className="icon text-7xl animate-bounce mx-4 transition-transform duration-500 hover:scale-110" />
        <FaStar className="icon text-7xl animate-bounce mx-4 transition-transform duration-500 hover:scale-110" />
        <FaRegClock className="icon text-7xl animate-bounce mx-4 transition-transform duration-500 hover:scale-110" />
        <FaThumbsUp className="icon text-7xl animate-bounce mx-4 transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold mb-4 leading-tight">Course Details</h1>
        <p className="text-xl mb-2 max-w-2xl mx-auto">
          Dive deep into the course content and explore what you'll learn.
        </p>
        <p className="text-md mb-8 max-w-2xl mx-auto italic">
          Empowering your knowledge for a brighter future!
        </p>
        <button className="bg-red-600 text-white px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default DetailsHero;
