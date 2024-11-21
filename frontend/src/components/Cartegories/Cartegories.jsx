import React from 'react';
import Slider from 'react-slick';
import { FaLaptopCode, FaMobileAlt, FaLock, FaDatabase, FaCloud, FaChartPie, FaRobot } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Partners from './Partners';

// Sample data for IT icons and courses using React Icons
const categories = [
  { icon: <FaLaptopCode size={50} />, course: 'Web Development' },
  { icon: <FaMobileAlt size={50} />, course: 'Mobile Development' },
  { icon: <FaLock size={50} />, course: 'Cybersecurity' },
  { icon: <FaDatabase size={50} />, course: 'Data Science' },
  { icon: <FaCloud size={50} />, course: 'Cloud Computing' },
  { icon: <FaChartPie size={50} />, course: 'Data Analysis' },
  { icon: <FaRobot size={50} />, course: 'Robotics' },
];

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-5 text-center text-gray-900">Top Categories</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="p-6 flex flex-col items-center bg-gray-800 rounded-none shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="ml-56 text-5xl text-white mb-3">{category.icon}</div>
            <h3 className="text-lg font-semibold text-white text-center">{category.course}</h3>
          </div>
        ))}
      </Slider>
      <Partners />
    </div>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-white shadow-lg hover:bg-blue-500 transition duration-200"
      onClick={onClick}
    >
      <FaChevronRight className="text-blue-600" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-white shadow-lg hover:bg-blue-500 transition duration-200"
      onClick={onClick}
    >
      <FaChevronLeft className="text-blue-600" />
    </div>
  );
};

export default Categories;
