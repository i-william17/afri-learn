import React, { useState } from 'react';

// Sample Robotics FAQs
const faqs = [
  {
    question: 'What is a robot?',
    answer: 'A robot is a machine designed to carry out tasks automatically, often programmable by a computer.',
  },
  {
    question: 'What are the main components of a robot?',
    answer: 'The main components of a robot typically include sensors, actuators, controllers, and a power supply.',
  },
  {
    question: 'What programming languages are used in robotics?',
    answer: 'Common programming languages used in robotics include Python, C++, and ROS (Robot Operating System) for specific robotics applications.',
  },
  {
    question: 'What is the role of sensors in robotics?',
    answer: 'Sensors are used in robots to gather information about their environment, enabling them to make informed decisions and navigate effectively.',
  },
  {
    question: 'What are autonomous robots?',
    answer: 'Autonomous robots are machines that can perform tasks without human intervention, using sensors and artificial intelligence to make decisions.',
  },
];

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to show/hide FAQ answers
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto py-10 px-4 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Robotics Quote & Header */}
        <div className="lg:col-span-1 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg italic text-gray-700 mb-6">
            "The science of today is the technology of tomorrow." <br />— Edward Teller
          </p>
          <a
            href="all faqs"
            className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-200"
          >
            See All FAQs
          </a>
        </div>

        {/* Right Column: FAQs */}
        <div className="lg:col-span-2">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-gray-200 px-6 py-4 rounded-lg hover:bg-red-600 hover:text-white transition duration-200 flex justify-between items-center"
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="bg-white px-6 py-3 border-l-4 border-red-600 rounded-b-lg shadow-md transition-all duration-300">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
