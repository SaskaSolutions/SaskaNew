import React, { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    const navVariants = {
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1, // Stagger effect for children
                when: "beforeChildren", // Ensures parent animates first
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
                when: "afterChildren" // Ensures children exit first
            }
        }
    }

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
    }

    return (
        <div className='bg-slate-600 relative w-full overflow-hidden'>
            {/* Mobile Sliding Menu */}
            <motion.div
                variants={navVariants}
                initial="hide"
                animate={active ? 'show' : 'hide'}
                className='group md:hidden h-[100vh] w-full fixed bg-slate-800 top-0 left-0 z-[50] flex flex-col p-4 items-start justify-center '>
                <motion.h1
                    variants={linkVariants}
                    className='text-white text-6xl font-bold font-Poppins p-4 cursor-pointer'>Home</motion.h1>
                <motion.h1
                    variants={linkVariants}
                    className='text-white text-6xl font-bold font-Poppins p-4 cursor-pointer'>Work</motion.h1>
                <motion.h1
                    variants={linkVariants}
                    className='text-white text-6xl font-bold font-Poppins p-4 cursor-pointer'>Services</motion.h1>
                <motion.h1
                    variants={linkVariants}
                    className='text-white text-6xl font-bold font-Poppins p-4 cursor-pointer'>Portfolio</motion.h1>
                <motion.h1
                    variants={linkVariants}
                    className='text-white text-6xl font-bold font-Poppins p-4 cursor-pointer'>Contact</motion.h1>
            </motion.div>

            {/* Navbar */}
            <div className='w-full fixed top-0 z-[100] bg-slate-600 px-4 py-2'>
                <div className='max-w-[1600px] flex flex-row justify-between mx-auto items-center w-full'>
                    <div className='flex flex-row items-center gap-x-2'>
                        <img src="https://placehold.co/50" alt="Logo" className='size-14' />
                        <p className='text-white text-2xl font-bold font-Poppins'>SASKA Solutions</p>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex'>
                        <ul className='flex flex-row gap-x-2 items-center'>
                            <li className='text-white font-Poppins font-semibold cursor-pointer px-4 py-2 hover:bg-slate-700 rounded'>Home</li>
                            <li className='text-white font-Poppins font-semibold cursor-pointer px-4 py-2 hover:bg-slate-700 rounded'>Work</li>
                            <li className='text-white font-Poppins font-semibold cursor-pointer px-4 py-2 hover:bg-slate-700 rounded'>Services</li>
                            <li className='text-white font-Poppins font-semibold cursor-pointer px-4 py-2 hover:bg-slate-700 rounded'>Portfolio</li>
                            <li>
                                <button className='text-white font-semibold px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded'>Contact</button>
                            </li>
                        </ul>
                    </div>

                    {/* Hamburger Button */}
                    <div onClick={handleClick} className='block md:hidden'>
                        <HamburgerButton active={!active} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
