import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaTimes } from 'react-icons/fa';
import instructorImage from '../../../assets/instructor.png';

// Sample data for instructors
const instructors = [
  {
    id: 1,
    name: 'John Doe',
    course: 'Full-Stack Web Development',
    rating: 4.8,
    image: instructorImage,
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    biography: 'John is a seasoned software engineer with over 10 years of experience in web development. He loves teaching and mentoring new developers to help them build strong coding foundations.',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    courses: ['Full-Stack Web Development', 'React Advanced Workshop'],
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
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    biography: 'Jane has a passion for data analysis and machine learning. With a background in statistics and years of industry experience, she’s dedicated to making data science accessible and exciting.',
    skills: ['Python', 'R', 'Machine Learning', 'Pandas'],
    courses: ['Data Science Bootcamp', 'Python for Data Analysis'],
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
    email: 'alice.johnson@example.com',
    phone: '+1 (555) 789-1234',
    biography: 'Alice is a machine learning expert with extensive experience in AI research and practical applications. She enjoys teaching cutting-edge concepts and helping students master complex algorithms.',
    skills: ['Machine Learning', 'TensorFlow', 'Keras', 'AI Research'],
    courses: ['Machine Learning A-Z', 'Deep Learning Fundamentals'],
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
];

const AllInstructors = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

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
        Each one is committed to your learning journey and to helping you achieve your goals.
      </p>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-gray-700 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500 cursor-pointer"
            onClick={() => openModal(instructor)}
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 hover:shadow-lg transition duration-300"
            />
            <h3 className="text-xl font-bold text-center">{instructor.name}</h3>
            <p className="text-center text-gray-300 mb-2">{instructor.course}</p>
            <p className="text-center text-yellow-400">{instructor.rating} ⭐</p>
            <div className="flex justify-center mt-3 space-x-4">
              {instructor.socialMedia.facebook && (
                <a href={instructor.socialMedia.facebook} className="text-blue-500 hover:text-blue-700">
                  <FaFacebook size={20} />
                </a>
              )}
              {instructor.socialMedia.twitter && (
                <a href={instructor.socialMedia.twitter} className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={20} />
                </a>
              )}
              {instructor.socialMedia.linkedin && (
                <a href={instructor.socialMedia.linkedin} className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={20} />
                </a>
              )}
              {instructor.socialMedia.instagram && (
                <a href={instructor.socialMedia.instagram} className="text-pink-500 hover:text-pink-700">
                  <FaInstagram size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedInstructor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg p-8 relative max-w-2xl mx-auto shadow-2xl transform animate-fade-in-up">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition"
            >
              <FaTimes size={24} />
            </button>
            <div className="flex justify-center mb-6">
              <img
                src={selectedInstructor.image}
                alt={selectedInstructor.name}
                className="w-40 h-40 object-cover rounded-full shadow-xl"
              />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">{selectedInstructor.name}</h2>
            <p className="text-center text-gray-600 mb-4">{selectedInstructor.course}</p>
            <p className="text-gray-700 mb-6">{selectedInstructor.biography}</p>
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-gray-800">Skills:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {selectedInstructor.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-gray-800">Courses:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {selectedInstructor.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center text-gray-700">
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>{selectedInstructor.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>{selectedInstructor.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllInstructors;
