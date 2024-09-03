import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TextParallax from './TextParallax'

const Services = () => {

    const [textRef, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
        delay: 400
    });

    return (
        <div className='bg-gradient-to-b from-black to-zinc-950 pt-12'>
            <div ref={textRef} className='relative w-8/12 mx-auto py-6'>
                <motion.h1
                    initial={{ x: 0, y: 0 }}
                    animate={inView ? { x: 8, y: -10, transition: { duration: 0.5, ease: "easeIn" } } : { x: 0, y: 0 }}
                    className='absolute inset-0 z-[1] text-center text-5xl lg:text-7xl font-bold font-DM  text-white'>
                    What We Do
                </motion.h1>
                <h1 className='blur-sm absolute inset-0 z-[0] text-center text-5xl lg:text-7xl font-bold font-DM  text-neutral-600'>
                    What We Do
                </h1>
            </div>
            <div className="relative top-10 w-full mx-auto mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end px-8">
                <h2 className="max-w-lg text-4xl font-bold md:text-5xl font-DM text-slate-700">
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
            <div className='relative'>
                <div className='py-6'>
                    <TextParallax
                        imgUrl="https://plus.unsplash.com/premium_photo-1678565546661-bf43274dd428?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        subheading="Web Development"
                        heading="Responsive Web Design"
                    />
                    <TextParallax
                        imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        subheading="Software Development"
                        heading="Custom Software Solutions"
                    />
                    <TextParallax
                        imgUrl="https://images.unsplash.com/photo-1635405054100-efa6dbf09b04?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        subheading="Design"
                        heading="UI/UX & Graphic Design"
                    />
                </div>
            </div>
        </div >
    )
}

export default Services