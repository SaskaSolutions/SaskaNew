import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const Hero = () => {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease-out cubic
            smoothWheel: true,
            smoothTouch: false,
            direction: 'vertical',
            gestureDirection: 'vertical',
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Adjusted movement ranges for less dramatic motion
    const fastY = useTransform(scrollYProgress, [0, 1], [200, -600]); // Less dramatic movement
    const slowY = useTransform(scrollYProgress, [0, 1], [-200, 300]); // Less dramatic movement
    const exitScale = useTransform(scrollYProgress, [0.7, 1], [1, 0.7]);
    const exitOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

    return (
        <div className='relative'>
            <div className='h-[200vh] w-full bg-gradient-to-b from-black via-gray-900 to-black relative '>
                <div ref={ref} className='w-full h-[200vh] relative max-w-[1600px] mx-auto'>
                    <motion.div
                        initial="hide"
                        animate="show"
                        style={{ scale: exitScale, opacity: exitOpacity }}
                        variants={{
                            show: {
                                transition: {
                                    staggerChildren: 0.2,
                                    when: "beforeChildren",
                                    ease: "anticipate"
                                },
                            },
                            hide: {
                                transition: {
                                    when: "afterChildren",
                                    ease: "anticipate"
                                },
                            },
                        }}
                        className='flex flex-col justify-center items-center sticky top-[20%] z-[7] px-5 max-w-2xl mx-auto'
                    >
                        <motion.h1
                            variants={{
                                show: { opacity: 1, y: 0 },
                                hide: { opacity: 0, y: -50 },
                            }}
                            className='text-white text-center font-DM text-4xl lg:text-5xl font-bold'
                        >
                            SASKA SOLUTIONS
                        </motion.h1>
                        <motion.p
                            variants={{
                                show: { opacity: 1, y: 0 },
                                hide: { opacity: 0, y: -50 },
                            }}
                            className='text-white font-DM text-xs lg:text-base font-light text-center pt-8 pb-6'
                        >
                            Let us transform your digital landscape. Digital Path to your Success
                        </motion.p>
                        <motion.h2
                            variants={{
                                show: { opacity: 1, y: 0 },
                                hide: { opacity: 0, y: -50 },
                            }}
                            className='text-white text-center font-DM text-xl lg:text-3xl font-normal'
                        >
                            We bring together our design skills and strategic thinking to craft experiences your customers will never forget.
                        </motion.h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="font-Poppins whitespace-nowrap bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-10 py-3 rounded-full font-medium text-lg mt-4 text-white shadow-xl transform transition-transform hover:scale-110"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>

                    {/* Slow-moving squares */}
                    <motion.div className='shadow-md shadow-violet-700/10 w-[200px] h-[125px] md:w-[400px] md:h-[250px] absolute bottom-[20%] lg:bottom-[30%] right-[10%] z-[5] opacity-60' style={{ y: slowY }} >
                        <img src="https://plus.unsplash.com/premium_photo-1683140655656-20448abc55da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>
                    <motion.div className='shadow-md shadow-violet-700/10 w-[200px] h-[125px] md:w-[400px] md:h-[250px] absolute bottom-[50%] lg:bottom-[30%] left-[5%] z-[5] opacity-60' style={{ y: slowY }} >
                        <img src="https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>

                    {/* Fast-moving squares */}
                    <motion.div className='shadow-md shadow-violet-700/10 w-[300px] h-[250px] absolute bottom-[25%] right-[5%] z-[10] lg:block hidden' style={{ y: fastY }} >
                        <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>
                    <motion.div className='shadow-md shadow-violet-700/10 w-[175px] h-[100px] md:w-[350px] md:h-[200px] absolute bottom-[35%] lg:bottom-[40%] left-[7%] z-[10]' style={{ y: fastY }} >
                        <img src="https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>
                    <motion.div className='shadow-md shadow-violet-700/10 w-[300px] h-[150px] absolute bottom-[5%] right-[12%] z-[10] lg:block hidden' style={{ y: fastY }} >
                        <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>
                    <motion.div className='shadow-md shadow-violet-700/10 w-[250px] h-[350px] absolute bottom-[5%] left-[15%] z-[10] lg:block hidden' style={{ y: fastY }} >
                        <img src="https://images.unsplash.com/photo-1668554245893-2430d0077217?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>
                </div>
                <div className="absolute top-24 left-24">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full filter blur-xl opacity-50"></div>
                </div>
                <div className="absolute bottom-24 right-24">
                    <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full filter blur-xl opacity-50"></div>
                </div>
                <div className="absolute bottom-2/4 left-2/4">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full filter blur-xl opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
