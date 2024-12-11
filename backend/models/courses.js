const mongoose = require("mongoose");

const downloadableMaterialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true }, // Base64 string or URL
});

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["video", "document"], required: true },
  content: { type: String, default: "" }, // Optional content for lesson
  videoFile: { type: String }, // Base64 or URL for video
  videoName: { type: String },
});

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lessons: { type: [lessonSchema], default: [] },
});

const pricingSchema = new mongoose.Schema({
  basePrice: { type: Number, required: true },
  currency: { type: String, required: true },
  discount: { type: Number, default: 0 }, // Percentage
  enrollmentDuration: { type: Number, required: true }, // in weeks or days
});

const metaSchema = new mongoose.Schema({
  language: { type: String, required: true },
  skillLevel: { type: String, required: true },
});

const settingsSchema = new mongoose.Schema({
  certificationType: { type: String, enum: ["graded", "completion"], required: true },
  durationWeeks: { type: Number, required: true },
  enrollmentLimit: { type: Number, default: 0 }, // 0 for unlimited
  startDate: { type: Date, required: true },
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
  duration: { type: String, required: true }, // Could be hours or weeks
  instructor: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String },
  overview: { type: String, required: true },
  objectives: { type: String, required: true },
  prerequisites: { type: String, required: true },
  shortDescription: { type: String, required: true },
  targetAudience: { type: String, required: true },
  tags: { type: [String], default: [] },
  numberOfLessons: { type: Number, required: true },
  numberOfQuizzes: { type: Number, required: true },
  introductionVideo: { type: String }, // Base64 or URL
  thumbnailImage: { type: String }, // Base64 or URL
  downloadableMaterials: { type: [downloadableMaterialSchema], default: [] },
  sections: { type: [sectionSchema], default: [] },
  pricing: { type: pricingSchema, required: true },
  meta: { type: metaSchema, required: true },
  settings: { type: settingsSchema, required: true },
  status: { type: String, enum: ["Draft", "Published"], default: "Draft" },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
