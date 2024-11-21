import React from 'react';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import Partners from '../../../components/Cartegories/Partners';
import Footer from '../../../components/Footer/Footer';
import About from '../../../components/About/About';
import Features from '../../../pages/OnlineCourse/Features';
import Testimonials from '../../../pages/University/Testimonials';
import Blog from '../../../components/Blog/Blog';
import Newsletter from '../../../components/Courses/Newsletter';
import NumBoard from '../../../components/Instructors/NumBoard';
import AboutHero from './AboutHero';
import Pictorial from './Pictorial';

const AboutUs = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <AboutHero/>
        <Pictorial/>
        <Partners/>
        <About/>
        <Features/>
        <Newsletter/>
        <NumBoard/>
        <Testimonials/>
        <Blog/>
        <Footer/>
      
    </div>
  );
}

export default AboutUs;
