import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaClock,
  FaRegMoneyBillAlt,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaUserFriends,
  FaLanguage,
  FaCertificate,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion'

const Details = () => {
  const [courses, setCourses] = useState([]); // Ensure the default is an empty array
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        const courseData = Array.isArray(response.data.data) ? response.data.data : [];
        setCourses(courseData);
        setFilteredCourses(courseData);
        toast.success("Courses successfully fetched.");
      } catch (error) {
        toast.error(`Error fetching course data: ${error.message}`);
        setCourses([]); // Fallback to empty array
        setFilteredCourses([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    if (Array.isArray(courses)) {
      const filtered = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchTerm, courses]);

  useEffect(() => {
    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [filteredCourses]);

  const paginatedCourses = (Array.isArray(filteredCourses) ? filteredCourses : []).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) {
    return <div className="text-center py-6">Loading courses...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar - Course List */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <input
            type="text"
            placeholder="Search courses"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {paginatedCourses.length > 0 ? (
            paginatedCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={`p-4 border rounded-lg mb-2 cursor-pointer ${selectedCourse?.id === course.id ? "bg-gray-200" : ""
                  }`}
              >
                <h3 className="font-medium text-red-700">{course.title}</h3>
                <p className="text-sm text-gray-500">Category: {course.category}</p>
                <p className="text-sm text-gray-500">
                  Duration: {course.duration} hours
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No courses found.</p>
          )}

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              <FaChevronCircleLeft />
            </button>
            <span>
              Page {currentPage} of{" "}
              {Math.ceil(filteredCourses.length / itemsPerPage)}
            </span>
            <button
              disabled={currentPage === Math.ceil(filteredCourses.length / itemsPerPage)}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${currentPage === Math.ceil(filteredCourses.length / itemsPerPage)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
                }`}
            >
              <FaChevronCircleRight />
            </button>
          </div>
        </div>

        <div className="col-span-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg p-6">
          {selectedCourse ? (
            <>
              {/* Thumbnail */}
              <motion.img
                src={selectedCourse.thumbnailImage}
                alt={selectedCourse.title}
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              />

              {/* Title */}
              <motion.h1
                className="text-3xl font-bold mb-4 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {selectedCourse.title}
              </motion.h1>

              {/* Tags and Ratings */}
              <div className="flex flex-wrap items-center mb-6 gap-3">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full shadow">
                  {selectedCourse.category}
                </span>
                <div className="flex items-center text-yellow-500">
                  {[...Array(Math.round(selectedCourse.rating || 0))].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                  <span className="ml-2 text-gray-700">({selectedCourse.rating || "N/A"})</span>
                </div>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full shadow">
                  {selectedCourse.tags || "Cutting Edge"}
                </span>
              </div>

              {/* Instructor Info */}
              <div className="flex items-center mb-6 text-gray-700">
                <FaChalkboardTeacher className="text-blue-600 mr-2" />
                <span className="font-medium">{selectedCourse.instructor}</span>
                <span className="ml-4 italic">{selectedCourse.email}</span>
              </div>

              {/* Overview and Details */}
              <motion.div
                className="mb-6 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p>{selectedCourse.overview}</p>
                <p className="mt-2">{selectedCourse.shortDescription}</p>
                <p className="mt-2">{selectedCourse.prerequisites}</p>
                <p className="mt-2">{selectedCourse.targetAudience}</p>
              </motion.div>

              {/* Pricing and Duration */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <FaRegMoneyBillAlt className="text-green-600 mr-2" />
                  <span className="text-gray-700 font-semibold">
                    Fee:{" "}
                    <span className="text-red-600">
                      {selectedCourse.pricing.currency} {selectedCourse.pricing.basePrice}
                    </span>
                  </span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-blue-600 mr-2" />
                  <span className="text-gray-700 font-semibold">
                    Duration: {selectedCourse.settings.durationOfWeeks} weeks
                  </span>
                </div>
                <div className="flex items-center">
                  <FaGraduationCap className="text-purple-600 mr-2" />
                  <span className="text-gray-700 font-semibold">
                    Level: {selectedCourse.level}
                  </span>
                </div>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center bg-green-100 px-4 py-2 rounded-lg shadow">
                  <FaUserFriends className="text-green-600 mr-2" />
                  <span className="font-semibold text-gray-800">
                    Enrollment Limit:{" "}
                    <span className="text-green-600">{selectedCourse.settings.enrollmentLimit}</span>
                  </span>
                </div>
                <div className="flex items-center bg-blue-100 px-4 py-2 rounded-lg shadow">
                  <FaLanguage className="text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-800">
                    Language: <span className="text-blue-600">{selectedCourse.meta.language}</span>
                  </span>
                </div>
                <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-lg shadow">
                  <FaCertificate className="text-yellow-600 mr-2" />
                  <span className="font-semibold text-gray-800">
                    Certification:{" "}
                    <span className="text-yellow-600">{selectedCourse.settings.certificationType}</span>
                  </span>
                </div>
              </div>

              {/* Video Section */}
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  src={selectedCourse.introductionVideo}
                  controls
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Curriculum */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Curriculum</h2>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {selectedCourse.sections?.map((section, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg shadow cursor-pointer"
                  >
                    <h3 className="font-semibold text-lg text-gray-800">
                      {section.title}
                    </h3>
                    <div className="ml-4 text-gray-600">
                      {section.lessons?.map((lesson, idx) => (
                        <p key={idx}>- {lesson.title}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </>
          ) : (
            <p className="text-center text-gray-500">
              Select a course to view details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
