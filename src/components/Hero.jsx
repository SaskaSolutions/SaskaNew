import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Link } from 'react-scroll';

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

    const fastY = useTransform(scrollYProgress, [0, 1], [200, -600]);
    const slowY = useTransform(scrollYProgress, [0, 1], [-200, 300]);
    const exitScale = useTransform(scrollYProgress, [0.7, 1], [1, 0.7]);
    const exitOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

    return (
        <section id='home' className='relative overflow-clip'>
            <div className='h-[200vh] w-full bg-gradient-to-b from-black via-neutral-950 to-neutral-950'>
                <div ref={ref} className='w-full h-[200vh] relative max-w-[1600px] mx-auto overflow'>
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
                        className='flex flex-col justify-center items-center sticky top-[20%] z-[7] px-5 mx-auto'
                    >
                        <motion.h1
                            variants={{
                                show: { opacity: 1, y: 0 },
                                hide: { opacity: 0, y: -50 },
                            }}
                            className='text-center text-5xl lg:text-7xl font-bold font-DM  text-white max-w-2xl'
                        >
                            SASKA SOLUTIONS
                        </motion.h1>
                        <motion.p
                            variants={{
                                show: { opacity: 1, y: 0 },
                                hide: { opacity: 0, y: -50 },
                            }}
                            className='text-neutral-300 font-DM text-base font-extralight lg:text-xl text-center py-6 max-w-3xl'
                        >
                            Let us transform your digital landscape. Digital Path to your Success
                        </motion.p>
                        <motion.h2
                            variants={{
                                show: { opacity: 1, y: 0 },
                                hide: { opacity: 0, y: -50 },
                            }}
                            className='text-center text-xl mb-2 md:text-3xl font-normal font-DM text-neutral-50 max-w-xl'
                        >
                            We bring together our design skills and strategic thinking to craft experiences your customers will never forget.
                        </motion.h2>
                        <motion.button
                            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-10 py-3 rounded-full font-medium text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link to={"services"} smooth={true} duration={1500}>
                                Get Started
                            </Link>
                        </motion.button>
                    </motion.div>

                    {/* Slow-moving squares */}
                    <motion.div className='shadow-md shadow-violet-700/10 w-[200px] h-[125px] md:w-[400px] md:h-[250px] absolute bottom-[35%] lg:bottom-[30%] right-[20%] lg:right-[10%] z-[5] opacity-60' style={{ y: slowY }} >
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
            </div>
            <div className='border size-40 absolute top-20 left-20 rounded-full bg-gradient-to-r from-purple-600/60 to-indigo-600/60 blur-2xl'>
            </div>
            <div className='border size-36 absolute top-[50%] left-[45%] rounded-full bg-gradient-to-r from-sky-600/40 to-blue-600/40 blur-2xl'>
            </div>
            <div className='border size-36 absolute top-[85%] left-[80%] rounded-full bg-gradient-to-r from-fuchsia-600/40 to-pink-600/40 blur-2xl'>
            </div>
        </section>
    );
};

export default Hero;