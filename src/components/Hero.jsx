import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import GlowingButton from './GlowingButton';
import { Link } from 'react-scroll';

import mobileResponsive from '../assets/BannerSvg/mobileResponsive.svg';
import seo from '../assets/BannerSvg/seo.svg';
import analytics from '../assets/BannerSvg/analytics.svg';
import performance from '../assets/BannerSvg/performance.svg';

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
                            className='text-center text-5xl lg:text-7xl font-bold font-DM max-w-2xl text-white'
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
                        <Link to="services" spy={true} smooth={true} duration={1500}>
                            <GlowingButton text={"Get Started"} to={"#services"} />
                        </Link>
                    </motion.div>

                    {/* Slow-moving squares */}
                    {/* <motion.div className='shadow-md shadow-violet-700/10 absolute bottom-[35%] lg:bottom-[30%] right-[20%] lg:right-[10%] z-[5] opacity-60' style={{ y: slowY }} >
                        <img src={} alt="" className='h-full w-full object-center object-cover' />
                    </motion.div> */}
                    {/* <motion.div className='shadow-md shadow-violet-700/10 absolute bottom-[50%] lg:bottom-[30%] left-[5%] z-[5] opacity-60' style={{ y: slowY }} >
                        <img src="https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-center object-cover' />
                    </motion.div> */}

                    {/* Fast-moving squares */}
                    {/* <motion.div className='absolute bottom-[45%] right-[5%] z-[10] lg:block hidden' style={{ y: fastY }} >
                        <img src={seo} alt="" className='h-full w-full object-center object-cover' />
                    </motion.div> */}
                    {/* <motion.div className='absolute bottom-[35%] lg:bottom-[60%] left-[7%] z-[10]' style={{ y: fastY }} >
                        <img src={analytics} alt="" className='h-full w-full object-center object-cover' />
                    </motion.div> */}
                    <motion.div className='absolute bottom-[0%] right-[10%] z-[5] lg:block hidden' style={{ y: fastY }} >
                        <img src={performance} height={200} width={200} alt="" className='h-full w-auto object-center object-cover aspect-auto' />
                    </motion.div>
                    <motion.div className='absolute bottom-[25%] left-[5%] z-[5]' style={{ y: fastY }} >
                        <img src={mobileResponsive} height={200} width={200} alt="" className='h-full w-full object-center object-cover aspect-auto' />
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