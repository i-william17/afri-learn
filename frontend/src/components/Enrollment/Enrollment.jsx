import React from 'react';
import { FaBookOpen, FaUserGraduate, FaEnvelopeOpenText, FaMedal } from 'react-icons/fa';

const Enrollment = () => {
  return (
    <div className="container mx-auto py-16 px-6 lg:px-16 bg-gray-900 text-white">
      {/* Top Text Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-red-600">How to Start Your Journey with Us</h2>
        <p className="text-gray-300 text-lg">
          Whether you want to teach or learn, we provide the best resources to help you achieve your goals.
          Explore a wide range of courses or share your expertise with learners.
        </p>
      </div>

      {/* Top Section with Icons and Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-center">
        <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
          <FaBookOpen className="text-white text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Learn Anything</h3>
          <p className="text-gray-300">Explore courses on any subject and expand your knowledge with experts.</p>
        </div>
        <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
          <FaUserGraduate className="text-white text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Learn with Experts</h3>
          <p className="text-gray-300">Learn from industry leaders and highly qualified instructors in your field.</p>
        </div>
        <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
          <FaMedal className="text-white text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Get Certificate Online</h3>
          <p className="text-gray-300">Receive certifications upon completion of your courses to boost your career.</p>
        </div>
        <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out">
          <FaEnvelopeOpenText className="text-white text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">E-mail Marketing</h3>
          <p className="text-gray-300">Stay updated with new courses, promotions, and more through email marketing.</p>
        </div>
      </div>

      {/* Bottom Section with Instructor & Student Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Become an Instructor Card */}
        <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-700 shadow-2xl rounded-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">Become an Instructor</h3>
            <p className="text-gray-300 mb-8">
              Share your knowledge and experience with students around the world. Join our team of expert instructors.
            </p>
          </div>
          <button className="bg-red-600 text-white py-3 px-8 rounded-full hover:bg-red-500 transition duration-300">
            Apply Now
          </button>
        </div>

        {/* Enroll as a Student Card */}
        <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-700 shadow-2xl rounded-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">Enroll as a Student</h3>
            <p className="text-gray-300 mb-8">
              Start learning today by enrolling in courses that match your interests and career goals.
            </p>
          </div>
          <button className="bg-red-600 text-white py-3 px-8 rounded-full hover:bg-red-500 transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
