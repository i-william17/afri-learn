import React from 'react';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import TopBar from './Topbar';
import Sidebar from './Sidebar';

const InstructorDash = () => {
  return (
    <>
      <div className="relative z-10"> {/* Apply z-10 to Header */}
        <Header />
      </div>

      <div className="relative z-20"> {/* Apply z-20 to Navbar */}
        <Navbar />
      </div>
      
      <TopBar />
      <Sidebar />
      <Footer />
      </>

  );
}

export default InstructorDash;
