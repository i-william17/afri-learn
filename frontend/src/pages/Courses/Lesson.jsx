import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaFilePdf,
  FaVideo,
  FaArrowLeft,
  FaStar,
  FaUser,
  FaCalendarAlt,
  FaUsers,
  FaClock,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const Lesson = () => {
  const [lessonsList, setLessonsList] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/courses");
        // Assuming the response has the 'data' object with an array of lessons
        setLessonsList(response.data.data || []);  // If the lessons are inside response.data.data
        setSelectedLesson(response.data.data ? response.data.data[0] : null); // Auto-select the first lesson
        console.log(response.data); // Log the entire response for debugging
      } catch (err) {
        setError("Failed to fetch lessons. Please try again.");
        setLessonsList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  const fetchLessonById = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/courses/${id}`);
      setSelectedLesson(response.data); // Assuming the response directly gives the selected lesson
      console.log(response.data); // Log the selected lesson data
    } catch (err) {
      setError("Failed to fetch lesson details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center text-blue-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10 bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Sidebar: Lesson List */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Course Content</h2>
        {Array.isArray(lessonsList) && lessonsList.length > 0 ? (
          lessonsList.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => fetchLessonById(lesson.id)}
              className={`flex justify-between items-center w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg text-white font-semibold hover:shadow-2xl transition-transform duration-300 transform ${
                selectedLesson?.id === lesson.id ? "scale-105" : ""
              }`}
            >
              <span>{lesson.title}</span>
              <span className="transition-transform duration-300">
                {selectedLesson?.id === lesson.id ? "-" : "+"}
              </span>
            </button>
          ))
        ) : (
          <p className="text-center text-gray-500">No lessons available.</p>
        )}
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition duration-300 transform hover:scale-105">
          <FaArrowLeft />
          <span>Back to Courses</span>
        </button>
      </div>

      {/* Main Content: Lesson Details */}
      <div className="w-full md:w-2/3">
        {selectedLesson ? (
          <div className="p-8 bg-white shadow-2xl rounded-2xl transition-all duration-500 transform hover:scale-105">
            <h2 className="text-4xl font-bold mb-6 text-blue-700">{selectedLesson.title}</h2>
            <p className="mb-6 text-gray-700">{selectedLesson.content || "No content available"}</p>

            <div className="flex flex-col space-y-4 mb-6">
              {selectedLesson.videos?.map((video, index) => (
                <div key={index} className="items-center space-x-2">
                  <FaVideo className="text-blue-600 text-2xl" />
                  <span className="text-blue-700 font-semibold">{video.name}</span>
                  <video
                    src={video.url}
                    controls
                    className="w-full rounded-lg shadow-lg mt-2 hover:shadow-2xl transition duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4 mb-6">
              {selectedLesson.pdfs?.map((pdf, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition duration-200"
                >
                  <FaFilePdf className="text-2xl" />
                  <a href={pdf.url} download className="underline">
                    {pdf.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Select a lesson to view its content.</p>
        )}
      </div>

      {/* Course Info */}
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

export default Lesson;
