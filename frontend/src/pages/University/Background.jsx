import React from 'react';
import { Parallax } from 'react-parallax';
import image from '../../assets/pexels-hyundaimotorgroup-19233057.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Background = () => {
    return (
        <Parallax bgImage={image} strength={1000}>
            <div style={{ height: '50vh' }} className="mt-5 mb-5 relative">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-70" />

                <div className="flex flex-col items-center justify-center h-full text-white relative z-10">
                    <h1 className="text-4xl md:text-5xl text-red-600 font-bold mb-4 text-center px-4 md:px-0">
                        Together We Go Far
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 mb-6 px-6 md:px-12 text-center">
                        Join us in exploring innovative solutions that can drive meaningful change
                        in our world. Your contribution can make a significant impact!
                    </p>
                    <button className="px-4 py-2 md:px-6 md:py-2 border border-white hover:bg-red-900 rounded-lg text-base md:text-lg transition duration-300">
                        Join us Today <FaArrowRight className='inline-flex' />
                    </button>
                </div>
            </div>
        </Parallax>
    );
};

export default Background;
