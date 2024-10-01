import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useMotionTemplate, animate, useMotionValue } from 'framer-motion';

const COLORS = ["#E61919", "#0066FF", "#7F055F", "#F75590", "#E61919"];

const CallToAction = () => {
    const color = useMotionValue(COLORS[0]);
    const border = useMotionTemplate`2px solid ${color}`
    const boxShadow = useMotionTemplate`0 4px 24px ${color}`

    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            repeat: Infinity,
            duration: 10,
            repeatType: "mirror",
        }

        )
    })
    return (
        <motion.section
            className="h-screen overflow-hidden text-white relative"
        >
            <div className="relative h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                    Innovation Meets Excellence
                </h2>
                <p className="text-lg font-light lg:text-xl mb-4">
                    Pioneering web solutions that turn your vision into reality.
                </p>
                <Link to="contact" spy={true} smooth={true} duration={500}>
                    <motion.button
                        style={{ boxShadow, border }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className='px-6 py-3 rounded-full text-lg font-DM font-semibold'
                    >
                        Discover the future with us
                    </motion.button>
                </Link>
            </div>
        </motion.section>
    );
};

export default CallToAction;
