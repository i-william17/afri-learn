import React, { useState, useEffect } from 'react';
import { FaStar, FaDollarSign, FaUsers, FaLanguage, FaTh, FaList, FaRegBookmark, FaSpinner, FaArrowRight, FaBackward, FaForward } from 'react-icons/fa';
import axios from 'axios';
import { toast,  ToastContainer } from 'react-toastify';
import endpoint from '../../endpoint';

const CoursesSection = () => {
  const [viewType, setViewType] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [filters, setFilters] = useState({
    category: '',
    language: 'all',
    price: 'all',
    instructor: '',
    rating: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const [bookmarkedCourses, setBookmarkedCourses] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${endpoint}/api/courses`);
        console.log(response.data);
        
        // Enhanced data extraction and validation
        const coursesData = Array.isArray(response.data.courses) 
          ? response.data.courses 
          : Array.isArray(response.data) 
            ? response.data 
            : [];

        // Validate course structure
        const validatedCourses = coursesData.map(course => ({
          id: course.id || Math.random().toString(36).substr(2, 9),
          title: course.title || 'Untitled Course',
          description: course.description || 'No description available',
          image: course.image || '/default-course-image.jpg',
          price: course.price !== undefined ? course.price : 0,
          rating: course.rating !== undefined ? parseFloat(course.rating).toFixed(1) : '0.0',
          instructor: course.instructor || 'Unknown Instructor',
          duration: course.duration || 'Not specified',
          category: course.category || 'General',
          language: course.language || 'English'
        }));

        setCourses(validatedCourses);
        toast.success('Courses fetched successfully.');
      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Failed to fetch courses';
        setError(errorMessage);
        console.log(err)
        toast.error(errorMessage);
        setCourses([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course => {
    return (
      (filters.category ? course.category === filters.category : true) &&
      (filters.language !== 'all' ? course.language === filters.language : true) &&
      (filters.price !== 'all' ? (filters.price === 'free' ? course.price === 0 : course.price > 0) : true) &&
      (filters.instructor ? course.instructor && course.instructor.includes(filters.instructor) : true) &&
      (filters.rating ? course.rating >= filters.rating : true) &&
      (searchTerm ? course.title.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'popularity') return b.rating - a.rating;
    if (sortBy === 'price') return a.price - b.price;
    return b.rating - a.rating;
  });

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);

  const toggleBookmark = (id) => {
    const updatedBookmarks = new Set(bookmarkedCourses);
    if (updatedBookmarks.has(id)) {
      updatedBookmarks.delete(id);
    } else {
      updatedBookmarks.add(id);
    }
    setBookmarkedCourses(updatedBookmarks);
  };

  const handleEnroll = (courseId) => {
    alert(`Enrolled in course ID: ${courseId}`);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Section: Filters */}
      <div className="lg:w-1/4 p-6 bg-gray-900 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select onChange={e => setFilters({ ...filters, category: e.target.value })} className="p-2 rounded bg-gray-800 border border-gray-700">
            <option value="">All Categories</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Data Science">Animation</option>
            <option value="Marketing">Robotics</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Language</label>
          <select onChange={e => setFilters({ ...filters, language: e.target.value })} className="p-2 rounded bg-gray-800 border border-gray-700">
            <option value="all">All Languages</option>
            <option value="English">English</option>
            <option value="Swahili">Swahili</option>
            <option value="German">German</option>
            <option value="French">French</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price</label>
          <select onChange={e => setFilters({ ...filters, price: e.target.value })} className="p-2 rounded bg-gray-800 border border-gray-700">
            <option value="all">All Prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Instructor</label>
          <input
            type="text"
            onChange={e => setFilters({ ...filters, instructor: e.target.value })}
            className="p-2 rounded w-full bg-gray-800 border border-gray-700"
            placeholder="Instructor Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Rating</label>
          <select onChange={e => setFilters({ ...filters, rating: e.target.value })} className="p-2 rounded bg-gray-800 border border-gray-700">
            <option value="">All Ratings</option>
            <option value="4">4 & above</option>
            <option value="4.5">4.5 & above</option>
            <option value="5">5.0</option>
          </select>
        </div>
      </div>

      {/* Right Section: Course List */}
      <div className="lg:w-3/4 p-6">
        <h1 className="text-3xl font-bold mb-4">All Courses</h1>
        
        {/* Search Box */}
        <div className="flex items-center mb-4">
          {loading ? (
            <FaSpinner className="animate-spin mt-4 text-2xl" />
          ) : (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search Courses..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="p-2 rounded bg-gray-200 text-black"
              />
            </div>
          )}
        </div>

        {/* Filters and Sort Options */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => setViewType(viewType === 'grid' ? 'list' : 'grid')} className="p-2 bg-gray-600 text-white rounded">
              {viewType === 'grid' ? <FaList /> : <FaTh />}
            </button>
            <select onChange={e => setSortBy(e.target.value)} className="ml-2 p-2 rounded">
              <option value="popularity">Sort by Popularity</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Total Results: {sortedCourses.length}</p>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="p-2 bg-gray-300 rounded">
              <FaBackward/>
            </button>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="ml-5 p-2 bg-gray-300 rounded">
              <FaForward/>
            </button>
          </div>
        </div>

        {/* Course Cards */}
        <div className={viewType === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col'}>
          {loading ? (
            <div className="flex justify-center items-center h-64"><FaSpinner className="animate-spin text-2xl" /></div>
          ) : error ? (
            <div className="text-red-500 w-full text-center">{error}</div>
          ) : currentCourses.length === 0 ? (
            <div className="text-center text-gray-500 w-full">No courses found</div>
          ) : (
            currentCourses.map(data => (
              <div key={data.id} className={`bg-white rounded-lg shadow-lg p-4 mb-4 transition-transform duration-300 transform hover:scale-105 ${bookmarkedCourses.has(data.id) ? 'border-4 border-yellow-500' : ''}`}>
                <img src={data.image} alt={data.title} className="w-full h-40 object-cover rounded-t-lg" />
                <h2 className="text-xl font-semibold mt-2">{data.title}</h2>
                <p className="text-gray-700">{data.description}</p>
                <p className="text-gray-700 mt-1"><FaDollarSign className="inline" /> Price: Ksh {data.price}</p>
                <p className="text-gray-700 mt-1">Rating: {data.rating} <FaStar className="inline text-yellow-500" /></p>
                <p className="text-gray-700 mt-1"><FaUsers className="inline" /> Instructor: {data.instructor}</p>
                <p className="text-gray-700 mt-1"><FaLanguage className="inline" /> Duration: {data.duration}</p>
                <button onClick={() => handleEnroll(data.id)} className="mt-2 p-2 bg-red-500 hover:bg-slate-500 text-white rounded">
                  Enroll Now <FaArrowRight className='inline-block' />
                </button>
                <button onClick={() => toggleBookmark(data.id)} className="ml-5 mt-2 p-2 bg-yellow-500 text-white rounded">
                  {bookmarkedCourses.has(data.id) ? 'Unbookmark' : 'Bookmark'} <FaRegBookmark className="inline" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;