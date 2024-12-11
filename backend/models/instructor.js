const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  biography: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  skills: { type: [String], default: [] },
  socialMedia: {
    facebook: { type: String, default: '' },
    twitter: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    instagram: { type: String, default: '' },
  },
  image: { type: String, required: true }, // Base64 string for the image
}, { timestamps: true });

module.exports = mongoose.model('Instructor', InstructorSchema);
