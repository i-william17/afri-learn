import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import heroImg from '../../assets/WhatsApp Image 2024-10-16 at 23.32.23.jpeg';

const Hero = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
    });
  }, [controls]);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden px-4">
      {/* Background Image with parallax and zoom effect */}
      <motion.img
        src={heroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ y: parallaxY }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Heading with responsive text size */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ y: -3, scale: 1.02 }}
        >
          Welcome to Your Future
        </motion.h1>

        {/* Subtext with responsive text size */}
        <motion.p
          className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          whileHover={{ y: 5 }}
        >
          Step into the next chapter with us.
        </motion.p>

        {/* Button with responsive size */}
        <motion.button
          onClick={() => (window.location.href = '/next-page')}
          className="bg-red-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg md:text-xl lg:text-2xl transition transform focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-lg"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#111",
            transition: { yoyo: Infinity, duration: 0.4 },
          }}
          whileTap={{ scale: 0.95, backgroundColor: "#333" }}
        >
          Explore Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
