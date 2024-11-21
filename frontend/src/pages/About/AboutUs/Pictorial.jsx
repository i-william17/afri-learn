import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { FaSearch, FaShareAlt, FaTimes } from 'react-icons/fa';
import img1 from '../../../assets/pexels-max-fischer-5212320.jpg';
import img2 from '../../../assets/pexels-max-fischer-5212320.jpg';
import img3 from '../../../assets/pexels-max-fischer-5212320.jpg';
import img4 from '../../../assets/pexels-max-fischer-5212320.jpg';
import img5 from '../../../assets/pexels-max-fischer-5212320.jpg';


const Pictorial = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-cubic',
      once: true,
    });

    gsap.from(".image-card", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  const images = [
    { src: img1, alt: 'Landscape 1', text: 'Scene 1', description: 'An amazing view of nature.' },
    { src: img2, alt: 'Landscape 2', text: 'Scene 2', description: 'A tranquil lakeside sunset.' },
    { src: img3, alt: 'Portrait 3', text: 'Scene 3', description: 'A beautiful mountain range at dawn.' },
    { src: img4, alt: 'Wide 4', text: 'Scene 4', description: 'A majestic city skyline at night.' },
    { src: img5, alt: 'Tall 5', text: 'Scene 5', description: 'A stunning tropical rainforest.' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 p-4 md:p-8">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-card relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 cursor-pointer group"
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-500">
              <div className="flex justify-between p-2 md:p-4">
                <FaSearch className="text-white text-lg md:text-2xl opacity-75 hover:opacity-100" />
                <FaShareAlt className="text-gray-300 text-lg md:text-2xl opacity-75 hover:opacity-100" />
              </div>
              <p className="absolute bottom-2 left-2 text-white text-sm md:text-md font-semibold">{image.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
          <div className="relative bg-gray-800 text-white rounded-lg shadow-2xl w-full max-w-lg p-4 md:p-6">
            <FaTimes
              className="absolute top-2 right-2 text-2xl text-red-500 cursor-pointer hover:text-white"
              onClick={closeModal}
            />
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-lg md:text-xl font-bold mb-2">{selectedImage.text}</h2>
            <p className="text-gray-300">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pictorial;
