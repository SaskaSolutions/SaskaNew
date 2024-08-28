import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

const faqData = [
    {
        question: "What services does SASKA Solutions offer?",
        answer:
            "SASKA Solutions is a versatile company offering a wide range of services beyond just UI/UX design. Our expertise spans software development, digital transformation, data analytics, and IT consulting. We provide end-to-end solutions tailored to meet the unique needs of businesses across various industries.",
    },
    {
        question: "How can SASKA Solutions help my business grow?",
        answer:
            "Our comprehensive approach ensures that every aspect of your business's digital presence is optimized for success. From innovative design and development to strategic consulting and data-driven insights, we help you create a competitive advantage. Whether you need to streamline operations, enhance customer experiences, or drive digital transformation, SASKA Solutions delivers the results that drive growth.",
    },
    {
        question: "Can SASKA Solutions assist with custom software development?",
        answer:
            "Absolutely. SASKA Solutions specializes in developing custom software solutions tailored to your specific business needs. Whether you require a robust enterprise application, a scalable web platform, or a mobile app, our team of experts can deliver high-quality software that aligns with your goals.",
    },
    {
        question: "What sets SASKA Solutions apart from other IT consulting firms?",
        answer:
            "Our commitment to innovation, quality, and client satisfaction sets us apart. We take the time to understand your unique challenges and goals, providing personalized solutions that not only meet but exceed expectations. Our multidisciplinary team brings together deep technical expertise and strategic thinking to deliver transformative results.",
    },
    {
        question: "How does SASKA Solutions approach digital transformation?",
        answer:
            "At SASKA Solutions, digital transformation is about more than just adopting new technology. We work with you to rethink your business processes, embrace innovation, and leverage data to drive better decisions. Our holistic approach ensures that every step of your transformation journey is aligned with your long-term vision and business objectives.",
    },
    {
        question: "What industries does SASKA Solutions serve?",
        answer:
            "We serve a wide range of industries, including healthcare, finance, retail, manufacturing, and more. Our solutions are designed to address the specific challenges and opportunities of each industry, ensuring that our clients achieve their strategic goals.",
    },
    {
        question: "How do I get started with SASKA Solutions?",
        answer:
            "Getting started is easy. Simply contact us through our website or give us a call. Our team will work with you to understand your needs and develop a customized plan that aligns with your goals.",
    },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-700">
        <button
            className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
            onClick={onClick}
        >
            <span className="text-lg lg:text-2xl font-medium text-gray-400">{question}</span>
            <motion.span
                animate={isOpen ? { rotate: 0 } : { rotate: 180 }}
                transition={{ duration: 0.3 }}
            > < IoMdArrowDropdownCircle className='text-gray-400 p-2' size={50} /></motion.span>
        </button>
        {isOpen && <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="px-4 pb-4 text-gray-400 overflow-hidden">{answer}</motion.p>}
    </div >
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className='bg-gradient-to-b from-neutral-950 via-gray-950 to-black pt-6 relative'>
            <div className="max-w-[1600px] p-4 mx-auto lg:p-8 ">
                <h2 className="text-center text-5xl lg:text-7xl text-white font-bold font-DM  max-w-xl mx-auto">Frequently Asked Questions</h2>
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={index === openIndex}
                        onClick={() => toggleFAQ(index)}
                    />
                ))}
                <div className="absolute top-10 left-52">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full filter blur-xl opacity-50"></div>
                </div>
                <div className="absolute bottom-52 right-24 lg:block hidden">
                    <div className="w-28 h-28 bg-gradient-to-r from-pink-500 to-red-500 rounded-full filter blur-xl opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
