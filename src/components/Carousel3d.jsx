import React from 'react';
import { motion } from 'framer-motion';
import { Blurhash } from 'react-blurhash';
import saska from '../assets/Saska.png'

const Carousel3d = ({ images = [], radius = 700, duration = 30, width = 500, height = 300 }) => {
    const totalCards = images.length;

    // Placeholder function to generate a Blurhash. 
    // Ideally, you'd have a precomputed Blurhash string for each image.
    const generateBlurHash = (imageSrc) => {
        // You would typically compute this on the server-side or use a tool to generate blurhashes for each image.
        return "LEHV6nWB2yk8pyo0adR*.7kCMdnj"; // Sample Blurhash; replace with actual hashes.
    };

    return (
        <section className='w-[100%] h-[60vh] text-center overflow-hidden relative flex items-center justify-center'>
            <motion.div
                className="relative"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateX(-15deg)`,
                }}
                initial={{ rotateY: 0, rotateX: -2 }}
                animate={{ rotateY: -360, rotateX: -2 }}
                transition={{ duration: duration, ease: 'linear', repeat: Infinity }}
            >
                {images.map((img, index) => {
                    const angle = (360 / (totalCards)) * index;
                    const blurHash = generateBlurHash(img); // Use your precomputed Blurhashes here.

                    return (
                        <motion.div
                            key={index}
                            className='absolute'
                            style={{
                                width: `${width}px`,
                                height: `${height}px`,
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                            }}
                        >
                            {/* Blurhash placeholder */}
                            <Blurhash
                                hash={blurHash}
                                width={width}
                                height={height}
                                resolutionX={32}
                                resolutionY={32}
                                punch={1}
                                className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg overflow-hidden'
                            />
                            {/* Actual image */}
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className='w-full h-full object-fill object-center rounded-lg shadow-lg absolute top-0 left-0'
                                style={{ display: 'none' }} // Hide image initially
                                onLoad={(e) => e.target.style.display = 'block'} // Show image after it loads
                            />
                        </motion.div>
                    );
                })}
                {/* <div className='backdrop-blur-sm rounded-lg shadow-lg absolute p-2 bg-black bg-opacity-40 top-0 left-0 w-[250px] h-[300px]'>
                    <img src={saska} alt="" className='w-full h-full object-cover' />
                </div> */}
            </motion.div>
        </section>
    );
};

export default Carousel3d;
