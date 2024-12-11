import React, { useState, useEffect } from 'react';
import { FaRegClock, FaMapMarkerAlt, FaDollarSign, FaGift, FaTimes, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';
import endpoint from '../../../endpoint';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch events from the API
  const fetchEvents = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.get(`${endpoint}/api/events`);
      setEvents(response.data);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError('Failed to load events. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <Header />
      <Navbar />

      {/* Event List */}
      <div className="flex flex-col lg:flex-row justify-between items-start mx-auto py-8 lg:py-16 px-4 lg:px-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <motion.h2
            className="text-4xl font-extrabold text-red-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            All Upcoming Events
          </motion.h2>
          <p className="text-gray-600 mb-6 text-lg">
            Explore our upcoming events, featuring top industry leaders and hands-on workshops that help you grow professionally.
          </p>
        </div>

        {/* Right Side - Event Cards */}
        <div className="lg:w-2/3">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="text-red-600 animate-spin text-4xl"><FaSpinner/></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 font-medium">
              {error}
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  role="article"
                  aria-labelledby={`event-title-${event.id}`}
                  aria-describedby={`event-description-${event.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleEventClick(event)}
                >
                  <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <p className="text-gray-500 text-sm">
                      <FaRegClock className="inline mr-2" />
                      {event.date}
                    </p>
                    <p className="text-red-500 text-xs font-semibold">{event.category}</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      <FaMapMarkerAlt className="inline mr-2" />
                      {event.location}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap mt-3">
                      {event.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-red-100 text-red-600 text-xs font-medium mr-2 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Instructor Info */}
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800">Instructor</h4>
                      <p className="text-sm text-gray-700">
                        {event.instructor?.name}, {event.instructor?.title}
                      </p>
                      <p className="text-xs text-gray-500">{event.instructor?.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 font-medium">
              No events available at the moment. Check back later!
            </div>
          )}
        </div>
      </div>

      {/* Modal for Event Details */}
      {selectedEvent && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl w-full lg:w-3/4 xl:w-2/3 p-8 overflow-hidden relative"
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25 }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 text-3xl hover:text-red-600 transition duration-300 ease-in-out"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col lg:flex-row">
              {/* Left Section */}
              <div className="lg:w-2/3 p-6">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <h2 className="text-3xl font-bold text-gray-800 mt-6">{selectedEvent.title}</h2>
                <p className="text-gray-600 text-sm mt-2 flex items-center">
                  <FaMapMarkerAlt className="inline mr-2 text-red-500" />
                  {selectedEvent.location}
                </p>
                <p className="text-gray-600 text-sm mt-2 flex items-center">
                  <FaRegClock className="inline mr-2 text-red-500" />
                  {selectedEvent.schedule}
                </p>
                <p className="text-gray-600 mt-6">{selectedEvent.description}</p>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-gray-800">Goodies</h4>
                  <ul className="list-disc pl-6 mt-2">
                    {selectedEvent.goodies.map((goodie, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        <FaGift className="inline mr-2 text-green-600" />
                        {goodie}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-gray-800">What Attendees Say</h4>
                  {selectedEvent.reviews.map((review, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm mt-3">
                      <p className="text-gray-600 font-medium">{review.name}</p>
                      <p className="text-gray-500 text-sm mt-1">{review.review}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section */}
              <div className="lg:w-1/3 p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h3>
                <p className="flex items-center text-gray-600">
                  <FaDollarSign className="mr-2 text-red-600" />
                  <span className="font-semibold">{selectedEvent.fees}</span>
                </p>
                <p className="mt-4 text-gray-600">
                  <span className="font-semibold">Capacity:</span> {selectedEvent.capacity} people
                </p>
                <p className="mt-4 text-gray-600">
                  <span className="font-semibold">Instructor:</span> {selectedEvent.instructor.name}, {selectedEvent.instructor.title}
                </p>
                <p className="text-sm text-gray-500 mt-2">{selectedEvent.instructor.bio}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
};

export default Events;
