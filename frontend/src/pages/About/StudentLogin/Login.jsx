import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import img from '../../../assets/pexels-tima-miroshnichenko-5303633.jpg';
import axios from 'axios';
import endpoint from '../../../endpoint';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    setLoading(true); // Start loading state
    setStatusMessage('');

    try {
      const response = await axios.post(`${endpoint}/api/students/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        // Handle success (e.g., store token, redirect, or show success message)
        setStatusMessage('Login successful!');
        navigate('/');
        console.log('User data:', response.data);
      } else {
        // Handle unexpected response
        setError('Unexpected error occurred. Please try again.');
      }
    } catch (err) {
      // Handle errors from API or network issues
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Invalid email or password');
      } else {
        setError('An error occurred. Please check your connection and try again.');
      }
    } finally {
      setLoading(false); // Stop loading state
    }
  };


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const validatePassword = (password) => {
    setIsValidPassword(password.length >= 6);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="relative z-10 bg-white rounded-lg shadow-xl p-8 w-full max-w-md bg-opacity-80">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Welcome Back</h2>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6 relative">
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
                className={`w-full p-3 pl-10 rounded-md border ${isValidEmail ? 'border-gray-300' : 'border-red-500'} focus:ring-2 focus:ring-blue-500 transition duration-300`}
                placeholder="Enter your email"
                required
              />
            </div>
            {!isValidEmail && <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>}
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
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
                className={`w-full p-3 pl-10 rounded-md border ${isValidPassword ? 'border-gray-300' : 'border-red-500'} focus:ring-2 focus:ring-blue-500 transition duration-300`}
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
            {!isValidPassword && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters.</p>}
          </div>

          {/* Remember me Checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded transition duration-300"
            />
            <label htmlFor="rememberMe" className="ml-2 text-gray-700 text-lg">Remember me</label>
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
          <div className="mb-6">
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 bg-blue-600 text-white text-lg font-semibold rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} transition duration-300`}
            >
              {loading ? <FaSpinner className="animate-spin mx-auto text-2xl" /> : 'Login'}
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mb-4">
          <p className="text-gray-600">
            Don’t have an account?{' '}
            <a href="/student-registration" className="text-blue-600 hover:underline text-lg">Sign up</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
