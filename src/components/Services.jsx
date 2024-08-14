import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TextParallax from './TextParallax'

const Services = () => {

    const [textRef, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
        delay: 1000
    });

    return (
        <div className='container max-w-[1600px] mx-auto'>
            <div className='relative bg-gray-200'>
                <div ref={textRef} className='relative inset-0 w-6/12 mx-auto'>
                    <motion.h1
                        initial={{ x: 0, y: 0 }}
                        animate={inView ? { x: 3, y: -3, transition: { duration: 0.7, ease: "easeIn" } } : { x: 0, y: 0 }}
                        className='absolute inset-0 z-[2] text-white text-center font-DM text-5xl font-bold pt-8'>
                        WHAT WE DO
                    </motion.h1>
                    <h1 className='absolute inset-0 z-[1] text-center font-DM text-5xl font-bold pt-8 text-violet-700/20'>
                        WHAT WE DO
                    </h1>
                </div>
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
        </div>
    )
}

export default Services