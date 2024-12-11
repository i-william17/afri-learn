import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img3.jpg';
import img3 from '../../../assets/img9.jpg';
import img4 from '../../../assets/img4.jpg';
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpg';
import img8 from '../../../assets/img2.jpg';
import img9 from '../../../assets/img8.jpg';
import img10 from '../../../assets/img10.jpg';
import img11 from '../../../assets/image1.jpg';
import vid1 from '../../../assets/vid1.mp4';
import vid2 from '../../../assets/vid2.mp4';

const media = [
  { id: 1, type: 'image', src: img2, alt: 'Photo 1' },
  { id: 2, type: 'video', src: vid1, alt: 'Video 1' },
  { id: 3, type: 'image', src: img1, alt: 'Photo 2' },
  { id: 4, type: 'video', src: vid2, alt: 'Video 2' },
  { id: 5, type: 'image', src: img3, alt: 'Photo 3' },
  { id: 6, type: 'image', src: img5, alt: 'Photo 4' },
  { id: 7, type: 'image', src: img4, alt: 'Photo 5' },
  { id: 8, type: 'image', src: img6, alt: 'Photo 6' },
  { id: 9, type: 'image', src: img10, alt: 'Photo 7' },
  { id: 10, type: 'image', src: img7, alt: 'Photo 8' },
  { id: 11, type: 'image', src: img8, alt: 'Photo 9' },
  { id: 13, type: 'image', src: img9, alt: 'Photo 10' },
  { id: 14, type: 'image', src: img11, alt: 'Photo 11' },
];

const Pictorial = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (mediaItem) => {
    setSelectedMedia(mediaItem);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const generateVariants = (index) => ({
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: index % 2 === 0 ? -150 : 150,
      y: index % 3 === 0 ? -100 : 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: index * 0.2,
      },
    },
  });

  return (
    <div className="py-8 bg-gradient-to-b from-gray-300 via-white to-gray-100 min-h-screen">
      {/* Section Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-800">
          <span className="text-red-600">Pictor</span>ials
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Take a look at what we do.
        </p>
      </motion.div>

      {/* Dynamic Grid of Photos and Videos */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 md:px-8">
        {media.map((item, index) => {
          // Dynamically adjust grid item size and placement
          const spanClasses =
            index % 10 === 0
              ? 'lg:col-span-3 lg:row-span-2'
              : index % 7 === 0
                ? 'lg:col-span-2 lg:row-span-2'
                : index % 5 === 0
                  ? 'lg:col-span-2'
                  : '';

          return (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer ${spanClasses}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={generateVariants(index)}
              onClick={() => handleMediaClick(item)}
            >
              {item.type === 'image' ? (
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:brightness-90 rounded-xl"
                  loading="lazy"
                  aria-label={`Image of ${item.alt}`}
                />
              ) : (
                <div className="relative">
                  <motion.video
                    src={item.src}
                    className="w-full h-full object-cover hover:brightness-90 rounded-xl"
                    muted
                    loop
                    autoPlay
                    aria-label={`Video of ${item.alt}`}
                  />
                  {/* Video Icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <span className="text-white text-5xl font-bold">▶</span>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Modal for Full-Screen View */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full p-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
              onClick={closeLightbox}
              aria-label="Close Modal"
            >
              ✕
            </button>

            {/* Media Content */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {selectedMedia.type === 'image' ? (
                <motion.img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full h-auto object-cover rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.video
                  src={selectedMedia.src}
                  className="w-full h-auto rounded-lg"
                  controls
                  autoPlay
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pictorial;
