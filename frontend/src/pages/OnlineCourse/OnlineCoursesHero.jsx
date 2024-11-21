import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroimg from '../../assets/heroimg.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaUserGraduate, FaChalkboardTeacher, FaPlayCircle } from 'react-icons/fa';
import CountUp from 'react-countup';

const OnlineCoursesHero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleVideoOpen = () => setIsVideoOpen(true);
  const handleVideoClose = () => setIsVideoOpen(false);

  // Update mouse position for parallax effect
  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="relative bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col lg:flex-row items-center py-12 px-8"
      onMouseMove={handleMouseMove}
    >
      {/* Left Section */}
      <div className="ml-10 flex-1 space-y-4 lg:pr-10 px-4">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight animate-drawText">
          Learning is What You Make of it. Make it Yours at Afribot.
        </h1>
        <p className="mt-2 text-lg lg:text-xl text-gray-600">
          Unlock a world of learning with our expertly curated courses, designed to empower you with the skills and knowledge needed in today’s fast-paced world. Whether you're seeking to master a new hobby, advance in your career, or explore a new field entirely, our platform offers a vast array of courses crafted by industry experts. Each course is packed with engaging lessons, practical exercises, and real-world insights to ensure you can apply your new skills confidently. Join a community of lifelong learners, gain recognized certifications, and turn your ambitions into achievements—your journey to success starts here.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition transform hover:scale-105 shadow-xl">
            <span>Start Free Trial</span>
          </button>
          <button 
            onClick={handleVideoOpen} 
            className="bg-red-600 text-white py-3 px-8 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition transform hover:scale-105 shadow-xl"
          >
            <FaPlayCircle className="text-white" />
            <span>Watch Video</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="ml-10 flex flex-col items-center lg:items-start flex-1 mt-10 lg:mt-0 space-y-6">
        <div 
          className="relative group mb-10"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.1s",
          }}
        >
          <img 
            src={heroimg}
            alt="Background" 
            className="w-72 lg:w-96 h-auto object-cover transition-transform transform group-hover:scale-110 duration-300"
          />
          <div className="-ml-20 mt-32 absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 flex items-center space-x-2">
            <FaUserGraduate className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Enrolled Students</h3>
              <p className="text-3xl text-blue-600 font-bold">
                <CountUp end={1000} duration={3} />+
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 flex items-center space-x-2">
            <FaChalkboardTeacher className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Instructors</h3>
              <p className="text-3xl text-blue-600 font-bold">
                <CountUp end={30} duration={5} />+
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity">
          <div className="bg-white p-6 rounded-xl shadow-2xl relative max-w-2xl w-full mx-4 transform transition-transform scale-95 hover:scale-100">
            <button 
              onClick={handleVideoClose} 
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
  );
};

export default OnlineCoursesHero;
