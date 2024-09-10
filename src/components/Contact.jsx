import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingPhone from './FloatingPhone';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        description: '',
        selectedOption: '', // this will store the selected radio button value
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelect = (option) => {
        setFormData({
            ...formData,
            selectedOption: option,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(formData.email.includes("@")) || (formData.email.length === 0)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!formData.fullName || !formData.email || !formData.description || !formData.selectedOption) {
            setError('Please fill all required fields and select an option.');
            return;
        }

        setError(null);

        console.log('Form submitted:', formData);

        setFormData({
            fullName: '',
            email: '',
            companyName: '',
            description: '',
            selectedOption: ''
        });

    };

    return (
        <section id='contact' className="min-h-screen bg-gradient-to-b from-5% from-black via-neutral-900 to-neutral-950 overflow-hidden text-white">
            <div className="max-w-[1600px] p-4 mx-auto lg:p-8 flex items-center justify-center flex-col">
                <h2 className='text-center text-5xl lg:text-7xl font-bold font-DM text-white'>
                    Connect With{' '}
                    <span className="bg-gradient-to-t from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text font-DM">
                        SASKA
                    </span>
                </h2>
                <p className='text-neutral-300 font-DM text-base font-extralight lg:text-xl text-center py-3 max-w-3xl'>
                    Let’s talk about your project
                </p>
            </div>
            <div className='flex lg:flex-row flex-col items-center justify-start max-w-[1600px] mx-auto pb-12'>
                <form onSubmit={handleSubmit} className='text-white min-h-[70vh] flex flex-col lg:flex-row justify-center px-2 lg:px-8 w-full'>
                    <div className='flex flex-col w-full md:w-8/12 space-y-6'>
                        {/* Full Name Input */}
                        <div className='border rounded-xl w-full px-8 py-2 flex flex-col'>
                            <label htmlFor="fullName" className='text-xl tracking-wider font-normal text-gray-200'>Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder='John Doe'
                                className='text-xl tracking-wider font-normal text-neutral-100 bg-transparent outline-none py-2'
                            />
                        </div>

                        {/* Email Input */}
                        <div className='border rounded-xl w-full px-8 py-2 flex flex-col'>
                            <label htmlFor="email" className='text-xl tracking-wider font-normal text-gray-200'>Your Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='JohnDoe@example.com'
                                className='text-xl tracking-wider font-normal text-neutral-100 bg-transparent outline-none py-2'
                            />
                        </div>

                        {/* Company Name Input */}
                        <div className='border rounded-xl w-full px-8 py-2 flex flex-col'>
                            <label htmlFor="companyName" className='text-xl tracking-wider font-normal text-gray-200'>Company Name (optional)</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder='JohnDoeLimited'
                                className='text-xl tracking-wider font-normal text-neutral-100 bg-transparent outline-none py-2'
                            />
                        </div>

                        {/* Custom Radio Buttons */}
                        <div className='border rounded-xl w-full px-8 py-2'>
                            <h2 className='text-xl tracking-wider font-normal text-gray-200'>How can we help you?</h2>
                            {error && <p className='text-red-500'>{error}</p>}
                            <div className='flex flex-col md:flex-row justify-center items-center pt-4 gap-4'>
                                {/* Option 1 */}
                                <motion.div
                                    onClick={() => handleSelect("Website Dev")}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full lg:w-4/12 border flex items-center justify-center py-2 cursor-pointer rounded-lg transition-all duration-300 ${formData.selectedOption === "Website Dev" ? 'bg-neutral-50' : 'bg-transparent'}`}
                                >
                                    <p className={`text-lg font-bold font-DM ${formData.selectedOption === "Website Dev" ? 'text-slate-800' : 'text-gray-200'}`}>
                                        Website Dev
                                    </p>
                                </motion.div>

                                {/* Option 2 */}
                                <motion.div
                                    onClick={() => handleSelect("Software Dev")}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full lg:w-4/12 border flex items-center justify-center py-2 cursor-pointer rounded-lg transition-all duration-300 ${formData.selectedOption === "Software Dev" ? 'bg-neutral-50' : 'bg-transparent'}`}
                                >
                                    <p className={`text-lg font-bold font-DM ${formData.selectedOption === "Software Dev" ? 'text-slate-800' : 'text-gray-200'}`}>
                                        Software Dev
                                    </p>
                                </motion.div>

                                {/* Option 3 */}
                                <motion.div
                                    onClick={() => handleSelect("Graphic Designing")}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full lg:w-4/12 border flex items-center justify-center py-2 cursor-pointer rounded-lg transition-all duration-300 ${formData.selectedOption === "Graphic Designing" ? 'bg-neutral-50' : 'bg-transparent'}`}
                                >
                                    <p className={`text-lg font-bold font-DM ${formData.selectedOption === "Graphic Designing" ? 'text-slate-800' : 'text-gray-200'}`}>
                                        Graphic Designing
                                    </p>
                                </motion.div>

                                {/* Option 4 */}
                                <motion.div
                                    onClick={() => handleSelect("Social Media Marketing")}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full lg:w-4/12 border flex items-center justify-center py-2 cursor-pointer rounded-lg transition-all duration-300 ${formData.selectedOption === "Social Media Marketing" ? 'bg-neutral-50' : 'bg-transparent'}`}
                                >
                                    <p className={`text-lg font-bold font-DM ${formData.selectedOption === "Social Media Marketing" ? 'text-slate-800' : 'text-gray-200'}`}>
                                        Social Media Marketing
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Description Text Area */}
                        <div className='border rounded-xl w-full px-8 py-2 flex flex-col'>
                            <label htmlFor="description" className='text-xl tracking-wider font-normal text-gray-200'>Description *</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                placeholder='I am interested in...'
                                className='text-xl tracking-wider font-normal text-neutral-100 bg-transparent outline-none py-2'
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center lg:w-4/12 md:pt-0 py-12'>
                        <FloatingPhone submitForm={handleSubmit} />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
