import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import endpoint from '../../endpoint';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchInstructors = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${endpoint}/api/instructors`); // Replace with your endpoint
      const sortedInstructors = response.data.sort((a, b) => b.rating - a.rating);
      setInstructors(sortedInstructors.slice(0, 3));
    } catch (err) {
      setError('Failed to load instructors. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  return (
    <div className="container mx-auto w-full py-20 px-4 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/3 flex flex-col justify-center p-5 mb-10 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Meet Our Top Instructors</h2>
        <p className="text-gray-600 mb-6 animate-fade-in">
          These are the highest-rated instructors who are leading in delivering excellent education and mentorship.
        </p>
        <a href="/about-instructors" className="text-red-600 font-semibold hover:underline animate-fade-in">
          See All Instructors
        </a>
      </div>

      {/* Right Section: Instructors Cards */}
      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading instructors...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            >
              <img
                src={instructor.image || 'default_image_url.jpg'} // Replace with a default image URL if needed
                alt={instructor.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mt-4 transition-transform duration-300 transform hover:scale-110"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1 animate-fade-in">{instructor.name}</h3>
                <p className="text-gray-600 mb-1">{instructor.course}</p>
                <p className="text-yellow-500 mb-2">{instructor.rating} ⭐</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <a
                    href={instructor.socialMedia.facebook}
                    className="text-gray-600 hover:text-red-600 transition duration-200"
                  >
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a
                    href={instructor.socialMedia.twitter}
                    className="text-gray-600 hover:text-red-600 transition duration-200"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a
                    href={instructor.socialMedia.linkedin}
                    className="text-gray-600 hover:text-red-600 transition duration-200"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={instructor.socialMedia.instagram}
                    className="text-gray-600 hover:text-red-600 transition duration-200"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Instructors;
