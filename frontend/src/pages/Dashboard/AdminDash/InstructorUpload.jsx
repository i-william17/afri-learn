import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaTimes, FaLinkedin, FaInstagram, FaSpinner } from 'react-icons/fa';
import endpoint from '../../../endpoint';

const InstructorUpload = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    rating: '',
    biography: '',
    email: '',
    phone: '',
    skills: '',
    socialMedia: {
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: '',
    },
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImagePreview(null);
    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const payload = {
      ...formData,
      skills: formData.skills.split(',').map((skill) => skill.trim()),
    };
    console.log(payload);

    try {
      await axios.post(`${endpoint}/api/instructors`, payload);
      setSuccessMessage('Instructor added successfully!');
      setFormData({
        name: '',
        course: '',
        rating: '',
        biography: '',
        email: '',
        phone: '',
        skills: '',
        socialMedia: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
        },
        image: null,
      });
      setImagePreview(null);
    } catch (error) {
      console.error('Error submitting instructor:', error);
      setErrorMessage('Failed to add instructor. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        <span className="text-red-600">Upload</span> Instructor Details
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Provide detailed information about the instructor to add them to our platform.
      </p>

      {successMessage && (
        <p className="text-green-600 font-medium mb-4 text-center">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-600 font-medium mb-4 text-center">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Instructor Image</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
            />
            {imagePreview && (
              <button
                type="button"
                onClick={handleImageRemove}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition"
              >
                <FaTimes className="inline mr-2" />
                Remove
              </button>
            )}
          </div>
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              min="0"
              max="5"
              step="0.1"
              className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Biography</label>
          <textarea
            name="biography"
            value={formData.biography}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
            rows="4"
          />
        </div>

        <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Skills (comma-separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            Social Media Links
            <FaFacebook className="text-blue-600" />
            <FaTwitter className="text-blue-400" />
            <FaLinkedin className="text-blue-700" />
            <FaInstagram className="text-pink-500" />
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Facebook</label>
              <input
                type="url"
                name="facebook"
                value={formData.socialMedia.facebook}
                onChange={handleSocialChange}
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Twitter</label>
              <input
                type="url"
                name="twitter"
                value={formData.socialMedia.twitter}
                onChange={handleSocialChange}
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={formData.socialMedia.linkedin}
                onChange={handleSocialChange}
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Instagram</label>
              <input
                type="url"
                name="instagram"
                value={formData.socialMedia.instagram}
                onChange={handleSocialChange}
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300"
          >
            {isSubmitting ? <FaSpinner className="animate-spin inline mr-2" /> : 'Upload'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstructorUpload;
