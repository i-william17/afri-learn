import React from 'react';
import teamImage from '../../assets/WhatsApp Image 2024-10-09 at 15.32.34.jpeg';

const About = () => {
  return (
    <div className="container mx-auto py-10 px-4 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-8">About Us</h2>

      <div className="flex flex-col md:flex-row md:space-x-10 bg-white shadow-lg rounded-lg overflow-hidden p-5 md:p-10">
        
        {/* Left Section: Team Image */}
        <div className="md:w-1/2 flex justify-center items-center p-5">
          <img 
            src={teamImage} 
            alt="Our Team" 
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105" 
          />
        </div>

        {/* Right Section: Mission Text */}
        <div className="md:w-1/2 flex flex-col justify-center p-5">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5">Our Mission</h3>
          <p className="text-gray-600 mb-5 leading-relaxed text-base md:text-lg">
            At our company, we strive to deliver the best services to our customers, empowering them through technology and innovative solutions. 
            Our mission is to drive progress and make a meaningful impact in the lives of individuals and businesses.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5 text-base md:text-lg">
            We believe in teamwork, collaboration, and a shared vision for success. Our dedicated team works tirelessly to provide exceptional 
            service and support to our clients, ensuring their needs are met with the highest level of satisfaction.
          </p>

          {/* Additional Note or Tagline */}
          <p className="text-gray-500 italic text-base md:text-lg mt-5 text-center border-t pt-5 border-gray-200">
            "Empowering progress through collaboration and innovation."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
