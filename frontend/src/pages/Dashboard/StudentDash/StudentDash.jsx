import React from 'react';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import TopBar from './Topbar';
import Sidebar from './Sidebar';

const StudentDash = () => {
  return (
    <>
      <div classname="relative z-10">
        <Header />
      </div>
      <div classname="relative z-10">
        <Navbar/>
      </div>
      <TopBar/>
      <Sidebar/>
      <Footer/>
      
    </>
  );
}

export default StudentDash;
