import React, { useState } from 'react';
import { Link } from 'react-scroll';
import HamburgerButton from './HamburgerButton';
import { motion } from 'framer-motion';
import saskaLogo from '../assets/Saska.png';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const navVariants = {
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1,
                when: "beforeChildren",
            }
        },
        hide: {
            opacity: 0,
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.3,
                when: "afterChildren"
            }
        }
    };

    const linkVariants = {
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, type: 'spring', stiffness: 100, damping: 20 }
        },
        hide: {
            opacity: 0,
            x: '-100%',
            transition: { duration: 0.5, type: 'spring', stiffness: 100, damping: 20 }
        }
    };

    return (
        <div className='bg-slate-600 relative w-full overflow-hidden'>
            {/* Mobile Sliding Menu */}
            <motion.div
                variants={navVariants}
                initial="hide"
                animate={active ? 'show' : 'hide'}
                className={`md:hidden h-[100vh] w-full fixed bg-neutral-950 top-0 left-0 z-[50] flex flex-col p-4 items-start justify-center 
                            ${active ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                {['Home', 'Services', 'Portfolio', 'FAQs', 'Contact'].map((item) => (
                    <motion.h1
                        key={item}
                        variants={linkVariants}
                        className='text-white text-6xl font-bold p-4 cursor-pointer w-full'
                    >
                        <Link onClick={handleClick} to={item.toLowerCase()} smooth={true} duration={600}>
                            {item}
                        </Link>
                    </motion.h1>
                ))}
            </motion.div>

            {/* Navbar */}
            <div className='w-full fixed top-0 z-[100] backdrop-blur-[2px] px-4 pt-4 pb-1'>
                <div className='max-w-[1600px] flex flex-row justify-between mx-auto  items-center w-full'>
                    <div className='flex flex-row items-center gap-x-2'>
                        <img src={saskaLogo} alt="Logo" className='md:h-[50px] h-[40px] w-auto' />
                        <p className='text-white text-lg md:text-2xl font-semibold tracking-wide'>SASKA Solutions</p>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex'>
                        <ul className='flex flex-row gap-x-6 items-center text-white text-lg '>
                            {['Home', 'Services', 'Portfolio', 'FAQs'].map((item) => (
                                <li key={item} className='relative group cursor-pointer px-4 py-2'>
                                    <Link
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        duration={600}
                                        className='z-10'
                                    >
                                        {item}
                                    </Link>
                                    <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to='contact'
                                    smooth={true}
                                    duration={600}
                                    className='cursor-pointer relative text-white font-semibold px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Hamburger Button */}
                    <div onClick={handleClick} className='block md:hidden'>
                        <HamburgerButton active={active} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
