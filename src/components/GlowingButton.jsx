import React from 'react';
import { motion } from 'framer-motion';

const GlowingButton = ({ text, link }) => {
    return (
        <motion.button
            className="relative rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label={text}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-70 blur-lg transition-opacity duration-300 ease-in-out"></div>

            <div className="relative z-10 text-white px-10 py-3 font-medium text-lg">
                {text}
            </div>

            {/* Gradient Animation */}
            <style>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
            `}</style>
            <div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradientShift rounded-full"
                style={{
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 4s ease-in-out infinite',
                }}
            ></div>
        </motion.button>
    );
};

export default GlowingButton;
