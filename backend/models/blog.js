const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    writer: { type: String, required: true },
    image: { type: String, required: true }, // Base64 image string
    content: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);
