const Instructor = require('../models/instructor');

// Create a new instructor
exports.createInstructor = async (req, res) => {
  try {
    const instructor = new Instructor(req.body);
    const savedInstructor = await instructor.save();
    res.status(201).json(savedInstructor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all instructors
exports.getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single instructor by ID
exports.getInstructorById = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) return res.status(404).json({ message: 'Instructor not found' });
    res.status(200).json(instructor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an instructor by ID
exports.updateInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!instructor) return res.status(404).json({ message: 'Instructor not found' });
    res.status(200).json(instructor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an instructor by ID
exports.deleteInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndDelete(req.params.id);
    if (!instructor) return res.status(404).json({ message: 'Instructor not found' });
    res.status(200).json({ message: 'Instructor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
