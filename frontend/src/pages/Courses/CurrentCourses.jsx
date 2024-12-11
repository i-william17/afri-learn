import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaDollarSign, FaUsers, FaLanguage } from 'react-icons/fa';

const CurrentCourses = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3 text-blue-600 border-b border-blue-200 pb-2">Current Courses</h3>
        <p className="text-gray-500">No courses available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200">
          <img
            src={course.image || '/default-course-image.jpg'}
            alt={course.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-2">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p className="text-gray-700">{course.description}</p>
            <p className="text-gray-700 mt-1">
              <FaUsers className="inline" /> Instructor: {course.instructor || 'Unknown'}
            </p>
            <p className="text-gray-700 mt-1">
              <FaDollarSign className="inline" /> Price: {course.price || 'Free'}
            </p>
            <p className="text-gray-700 mt-1">
              <FaLanguage className="inline" /> Language: {course.language || 'Not specified'}
            </p>
            <p className="text-gray-700 mt-1">
              <FaStar className="inline text-yellow-500" /> Rating: {course.rating || 'N/A'}
            </p>
          </div>
          <div className="p-2">
            <h3 className="font-bold mt-4">Sections:</h3>
            {course.sections && course.sections.length > 0 ? (
              <ul className="list-disc ml-4">
                {course.sections.map((section, sectionIndex) => (
                  <li key={sectionIndex}>
                    <strong>{section.title}</strong>
                    <ul className="list-disc ml-6">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex}>
                          {lesson.title} ({lesson.type})
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No sections available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

CurrentCourses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      instructor: PropTypes.string,
      language: PropTypes.string,
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          lessons: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              type: PropTypes.string.isRequired,
            })
          ),
        })
      ),
    })
  ),
};

export default CurrentCourses;
