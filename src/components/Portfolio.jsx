import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-black to-neutral-950 pt-6 relative">
            <section className="max-w-[1600px] p-4 mx-auto lg:p-8 ">
                <h1 className="text-center text-5xl lg:text-7xl text-white font-bold font-DM ">Portfolio</h1>
                <div className="mx-auto max-w-[1600px] ">
                    <Link
                        heading="Bethmar.co"
                        subheading="A Telecom, Infrastructure and Construction Company"
                        imgSrc="https://picsum.photos/1024/1600"
                        href="#"
                    />
                    <Link
                        heading="Link-List"
                        subheading="A Web based application for Lists"
                        imgSrc="https://picsum.photos/1200/2400"
                        href="#"
                    />
                    <Link
                        heading="Emaan.LMS.edu"
                        subheading="A complete Learning Management System"
                        imgSrc="https://picsum.photos/2400/1200"
                        href="#"
                    />
                    <Link
                        heading="StockManager.com"
                        subheading="A web based stock management system"
                        imgSrc="https://picsum.photos/1600/1024"
                        href="#"
                    />
                    <Link
                        heading="TaskTracker.init"
                        subheading="A web based task tracker"
                        imgSrc="https://picsum.photos/1624/1224"
                        href="#"
                    />
                </div>
                <div className="absolute top-10 left-52">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full filter blur-xl opacity-50"></div>
                </div>
                <div className="absolute bottom-1/4 right-80 lg:block hidden">
                    <div className="w-28 h-28 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full filter blur-xl opacity-50"></div>
                </div>
            </section>
        </div>
    );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8 "
        >
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="relative z-10 block text-3xl lg:text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </motion.span>
                <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
                    {subheading}
                </span>
            </div>

            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: "-12.5deg" },
                    whileHover: { scale: 1, rotate: "12.5deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                alt={`Image representing a link for ${heading}`}
            />

            <motion.div
                variants={{
                    initial: {
                        x: "25%",
                        opacity: 0,
                    },
                    whileHover: {
                        x: "0%",
                        opacity: 1,
                    },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 lg:p-4"
            >
                <FiArrowRight className="text-5xl text-neutral-50" />
            </motion.div>
        </motion.a>
    );
};