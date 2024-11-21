import React from 'react';
import 'tailwindcss/tailwind.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../../../assets/pexels-hyundaimotorgroup-19233057.jpg';

// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {

  return (
    <div
      className="about-hero relative h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-[60vh] bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img})`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <h1 className="hero-text text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-wide drop-shadow-lg text-center">
          Welcome to Our Story
        </h1>
        <p className="hero-text text-red-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl px-4 sm:px-6 md:px-12 leading-relaxed drop-shadow-md">
          Discover who we are and what we stand for. Our journey, our vision, and the values that drive us.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
