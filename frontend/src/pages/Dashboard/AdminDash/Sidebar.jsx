import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaBars,
  FaCalendar,
  FaChalkboardTeacher,
  FaUniversity
} from 'react-icons/fa';
import CourseUploadForm from './CourseUploadForm';
import EventUploadForm from './EventUploadForm';
import InstructorUpload from './InstructorUpload';
import BlogUpload from './BlogUpload';

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { label: 'Course Upload', icon: FaUniversity, component: 'Dashboard' },
    { label: 'Event Upload', icon: FaCalendar, component: 'EventUpload' },
    { label: 'Instructor Upload', icon: FaChalkboardTeacher, component: 'InstructorUpload' },
    { label: 'Blog Upload', icon: FaChalkboardTeacher, component: 'BlogUpload' },
  ];

  const componentsMap = {
    CourseUpload: <CourseUploadForm/>,
    EventUpload: <EventUploadForm/>,
    InstructorUpload: <InstructorUpload/>,
    BlogUpload: <BlogUpload/>,
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-400">
      {/* Mobile Menu Button */}
      <button
        className="block md:hidden p-4 bg-gray-800 text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 md:w-72 shadow-xl`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-8">
          {links.map((item) => (
            <div
              key={item.label}
              onClick={() => {
                setActiveComponent(item.component);
                setIsSidebarOpen(false); // Close sidebar on mobile when a link is clicked
              }}
              className={`flex items-center space-x-3 p-4 rounded-md transition-all duration-300 cursor-pointer transform hover:scale-105
                ${activeComponent === item.component ? 'bg-red-600 shadow-lg scale-105' : 'hover:bg-gray-700'}`}
              aria-current={activeComponent === item.component ? 'page' : undefined}
            >
              <item.icon
                size={20}
                className={`transition-colors ${activeComponent === item.component ? 'text-white' : 'text-gray-400'}`}
              />
              <span className={`${activeComponent === item.component ? 'text-white' : 'text-gray-300'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-10 bg-gray-100">
        <main className="mt-16 p-6">
          {/* Render the active component */}
          {componentsMap[activeComponent] || <CourseUploadForm/>}
        </main>
      </div>

      {/* Overlay for mobile view */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

Sidebar.propTypes = {
  activeComponent: PropTypes.string.isRequired,
  setActiveComponent: PropTypes.func.isRequired,
};

export default Sidebar;
