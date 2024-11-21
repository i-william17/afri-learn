import React, { useState } from 'react';
import { FaUserGraduate, FaPlayCircle, FaArrowRight } from 'react-icons/fa';
import edTechImage from '../../assets/pexels-tima-miroshnichenko-5303633.jpg';

const EdTechHistory = () => {
  const [showCards, setShowCards] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <section className="w-full max-w-screen-lg relative flex flex-col lg:flex-row mx-auto px-4 py-10 lg:px-6 lg:py-16 space-y-10 lg:space-y-0 lg:space-x-12 bg-gradient-to-r from-red-700 via-gray-800 to-black text-white shadow-lg overflow-hidden">
      {/* Left Section: Image with Hover Cards */}
      <div 
        className="relative w-full h-64 lg:h-auto"
        onMouseEnter={() => setShowCards(true)}
        onMouseLeave={() => setShowCards(false)}
      >
        <img 
          src={edTechImage} 
          alt="EdTech History" 
          className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
        />

        {/* Hover Cards */}
        {showCards && (
          <>
            <div className="absolute top-6 left-6 p-3 lg:p-4 bg-gray-800 bg-opacity-90 rounded-lg text-center shadow-xl transition-transform duration-300 transform scale-100 hover:scale-105">
              <FaUserGraduate className="text-yellow-400 text-2xl mb-1 animate-bounce" />
              <h3 className="text-sm lg:text-lg font-semibold">Enrolled Students</h3>
              <p className="text-xs lg:text-sm mt-1">Over 1,000+</p>
            </div>
            <div 
              className="absolute bottom-6 left-6 p-3 lg:p-4 bg-gray-800 bg-opacity-90 rounded-lg text-center shadow-xl transition-transform duration-300 transform scale-100 hover:scale-105 cursor-pointer"
              onClick={toggleModal}
            >
              <FaPlayCircle className="text-red-700 text-2xl mb-1 animate-bounce" />
              <h3 className="text-sm lg:text-lg font-semibold">Watch Video</h3>
              <p className="text-xs lg:text-sm mt-1">Learn More</p>
            </div>
          </>
        )}
      </div>

      {/* Right Section: Animated Title, Paragraphs, and Bullet Points */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left animate-fadeIn">
        <h1 className="text-2xl lg:text-4xl font-bold leading-tight text-white underline underline-offset-4 decoration-purple-500 decoration-4 transition-transform duration-300 transform hover:scale-105">
          Our Journey in EdTech
        </h1>
        <p className="text-md lg:text-lg font-medium text-gray-300 transition-opacity duration-500">
          Since our inception, we've been dedicated to revolutionizing education through technology.
        </p>
        <p className="text-sm lg:text-md text-gray-400 transition-opacity duration-500">
          From innovative online courses to interactive learning environments, our approach to EdTech focuses on:
        </p>

        {/* Bullet Points */}
        <ul className="text-sm lg:text-md text-gray-300 space-y-2">
          <li className="transition-transform duration-300 hover:translate-x-2"><FaArrowRight className="inline-block w-4 h-4 mr-2 bg-red-700" /> Accessible education for all</li>
          <li className="transition-transform duration-300 hover:translate-x-2"><FaArrowRight className="inline-block w-4 h-4 mr-2 bg-red-700"/> In-depth, industry-driven curricula</li>
          <li className="transition-transform duration-300 hover:translate-x-2"><FaArrowRight className="inline-block w-4 h-4 mr-2 bg-red-700"/> Engaging, hands-on learning experiences</li>
          <li className="transition-transform duration-300 hover:translate-x-2"><FaArrowRight className="inline-block w-4 h-4 mr-2 bg-red-700"/> Support for lifelong learning</li>
        </ul>

        {/* Know More Button */}
        <button className="mt-6 px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-red-500 via-gray-500 to-black-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center justify-center">
          Know More
          <FaArrowRight className="ml-2"/>
        </button>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-white mb-4">Learn More About Us</h2>
            <iframe 
              className="w-full h-60 rounded-lg" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button 
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors duration-300"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EdTechHistory;
