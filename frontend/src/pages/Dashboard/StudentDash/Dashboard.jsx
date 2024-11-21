import React from 'react';
import { FaTachometerAlt, FaBook, FaStar, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import imginst from "../../../assets/instructor.png";

// Simulated data (Replace with dynamic data from API or state)
const courses = [
  { id: 1, title: 'React for Beginners', instructor: 'John Doe', progress: 80, status: 'Active', rating: 4.5, image: '/path/to/image1.jpg' },
  { id: 2, title: 'Advanced JavaScript', instructor: 'Jane Smith', progress: 50, status: 'Enrolled', rating: 4.7, image: '/path/to/image2.jpg' },
  { id: 3, title: 'HTML & CSS Basics', instructor: 'Mark Lee', progress: 100, status: 'Completed', rating: 4.8, image: '/path/to/image3.jpg' },
  { id: 4, title: 'Data Structures in Java', instructor: 'Sara Park', progress: 30, status: 'Active', rating: 4.0, image: '/path/to/image4.jpg' }
];

const Dashboard = () => {
  const enrolledCourses = courses.filter(course => course.status === 'Enrolled');
  const activeCourses = courses.filter(course => course.status === 'Active');
  const completedCourses = courses.filter(course => course.status === 'Completed');

  return (
    <div className="p-6 space-y-8">
      {/* Instructor Card */}
      <motion.div 
        className="my-3 p-6 bg-gradient-to-r from-red-500 via-gray-700 to-red-600 text-white rounded-lg shadow-xl relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={imginst} 
            alt="Student"
            className="rounded-full w-24 h-24 md:w-32 md:h-32 shadow-lg transform transition-transform hover:scale-110"
          />
          <div className="mt-4 md:mt-0 md:ml-6">
            <h3 className="text-3xl font-extrabold">John Doe</h3>
            <p className="text-sm italic">Robotics Student</p>
            <p className="mt-2 text-sm">Robotics enthusiast with a passion for creating impressive robotics.</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-300 opacity-20 rounded-full -z-10 transform translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-500 opacity-10 rounded-full -z-10 transform -translate-x-16 translate-y-16" />
      </motion.div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Courses */}
        <motion.div
          className="bg-gradient-to-b from-gray-800 to-gray-700 text-white p-5 rounded-lg shadow-lg flex items-center justify-between"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl"><FaBook /></div>
          <div className="text-right">
            <CountUp end={courses.length} duration={2} className="text-4xl font-extrabold" />
            <p className="text-sm">Total Courses</p>
          </div>
        </motion.div>

        {/* Active Courses */}
        <motion.div
          className="bg-gradient-to-b from-blue-800 to-blue-700 text-white p-5 rounded-lg shadow-lg flex items-center justify-between"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl"><FaTachometerAlt /></div>
          <div className="text-right">
            <CountUp end={activeCourses.length} duration={2} className="text-4xl font-extrabold" />
            <p className="text-sm ">Active Courses</p>
          </div>
        </motion.div>

        {/* Completed Courses */}
        <motion.div
          className="bg-gradient-to-b from-green-800 to-green-700 text-white p-5 rounded-lg shadow-lg flex items-center justify-between"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl"><FaCheckCircle /></div>
          <div className="text-right">
            <CountUp end={completedCourses.length} duration={2} className="text-4xl font-extrabold" />
            <p className="text-sm">Completed Courses</p>
          </div>
        </motion.div>
      </div>

      {/* Courses Section */}
      <div className="space-y-8">
        {/* Active Courses */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">Active Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCourses.map(course => (
              <motion.div
                key={course.id}
                className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{course.title}</h3>
                  <p className="text-sm">Instructor: {course.instructor}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-yellow-400">{course.rating} <FaStar size={14} /></span>
                  </div>
                  <div className="mt-2 w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <p className="text-xs mt-1">Progress: {course.progress}%</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enrolled Courses */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">Enrolled Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map(course => (
              <motion.div
                key={course.id}
                className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{course.title}</h3>
                  <p className="text-sm">Instructor: {course.instructor}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-yellow-400">{course.rating} <FaStar size={14} /></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Completed Courses */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">Completed Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map(course => (
              <motion.div
                key={course.id}
                className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{course.title}</h3>
                  <p className="text-sm">Instructor: {course.instructor}</p>
                  <p className="text-xs text-green-400 mt-1">Completed</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
