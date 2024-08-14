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
    const fastY = useTransform(scrollYProgress, [0, 0.6], [300, -500]);
    const slowY = useTransform(scrollYProgress, [0, 1], [100, -300]);
    const exitScale = useTransform(scrollYProgress, [0.7, 1], [1, 0.7]);
    const exitOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

    return (
        <div className='container max-w-[1600px] mx-auto'>
            <div className='h-[250vh] w-full bg-gradient-to-t from-zinc-950 to-zinc-900 relative'>
                <div ref={ref} className='w-full h-[250vh] relative'>
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
                        className='flex flex-col justify-center items-center sticky top-[20%] z-[7] max-w-2xl mx-auto'
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
                            className='text-white font-DM text-base lg:text-lg font-light text-center pt-8 pb-6'
                        >
                            Let us transform your digital landscape. Digital Path to your Success
                        </motion.p>
                        <motion.h2
                            variants={{
                                show: { opacity: 1, y: 0 },
                                hide: { opacity: 0, y: -50 },
                            }}
                            className='text-white text-center font-DM text-2xl lg:text-4xl font-normal'
                        >
                            We bring together our design skills, and strategic thinking to craft experiences that your customers will never forget
                        </motion.h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="font-Poppins whitespace-nowrap rounded-lg bg-white px-4 py-2 mt-4 font-medium text-black shadow-xl shadow-slate-500/20 transition-colors hover:bg-gray-100"
                        >
                            Learn more
                        </motion.button>
                    </motion.div>

                    {/* Slow moving squares */}
                    <motion.div className='shadow-md shadow-violet-700/10 w-[400px] h-[250px] absolute bottom-[20%] lg:bottom-[30%] right-[15%] z-[5] opacity-60' style={{ y: slowY }} >
                        <img src="https://plus.unsplash.com/premium_photo-1683140655656-20448abc55da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>
                    <motion.div className='shadow-md shadow-violet-700/10 w-[400px] h-[250px] absolute bottom-[60%] lg:bottom-[35%] left-[15%] z-[5] opacity-60' style={{ y: slowY }} >
                        <img src="https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>

                    {/* Fast moving squares */}
                    <motion.div className='shadow-md shadow-violet-700/10 w-[300px] h-[250px] absolute bottom-[35%] right-[15%] z-[10] lg:block hidden' style={{ y: fastY }} >
                        <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' /></motion.div>
                    <motion.div className='shadow-md shadow-violet-700/10 w-[350px] h-[200px] absolute bottom-[40%] left-[7%] z-[10]' style={{ y: fastY }} >
                        <img src="https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>
                    <motion.div className='shadow-md shadow-violet-700/10 w-[300px] h-[150px] absolute bottom-[10%] right-[10%] z-[10] lg:block hidden' style={{ y: fastY }} >
                        <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' /></motion.div>
                    <motion.div className='shadow-md shadow-violet-700/10 w-[250px] h-[350px] absolute bottom-[5%] left-[15%] z-[10] lg:block hidden' style={{ y: fastY }} >
                        <img src="https://images.unsplash.com/photo-1668554245893-2430d0077217?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
