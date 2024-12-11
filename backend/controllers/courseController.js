const Course = require("../models/courses");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const { Readable } = require("stream");
require("dotenv").config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = (base64Data, folder, resourceType) => {
  return new Promise((resolve, reject) => {
    // Extract actual base64 content if data URL is provided
    const base64Content = base64Data.includes(",")
      ? base64Data.split(",")[1]
      : base64Data;

    if (!base64Content) {
      return reject(new Error("No file content provided"));
    }

    // Create upload stream
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: resourceType },
      (error, result) => {
        if (error) {
          console.error("Upload failed:", error);
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );

    // Convert base64 to buffer and pipe to upload stream
    const buffer = Buffer.from(base64Content, "base64");
    const readStream = Readable.from(buffer);
    readStream.pipe(uploadStream);
  });
};

const uploadMedia = async (file, folder, resourceType) => {
  if (!file) return null;
  try {
    return await uploadToCloudinary(file, folder, resourceType);
  } catch (error) {
    console.error(`Error uploading ${resourceType}:`, error);
    throw new Error(`Failed to upload ${resourceType}`);
  }
};

const processUploadedMaterials = async (materials = []) => {
  if (!materials.length) return [];

  const uploadedMaterials = [];
  for (const material of materials) {
    try {
      const materialUrl = await uploadToCloudinary(
        material.content,
        "courses/materials",
        "auto"
      );
      uploadedMaterials.push({
        name: material.name,
        content: materialUrl,
      });
    } catch (error) {
      console.error(`Error uploading material ${material.name}:`, error);
      // Continue with other materials if one fails
    }
  }
  return uploadedMaterials;
};

const processSectionLessons = async (sections = []) => {
  const processedSections = [];

  for (const section of sections) {
    const processedLessons = await Promise.all(
      section.lessons.map(async (lesson) => {
        if (!lesson.videoFile) return lesson;

        try {
          const videoUrl = await uploadToCloudinary(
            lesson.videoFile,
            `courses/lessons/${lesson.title}`,
            "video"
          );
          return { ...lesson, videoFile: videoUrl };
        } catch (error) {
          console.error(
            `Error uploading video for lesson ${lesson.title}:`,
            error
          );
          return lesson;
        }
      })
    );

    processedSections.push({
      ...section,
      lessons: processedLessons,
    });
  }

  return processedSections;
};

const courseController = {
  //Create course
  async createCourse(req, res) {
    const session = await Course.startSession();
    session.startTransaction();

    try {
      console.log("Starting course creation process");
      const {
        title,
        category,
        price,
        level,
        duration,
        instructor,
        email,
        bio,
        overview,
        objectives,
        prerequisites,
        shortDescription,
        targetAudience,
        tags,
        numberOfLessons,
        numberOfQuizzes,
        pricing,
        meta,
        settings,
        sections,
        thumbnailImage,
        introductionVideo,
        downloadableMaterials,
      } = req.body;

      // Handle media uploads
      const [thumbnailUrl, videoUrl] = await Promise.all([
        uploadMedia(thumbnailImage, "courses/thumbnails", "image"),
        uploadMedia(introductionVideo, "courses/videos", "video"),
      ]);

      // Process materials and sections
      const [materials, processedSections] = await Promise.all([
        processUploadedMaterials(downloadableMaterials),
        processSectionLessons(sections),
      ]);

      // Create course document
      const course = new Course({
        title,
        category,
        price,
        level,
        duration,
        instructor,
        email,
        bio,
        overview,
        objectives,
        prerequisites,
        shortDescription,
        targetAudience,
        tags: tags?.split(",") || [],
        numberOfLessons,
        numberOfQuizzes,
        pricing,
        meta,
        settings,
        sections: processedSections,
        thumbnailImage: thumbnailUrl,
        introductionVideo: videoUrl,
        downloadableMaterials: materials,
        status: "Draft",
      });

      await course.save({ session });
      await session.commitTransaction();

      console.log("Course created successfully");
      res.status(201).json({
        success: true,
        data: course,
      });
    } catch (error) {
      await session.abortTransaction();
      console.error("Course creation failed:", error);
      res.status(400).json({
        success: false,
        error: error.message,
      });
    } finally {
      session.endSession();
    }
  },

  // Get all courses
  async getAllCourses(req, res) {
    try {
      const courses = await Course.find();
      res.status(200).json({
        success: true,
        data: courses,
      });
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  //Get all courses by ID
  async getCourseById(req, res) {
    try {
      const { id } = req.params;
  
      // Validate ObjectId
      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
          success: false,
          error: "Invalid course ID",
        });
      }
  
      const course = await Course.findById(id);
  
      if (!course) {
        return res.status(404).json({
          success: false,
          error: "Course not found",
        });
      }
  
      res.status(200).json({
        success: true,
        data: course,
      });
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Update a course
  async updateCourse(req, res) {
    const session = await Course.startSession();
    session.startTransaction();

    try {
      const { id } = req.params;
      const updates = req.body;

      // Handle media uploads if necessary
      if (updates.thumbnailImage) {
        updates.thumbnailImage = await uploadMedia(
          updates.thumbnailImage,
          "courses/thumbnails",
          "image"
        );
      }
      if (updates.introductionVideo) {
        updates.introductionVideo = await uploadMedia(
          updates.introductionVideo,
          "courses/videos",
          "video"
        );
      }
      if (updates.downloadableMaterials) {
        updates.downloadableMaterials = await processUploadedMaterials(
          updates.downloadableMaterials
        );
      }
      if (updates.sections) {
        updates.sections = await processSectionLessons(updates.sections);
      }

      const course = await Course.findByIdAndUpdate(id, updates, {
        new: true,
        session,
      });

      if (!course) {
        await session.abortTransaction();
        return res.status(404).json({
          success: false,
          error: "Course not found",
        });
      }

      await session.commitTransaction();
      res.status(200).json({
        success: true,
        data: course,
      });
    } catch (error) {
      await session.abortTransaction();
      console.error("Error updating course:", error);
      res.status(400).json({
        success: false,
        error: error.message,
      });
    } finally {
      session.endSession();
    }
  },

  // Delete a course
  async deleteCourse(req, res) {
    const session = await Course.startSession();
    session.startTransaction();

    try {
      const { id } = req.params;

      const course = await Course.findByIdAndDelete(id, { session });

      if (!course) {
        await session.abortTransaction();
        return res.status(404).json({
          success: false,
          error: "Course not found",
        });
      }

      await session.commitTransaction();
      res.status(200).json({
        success: true,
        message: "Course deleted successfully",
      });
    } catch (error) {
      await session.abortTransaction();
      console.error("Error deleting course:", error);
      res.status(400).json({
        success: false,
        error: error.message,
      });
    } finally {
      session.endSession();
    }
  },
};

module.exports = courseController;
