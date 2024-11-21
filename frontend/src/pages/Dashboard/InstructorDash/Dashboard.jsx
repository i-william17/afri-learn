import React, { useState } from 'react';
import { FaBook, FaCheckCircle, FaUsers, FaClipboardList } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Tooltip } from 'react-tooltip'; 
import imginst from "../../../assets/instructor.png"

const Dashboard = () => {
  const [metrics] = useState([
    { label: 'Enrolled Courses', value: 25, icon: <FaBook size={50} />, bgColor: 'bg-red-500' },
    { label: 'Active Courses', value: 15, icon: <FaClipboardList size={50} />, bgColor: 'bg-gray-700' },
    { label: 'Completed Courses', value: 10, icon: <FaCheckCircle size={50} />, bgColor: 'bg-blue-500' },
    { label: 'Total Students', value: 500, icon: <FaUsers size={50} />, bgColor: 'bg-green-600' },
    { label: 'Total Courses', value: 30, icon: <FaBook size={50} />, bgColor: 'bg-red-600' }
  ]);

  const ongoingCourses = [
    {
      title: 'React for Beginners',
      progress: '60%',
      instructor: 'John Doe',
      duration: '3 Weeks',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Advanced JavaScript',
      progress: '75%',
      instructor: 'Jane Smith',
      duration: '5 Weeks',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'UI/UX Design Principles',
      progress: '45%',
      instructor: 'Sarah Lee',
      duration: '4 Weeks',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    }
  ];

  const recentActivities = [
    {
      type: 'Completed a course',
      course: 'Advanced JavaScript',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      description: 'You successfully completed the Advanced JavaScript course.'
    },
    {
      type: 'Started a new course',
      course: 'UI/UX Design Principles',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      description: "You've enrolled in the UI/UX Design Principles course."
    },
    {
      type: 'New assignment posted',
      course: 'React for Beginners',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      description: 'An assignment has been posted for your React for Beginners course.'
    }
  ];


  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Metrics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center justify-between p-6 rounded-lg shadow-lg text-white ${metric.bgColor} transform transition-all hover:scale-105`}
            data-tip={metric.label}
          >
            <div>
              <motion.p
                className="text-3xl font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <CountUp start={0} end={metric.value} duration={1.5} separator="," />
              </motion.p>
              <p className="text-sm">{metric.label}</p>
            </div>
            <div>{metric.icon}</div>
          </motion.div>
        ))}
      </div>

      {/* Instructor Card */}
      <div className="my-8 p-6 bg-gradient-to-r from-red-500 via-gray-700 to-red-600 text-white rounded-lg shadow-xl relative">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={imginst} // Replace with actual instructor image URL
            alt="Instructor"
            className="rounded-full w-24 h-24 md:w-32 md:h-32 shadow-lg transform transition-all hover:scale-110"
          />
          <div className="mt-4 md:mt-0 md:ml-6">
            <h3 className="text-2xl font-bold">John Doe</h3>
            <p className="text-sm">Expert in Web Development & Design</p>
            <p className="mt-2 text-sm">
              Passionate about teaching and building state-of-the-art, easy-to-use, user-friendly web applications.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-300 opacity-20 rounded-full -z-10 transform translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-500 opacity-10 rounded-full -z-10 transform -translate-x-16 translate-y-16" />
      </div>

      {/* Ongoing Courses */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ongoing Courses</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ongoingCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105"
          >
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
            <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-sm text-gray-600">Duration: {course.duration}</p>
            <div className="relative pt-2">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: course.progress }}
                  transition={{ duration: 1.5 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                />
              </div>
              <p className="text-xs text-right mt-1">{course.progress} complete</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Recent Activity</h2>
      <div className="space-y-4">
        {recentActivities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105"
          >
            <img src={activity.image} alt={activity.course} className="w-16 h-16 object-cover rounded-lg mr-4" />
            <div>
              <p className="font-semibold text-gray-800">{activity.type}: "{activity.course}"</p>
              <p className="text-sm text-gray-600">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tooltips */}
      <Tooltip place="top" effect="solid" />
    </div>
  );
};

export default Dashboard;
