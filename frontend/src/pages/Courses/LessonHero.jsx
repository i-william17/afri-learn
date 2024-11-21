import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image from '../../assets/pexels-tima-miroshnichenko-5303633.jpg';

const LessonHero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate background position based on scroll
  const backgroundPositionY = `${scrollY * 0.5}px`; // Adjust speed factor as necessary

  return (
    <div className="relative flex items-center justify-center h-[300px] md:h-[400px] mb-10 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${backgroundPositionY}`,
          opacity: 0.3,
        }}
      ></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-indigo-600 opacity-70"></div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4" 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Welcome to Your Lessons
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-6" 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore, Learn, and Master the Course Content
        </motion.p>
        {/* Centered Button Container */}
        <div className="flex justify-center">
          <motion.button 
            className="flex items-center justify-center px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold text-blue-700 bg-white rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105" 
            whileHover={{ scale: 1.05 }}
          >
            <FaPlay className="mr-2" />
            Start Learning
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LessonHero;
