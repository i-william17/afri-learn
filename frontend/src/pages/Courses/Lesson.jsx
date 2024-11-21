import React, { useState } from 'react';
import {
  FaFilePdf,
  FaVideo,
  FaStar,
  FaUser,
  FaArrowLeft,
  FaCalendarAlt,
  FaUsers,
  FaClock,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';

// Sample lessons data
const lessonsData = [
  {
    id: 1,
    title: 'Introduction to the Course',
    content: 'This lesson covers the basics of the course and what you will learn.',
    videos: ['Introduction Video.mp4'],
    pdfs: ['Course Overview.pdf'],
  },
  {
    id: 2,
    title: 'Key Concepts',
    content: 'Explore the key concepts that form the foundation of the course.',
    videos: ['Key Concepts Video.mp4'],
    pdfs: ['Key Concepts Guide.pdf'],
  },
  // Additional lessons...
];

const LessonItem = ({ lesson, isOpen, onToggle, onSelect }) => (
  <div className="mb-4">
    <button
      onClick={() => {
        onToggle();
        onSelect(lesson);
      }}
      className={`flex justify-between items-center w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg text-white font-semibold hover:shadow-2xl transition-transform duration-300 transform ${
        isOpen ? 'scale-105' : ''
      }`}
    >
      <span>{lesson.title}</span>
      <span className="transition-transform duration-300">{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && (
      <div className="p-4 bg-blue-50 rounded-lg shadow-md mt-2 transition-opacity duration-500 ease-in-out">
        <p>{lesson.content}</p>
      </div>
    )}
  </div>
);

const LessonContent = ({ lesson }) => (
  <div className="p-8 bg-white shadow-2xl rounded-2xl transition-all duration-500 transform hover:scale-105">
    <h2 className="text-4xl font-bold mb-6 text-blue-700">{lesson.title}</h2>

    {/* Video Player Section */}
    <div className="flex flex-row space-y-4 mb-6">
      {lesson.videos.map((video, index) => (
        <div key={index} className="items-center space-x-2">
          <FaVideo className="text-blue-600 text-2xl" />
          <span className="text-blue-700 font-semibold">{video}</span>
          <video src={`/${video}`} controls className="w-full rounded-lg shadow-lg mt-2 hover:shadow-2xl transition duration-300" />
        </div>
      ))}
    </div>

    {/* PDF Section */}
    <div className="flex flex-col space-y-4 mb-6">
      {lesson.pdfs.map((pdf, index) => (
        <div key={index} className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition duration-200">
          <FaFilePdf className="text-2xl" />
          <span className="underline cursor-pointer">{pdf}</span>
        </div>
      ))}
    </div>
  </div>
);

const Lessons = () => {
  const [openLessonId, setOpenLessonId] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(lessonsData[0]);

  const handleToggle = (id) => {
    setOpenLessonId(openLessonId === id ? null : id);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10 bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Left: Lessons List */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Course Content</h2>
        {lessonsData.map((lesson) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            isOpen={openLessonId === lesson.id}
            onToggle={() => handleToggle(lesson.id)}
            onSelect={setSelectedLesson}
          />
        ))}
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition duration-300 transform hover:scale-105">
          <FaArrowLeft />
          <span>Back to Courses</span>
        </button>
      </div>

      {/* Right: Selected Lesson Content */}
      <div className="w-full md:w-2/3 space-y-6">
        {/* Lesson Materials */}
        <LessonContent lesson={selectedLesson} />

        {/* Course Overview */}
        <div className="p-6 bg-gray-50 shadow-2xl rounded-2xl transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Course Overview</h3>
          <p className="mb-4 text-gray-700">
            Explore the full scope of the course, including its main topics, key concepts, and practical applications.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Detailed guides to core principles</li>
            <li>Case studies and real-world applications</li>
            <li>In-depth explanation of complex concepts</li>
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="p-6 bg-white shadow-2xl rounded-2xl transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Student Reviews</h3>
          <div className="flex items-center space-x-2 mb-4">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 text-xl" />
            ))}
            <FaStar className="text-gray-300 text-xl" />
            <span className="font-semibold">(4.0 / 5)</span>
          </div>
          <p className="text-gray-700 italic">"A well-structured course that made learning easy and enjoyable."</p>
        </div>

        {/* Instructor Details */}
        <div className="flex items-center p-6 bg-gradient-to-r from-blue-500 to-blue-400 shadow-2xl rounded-2xl text-white transition-transform duration-300 transform hover:scale-105">
          <FaUser className="text-6xl" />
          <div className="ml-6">
            <h4 className="text-xl font-bold">John Doe</h4>
            <p className="text-gray-200">Senior Instructor</p>
          </div>
        </div>
      </div>

      {/* Additional Right Panel with Course Info */}
      <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-2xl shadow-2xl transition-transform duration-300 transform hover:scale-105">
        <h3 className="text-3xl font-semibold mb-4 text-blue-600">Course Info</h3>
        <div className="flex items-center mb-4">
          <FaCalendarAlt className="text-blue-500 mr-2" />
          <span>Course Date: Oct 5, 2024</span>
        </div>
        <div className="flex items-center mb-4">
          <FaUsers className="text-blue-500 mr-2" />
          <span>Enrolled Students: 1500</span>
        </div>
        <div className="flex items-center mb-4">
          <FaClock className="text-blue-500 mr-2" />
          <span>Duration: 12 hours</span>
        </div>
        <div className="flex items-center mb-4">
          <FaChalkboardTeacher className="text-blue-500 mr-2" />
          <span>Course Level: Intermediate</span>
        </div>

        <h4 className="text-xl font-semibold mt-6 mb-4">Learning Materials</h4>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-700">
            <FaVideo className="text-blue-500 mr-2" /> Video Lessons
          </li>
          <li className="flex items-center text-gray-700">
            <FaFilePdf className="text-red-500 mr-2" /> Downloadable PDFs
          </li>
          <li className="flex items-center text-gray-700">
            <FaStar className="text-yellow-500 mr-2" /> Certification
          </li>
        </ul>

        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-600 transition duration-300 transform hover:scale-105">
            <FiShare2 />
            <span>Share Course</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
