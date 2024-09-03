import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col justify-between'>
                    <div className='' >
                        <div className='items-center justify-around w-full mb-6 lg:mb-0 flex space-x-4'>
                            <a href="#" className="bg-blue-600 p-3 rounded-full hover:animate-bounce">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="bg-blue-600 p-3 rounded-full hover:animate-bounce ">
                                <FaTwitter />
                            </a>
                            <a href="#" className="bg-pink-600 p-3 rounded-full hover:animate-bounce ">
                                <FaInstagram />
                            </a>
                            <a href="#" className="bg-blue-600 p-3 rounded-full hover:animate-bounce ">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row '>
                        {/* Subscription Form */}
                        <div className='w-full lg:w-1/2 mb-6 lg:mb-0 p-4 lg:p-6'>
                            <h2 className='text-3xl font-semibold mb-3'>Drop Your Query</h2>
                            <div className='flex w-full lg:w-8/12'>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full p-3 rounded-l-lg bg-slate-800 text-white outline-none"
                                />
                                <button className="bg-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-blue-700">
                                    SEND
                                </button>
                            </div>
                        </div>

                        {/* Links */}
                        <div className='w-full lg:w-1/2 flex justify-between p-4 lg:p-6'>
                            <div>
                                <h3 className='font-semibold mb-3'>Our Services</h3>
                                <ul>
                                    <li>Graphic Designing</li>
                                    <li>Web Designs</li>
                                    {/* <li>Digital Marketing</li> */}
                                    <li>Web Development</li>
                                    <li>Software Development</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-3'>About Us</h3>
                                <ul>
                                    <li>Home</li>
                                    <li>Portfolio</li>
                                    <li>Our Services</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-3'>Resources</h3>
                                <ul>
                                    <li>SEO</li>
                                    <li>Ecommerce</li>
                                    <li>UI & UX Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-8'>
                    {/* WhatsApp Icon */}
                    {/* <a href="#" className="bg-green-500 p-3 rounded-full">
                        <FaWhatsapp />
                    </a> */}

                    {/* Copyright */}
                    <p className='text-gray-500'>
                        © 2023. All rights reserved by SASKA Solutions.
                    </p>

                    {/* Scroll to Top Icon */}
                    <a href="#" className="bg-blue-600 p-3 rounded-full">
                        <FaArrowUp />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
