import React from 'react';
import { FaBell, FaCog, FaUserCircle} from 'react-icons/fa';

const TopBar = () => {

  return (
    <div className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-4">
            {/* Notification Icon */}
            <button className="ml-10 text-gray-300 hover:text-white">
              <FaBell size={20} />
            </button>

            {/* Settings Icon */}
            <button className="ml-10 text-gray-300 hover:text-white">
              <FaCog size={20} />
            </button>

            {/* User Profile Icon */}
            <button className="ml-10 text-gray-300 hover:text-white">
              <FaUserCircle size={25} />
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default TopBar;
