import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import instructorImage from '../../assets/instructor.png';

// Sample data for instructors
const instructors = [
  {
    id: 1,
    name: 'John Doe',
    course: 'Full-Stack Web Development',
    rating: 4.8,
    image: instructorImage,
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    course: 'Data Science Bootcamp',
    rating: 4.9,
    image: instructorImage,
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 3,
    name: 'Alice Johnson',
    course: 'Machine Learning A-Z',
    rating: 4.7,
    image: instructorImage,
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
];

const Instructors = () => {
  return (
    <div className="container mx-auto w-full py-20 px-4 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/3 flex flex-col justify-center p-5 mb-10 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Meet Our Instructors</h2>
        <p className="text-gray-600 mb-6 animate-fade-in">
          Our instructors are industry experts committed to delivering high-quality education and mentorship.
        </p>
        <a href="#all-instructors" className="text-red-600 font-semibold hover:underline animate-fade-in">
          See All Instructors
        </a>
      </div>

      {/* Right Section: Instructors Cards */}
      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mt-4 transition-transform duration-300 transform hover:scale-110"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-1 animate-fade-in">{instructor.name}</h3>
              <p className="text-gray-600 mb-1">{instructor.course}</p>
              <p className="text-yellow-500 mb-2">{instructor.rating} ⭐</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href={instructor.socialMedia.facebook} className="text-gray-600 hover:text-red-600 transition duration-200">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href={instructor.socialMedia.twitter} className="text-gray-600 hover:text-red-600 transition duration-200">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href={instructor.socialMedia.linkedin} className="text-gray-600 hover:text-red-600 transition duration-200">
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a href={instructor.socialMedia.instagram} className="text-gray-600 hover:text-red-600 transition duration-200">
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
