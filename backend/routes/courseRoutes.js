const express = require('express');
const courseRoutes = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const  courseController = require('../controllers/courseController');

// Base route: /api/courses

// Create a new course
courseRoutes.post('/'
    , upload.fields([
     { name: 'thumbnailImage', maxCount: 1 },
     { name: 'introductionVideo', maxCount: 1 },
     { name: 'downloadableMaterials'}
    ]),
      courseController.createCourse);

// Get all courses
courseRoutes.get('/', courseController.getAllCourses);

// Search courses
//courseRoutes.get('/search', courseController.searchCourses);

// Get a single course
courseRoutes.get('/${id}', courseController.getCourseById);

// Update a course
courseRoutes.put('/:id', courseController.updateCourse);

// Delete a course
courseRoutes.delete('/:id', courseController.deleteCourse);

module.exports = courseRoutes;