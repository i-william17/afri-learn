import React from 'react';
import { FaBook, FaGraduationCap, FaChalkboardTeacher, FaUniversity, FaArrowRight } from 'react-icons/fa';
import heroImage from '../../assets/pixeltrue-idea.svg';
import backgroundImage from '../../assets/pexels-yankrukov-8199169.jpg';

const UniHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      }}
    >
      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-gray-800 to-black opacity-80"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 py-20 space-y-10 lg:space-y-0 lg:space-x-12">

        {/* Left Section: Text and Button */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="relative text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white animate-fadeIn underline underline-offset-4 decoration-pink-500 decoration-4">
            Discover Your Future with Knowledge
          </h1>

          <h2 className="text-lg lg:text-2xl font-medium text-gray-300 animate-fadeIn delay-150">
            Your Journey to Success Starts Here
          </h2>
          <p className="text-md lg:text-lg max-w-md mx-auto lg:mx-0 animate-fadeIn delay-300">
            Start your academic journey with us and unlock a world of possibilities. Choose from our vast range of courses to advance your career.
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-red-500 via-gray-500 to-black-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out">
            Find Your Course
            <FaArrowRight className="inline-block ml-2" />
          </button>
        </div>

        {/* Right Section: Redesigned Hero Images */}
        {/* Right Section: Redesigned Hero Images */}
        <div className="lg:w-1/2 flex items-center justify-center relative space-x-8">
          {/* Background Gradient for both images */}
          <div className="absolute w-96 h-96 lg:w-96 lg:h-96"></div>

          {/* Primary Image */}
          <div className="relative p-1 transform hover:scale-105 transition-transform duration-300 hidden lg:block">
            <img
              src={heroImage}
              alt="Primary Student Illustration"
              className="w-96 h-96 sm:w-80 sm:h-80 lg:w-5/6 lg:h-96 object-cover"
            />
          </div>
        </div>

      </div>

      {/* Feature Cards Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 pb-16 px-6">
        <div className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-80 rounded-lg text-center transition-all duration-300 hover:scale-105">
          <FaBook className="text-4xl text-blue-400 mb-4 animate-bounce" />
          <h3 className="text-xl font-semibold">Wide Range of Courses</h3>
          <p className="text-sm mt-2">Explore various disciplines and find your passion.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-80 rounded-lg text-center delay-150 transition-all duration-300 hover:scale-105">
          <FaGraduationCap className="text-4xl text-yellow-400 mb-4 animate-bounce" />
          <h3 className="text-xl font-semibold">Expert Instructors</h3>
          <p className="text-sm mt-2">Learn from industry leaders and experienced teachers.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-80 rounded-lg text-center delay-300 transition-all duration-300 hover:scale-105">
          <FaChalkboardTeacher className="text-4xl text-green-400 mb-4 animate-bounce" />
          <h3 className="text-xl font-semibold">Interactive Learning</h3>
          <p className="text-sm mt-2">Engage in hands-on learning experiences.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-80 rounded-lg text-center delay-450 transition-all duration-300 hover:scale-105">
          <FaUniversity className="text-4xl text-red-400 mb-4 animate-bounce" />
          <h3 className="text-xl font-semibold">Career Support</h3>
          <p className="text-sm mt-2">We support you through every step of your career.</p>
        </div>
      </div>
    </section>
  );
};

export default UniHero;
