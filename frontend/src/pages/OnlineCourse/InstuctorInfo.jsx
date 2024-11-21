import React, { useState} from 'react';
import { FaStar, FaFacebook, FaTwitter, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../assets/pexels-max-fischer-5212320.jpg';

const instructors = [
  {
    id: 1,
    name: "Jane Doe",
    rating: 4.5,
    field: "Web Development",
    about: "Skilled in modern web technologies with a focus on practical projects. Jane creates engaging learning experiences tailored to each student.",
    image: img1,
  },
  {
    id: 2,
    name: "John Smith",
    rating: 4.8,
    field: "Data Science",
    about: "With a passion for data-driven decision-making, John specializes in machine learning, bringing hands-on expertise to data enthusiasts.",
    image: "https://via.placeholder.com/150",
  },
];

const InstructorInfo = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(instructors[0]);
  const [intervalId, setIntervalId] = useState(null);

  const handleCarouselChange = (index) => {
    setSelectedInstructor(instructors[index]);
  };

  const startAutoplay = () => {
    if (intervalId) return; // Prevent multiple intervals
    const id = setInterval(() => {
      setSelectedInstructor((prevInstructor) => {
        const nextIndex = (instructors.findIndex(instructor => instructor.id === prevInstructor.id) + 1) % instructors.length;
        return instructors[nextIndex];
      });
    }, 3000); // Change instructor every 3 seconds
    setIntervalId(id);
  };

  const stopAutoplay = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };


  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-red-500/30 to-transparent opacity-50 blur-2xl transform scale-125"></div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-14 text-red-600 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Meet Our Instructors
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
        <motion.div
          className="flex-1 bg-white p-10 rounded-xl shadow-2xl relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl border-t-8 border-red-800"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-br from-red-400 to-red-800 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="flex items-center gap-6 mb-6">
            <motion.img
              src={selectedInstructor.image}
              alt={selectedInstructor.name}
              className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-600">{selectedInstructor.name}</h3>
              <p className="text-sm text-red-500">{selectedInstructor.field}</p>
              <div className="flex items-center mt-2">
                {[...Array(Math.floor(selectedInstructor.rating))].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                {selectedInstructor.rating % 1 ? <FaStar className="text-yellow-400 opacity-50" /> : null}
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">{selectedInstructor.about}</p>
          <div className="flex space-x-5 text-indigo-500 mt-4">
            <a href="s" className="hover:text-indigo-700 transition-transform duration-200 transform hover:scale-125"><FaFacebook size={24} /></a>
            <a href="s" className="hover:text-indigo-700 transition-transform duration-200 transform hover:scale-125"><FaTwitter size={24} /></a>
            <a href="s" className="hover:text-indigo-700 transition-transform duration-200 transform hover:scale-125"><FaLinkedin size={24} /></a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 text-center md:text-left text-gray-800 md:pr-12"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg md:text-2xl font-semibold mb-4 italic leading-snug text-red-600">
            "Empower yourself with knowledge. Our instructors offer not just lessons, but mentorship in every field."
          </p>
          <p className="text-gray-600 leading-relaxed">
            "Learning is an ongoing journey, and we are here to guide you through every step of the way with hands-on, real-world expertise."
          </p>
        </motion.div>
      </div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        onChange={handleCarouselChange}
        infiniteLoop
        emulateTouch
        showIndicators={true} // Show indicators
        className="mt-10 relative z-10"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className="ml-9 absolute top-1/2 -left-8 transform -translate-y-1/2 bg-red-600 hover:bg-red-800 p-3 rounded-full shadow-lg text-white transition-transform duration-300 hover:scale-110"
              aria-label={label}
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
            >
              <FaChevronLeft size={20} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className="mr-9 absolute top-1/2 -right-8 transform -translate-y-1/2 bg-red-600 hover:bg-red-800 p-3 rounded-full shadow-lg text-white transition-transform duration-300 hover:scale-110"
              aria-label={label}
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
            >
              <FaChevronRight size={20} />
            </button>
          )
        }
      >
        {instructors.map((instructor, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr from-pink-400 to-purple-500 p-1 rounded-full">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-md transform transition-transform duration-300 hover:rotate-3"
              />
            </div>
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
};

export default InstructorInfo;
