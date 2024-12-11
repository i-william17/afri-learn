import React, { useEffect, useState, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const controls = useAnimation();

  const [codeSnippet, setCodeSnippet] = useState("");

  const pythonCode = `# Welcome to Afribot Robotics E-learning
def ignite_imagination():
    """Discover the power of code"""
    possibilities = ["create", "innovate", "transform"]
    for action in possibilities:
        print(f"Let's {action} the future!")

ignite_imagination()`;

const startTypewriter = useCallback(() => {
  let index = 0;
  const typewriter = setInterval(() => {
    setCodeSnippet(prev => {
      if (index < pythonCode.length) {
        return prev + pythonCode[index++];
      } else {
        clearInterval(typewriter); // Stop when the full code is displayed
        return pythonCode; // Ensure the full code is shown
      }
    });
  }, 100); // Slowed down to 100ms for a smoother effect

  return () => clearInterval(typewriter); // Cleanup interval
}, [pythonCode]);




  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.3 },
    });

    startTypewriter();
  }, [controls, startTypewriter]);

  const floatingElements = React.useMemo(() => [
    { className: 'bg-red-500', size: 'w-12 h-12', animation: { x: [0, -30, 30, 0], y: [0, 30, -30, 0] } },
    { className: 'bg-yellow-500', size: 'w-16 h-16', animation: { x: [0, 40, -40, 0], y: [0, -20, 20, 0] } },
    { className: 'bg-black', size: 'w-10 h-10', animation: { x: [0, -35, 35, 0], y: [0, 20, -20, 0] } },
    { className: 'bg-white', size: 'w-14 h-14', animation: { x: [0, 25, -25, 0], y: [0, -15, 15, 0] } },
    { className: 'bg-green-500', size: 'w-12 h-12', animation: { x: [0, -30, 30, 0], y: [0, 30, -30, 0] } },
  ], []);

  return (
    <section className="relative min-h-screen flex items-center justify-between bg-gradient-to-br from-black via-gray-800 to-black overflow-hidden px-8">
      <motion.div
        className="relative z-10 text-left space-y-8 px-6 ml-10 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-semibold text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          Ignite your <span className="text-red-500 font-extrabold bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Imagination</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        >
          Discover endless possibilities through learning and innovation.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <motion.button
            onClick={() => (window.location.href = '/explore')}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 shadow-lg transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
          </motion.button>

          <motion.button
            onClick={() => (window.location.href = '/learn-more')}
            className="bg-transparent border-2 border-gray-300 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-lg transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Floating Elements with reduced reflows */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.className} ${element.size} rounded-full shadow-lg backdrop-blur-sm`}
          style={{
            top: `${(index + 1) * 20}%`,
            left: `${(index + 1) * 15}%`,
          }}
          animate={element.animation}
          transition={{ repeat: Infinity, duration: 6 + index, ease: 'easeInOut' }}
        />
      ))}

      {/* Enhanced Code Box */}
      <motion.div
        className="right-10 mr-10 max-w-lg w-full transform-gpu code-box"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-red-500/20">
          {/* Code Box Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm">python</span>
          </div>

          {/* Code Content */}
          <div className="p-6 bg-gray-900 overflow-x-auto">
            <pre className="font-mono text-sm sm:text-base leading-relaxed">
              <code className="text-green-400 block">
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i} className="line hover:bg-gray-800/50 px-2 -mx-2 rounded">
                    {line}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
