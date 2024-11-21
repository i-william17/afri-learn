import React, { useRef } from 'react';
import Slider from 'react-slick';
import courseraLogo from '../../assets/coursera.png';
import amdLogo from '../../assets/amd7686.jpg';
import cognizantLogo from '../../assets/Cognizant.png';
import amazonLogo from '../../assets/amazon-.jpg';
import codecademyLogo from '../../assets/codecademy8973.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const partners = [
  { src: courseraLogo, alt: 'Coursera' },
  { src: amdLogo, alt: 'AMD' },
  { src: cognizantLogo, alt: 'Cognizant' },
  { src: amazonLogo, alt: 'Amazon' },
  { src: codecademyLogo, alt: 'Codecademy' },
];

const Partners = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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

  const handleMouseEnter = () => {
    sliderRef.current.slickPause();
  };

  const handleMouseLeave = () => {
    sliderRef.current.slickPlay();
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-gray-900">Our Partners</h2>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Slider ref={sliderRef} {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img src={partner.src} alt={partner.alt} className="h-16 md:h-20" />
            </div>
          ))}
        </Slider>
      </div>
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

export default Partners;
