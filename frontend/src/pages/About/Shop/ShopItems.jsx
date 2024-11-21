import React, { useState, useEffect } from 'react';
import { FaStar, FaListAlt,FaArrowLeft , FaTh, FaArrowRight, FaRegBookmark, FaSpinner, FaTimes } from 'react-icons/fa';
import img1 from '../../../assets/pexels-kevin-ku-92347-577585.jpg';
import img2 from '../../../assets/pexels-karl-rayson-10231869-14277134.jpg';
import img3 from '../../../assets/pexels-gvenzl-8649999.jpg';
import img4 from '../../../assets/pexels-tima-miroshnichenko-5303633.jpg';

const ShopItems = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [filters, setFilters] = useState({
    category: '',
    price: 'all',
    rating: '',
    priceRange: [0, 500],
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [viewType, setViewType] = useState('grid'); // Grid/List view
  const [error, setError] = useState(null); // For handling errors
  const itemsPerPage = 6;
  const [selectedItem, setSelectedItem] = useState(null); // For item modal
  const [cart, setCart] = useState([]); // Cart state
  const [wishlist, setWishlist] = useState(new Set()); // Wishlist state
  const [quantity, setQuantity] = useState(1); // Quantity selection for cart
  const [readMore, setReadMore] = useState(false); // Toggle description in modal

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve([
            { id: 1, title: 'AI-Powered Drone', price: 500, rating: 4.8, category: 'Robotics', description: 'An advanced drone with AI-based features that provide cutting-edge technology. Great for aerial photography, surveillance, and delivery.', image: img1, techDetails: 'AI control, 4K camera, 10km range' },
            { id: 2, title: 'Robot Vacuum Cleaner', price: 250, rating: 4.7, category: 'Robotics', description: 'A smart robot vacuum with autonomous cleaning features. It can be scheduled and controlled remotely via an app for added convenience.', image: img2, techDetails: 'AI navigation, 120-minute battery life' },
            { id: 3, title: 'Smart Robot Arm', price: 800, rating: 4.6, category: 'Robotics', description: 'A robotic arm with precise movements and excellent versatility. Ideal for DIY projects or as a learning tool for engineers and enthusiasts.', image: img3, techDetails: 'Servo motors, 6-axis control' },
            { id: 4, title: 'Virtual Reality Headset', price: 400, rating: 4.9, category: 'Tech', description: 'Immersive VR experience for gaming, entertainment, and simulations. Comes with high-definition resolution and 360-degree audio.', image: img4, techDetails: '4K display, 360-degree audio' },
            { id: 5, title: 'AI-Powered Smartwatch', price: 150, rating: 4.5, category: 'Tech', description: 'Track your fitness and health with AI-based insights. It provides heart-rate monitoring, sleep analysis, and more for your active lifestyle.', image: img1, techDetails: 'Heart-rate monitor, Sleep tracker, GPS' },
            { id: 6, title: 'Robotic Pet Companion', price: 120, rating: 4.2, category: 'Robotics', description: 'A robotic pet that mimics real animal behavior and interacts with its owner. Perfect for those who love pets but can’t take care of a real one.', image: img2, techDetails: 'AI interaction, 10+ movement patterns' },
          ]), 1000)
        );
        setItems(response);
      } catch (err) {
        setError('Failed to fetch items');
        console.error('Failed to fetch items', err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Filtering items based on selected filters and search term
  const filteredItems = items.filter(item => {
    return (
      (filters.category ? item.category === filters.category : true) &&
      (filters.price !== 'all' ? (filters.price === 'free' ? item.price === 0 : item.price > 0) : true) &&
      (filters.rating ? item.rating >= filters.rating : true) &&
      (item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1]) &&
      (searchTerm ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );
  });

  // Sorting items based on selected sort option
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'popularity') return b.rating - a.rating;
    if (sortBy === 'price') return a.price - b.price;
    return b.rating - a.rating;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  // Toggle bookmark status for items
  const toggleBookmark = (id) => {
    const updatedBookmarks = new Set(bookmarkedItems);
    if (updatedBookmarks.has(id)) {
      updatedBookmarks.delete(id);
    } else {
      updatedBookmarks.add(id);
    }
    setBookmarkedItems(updatedBookmarks);
  };

  // Handling item click for modal view
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedItem(null);
      setReadMore(false); // Reset the "Read More" toggle on modal close
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      category: '',
      price: 'all',
      rating: '',
      priceRange: [0, 500],
    });
    setSearchTerm('');
  };

  // Add item to the cart
  const addToCart = () => {
    const updatedCart = [...cart, { ...selectedItem, quantity }];
    setCart(updatedCart);
  };

  // Add item to the wishlist
  const addToWishlist = () => {
    const updatedWishlist = new Set(wishlist);
    updatedWishlist.add(selectedItem.id);
    setWishlist(updatedWishlist);
  };

  // Change the view type (Grid/List)
  const handleViewTypeChange = (type) => {
    setViewType(type);
  };

  return (
    <div className="flex flex-col lg:flex-row p-6 transition-all duration-500 ease-in-out">
      {/* Left Section: Filters */}
      <div className="lg:w-1/4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 shadow-lg rounded-lg sticky top-0 transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>
        {/* Search Bar */}
        <div className="mb-4">
          <label className="block mb-2">Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for items..."
            className="p-2 rounded bg-gray-800 w-full border border-gray-700 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="p-2 rounded bg-gray-800 w-full border border-gray-700 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option value="Robotics">Robotics</option>
            <option value="Tech">Tech</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <label className="block mb-2">Price Range</label>
          <input
            type="range"
            min="0"
            max="500"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({ ...filters, priceRange: [filters.priceRange[0], e.target.value] })}
            className="w-full"
          />
          <div className="flex justify-between text-xs">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        {/* Reset Filters */}
        <button
          onClick={resetFilters}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded w-full"
        >
          Reset Filters
        </button>
      </div>

      {/* Right Section: Items Display */}
      <div className="lg:w-3/4 ml-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex">
            <button onClick={() => handleViewTypeChange('grid')} className={`p-2 ${viewType === 'grid' ? 'bg-blue-600' : ''}`}>
              <FaTh />
            </button>
            <button onClick={() => handleViewTypeChange('list')} className={`p-2 ${viewType === 'list' ? 'bg-blue-600' : ''}`}>
              <FaListAlt />
            </button>
          </div>

          {/* Sort Options */}
          <div className="flex">
            <label className="mr-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 rounded bg-gray-200"
            >
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Item Grid/List */}
        <div className={viewType === 'grid' ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6' : 'space-y-4'}>
          {loading ? (
            <div className="flex justify-center items-center">
              <FaSpinner className="animate-spin text-xl" />
            </div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            currentItems.map((item) => (
              <div key={item.id} className="card relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">${item.price}</span>
                    <span className="text-yellow-500 flex items-center">
                      <FaStar /> {item.rating}
                    </span>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => toggleBookmark(item.id)}
                    className={`p-2 bg-white rounded-full ${bookmarkedItems.has(item.id) ? 'text-blue-600' : 'text-gray-600'}`}
                  >
                    <FaRegBookmark />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                  <button
                    onClick={() => handleItemClick(item)}
                    className="bg-blue-600 text-white p-2 rounded-md"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-600 text-white p-2 rounded-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 bg-blue-600 text-white rounded-md"
          >
            <FaArrowLeft />
          </button>
          <span className="self-center text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 bg-blue-600 text-white rounded-md"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Item Modal */}
      {selectedItem && (
        <div
          className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="modal-container bg-white p-8 rounded-lg max-w-lg w-full">
            <button onClick={closeModal} className="absolute top-2 right-2 text-xl">
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-56 object-cover mb-4"
            />
            <p>{readMore ? selectedItem.description : `${selectedItem.description.slice(0, 100)}...`}</p>
            <button onClick={() => setReadMore(!readMore)} className="text-blue-600 mt-2">
              {readMore ? 'Read Less' : 'Read More'}
            </button>
            <p className="text-gray-700 mt-4"><strong>Price:</strong> ${selectedItem.price}</p>
            <p className="text-gray-700"><strong>Tech Details:</strong> {selectedItem.techDetails}</p>
            <button
              onClick={addToCart}
              className="bg-green-600 text-white p-2 rounded-md mt-4 w-full"
            >
              Add to Cart
            </button>
            <button
              onClick={addToWishlist}
              className="bg-blue-600 text-white p-2 rounded-md mt-2 w-full"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopItems;
