import React, { useState } from 'react';
import res1 from '../../assets/pexels-shvetsa-5614108.jpg';
import res2 from '../../assets/pexels-kindelmedia-8566437.jpg';
import res3 from '../../assets/pexels-ron-lach-9783348.jpg';
import res4 from '../../assets/pexels-pixabay-60504.jpg';
import Background from './Background';

// Sample data for research projects
const researchProjects = [
  {
    id: 1,
    title: 'AI in Healthcare: Revolutionizing Patient Care',
    description: 'Exploring the impact of AI on healthcare, improving diagnostics, and patient outcomes.',
    author: 'Jane Doe',
    image: res1,
    link: '#project1',
  },
  {
    id: 2,
    title: 'Robotics and Automation: What next?',
    description: 'A comprehensive study on robotics and what next in the future of automation.',
    author: 'John Smith',
    image: res2,
    link: '#project2',
  },
  {
    id: 3,
    title: 'Quantum Computing: The Future of Technology',
    description: 'Understanding the principles of quantum computing and its potential applications.',
    author: 'Emily Chen',
    image: res3,
    link: '#project3',
  },
  {
    id: 4,
    title: 'Cybersecurity in the Modern Age',
    description: 'Analyzing the current cybersecurity landscape and best practices for organizations.',
    author: 'Michael Brown',
    image: res4,
    link: '#project4',
  },
];

const Research = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = researchProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Our Research Projects</h2>
      <p className='italic text-center text-lg mx-auto max-w-3xl mb-8'>
        Collaboration between academia and industry in tech research fosters a dynamic environment where theoretical concepts can be translated into practical solutions, accelerating the development of transformative technologies.
      </p>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2 lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Research Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 md:p-5">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-1">{project.description}</p>
              <p className="text-gray-500 text-xs mb-2">Author: <span className="font-medium text-gray-700">{project.author}</span></p>
              <a 
                href={project.link} 
                className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300 block text-center text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <Background />

      {/* Modal for Detailed Project View */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-1/2">
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-1">{selectedProject.description}</p>
              <p className="text-gray-500 mb-3">Author: <span className="font-medium text-gray-700">{selectedProject.author}</span></p>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover mb-4" />
              <button
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Research;
