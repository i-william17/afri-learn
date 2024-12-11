import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaTimes,
} from 'react-icons/fa';
import endpoint from '../../../endpoint';

const AllInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchInstructors = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${endpoint}/api/instructors`);
      setInstructors(response.data);
    } catch (err) {
      console.error('Error fetching instructors:', err);
      setError('Failed to load instructors. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  const openModal = (instructor) => {
    setSelectedInstructor(instructor);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedInstructor(null);
  };

  return (
    <div className="container mx-auto py-16 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-2xl">
      <h1 className="text-4xl font-extrabold text-center mb-10 animate-pulse">Meet Our World-Class Instructors</h1>
      <p className="text-center mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Our team of instructors consists of top industry professionals who bring real-world experience and a passion for teaching.
      </p>

      {isLoading ? (
        <div className="text-center">
          <p className="text-lg text-gray-300">Loading instructors...</p>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-gray-700 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500 cursor-pointer"
              onClick={() => openModal(instructor)}
            >
              <img
                src={instructor.image || 'default_instructor_image.jpg'}
                alt={instructor.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 hover:shadow-lg transition duration-300"
              />
              <h3 className="text-xl font-bold text-center">{instructor.name}</h3>
              <p className="text-center text-gray-300 mb-2">{instructor.course}</p>
              <p className="text-center text-yellow-400">{instructor.rating} ⭐</p>
            </div>
          ))}
        </div>
      )}

      {modalOpen && selectedInstructor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg p-8 relative max-w-3xl mx-auto shadow-2xl animate-fade-in">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition"
            >
              <FaTimes size={24} />
            </button>
            <div className="flex justify-center mb-6">
              <img
                src={selectedInstructor.image || 'default_instructor_image.jpg'}
                alt={selectedInstructor.name}
                className="w-40 h-40 object-cover rounded-full shadow-xl"
              />
            </div>
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">{selectedInstructor.name}</h2>
            <p className="text-center text-gray-600 mb-4 italic">{selectedInstructor.course}</p>
            <p className="text-center text-gray-600 mb-6">{selectedInstructor.biography}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Skills</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {selectedInstructor.skills?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Contact</h4>
                <p className="flex items-center text-gray-600">
                  <FaEnvelope className="mr-2 text-red-600" /> {selectedInstructor.email}
                </p>
                <p className="flex items-center text-gray-600 mt-2">
                  <FaPhone className="mr-2 text-red-600" /> {selectedInstructor.phone}
                </p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-lg text-gray-800 mb-4">Follow on Social Media</h4>
              <div className="flex justify-center space-x-4">
                {selectedInstructor.socialMedia?.facebook && (
                  <a href={selectedInstructor.socialMedia.facebook} className="text-blue-600 hover:text-blue-800 transition">
                    <FaFacebook size={28} />
                  </a>
                )}
                {selectedInstructor.socialMedia?.twitter && (
                  <a href={selectedInstructor.socialMedia.twitter} className="text-blue-400 hover:text-blue-600 transition">
                    <FaTwitter size={28} />
                  </a>
                )}
                {selectedInstructor.socialMedia?.linkedin && (
                  <a href={selectedInstructor.socialMedia.linkedin} className="text-blue-700 hover:text-blue-900 transition">
                    <FaLinkedin size={28} />
                  </a>
                )}
                {selectedInstructor.socialMedia?.instagram && (
                  <a href={selectedInstructor.socialMedia.instagram} className="text-pink-500 hover:text-pink-700 transition">
                    <FaInstagram size={28} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllInstructors;
