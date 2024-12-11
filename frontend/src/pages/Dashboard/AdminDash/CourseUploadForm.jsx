import React, { useState } from 'react';
import { Upload, Paperclip, DollarSign, Users, Book, User, Layout, Settings, Tag } from 'lucide-react';
import axios from 'axios';
import { FaSave } from 'react-icons/fa'
import endpoint from '../../../endpoint';

const CourseUpload = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });
  const [sections, setSections] = useState([{
    title: '',
    lessons: [{
      title: '',
      type: 'video',
      content: '',
      videoFile: null,
      videoName: ''
    }]
  }]);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'Development',
    price: '',
    level: 'Beginner',
    duration: '',
    numberOfLessons: '',
    numberOfQuizzes: '',
    shortDescription: '',
    overview: '',
    objectives: '',
    prerequisites: '',
    targetAudience: '',
    instructor: '',
    email: '',
    bio: '',
    thumbnailImage: null,
    introductionVideo: null,
    downloadableMaterials: [],
    sections: [
      {
        title: '',
        lessons: [{
          title: '',
          type: 'video',
          content: '',
          videoFile: null,
          videoName: ''
        }],
      },
    ],
    settings: {
      certificationType: 'none',
      enrollmentLimit: '',
      startDate: '',
      durationWeeks: '',
    },
    pricing: {
      basePrice: '',
      currency: 'KSH',
      discount: '',
      enrollmentDuration: '',
    },
    meta: {
      tags: '',
      language: 'en',
      skillLevel: 'beginner',
    },
    status: 'Draft',
  });


  // Preview states
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [introVideoName, setIntroVideoName] = useState('');
  const [materialsList, setMaterialsList] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 2MB
  const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 50MB

  // Handle video upload for lessons
  const handleLessonVideoChange = async (sectionIndex, lessonIndex, e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        setErrorMessage('Video size should be less than 100MB');
        return;
      }

      try {
        const base64 = await convertToBase64(file);
        const newSections = [...sections];
        newSections[sectionIndex].lessons[lessonIndex].videoFile = base64;
        newSections[sectionIndex].lessons[lessonIndex].videoName = file.name;
        setSections(newSections);
      } catch (error) {
        setErrorMessage('Error processing video');
        console.error('Error converting video:', error);
      }
    }
  };

  // Update the section title
  const handleSectionChange = (sectionIndex, field, value) => {
    const newSections = [...sections];
    newSections[sectionIndex][field] = value;
    setSections(newSections);
  };


  // Handle regular input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const keys = name.split('.');
      if (keys.length === 1) {
        return { ...prevData, [name]: value };
      }

      // For nested keys like "settings.certificationType"
      return {
        ...prevData,
        [keys[0]]: {
          ...prevData[keys[0]],
          [keys[1]]: value,
        },
      };
    });
  };



  // Handle thumbnail image upload
  const handleThumbnailChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('Image size should be less than 5MB');
        return;
      }

      try {
        const base64 = await convertToBase64(file);
        setFormData(prevData => ({
          ...prevData,
          thumbnailImage: base64
        }));
        setThumbnailPreview(URL.createObjectURL(file));
      } catch (error) {
        setErrorMessage('Error processing image');
        console.error('Error converting image:', error);
      }
    }
  };

  // Handle introduction video upload
  const handleVideoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        setErrorMessage('Video size should be less than 100MB');
        return;
      }

      try {
        const base64 = await convertToBase64(file);
        setFormData(prevData => ({
          ...prevData,
          introductionVideo: base64
        }));
        setIntroVideoName(file.name);
      } catch (error) {
        setErrorMessage('Error processing video');
        console.error('Error converting video:', error);
      }
    }
  };

  // Handle downloadable materials upload
  const handleMaterialsChange = async (e) => {
    const files = Array.from(e.target.files);
    const totalSize = files.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > 50 * 1024 * 1024) {
      setErrorMessage('Total materials size should be less than 50MB');
      return;
    }

    try {
      const materials = await Promise.all(
        files.map(async (file) => ({
          name: file.name,
          content: await convertToBase64(file)
        }))
      );

      setFormData(prevData => ({
        ...prevData,
        downloadableMaterials: [...prevData.downloadableMaterials, ...materials]
      }));
      setMaterialsList(prev => [...prev, ...files.map(file => file.name)]);
    } catch (error) {
      setErrorMessage('Error processing materials');
      console.error('Error converting materials:', error);
    }
  };

  // Convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  // Update lesson details
  const handleLessonChange = (sectionIndex, lessonIndex, field, value) => {
    const newSections = [...sections];
    newSections[sectionIndex].lessons[lessonIndex][field] = value;
    setSections(newSections);
  };

  // Add new section
  // Add new section
  const addSection = () => {
    const newSection = {
      title: '',
      lessons: [{ title: '', type: 'video', content: '', videoFile: null, videoName: '' }],
    };

    setFormData((prevData) => ({
      ...prevData,
      sections: [...prevData.sections, newSection],
    }));
  };

  const addLesson = (sectionIndex) => {
    const newSections = [...formData.sections];
    newSections[sectionIndex].lessons.push({ title: '', type: 'video', content: '', videoFile: null, videoName: '' });

    setFormData((prevData) => ({
      ...prevData,
      sections: newSections,
    }));
  };

  // Handle form submission
  const handleSubmit = async (req,res,event) => {
    event.preventDefault();

    // Combine all data
    const submitData = {
      ...formData,
      sections: sections,
    };

      // Validate file sizes
  if (formData.thumbnailImage && formData.thumbnailImage.size > MAX_IMAGE_SIZE) {
    setErrorMessage('Thumbnail image is too large. Max size: 2MB');
    return;
  }

  if (formData.introductionVideo && formData.introductionVideo.size > MAX_VIDEO_SIZE) {
    setErrorMessage('Introduction video is too large. Max size: 50MB');
    return;
  }

    try {
      setSubmitStatus({ message: 'Submitting...', type: 'info' });

      const response = await axios.post(`${endpoint}/api/courses`, submitData);

      if (response.status === 200) {
        setSuccessMessage('Course created successfully!');

        // Reset form
        setFormData({
          title: '',
          category: 'Development',
          price: '',
          level: 'Beginner',
          duration: '',
          numberOfLessons: '',
          numberOfQuizzes: '',
          shortDescription: '',
          overview: '',
          objectives: '',
          prerequisites: '',
          targetAudience: '',
          instructor: '',
          email: '',
          bio: '',
          thumbnailImage: null,
          introductionVideo: null,
          downloadableMaterials: [],
          sections: [{ title: '', lessons: [{ title: '', type: 'video', content: '' }] }],
          lessons: [],
          settings: {
            certificationType: 'none',
            enrollmentLimit: '',
            startDate: '',
            durationWeeks: ''
          },
          pricing: {
            basePrice: '',
            currency: 'KSH',
            discount: '',
            enrollmentDuration: ''
          },
          meta: {
            tags: [],
            language: 'en',
            skillLevel: 'beginner'
          },
          status: 'Draft'
        });
        setSections([{ title: '', lessons: [{ title: '', type: 'video' }] }]);
        setThumbnailPreview(null);
        setIntroVideoName('');
        setMaterialsList([]);

        // Update status to success
        setSubmitStatus(response.status === 201 && { message: 'Course successfully uploaded!', type: 'success' });

        // Automatically clear the status message after 3 seconds
        setTimeout(() => {
          setSubmitStatus({ message: '', type: '' });
        }, 3000);
      }
    } catch (error) {
      setErrorMessage('Error creating course. Please try again.');
      console.log('Error:', error);
      setSubmitStatus({
        message: 'Error uploading course. Please try again.',
        type: 'error' // Set type to 'error' for consistency
      });
    }
    console.log('Form Data:', submitData);
  };

  // Handle material removal
  const handleRemoveMaterial = (index) => {
    setFormData(prevData => ({
      ...prevData,
      downloadableMaterials: prevData.downloadableMaterials.filter((_, i) => i !== index)
    }));
    setMaterialsList(prev => prev.filter((_, i) => i !== index));
  };



  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-11/12 mx-auto bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Create New Course</h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-4 border-b border-gray-200">
          {[
            { id: 'basic', icon: <Layout className="w-4 h-4" />, label: 'Basic Information' },
            { id: 'details', icon: <Book className="w-4 h-4" />, label: 'Course Details' },
            { id: 'instructor', icon: <Users className="w-4 h-4" />, label: 'Instructor' },
            { id: 'media', icon: <Upload className="w-4 h-4" />, label: 'Media & Materials' },
            { id: 'structure', icon: <Layout className="w-4 h-4" />, label: 'Course Structure' },
            { id: 'settings', icon: <Settings className="w-4 h-4" />, label: 'Additional Settings' },
            { id: 'pricing', icon: <DollarSign className="w-4 h-4" />, label: 'Pricing' },
            { id: 'meta', icon: <Tag className="w-4 h-4" />, label: 'Meta Information' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === tab.id
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Basic Course Information */}
          <div className={activeTab === 'basic' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Course Title</label>
                  <input
                    type="text"
                    name="title"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="Enter course title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option>Development</option>
                    <option>Business</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Robotics</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      name='price'
                      className="pl-8 block w-full rounded-md border border-gray-300 px-3 py-2"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Level</label>
                  <select
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Duration (hours)</label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Lessons</label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    name="numberOfLessons"
                    value={formData.numberOfLessons}
                    onChange={handleChange}
                    required

                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Quizzes</label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    name="numberOfQuizzes"
                    value={formData.numberOfQuizzes}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className={activeTab === 'details' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Short Description</label>
                <textarea
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  rows="3"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Overview</label>
                <textarea
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  rows="4"
                  name="overview"
                  value={formData.overview}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Course Objectives</label>
                <textarea
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  rows="4"
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Prerequisites</label>
                <textarea
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  rows="3"
                  name="prerequisites"
                  value={formData.prerequisites}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Target Audience</label>
                <textarea
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  rows="3"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Instructor Information */}
          <div className={activeTab === 'instructor' ? 'block' : 'hidden'}>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
              <User className="w-5 h-5" />
              <h2>Instructor Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Instructor Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='instructor'
                  value={formData.instructor}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Instructor Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Instructor Bio</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
                name='bio'
                value={formData.bio}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          {/* Media & Materials */}
          <div className={activeTab === 'media' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              {/* Image Upload Section */}
              {/* In the media tab, update the thumbnail upload section: */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Course Thumbnail</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    {thumbnailPreview ? (
                      <div className="relative w-full h-full">
                        <img
                          src={thumbnailPreview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setThumbnailPreview(null);
                            setFormData(prev => ({ ...prev, thumbnailImage: null }));
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 5MB)</p>
                      </div>
                    )}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                      name="thumbnailImage"
                    />
                  </label>
                </div>
              </div>

              {/* Update the video upload section: */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Introduction Video</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                        <span>Upload a video</span>
                        <input
                          type="file"
                          className="sr-only"
                          accept="video/*"
                          onChange={handleVideoChange}
                          name="introductionVideo"
                        />
                      </label>
                    </div>
                    {introVideoName && (
                      <p className="text-sm text-gray-500">{introVideoName}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Update the materials upload section: */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Downloadable Materials</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Paperclip className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                        <span>Upload files</span>
                        <input
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleMaterialsChange}
                          name="downloadableMaterials"
                        />
                      </label>
                    </div>
                    {materialsList.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700">Uploaded Materials:</h4>
                        <ul className="mt-2 divide-y divide-gray-200">
                          {materialsList.map((name, index) => (
                            <li key={index} className="py-2 flex justify-between items-center">
                              <span className="text-sm text-gray-600">{name}</span>
                              <button
                                type="button"
                                onClick={() => handleRemoveMaterial(index)}
                                className="text-red-600 hover:text-red-700"
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Structure */}
          <div className={activeTab === 'structure' ? 'block' : 'hidden'}>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
              <Book className="w-5 h-5" />
              <h2>Course Structure</h2>
            </div>
            <div className="space-y-6">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="p-4 border rounded-lg">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Section Title</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={section.title} // Corrected to access section directly
                      onChange={(e) => handleSectionChange(sectionIndex, 'title', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-4">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="p-4 border rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Lesson Title</label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              value={lesson.title} // Corrected to access lesson directly
                              onChange={(e) => handleLessonChange(sectionIndex, lessonIndex, 'title', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Content Type</label>
                            <select
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              value={lesson.type} // Corrected to access lesson directly
                              onChange={(e) => handleLessonChange(sectionIndex, lessonIndex, 'type', e.target.value)}
                              required
                            >
                              <option value="video">Video</option>
                              <option value="pdf">PDF</option>
                              <option value="quiz">Quiz</option>
                            </select>
                          </div>
                        </div>

                        {lesson.type === 'video' && (
                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Upload Video</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex text-sm text-gray-600">
                                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                    <span>Upload a video</span>
                                    <input
                                      type="file"
                                      className="sr-only"
                                      accept="video/*"
                                      onChange={(e) => handleLessonVideoChange(sectionIndex, lessonIndex, e)}
                                    />
                                  </label>
                                </div>
                                {lesson.videoName && ( // Corrected to access lesson directly
                                  <p className="text-sm text-gray-500">{lesson.videoName}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {lesson.type === 'pdf' && (
                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">PDF URL</label>
                            <input
                              type="url"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              value={lesson.content} // Corrected to access lesson directly
                              onChange={(e) => handleLessonChange(sectionIndex, lessonIndex, 'content', e.target.value)}
                              placeholder="Enter PDF URL"
                              required
                            />
                          </div>
                        )}

                        {lesson.type === 'quiz' && (
                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Quiz URL</label>
                            <input
                              type="url"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              value={lesson.content} // Corrected to access lesson directly
                              onChange={(e) => handleLessonChange(sectionIndex, lessonIndex, 'content', e.target.value)}
                              placeholder="Enter Quiz URL"
                              required
                            />
                          </div>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addLesson(sectionIndex)}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      + Add Lesson
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addSection}
                className="text-blue-600 hover:text-blue-700"
              >
                + Add Section
              </button>
            </div>
          </div>



          {/* Additional Settings */}
          <div className={activeTab === 'settings' ? 'block' : 'hidden'}>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
              <Settings className="w-5 h-5" />
              <h2>Additional Settings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Certification Option</label>
                <select
                  name='settings.certificationType'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.settings.certificationType}
                  onChange={handleChange}
                  required
                >
                  <option value="No Certificate">No Certificate</option>
                  <option value="Completion Certificate">Completion Certificate</option>
                  <option value="Graded Certificate">Graded Certificate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Enrollment Limit</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='settings.enrollmentLimit'
                  value={formData.settings.enrollmentLimit}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='settings.startDate'
                  value={formData.settings.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration (weeks)</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='settings.durationWeeks'
                  value={formData.settings.durationWeeks}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Pricing and Access */}
          <div className={activeTab === 'pricing' ? 'block' : 'hidden'}>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
              <DollarSign className="w-5 h-5" />
              <h2>Pricing and Access</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Base Price</label>
                <input
                  type="basePrice"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='pricing.basePrice'
                  value={formData.pricing.basePrice}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Currency</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='pricing.currency'
                  value={formData.pricing.currency}
                  onChange={handleChange}
                  required
                >
                  <option value="KSH">KSH</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='pricing.discount'
                  value={formData.pricing.discount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Enrollment Duration (months)</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='pricing.enrollmentDuration'
                  value={formData.pricing.enrollmentDuration}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Meta Information */}
          <div className={activeTab === 'meta' ? 'block' : 'hidden'}>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
              <Tag className="w-5 h-5" />
              <h2>Meta Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="web development, javascript, react"
                  name='meta.tags'
                  value={formData.meta.tags}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='meta.language'
                  value={formData.meta.language}
                  onChange={handleChange}
                  required
                >
                  <option value="English">English</option>
                  <option value="Swahili">Swahili</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Skill Level</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  name='meta.skillLevel'
                  value={formData.meta.skillLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Status Message */}
          {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

          {/* Save/Cancel Buttons */}
          <div className="mt-6 flex items-center justify-end gap-4">
            <button
              type="submit"
              className="mr-20 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-gray-700"
            > <FaSave className='inline mr-3' />
              Save Course
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default CourseUpload;