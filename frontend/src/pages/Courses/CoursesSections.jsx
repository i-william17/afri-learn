import React, { useState, useEffect } from "react";
import {
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Moon,
  Sun,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Components/Select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Components/Sheet";
import { Button } from "./Components/Button";
import { Slider } from "./Components/Slider";
import axios from "axios";

const CourseCard = ({ course, onClick, isListView }) => (
  <div
    className={`bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform cursor-pointer ${isListView ? 'flex' : 'block'
      }`}
    onClick={() => onClick(course)}
  >
    <img
      src={course.thumbnailImage}
      alt={course.title}
      className={`object-cover ${isListView ? 'w-48 h-full' : 'w-full h-40'}`}
    />
    <div className="p-4 flex-1">
      <h2 className="text-xl font-bold text-red-500 truncate">{course.title}</h2>
      <p className="text-sm text-gray-400">{course.category}</p>
      <p className="mt-2 text-red-400 font-bold">{course.price} KSH</p>
      <p className="mt-1 text-sm text-gray-300">
        {course.numberOfLessons} lessons | {course.duration} hours
      </p>
      {isListView && (
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">{course.overview}</p>
      )}
    </div>
  </div>
);

const CourseModal = ({ course, onClose }) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
      <div className="relative">
        <img
          src={course.thumbnailImage}
          alt={course.title}
          className="w-full h-56 object-cover rounded-t-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
        >
          ✕
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-red-500">{course.title}</h2>
        <p className="text-gray-400">{course.overview}</p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-200">Instructor:</span> {course.instructor}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-200">Category:</span> {course.category}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-200">Price:</span> {course.price} KSH
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-200">Duration:</span> {course.duration} hours
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isListView, setIsListView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 100000],
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const itemsPerPage = 9;
  const categories = ["all", "Programming", "Design", "Business", "Marketing"];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data.data);
        setFilteredCourses(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const filtered = courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        filters.category === "all" || course.category === filters.category;
      const matchesPrice =
        course.price >= filters.priceRange[0] &&
        course.price <= filters.priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    setFilteredCourses(filtered);
    setCurrentPage(1);
  }, [searchTerm, filters, courses]);

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`p-6 min-h-screen ${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-500">Courses</h1>
        <Button variant="outline" size="icon" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
        </Button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex items-center bg-white shadow-md rounded-lg overflow-hidden">
          <Search className="text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full p-3 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Category</h3>
                    <Select
                      value={filters.category}
                      onValueChange={(value) =>
                        setFilters((prev) => ({ ...prev, category: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-4">Price Range (KSH)</h3>
                    <Slider
                      value={filters.priceRange}
                      min={0}
                      max={100000}
                      step={1000}
                      onValueChange={(value) =>
                        setFilters((prev) => ({ ...prev, priceRange: value }))
                      }
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>{filters.priceRange[0]} KSH</span>
                      <span>{filters.priceRange[1]} KSH</span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsListView(!isListView)}
          >
            {isListView ? (
              <LayoutGrid className="h-4 w-4" />
            ) : (
              <List className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className={`grid ${isListView ? 'grid-cols-1' : 'grid-cols-3'} gap-6`}>
          {paginatedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={setSelectedCourse}
              isListView={isListView}
            />
          ))}
        </div>
      )}

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      <div className="flex justify-center mt-6 gap-4">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default CourseList;
