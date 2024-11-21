import React from 'react';
import { FaBookOpen, FaUserGraduate, FaClipboardCheck, FaBullhorn, FaMobileAlt, FaRegClock, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <FaBookOpen />,
      title: 'Learn Anything',
      description: 'Dive into a vast library of courses covering every imaginable subject, guided by expert instructors.',
    },
    {
      icon: <FaUserGraduate />,
      title: 'Expert Guidance',
      description: 'Learn from industry leaders and passionate educators who are dedicated to your success.',
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Earn Certifications',
      description: 'Receive recognized certifications upon course completion to showcase your skills and knowledge.',
    },
    {
      icon: <FaBullhorn />,
      title: 'Stay Informed',
      description: 'Get the latest updates on courses, promotions, and industry news through our engaging email newsletters.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Friendly',
      description: 'Access courses anytime, anywhere on your mobile devices for learning on the go.',
    },
    {
      icon: <FaRegClock />,
      title: 'Flexible Learning',
      description: 'Set your own learning pace and schedule that fits your lifestyle and commitments.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Community Support',
      description: 'Join a community of learners and receive support and encouragement along your journey.',
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6 lg:px-16 bg-gray-900 text-white">
      {/* Top Text Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-red-600">Achieve Your Goals with Afribot</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Unlock a world of knowledge with our e-learning platform, designed to make education accessible and engaging for everyone. With a diverse range of courses across various fields, you can learn at your own pace and on your own schedule. Earn recognized certifications that enhance your resume and help you stand out in today's competitive job market. Your journey of growth and empowerment begins here—are you ready to take the next step?
        </p>
      </div>

      {/* Features Section with Icons and Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-8 bg-gradient-to-b from-gray-800 to-gray-700 shadow-xl rounded-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-700"
            whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-red-500 text-6xl transition-transform duration-300 ease-in-out"
                whileHover={{ scale: 1.2, rotate: [0, 15, -15, 0] }}
              >
                {feature.icon}
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">Ready to Start Your Journey?</h2>
        <p className="text-gray-300 mb-8">Join thousands of learners and transform your future with Afribot. Enroll now!</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Features;
