import React, { useState } from 'react';
import {
  FaStar,
  FaClock,
  FaRegMoneyBillAlt,
  FaGraduationCap,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaQuestionCircle,
  FaBookOpen,
  FaCopy,
  FaArrowRight,
} from 'react-icons/fa';
import img1 from '../../assets/WhatsApp Image 2024-10-16 at 23.32.23.jpeg';
import inst from '../../assets/instructor.png'

const CurriculumItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2 border-b border-gray-300">
      <div
        className="flex justify-between items-center cursor-pointer py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <FaQuestionCircle className="text-blue-600 transition-transform duration-300 hover:scale-110" />
      </div>
      {isOpen && <p className="text-gray-700 pl-4">{description}</p>}
    </div>
  );
};

const Testimonial = ({ name, comment, imgSrc }) => {
  return (
    <div className="flex items-center mb-4 bg-gray-100 p-4 rounded-lg shadow-lg">
      <img src={imgSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-700">{comment}</p>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2 border-b border-gray-300">
      <div
        className="flex justify-between items-center cursor-pointer py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <FaQuestionCircle className="text-blue-600 transition-transform duration-300 hover:scale-110" />
      </div>
      {isOpen && <p className="text-gray-700 pl-4">{answer}</p>}
    </div>
  );
};

const Details = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row space-y-6 md:space-y-0">
      {/* Left Section - Course Details */}
      <div className="flex-1 md:mr-6 mb-6 md:mb-0">
        {/* Course Image */}
        <img
          src= {img1}
          alt="Course"
          className="w-full h-1/5 object-cover rounded-lg mb-4 shadow-lg transform transition-transform duration-500 border-4 border-red-300"
        />

        {/* Course Title */}
        <h1 className="text-4xl font-extrabold mb-2 transition duration-300 hover:text-red-600">
          Advanced Robotics and Automation
        </h1>
        {/* Category & Rating */}
        <div className="flex items-center mb-4">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full mr-2 transition-transform duration-300 hover:scale-105">
            Robotics
          </span>
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-xl transition-transform duration-300 hover:scale-110" />
            ))}
            <span className="ml-2">(4.8)</span>
          </div>
        </div>

        {/* Instructor Info */}
        <div className="flex items-center mb-4">
          <img
            src={inst}
            alt="Instructor"
            className="w-12 h-12 rounded-full mr-2 border-2 border-white shadow-lg"
          />
          <div>
            <h3 className="font-semibold text-lg">William Odhiambo</h3>
            <p className="text-sm text-gray-600">Date of Course: 2024-11-11</p>
            <p className="text-sm text-gray-600">Enrolled Students: 1200</p>
          </div>
        </div>

        {/* Course Overview */}
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="mb-4 text-gray-700">
        Course Overview: Robotics and Automation
        Course Description
        The Robotics and Automation course is designed to provide students with a solid foundation in the principles of robotics, automation systems, and their applications in various industries. This course combines theoretical knowledge with practical skills, enabling learners to understand the design, programming, and operation of robotic systems and automation technologies.
        <br/>
        Course Objectives
        By the end of this course, students will be able to:

