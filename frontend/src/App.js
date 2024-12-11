import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'animate.css'; // Optional, if you are using animation
import HomePage from './pages/HomePage/HomePage.jsx';
import OnlineCourse from './pages/OnlineCourse/OnlineCourse.jsx';
import University from './pages/University/University.jsx';
import AllCourses from './pages/Courses/AllCourses.jsx';
import CourseDetails from './pages/Courses/CourseDetails.jsx';
import CourseLessons from './pages/Courses/CourseLessons.jsx';
import AboutUs from './pages/About/AboutUs/AboutUs.jsx';
import AboutIntstructor from './pages/About/AboutInstructor/AboutIntstructor.jsx'; // Check for typos
import AboutEvents from './pages/About/AboutEvents/AboutEvents.jsx';
import Shop from './pages/About/Shop/Shop.jsx';
import ContactUs from './pages/About/ContactUs/ContactUs.jsx';
import AboutBlog from './pages/About/AboutBlog/AboutBlog.jsx';
import StudentLogin from './pages/About/StudentLogin/StudentLogin.jsx';
import StudentRegistration from './pages/About/StudentRegistration/StudentRegistration.jsx';
import Terms from './pages/About/TOS/Terms.jsx';
import PrivacyPolicy from './pages/About/PrivacyPolicy/PrivacyPolicy.jsx';
import InstructorDash from './pages/Dashboard/InstructorDash/InstructorDash.jsx';
import StudentDash from './pages/Dashboard/StudentDash/StudentDash.jsx';
import Events from './pages/About/AboutEvents/Events.jsx';
import Wishlist from './pages/About/Shop/Wishlist.jsx';
import Cart from './pages/About/Shop/Cart.jsx';
import Checkout from './pages/About/Shop/Checkout.jsx';
import Dashboard from './pages/Dashboard/InstructorDash/Dashboard.jsx';
import StudentDashboard from './pages/Dashboard/StudentDash/Dashboard.jsx';
import AdminDash from './pages/Dashboard/AdminDash/AdminDash.jsx';
import CourseUploadForm from './pages/Dashboard/AdminDash/CourseUploadForm.jsx';
import EventUploadForm from './pages/Dashboard/AdminDash/EventUploadForm.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './pages/Courses/Details.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/online-courses" element={<OnlineCourse />} />
          <Route path="/university" element={<University />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/courses/:id" element={<Details />} />
          <Route path="/course-lesson" element={<CourseLessons />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-instructors" element={<AboutIntstructor />} />
          <Route path="/about-events" element={<AboutEvents />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-blog" element={<AboutBlog />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/instructor-dashboard" element={<InstructorDash />} />
          <Route path="/student-dashboard" element={<StudentDash />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/in-dashboard" element={<Dashboard />} />
          <Route path="/st-dashboard" element={<StudentDashboard />} />
          <Route path="/ad-dashboard" element={<AdminDash />} />
          <Route path="/course-upload" element={<CourseUploadForm />} />
          <Route path="/event-upload" element={<EventUploadForm />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;
