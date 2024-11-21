import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import instructorImg from '../../assets/instructor.png';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      quote: "This program has transformed my career path. The mentorship and resources were invaluable.",
      name: "Alex Johnson",
      title: "Software Engineer at TechCorp",
    },
    {
      id: 2,
      quote: "The hands-on experience gave me the confidence to tackle real-world challenges.",
      name: "Maria Chen",
      title: "Student, Computer Science",
    },
    {
      id: 3,
      quote: "An exceptional learning platform that bridges the gap between theory and practice.",
      name: "Sarah Lee",
      title: "Mechatronics Engineer at InnovateX",
    },
    {
      id: 4,
      quote: "I've learned more here than in any traditional course. The community is amazing!",
      name: "Daniel Park",
      title: "Student, Information Technology",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase text-red-600 tracking-widest mb-2">Testimonials</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
            What People Are Saying
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-lg shadow-lg bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl border-t-4 border-red-600"
            >
              <FaQuoteLeft className="absolute text-red-600 text-4xl opacity-20 top-4 left-4" />
              <div className="flex items-center mb-6">
                <img
                  src={instructorImg}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-red-600 shadow-md mr-4"
                />
                <div>
                  <div className="text-gray-900 font-bold text-lg">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                </div>
              </div>
              <p className="italic text-lg text-gray-700 mb-4">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
