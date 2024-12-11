import React from 'react';
import Newsletter from './Newsletter';
import img1 from '../../assets/pexels-pixabay-276452.jpg';
import img2 from '../../assets/pexels-googledeepmind-18069362.jpg';
import img3 from '../../assets/pexels-kevin-ku-92347-577585.jpg';
import img4 from '../../assets/pexels-polina-zimmerman-3747266 - Copy.jpg';
import img5 from '../../assets/pexels-vincent-olman-1275992314-24182512.jpg';
import img6 from '../../assets/pexels-kindelmedia-8566437.jpg';

// Sample data for categories and courses
const categories = ['Web Development', 'Data Science', 'Machine Learning', 'Design', 'Marketing'];

const courses = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    instructor: 'John Doe',
    reviews: 4.8,
    price: 199,
    image: img1,
    link: '#enroll1',
  },
  {
    id: 2,
    title: 'Animation Masterclass',
    instructor: 'Jane Smith',
    reviews: 4.9,
    price: 299,
    image: img2,
    link: '#enroll2',
  },
  {
    id: 3,
    title: 'Mobile-App Development Masterclass',
    instructor: 'Alice Johnson',
    reviews: 4.7,
    price: 249,
    image: img3,
    link: '#enroll3',
  },
  {
    id: 4,
    title: 'Graphic Design Masterclass',
    instructor: 'Bob Brown',
    reviews: 4.6,
    price: 149,
    image: img4,
    link: '#enroll4',
  },
  {
    id: 5,
    title: 'Programmable Logic Controllers',
    instructor: 'Charlie Davis',
    reviews: 4.5,
    price: 199,
    image: img5,
    link: '#enroll5',
  },
  {
    id: 6,
    title: 'Robotics and Automation',
    instructor: 'David Wilson',
    reviews: 4.8,
    price: 499,
    image: img6,
    link: '#enroll6',
  },
];

const Courses = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Explore Our Courses</h2>

      {/* Categories Section */}
      <div className="flex justify-center mb-8 space-x-4 flex-wrap">
        {categories.map((category, index) => (
          <button key={index} className="bg-red-900 text-white py-2 px-5 rounded-lg shadow-md hover:bg-gray-900 transition duration-200 text-sm md:text-base">
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {courses.map(course => (
          <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src={course.image} alt={course.title} className="w-full h-[200px] object-cover" />
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-1">Instructor: {course.instructor}</p>
              <p className="text-gray-600 mb-1">Reviews: {course.reviews} ⭐</p>
              <p className="text-lg font-bold text-gray-900 mb-4">Ksh {course.price}</p>
              <a href={course.link} className="bg-red-900 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition duration-200 block text-center">
                Enroll Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* All Courses Button */}
      <div className="text-center mt-10">
        <a href="/all-courses" className="bg-red-900 hover:bg-gray-900 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          All Our Courses
        </a>
      </div>

      <Newsletter />
    </div>
  );
};

export default Courses;
