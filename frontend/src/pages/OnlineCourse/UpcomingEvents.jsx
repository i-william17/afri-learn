import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChevronRight } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';
import endpoint from '../../endpoint';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch events from the backend
  const fetchEvents = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.get(`${endpoint}/api/events`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start mx-auto py-8 lg:py-16 px-4 lg:px-16 bg-gray-50 rounded-lg shadow-lg">
      {/* Left Side */}
      <div className="lg:w-1/3 mb-8 lg:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 animate__animated animate__fadeIn">
          Upcoming Events
        </h2>
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          Stay updated with our upcoming events. Join us for insightful sessions and workshops led by industry experts.
        </p>
        <a
          href="/events"
          className="inline-block px-4 py-2 md:px-6 md:py-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-300 shadow-md"
        >
          View All Events <FaChevronRight className="inline ml-2" />
        </a>
      </div>

      {/* Right Side - Event Cards */}
      <div className="lg:w-2/3">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <FaSpinner className="animate-spin text-red-600 text-4xl" />
          </div>
        ) : error ? (
          <div className="text-center text-red-600 font-medium">
            {error}
          </div>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                role="article"
                aria-labelledby={`event-title-${event.id}`}
                aria-describedby={`event-description-${event.id}`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-500 text-sm" id={`event-date-${event.id}`}>
                    {event.date}
                  </p>
                  <p className="text-red-500 text-xs font-semibold">{event.category}</p>
                  <h3 className="text-base md:text-lg font-bold text-gray-800" id={`event-title-${event.id}`}>
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm" id={`event-location-${event.id}`}>
                    {event.location}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap mt-2">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 font-medium">
            No events available at the moment. Check back later!
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
