const express = require('express');
const instructorRouter = express.Router();
const instructorController = require('../controllers/instructorController');

// Create a new instructor
instructorRouter.post('/', instructorController.createInstructor);

// Get all instructors
instructorRouter.get('/', instructorController.getInstructors);

// Get a single instructor by ID
instructorRouter.get('/:id', instructorController.getInstructorById);

// Update an instructor by ID
instructorRouter.put('/:id', instructorController.updateInstructor);

// Delete an instructor by ID
instructorRouter.delete('/:id', instructorController.deleteInstructor);

module.exports = instructorRouter;