Understand the fundamental concepts of robotics and automation.
Design and implement robotic systems for various applications.
Program robotic systems using relevant software and languages.
Analyze and optimize automation processes in different industries.
Apply safety standards and ethical considerations in robotics and automation.
Target Audience
Engineering students (Mechanical, Electrical, Software)
Professionals seeking to upskill in robotics and automation
Hobbyists and enthusiasts interested in robotics
Prerequisites
Basic knowledge of programming (Python, C++, or similar)
Understanding of fundamental engineering principles
Familiarity with electronics and circuitry is beneficial
        </p>

        {/* Curriculum */}
        <h2 className="text-2xl font-semibold mb-2">Curriculum</h2>
        <CurriculumItem title="Lesson 1: Introduction" description="Overview of the course." />
        <CurriculumItem title="Lesson 2: Intermediate Concepts" description="Deep dive into the subject matter." />
        <CurriculumItem title="Lesson 3: Advanced Techniques" description="Mastery of the concepts." />

        {/* Student Testimonials */}
        <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
        <Testimonial
          name="John Doe"
          comment="This course was amazing! I learned so much!"
          imgSrc="student1.jpg"
        />
        <Testimonial
          name="Jane Smith"
          comment="Highly recommend! Great content and engaging."
          imgSrc="student2.jpg"
        />

        {/* Instructor Card */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md transition duration-300 hover:shadow-lg">
          <h3 className="font-semibold">About the Instructor</h3>
          <p className="text-gray-700">William is a robotics engineer and educator with over 10 years of experience. He holds a Ph.D. in Robotics Engineering from MIT and specializes in autonomous systems and industrial automation. William is passionate about hands-on learning and empowering students in the exciting field of robotics. Outside of teaching, she mentors aspiring engineers and advocates for STEM education.</p>
        </div>

        {/* Reviews */}
        <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-xl" />
              ))}
            </div>
            <span className="ml-2">(3 Reviews)</span>
          </div>
          <p className="bg-gray-50 p-2 rounded-md shadow-sm transition duration-300 hover:shadow-lg">
            "Great course! Learned a lot!"
          </p>
        </div>

        {/* Video Crash Course */}
        <h2 className="text-2xl font-semibold mb-2">Video Crash Course</h2>
        <video
          controls
          className="w-full h-1/5 rounded-lg mb-4 shadow-lg transition-transform duration-300"
        >
          <source src="video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Back to Courses Button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg transition transform hover:bg-gray-600 hover:scale-105 shadow-md">
          Back to Courses <FaArrowRight className='inline'/>
        </button>
      </div>

      {/* Right Section - Course Info */}
      <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg shadow-md transition-transform duration-300 transform">
        {/* Course Fee */}
        <div className="flex items-center mb-2">
          <FaRegMoneyBillAlt className="mr-2 text-blue-600" />
          <span className="font-semibold">Course Fee: <span className="text-red-600">$199</span></span>
        </div>

        {/* Course Level */}
        <div className="flex items-center mb-2">
          <FaGraduationCap className="mr-2 text-blue-600" />
          <span className="font-semibold">Level: Intermediate</span>
        </div>

        {/* Duration */}
        <div className="flex items-center mb-2">
          <FaClock className="mr-2 text-blue-600" />
          <span className="font-semibold">Duration: 10 hours</span>
        </div>

        {/* Number of Lessons */}
        <div className="flex items-center mb-2">
          <FaBookOpen className="mr-2 text-blue-600" />
          <span className="font-semibold">Lessons: 15</span>
        </div>

        {/* Quizzes */}
        <div className="flex items-center mb-2">
          <FaQuestionCircle className="mr-2 text-blue-600" />
          <span className="font-semibold">Quizzes: 5</span>
        </div>

        {/* Certification */}
        <div className="flex items-center mb-2">
          <FaGraduationCap className="mr-2 text-blue-600" />
          <span className="font-semibold">Certification: Yes</span>
        </div>

        {/* Graduation */}
        <div className="flex items-center mb-2">
          <FaClock className="mr-2 text-blue-600" />
          <span className="font-semibold">Graduation: Included</span>
        </div>

        {/* Payment Methods */}
        <h2 className="text-lg font-semibold mb-2">Payment Methods</h2>
        <div className="flex space-x-2 mb-4">
          <img src="paypal-icon.png" alt="PayPal" className="w-8 h-8" />
          <img src="credit-card-icon.png" alt="Credit Card" className="w-8 h-8" />
        </div>

        {/* Share the Course */}
        <h2 className="text-lg font-semibold mb-2">Share this Course</h2>
        <div className="flex space-x-2 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-transform duration-300 hover:scale-110"
            title="Share on Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 transition-transform duration-300 hover:scale-110"
            title="Share on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 transition-transform duration-300 hover:scale-110"
            title="Share on LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 transition-transform duration-300 hover:scale-110"
            title="Share on Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 transition-transform duration-300 hover:scale-110"
            title="Share on YouTube"
          >
            <FaYoutube />
          </a>
          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="text-gray-600 transition-transform duration-300 hover:scale-110"
            title="Copy Course Link"
          >
            <FaCopy />
          </button>
        </div>

        {/* FAQs Section */}
        <h2 className="text-lg font-semibold mb-2">FAQs</h2>
        <FAQItem
          question="What is the course duration?"
          answer="The course lasts for 10 hours."
        />
        <FAQItem
          question="Do I get a certificate?"
          answer="Yes, you will receive a certificate upon completion."
        />

        {/* Related Courses */}
        <h2 className="text-lg font-semibold mb-2">Related Courses</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
            <h3 className="font-semibold">Related Course 1</h3>
            <p className="text-gray-600">Short description of related course 1.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
            <h3 className="font-semibold">Related Course 2</h3>
            <p className="text-gray-600">Short description of related course 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
