import React, { useState } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import endpoint from '../../../endpoint';

const BlogUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    writer: '',
    image: null,
    content: '',
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImagePreview(null);
    setFormData((prev) => ({ ...prev, image: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post(`${endpoint}/api/blogs`, formData); // Replace with your API endpoint
      setSuccessMessage('Blog uploaded successfully!');
      setFormData({
        title: '',
        category: '',
        date: '',
        writer: '',
        image: null,
        content: '',
      });
      setImagePreview(null);
    } catch (error) {
      console.error('Error uploading blog:', error);
      setErrorMessage('Failed to upload the blog. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-16 px-6 lg:px-16 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-600">Upload a Blog</h1>

      {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-lg font-medium mb-2">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-lg font-medium mb-2">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Writer */}
        <div>
          <label htmlFor="writer" className="block text-lg font-medium mb-2">Writer</label>
          <input
            type="text"
            id="writer"
            name="writer"
            value={formData.writer}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-lg font-medium mb-2">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-300 bg-gray-800 border border-gray-300 rounded-lg cursor-pointer"
          />
          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Preview" className="w-40 h-40 object-cover rounded-lg shadow-md mb-2" />
              <button
                type="button"
                onClick={handleImageRemove}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-lg font-medium mb-2">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-red-600 text-white rounded-lg text-lg font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {isSubmitting ? <FaSpinner className="animate-spin inline mr-2" /> : 'Submit Blog'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogUpload;
