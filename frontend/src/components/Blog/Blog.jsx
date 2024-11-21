import React from 'react';
import { FaRegCalendarAlt, FaUserAlt} from 'react-icons/fa';
import img1 from '../../assets/pexels-pixabay-276452.jpg';
import img2 from '../../assets/pexels-googledeepmind-18069362.jpg';
import img3 from '../../assets/pexels-kevin-ku-92347-577585.jpg';

const blogsData = [
  {
    id: 1,
    title: 'The Future of Education: Trends to Watch',
    category: 'Education',
    date: 'October 20, 2024',
    writer: 'John Doe',
    image: img1,
  },
  {
    id: 2,
    title: '10 Tips for Online Learning Success',
    category: 'Learning',
    date: 'October 18, 2024',
    writer: 'Jane Smith',
    image: img2,
  },
  {
    id: 3,
    title: 'How to Become an Effective Online Instructor',
    category: 'Teaching',
    date: 'October 15, 2024',
    writer: 'Mike Johnson',
    image: img3,
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto py-16 px-6 lg:px-16 bg-gray-900 text-white">
      {/* Top Text Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-red-600">Latest Blogs</h2>
        <p className="text-gray-300 text-lg">
          Explore our latest insights and articles to help you navigate your educational journey.
        </p>
      </div>

      {/* Blogs Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((blog) => (
          <div key={blog.id} className="bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg rounded-xl overflow-hidden">
            {/* Category */}
            <div className="p-4">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {blog.category}
              </span>
            </div>
            {/* Image */}
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            {/* Date and Writer Info */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center text-gray-400">
                <FaRegCalendarAlt className="mr-1" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaUserAlt className="mr-1" />
                <span>{blog.writer}</span>
              </div>
            </div>
            {/* Title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
