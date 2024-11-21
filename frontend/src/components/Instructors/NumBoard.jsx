import React, { useEffect, useState } from 'react';

// NumberBoard component
const NumberBoard = () => {
  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [instructors, setInstructors] = useState(0);
  const [awards, setAwards] = useState(0);

  // Function to animate the number counting up
  const animateNumber = (targetValue, setter, duration = 2000) => {
    let startValue = 0;
    const increment = targetValue / (duration / 50);

    const countUp = () => {
      startValue += increment;
      if (startValue >= targetValue) {
        setter(targetValue); // Ensure the final value is set correctly
      } else {
        setter(Math.ceil(startValue));
        setTimeout(countUp, 50);
      }
    };
    countUp();
  };

  useEffect(() => {
    animateNumber(1000, setStudents); // Number of students
    animateNumber(50, setCourses);    // Number of courses
    animateNumber(25, setInstructors); // Number of instructors
    animateNumber(15, setAwards);      // Number of awards
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl italic font-bold text-center text-gray-900 mb-10">"Always Cutting Edge"</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 text-center">
        {/* Students */}
        <div className="bg-red-600 text-white p-10 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-5xl font-extrabold mb-3">{students.toLocaleString()}</h3>
          <p className="text-lg font-medium">Students</p>
        </div>

        {/* Courses */}
        <div className="bg-red-700 text-white p-10 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-5xl font-extrabold mb-3">{courses}</h3>
          <p className="text-lg font-medium">Courses</p>
        </div>

        {/* Skilled Instructors */}
        <div className="bg-red-800 text-white p-10 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-5xl font-extrabold mb-3">{instructors}</h3>
          <p className="text-lg font-medium">Skilled Instructors</p>
        </div>

        {/* Awards */}
        <div className="bg-red-900 text-white p-10 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-5xl font-extrabold mb-3">{awards}</h3>
          <p className="text-lg font-medium">Awards</p>
        </div>
      </div>
    </div>
  );
};

export default NumberBoard;
