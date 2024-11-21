import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import CoursesSection from './CoursesSections';
import Footer from '../../components/Footer/Footer';
import CoursesHero from './CourseHero';

const AllCourses = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <CoursesHero/>
        <div>
          <CoursesSection/>
        </div>
        <Footer/>
      
    </div>
  );
}

export default AllCourses;
