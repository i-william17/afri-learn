import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import OnlineCoursesHero from '../OnlineCourse/OnlineCoursesHero';
import Courses from '../../components/Courses/Courses';
import Enrollment from '../../components/Enrollment/Enrollment';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';
import Partners from '../../components/Cartegories/Partners';
import Features from './Features';
import Workshop from './Workshop';
import NumberBoard from '../../components/Instructors/NumBoard';
import InstructorInfo from './InstuctorInfo';
import UpcomingEvents from './UpcomingEvents';

const OnlineCourse = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <div data-aos="fade-down">
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div data-aos="fade-up">
        <OnlineCoursesHero />
      </div>
      <div data-aos="fade-in">
        <Partners />
      </div>
      <div data-aos="fade-down">
        <Features />
      </div>
      <div data-aos="fade-up">
        <Courses />
      </div>
      <div>
        <Workshop />
      </div>
      <div data-aos="fade-up" data-aos-delay="1000">
        <NumberBoard/>
      </div>
      <div data-aos="fade-down" data-aos-delay="1100">
        <InstructorInfo/>
      </div>
      <div>
        <UpcomingEvents/>
      </div>
      <div data-aos="zoom-in" data-aos-delay="1000">
        <Enrollment />
      </div>
      <div data-aos="fade-up" data-aos-delay="1200">
        <Blog />
      </div>
      <div data-aos="fade-down" data-aos-delay="1400">
        <Footer />
      </div>
    </div>
  );
};

export default OnlineCourse;
