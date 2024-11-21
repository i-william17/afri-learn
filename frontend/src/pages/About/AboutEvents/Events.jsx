import React, { useState } from 'react';
import { FaRegClock, FaMapMarkerAlt, FaDollarSign, FaGift, FaTimes } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import ev1 from '../../../assets/event1.jpg';
import ev2 from '../../../assets/event2.jpg';
import ev3 from '../../../assets/event3.jpg';
import ev4 from '../../../assets/pexels-divinetechygirl-1181467.jpg';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const events = [
  {
    id: 1,
    image: ev4,
    date: '2024-10-30',
    category: 'Webinar',
    title: 'Introduction to React',
    location: 'Online',
    tags: ['JavaScript', 'React', 'Frontend'],
    instructor: {
      name: 'John Doe',
      title: 'Senior Frontend Developer',
      bio: 'John has over 10 years of experience in building dynamic web applications.',
    },
    description: 'This webinar will cover the fundamentals of React and how to build modern web applications.',
    schedule: 'October 30, 2024 | 10:00 AM - 12:00 PM',
    capacity: 100,
    fees: '$49.99',
    goodies: ['Free eBook', 'Exclusive Access to React Course'],
    reviews: [
      { name: 'Alice', review: 'Great introduction to React! Learned a lot.' },
      { name: 'Bob', review: 'Amazing workshop! Highly recommend it.' },
    ],
  },
  {
    id: 2,
    image: ev3,
    date: '2024-11-05',
    category: 'Workshop',
    title: 'JavaScript Essentials',
    location: 'New York, NY',
    tags: ['JavaScript', 'Frontend', 'Workshop'],
    instructor: {
      name: 'Jane Smith',
      title: 'Full Stack Engineer',
      bio: 'Jane is passionate about teaching the latest web technologies and frameworks.',
    },
    description: 'In this workshop, you will learn core JavaScript concepts and how to apply them in modern web development.',
    schedule: 'November 5, 2024 | 2:00 PM - 5:00 PM',
    capacity: 50,
    fees: '$29.99',
    goodies: ['JavaScript Cheat Sheet', 'Workshop Certificate'],
    reviews: [
      { name: 'Charlie', review: 'Fantastic session! The content was clear and concise.' },
      { name: 'David', review: 'One of the best workshops I’ve attended!' },
    ],
  },
  {
    id: 3,
    image: ev1,
    date: '2024-11-15',
    category: 'Conference',
    title: 'Tech Innovations Conference',
    location: 'San Francisco, CA',
    tags: ['Technology', 'Innovation'],
    instructor: {
      name: 'Mark Johnson',
      title: 'Technology Strategist',
      bio: 'Mark is a seasoned expert in innovation and future technology trends.',
    },
    description: 'Join industry leaders for a deep dive into the latest technology trends, AI, and future innovations.',
    schedule: 'November 15, 2024 | 9:00 AM - 6:00 PM',
    capacity: 500,
    fees: '$199.99',
    goodies: ['Exclusive Event Merch', 'Networking Opportunities'],
    reviews: [
      { name: 'Eve', review: 'The speakers were world-class. A must-attend conference!' },
      { name: 'Frank', review: 'A great conference, learned about cutting-edge tech.' },
    ],
  },
  {
    id: 4,
    image: ev2,
    date: '2024-11-25',
    category: 'Networking',
    title: 'Connect with Industry Leaders',
    location: 'Los Angeles, CA',
    tags: ['Networking', 'Leadership'],
    instructor: {
      name: 'Lisa Brown',
      title: 'Leadership Coach',
      bio: 'Lisa specializes in leadership development and mentorship for executives.',
    },
    description: 'An exclusive networking event aimed at connecting professionals with industry leaders and innovators.',
    schedule: 'November 25, 2024 | 5:00 PM - 8:00 PM',
    capacity: 200,
    fees: '$99.99',
    goodies: ['Event Swag Bag', 'VIP Access'],
    reviews: [
      { name: 'Grace', review: 'Fantastic networking opportunity. Made amazing connections!' },
      { name: 'Hannah', review: 'A great event for professionals looking to level up.' },
    ],
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
        <div className="lg:w-1/3 mb-8 lg:mb-0">
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
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  {event.tags.map((tag, index) => (
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
                  <p className="text-sm text-gray-700">{event.instructor.name}, {event.instructor.title}</p>
                  <p className="text-xs text-gray-500">{event.instructor.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
            className="bg-white rounded-lg shadow-2xl w-full lg:w-2/3 p-8 overflow-hidden relative"
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25 }}
          >
            {/* Modal Header */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 text-3xl hover:text-red-600 transition duration-300 ease-in-out"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col lg:flex-row">
              {/* Left Section - Event Details */}
              <div className="lg:w-2/3 p-6">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-56 object-cover rounded-lg shadow-md"
                />
                <h2 className="text-3xl font-bold text-gray-800 mt-6">{selectedEvent.title}</h2>
                <p className="text-gray-600 text-sm mt-2">
                  <FaMapMarkerAlt className="inline mr-2" />
                  {selectedEvent.location}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  <FaRegClock className="inline mr-2" />
                  {selectedEvent.schedule}
                </p>
                <p className="text-gray-600 mt-6">{selectedEvent.description}</p>

                {/* Add extra features: Goodies & Reviews */}
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800">Goodies</h4>
                  <ul className="list-disc pl-6">
                    {selectedEvent.goodies.map((goodie, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-center">
                        <FaGift className="mr-2 text-green-600" />
                        {goodie}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reviews Section */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800">What attendees say</h4>
                  {selectedEvent.reviews.map((review, index) => (
                    <div key={index} className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                        <p className="text-gray-600 font-medium">{review.name}</p>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-500 text-sm">{review.review}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section - Event Fees and Capacity */}
              <div className="lg:w-1/3 p-6 bg-gray-50 rounded-lg shadow-lg mt-6 lg:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Event Details</h3>
                <div className="mt-6">
                  <p className="flex items-center text-gray-600">
                    <FaDollarSign className="mr-2 text-red-600" />
                    <span className="font-semibold">{selectedEvent.fees}</span>
                  </p>
                  <p className="mt-4 text-gray-600">
                    <span className="font-semibold">Capacity:</span> {selectedEvent.capacity} people
                  </p>
                </div>
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
