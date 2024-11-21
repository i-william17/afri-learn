import React, { useState } from 'react';
import { FaUser, FaImage, FaEnvelope, FaPhoneAlt, FaLock, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import img from '../../../assets/pexels-hyundaimotorgroup-19233057.jpg';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import endpoint from '../../../endpoint';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [statusMessage, setStatusMessage] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail || !isValidPassword || password !== confirmPassword) {
      setError('Please fill out the form correctly');
      return;
    }

    setLoading(true);
    setError('');
    setStatusMessage(''); // Clear previous status message

    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('age', age);
      formData.append('password', password);
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }

      const response = await axios.post(`${endpoint}/api/students/signup`, formData);

      if (response.status === 200 || response.status === 201) {
        setStatusMessage('Account created successfully!'); // Set success message
        toast.success('Account created successfully!');
      } else {
        setStatusMessage('Failed to create account. Please try again.');
      }
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const validatePassword = (password) => {
    setIsValidPassword(password.length >= 6);
  };

  const validatePasswordMatch = () => {
    setPasswordMatch(password === confirmPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black via-gray-500 to-black bg-cover bg-center relative"
      style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="relative z-10 bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl bg-opacity-90">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Create an Account</h2>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-6">

          {/* Profile Image Input */}
          <div className="relative w-full">
            <label htmlFor="profileImage" className="block text-lg font-medium text-gray-700">Profile Image</label>
            <div className="flex items-center mt-2">
              <FaImage className="text-gray-400 mr-3" />
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                onChange={handleImageChange}
                accept="image/*"
                className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg"
              />
            </div>
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Profile preview"
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
              </div>
            )}
          </div>

          {/* First Name Input */}
          <div className="relative w-full sm:w-1/2">
            <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name</label>
            <div className="flex items-center mt-2">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg"
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>

          {/* Last Name Input */}
          <div className="relative w-full sm:w-1/2">
            <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name</label>
            <div className="flex items-center mt-2">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative w-full">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <div className="flex items-center mt-2">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className={`w-full p-3 pl-10 rounded-md border ${isValidEmail ? 'border-gray-300' : 'border-red-500'} focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg`}
                placeholder="Enter your email"
                required
              />
            </div>
            {!isValidEmail && <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>}
          </div>

          {/* Phone Number Input (Optional) */}
          <div className="relative w-full">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone (Optional)</label>
            <div className="flex items-center mt-2">
              <FaPhoneAlt className="text-gray-400 mr-3" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Age Input */}
          <div className="relative w-full sm:w-1/2">
            <label htmlFor="age" className="block text-lg font-medium text-gray-700">Age</label>
            <div className="flex items-center mt-2">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="number"
                id="age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg"
                placeholder="Enter your age"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <div className="flex items-center mt-2">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
                className={`w-full p-3 pl-10 rounded-md border ${isValidPassword ? 'border-gray-300' : 'border-red-500'} focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg`}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {!isValidPassword && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters long.</p>}
          </div>

          {/* Confirm Password Input */}
          <div className="relative w-full">
            <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-700">Confirm Password</label>
            <div className="flex items-center mt-2">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validatePasswordMatch();
                }}
                className={`w-full p-3 pl-10 rounded-md border ${passwordMatch ? 'border-gray-300' : 'border-red-500'} focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg`}
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-gray-400"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {!passwordMatch && <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>}
          </div>

          {/* Status Message */}
          {statusMessage && (
            <p
              className="text-green-500 text-center mb-4 text-lg font-medium opacity-0 animate-fade-in"
            >
              {statusMessage}
            </p>
          )}

          {/* Error Message */}
          {error && (
            <p
              className="text-red-500 text-center mb-4 text-lg font-medium opacity-0 animate-slide-in"
            >
              {error}
            </p>
          )}


          {/* Submit Button */}
          <div className="w-full mb-6">
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 bg-blue-600 text-white text-lg font-semibold rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} transition duration-300`}
            >
              {loading ? <FaSpinner className="animate-spin" /> : 'Sign Up'}
            </button>
          </div>

        </form>

        {/* Login Link */}
        <div className="text-center mb-4">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/student-login" className="text-blue-600 hover:underline text-lg">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
