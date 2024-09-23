import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import stockInventory from '../assets/customSoftwareImgs/stockInventory1.png'
import taskTracker from '../assets/customSoftwareImgs/taskTracking1.png'
import bethmar from '../assets/customSoftwareImgs/bethmar.png'
import listLink from '../assets/customSoftwareImgs/listLink.png'
import portfolioThree from '../assets/customSoftwareImgs/portfolioThree.png'


export const HoverImageLinks = () => {
    return (
        <div className="bg-gradient-to-b from-neutral-950 via-black to-neutral-950 pt-6 ">
            <section className="max-w-[1600px] p-4 mx-auto lg:p-8 ">
                <div className="mx-auto max-w-[1600px] ">
                    <Link
                        heading="Bethmar.co.uk"
                        subheading="A Telecom, Infrastructure and Construction Company"
                        imgSrc={bethmar}
                        href="https://www.bethmar.co.uk/"
                    />
                    <Link
                        heading="ListLinkApp.com"
                        subheading="A Web based application for Lists"
                        imgSrc={listLink}
                        href="https://www.listlinkapp.com/login"
                    />
                    <Link
                        heading="3D Portfolio"
                        subheading="Personal Portfolio Website built with react and three.js"
                        imgSrc={portfolioThree}
                        href="https://portfolio-topaz-beta-52.vercel.app/"
                    />
                    <Link
                        heading="StockManager.com"
                        subheading="A web based stock management system"
                        imgSrc={stockInventory}
                        href="#"
                    />
                    <Link
                        heading="TaskTracker.init"
                        subheading="A web based task tracker"
                        imgSrc={taskTracker}
                        href="#"
                    />
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
            target="_blank"
            rel="noopener noreferrer"
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
                className="absolute z-0 h-24 w-auto rounded-lg object-cover md:h-48 md:w-auto"
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