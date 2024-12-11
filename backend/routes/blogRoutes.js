const express = require('express');
const blogRouter = express.Router();
const blogController = require('../controllers/blogController');

// Routes
blogRouter.post('/', blogController.createBlog); // For creating a new blog with Base64 image
blogRouter.get('/', blogController.getAllBlogs); // Get all blogs

module.exports = blogRouter;
