import React, { useState } from 'react'
import contact from '../assets/SVG/Contact.svg'
import { motion } from 'framer-motion'



const Contact = () => {
    const [focusedField, setFocusedField] = useState("");
    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = (field) => {
        if (focusedField === field) {
            setFocusedField("");
        }
    };

    const labelAnimate = (field) => {
        return focusedField === field
            ? { y: -28, scale: 0.85 }
            : { y: 0, scale: 1, width: "95%" };
    };
    return (
        <section className="h-screen bg-black overflow-hidden text-white">
            <div className="max-w-[1600px] p-4 mx-auto lg:p-8 flex items-center justify-center flex-col ">
                <h2 className='text-center text-5xl lg:text-7xl font-bold font-DM  text-white'>Connect With {''}
                    <span className="bg-gradient-to-t from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text font-DM">SASKA</span>
                </h2>
                <p className='text-neutral-300 font-DM text-base font-extralight lg:text-xl text-center py-3 max-w-3xl'>Lets talk about your project</p>
            </div>
            <div className='relative flex lg:flex-row flex-col items-center justify-end px-4 lg:px-12'>
                <img src={contact} alt="contact" className='h-screen lg:top-[-280px] top-0 lg:h-[1000px] w-full absolute' />
                <div className="lg:w-5/12 w-full p-8 space-y-8 bg-neutral-950 z-[50] rounded-xl shadow-2xl overflow-clip">
                    <form className="space-y-6 text-white">
                        <div className='flex flex-row justify-between gap-x-4'>
                            <div className="relative flex flex-col group w-6/12">
                                <motion.label
                                    initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                                    animate={labelAnimate("fullname")}
                                    className="absolute left-2 top-3 text-white text-sm pointer-events-none bg-neutral-950 px-2"
                                    htmlFor="fullname"
                                >
                                    Full Name *
                                </motion.label>
                                <input
                                    type="text"
                                    id="fullname"
                                    onFocus={() => handleFocus("fullname")}
                                    onBlur={() => handleBlur("fullname")}
                                    className="bg-transparent text-white text-sm rounded-lg border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white"
                                />
                            </div>
                            <div className="relative flex flex-col group w-6/12">
                                <motion.label
                                    initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                                    animate={labelAnimate("email")}
                                    className="absolute left-2 top-3 text-white text-sm pointer-events-none bg-neutral-950 px-2"
                                    htmlFor="email"
                                >
                                    Email *
                                </motion.label>
                                <input
                                    type="email"
                                    id="email"
                                    onFocus={() => handleFocus("email")}
                                    onBlur={() => handleBlur("email")}
                                    className="bg-transparent text-white text-sm rounded-lg border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white"
                                />
                            </div>
                        </div>
                        <div className="relative flex flex-col group w-full">
                            <motion.label
                                initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                                animate={labelAnimate("Number")}
                                className="absolute left-2 top-3 text-white text-sm pointer-events-none bg-neutral-950 px-2"
                                htmlFor="Number"
                            >
                                Number
                            </motion.label>
                            <input
                                id="Number"
                                type="tel"
                                onFocus={() => handleFocus("Number")}
                                onBlur={() => handleBlur("Number")}
                                className="bg-transparent text-white text-sm rounded-lg border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                            />
                        </div>
                        <div className="relative flex flex-col group w-full">
                            <motion.label
                                initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                                animate={labelAnimate("Description")}
                                className="absolute left-2 top-3 text-white text-sm pointer-events-none bg-neutral-950 px-2"
                                htmlFor="Description"
                            >
                                Description *
                            </motion.label>
                            <textarea
                                id="Description"
                                onFocus={() => handleFocus("Description")}
                                onBlur={() => handleBlur("Description")}
                                rows="4"  // Setting the number of visible lines
                                className="bg-transparent text-white text-sm rounded-lg border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                            />
                        </div>
                        <motion.button
                            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-10 py-3 rounded-full font-medium text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Get Started
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact