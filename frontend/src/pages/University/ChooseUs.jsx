import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaBook, FaArrowRight, FaBuilding } from 'react-icons/fa';
import learningImage from '../../assets/pexels-vanessa-loring-7869034.jpg'; // Replace with the path to your image
import { motion } from 'framer-motion';

const ChooseUs = () => {
  const [studentsEnrolled, setStudentsEnrolled] = useState(0);
  const [coursesAvailable, setCoursesAvailable] = useState(0);
  const [expertMentors, setExpertMentors] = useState(0);

  const animateNumber = (setter, endNumber, duration = 1000) => {
    let start = 0;
    const increment = endNumber / (duration / 100); // Calculate how much to increment per interval
    const interval = setInterval(() => {
      start += increment;
      if (start >= endNumber) {
        setter(endNumber);
        clearInterval(interval);
      } else {
        setter(Math.floor(start));
      }
    }, 100); // Update every 100 milliseconds
  };

  useEffect(() => {
    animateNumber(setStudentsEnrolled, 1000);
    animateNumber(setCoursesAvailable, 50);
    animateNumber(setExpertMentors, 100);
  }, []);

  return (
    <section className="mb-20 mt-10 relative py-16 bg-gray-50 overflow-hidden">
      {/* Background Icons */}
      <motion.div
        className="absolute top-16 left-1/3 text-blue-600 text-8xl transform -rotate-12 opacity-30 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaGraduationCap />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/4 text-gray-600 text-8xl transform -translate-x-1/2 opacity-20 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <FaBuilding />
      </motion.div>
      <motion.div
        className="absolute top-48 right-8 text-yellow-500 text-8xl opacity-30 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <FaBook />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-500 mb-2">Excellence in Learning</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Why Choose <span className="text-red-600">Afribot</span>?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 max-w-lg leading-relaxed">
            At <span className="font-semibold text-red-600">Afribot</span>, we believe in empowering minds to reach their full potential. Our platform is founded on <span className="text-red-600 font-semibold">innovation</span>, <span className="text-red-600 font-semibold">expertise</span>, and a <span className="text-red-600 font-semibold">passion for learning</span>, ensuring each learner has a unique and valuable experience.
          </p>
          <ul className="text-gray-700 space-y-4 mb-8">
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 font-bold text-xl mr-2">✓</span> Access to industry-expert mentors.
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 font-bold text-xl mr-2">✓</span> Hands-on projects to build real skills.
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 font-bold text-xl mr-2">✓</span> Flexible learning paths tailored to your needs.
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 font-bold text-xl mr-2">✓</span> A supportive community of learners and professionals.
            </li>
          </ul>
          <a
            href="#more"
            className="inline-block bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            Read More <FaArrowRight className="inline-block ml-1" />
          </a>
        </div>

        {/* Right Image with Animation */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={learningImage}
            alt="Afribot Learning"
            className="mr-10 w-full md:w-3/4 h-64 md:h-96 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Animated Statistics */}
      <div className="relative z-10 mt-10 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12 text-center">
        <motion.div
          className="text-gray-800 text-3xl font-bold"
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1 }}
        >
          <span className="block text-red-600 text-5xl font-extrabold">{studentsEnrolled}+</span>
          Students Enrolled
        </motion.div>
        <motion.div
          className="text-gray-800 text-3xl font-bold"
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1.2 }}
        >
          <span className="block text-red-600 text-5xl font-extrabold">{coursesAvailable}+</span>
          Courses Available
        </motion.div>
        <motion.div
          className="text-gray-800 text-3xl font-bold"
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1.4 }}
        >
          <span className="block text-red-600 text-5xl font-extrabold">{expertMentors}+</span>
          Expert Mentors
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;
