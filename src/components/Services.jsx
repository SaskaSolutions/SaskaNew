import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TextParallax from './TextParallax'
import customSoftware from "../assets/TextParallax/customSoftware.png";
import webDev from "../assets/TextParallax/webDev.png";
import graphicDesign from "../assets/TextParallax/graphicDesign.png";

const Services = () => {

    const [textRef, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
        delay: 400
    });

    return (
        <div id='services' className='bg-gradient-to-b from-neutral-950 to-zinc-950 pt-12'>
            <div ref={textRef} className='relative w-8/12 mx-auto py-6'>
                <motion.h1
                    initial={{ x: 0, y: 0 }}
                    animate={inView ? { x: 8, y: -10, transition: { duration: 0.5, ease: "easeIn" } } : { x: 0, y: 0 }}
                    className='absolute inset-0 z-[1] text-center text-4xl lg:text-7xl font-bold font-DM  text-white'>
                    What We Do
                </motion.h1>
                <h1 className='blur-sm absolute inset-0 z-[0] text-center text-4xl lg:text-7xl font-bold font-DM  text-neutral-600'>
                    What We Do
                </h1>
            </div>
            <div className="relative max-w-[1600px] top-10 w-full mx-auto mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end px-8">
                <h2 className="max-w-lg text-3xl font-bold md:text-5xl font-DM text-slate-700">
                    We code like there's <br />{" "}
                    <span className="text-slate-300 font-DM"> no bug tomorrow.</span>
                </h2>
                {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="font-Poppins whitespace-nowrap bg-gradient-to-r from-blue-500 via-sky-500 to-violet-500 px-10 py-3 rounded-full font-medium text-lg mt-4 text-white shadow-xl transform transition-transform hover:scale-110"
                >
                    Solutions
                </motion.button> */}
            </div>
            <div className='relative max-w-[1600px] mx-auto'>
                <div className='py-6'>
                    <TextParallax
                        imgUrl={webDev}
                        subheading="Web Development"
                        heading="Responsive Web Design"
                    />
                    <TextParallax
                        imgUrl={customSoftware}
                        subheading="Software Development"
                        heading="Custom Software Solutions"
                    />
                    <TextParallax
                        imgUrl={graphicDesign}
                        subheading="Design"
                        heading="UI/UX & Graphic Design"
                    />
                </div>
            </div>
        </div >
    )
}

export default Services