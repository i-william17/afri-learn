import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Blogs from '../../components/Blog/Blog';
import UniHero from './UniHero';
import EdTechHistory from './EdTechHistory';
import Courses from '../../components/Courses/Courses';
import UpcomingEvents from '../OnlineCourse/UpcomingEvents';
import Research from './Research';
import Testimonials from './Testimonials';
import ChooseUs from './ChooseUs';

const University = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <UniHero/>
      <EdTechHistory/>
      <Courses/>
      <ChooseUs/>
      <Research/>
      <UpcomingEvents/>
      <Testimonials/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default University;
