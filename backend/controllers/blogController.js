const Blog = require('../models/blog');

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, category, date, writer, content, image } = req.body;

    const newBlog = new Blog({
      title,
      category,
      date,
      writer,
      content,
      image, // Store Base64 image string
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};
