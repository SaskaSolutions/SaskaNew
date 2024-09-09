import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black border-t-2 border-zinc-800 text-white py-8'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col justify-between'>
                    <div className='' >
                        <div className='items-center justify-around w-full mb-6 lg:mb-0 flex space-x-4'>
                            <a target='_blank' href="https://www.facebook.com/saskasolutions/" className="bg-gradient-to-t from-blue-600 to-sky-600 p-3 rounded-full hover:animate-bounce">
                                <FaFacebookF />
                            </a>
                            {/* <a href="#" className="bg-blue-600 p-3 rounded-full hover:animate-bounce ">
                                <FaTwitter />
                            </a> */}
                            <a target='_blank' href="https://www.instagram.com/SaskaSolution" className="bg-gradient-to-t to-fuchsia-600 from-pink-600 p-3 rounded-full hover:animate-bounce ">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/saska-solutions-a02210315/" className="bg-gradient-to-t from-blue-600 to-sky-600 p-3 rounded-full hover:animate-bounce ">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row pt-4'>
                        {/* Subscription Form */}
                        <div className='w-full lg:w-1/2 mb-6 lg:mb-0 lg:pt-8'>
                            <h2 className='text-lg md:text-3xl font-semibold mb-3'>Get notified with brilliant offers</h2>
                            <div className='flex w-full lg:w-8/12'>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full p-3 rounded-l-lg bg-zinc-900 text-white outline-none"
                                />
                                <button className="bg-gradient-to-t from-blue-600 to-sky-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-blue-700">
                                    SEND
                                </button>
                            </div>
                        </div>

                        {/* Links */}
                        <div className='w-full md:w-1/2 flex flex-col md:flex-row justify-between pt-6'>
                            <div className='mb-6 md:mb-0'>
                                <h3 className='font-semibold mb-3 text-2xl'>Our Services</h3>
                                <ul className='text-base'>
                                    <li>Graphic Designing</li>
                                    <li>Web Designs</li>
                                    {/* <li>Digital Marketing</li> */}
                                    <li>Web Development</li>
                                    <li>Software Development</li>
                                </ul>
                            </div>
                            <div className='mb-6 md:mb-0'>
                                <h3 className='font-semibold mb-3 text-2xl'>About Us</h3>
                                <ul className='text-base'>
                                    <li>Home</li>
                                    <li>Portfolio</li>
                                    <li>Our Services</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-3 text-2xl'>Resources</h3>
                                <ul className='text-base'>
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
                    <a href="#" className="bg-gradient-to-t from-blue-600 to-sky-600 p-3 rounded-full">
                        <FaArrowUp />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
