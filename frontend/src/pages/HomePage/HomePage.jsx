import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Cartegories from '../../components/Cartegories/Cartegories';
import About from '../../components/About/About';
import Courses from '../../components/Courses/Courses';
import Instructor from '../../components/Instructors/Instructors';
import NumBoard from '../../components/Instructors/NumBoard';
import FAQS from '../../components/FAQS/FAQS';
import Enrollment from '../../components/Enrollment/Enrollment';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',
      offset: 120,
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-down">
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div data-aos="slide-up">
        <Hero />
      </div>
      <div data-aos="fade-right">
        <Cartegories />
      </div>
      <div>
        <About data-aos="fade-up" />
      </div>
      <div >
        <Courses />
      </div>
      <div data-aos="flip-left">
        <Instructor />
      </div>
      <div data-aos="fade-in">
        <NumBoard />
      </div>
      <div data-aos="fade-up">
        <FAQS />
      </div>
      <div data-aos="slide-up">
        <Enrollment />
      </div>
      <div >
        <Blog />
      </div>
      <div>
        <Footer data-aos="fade-up" />
      </div>
    </div>
  );
};

export default HomePage;
