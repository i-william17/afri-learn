import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DetailsHero from './DetailsHero';
import Details from './Details';

const CourseDetails = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <DetailsHero/>
        <Details/>
        <Footer/>
    </div>
  );
}

export default CourseDetails;
