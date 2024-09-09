import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import customSoftware from '../assets/BouncyCard/CustomSoftware.png';
import responsiveWebsite from '../assets/BouncyCard/ResponsiveWeb.png';
import Carousel3d from "./Carousel3d";

const BouncyCards = () => {
  const cardImg = [
    "https://picsum.photos/2100/2100",
    "https://picsum.photos/2200/2200",
    "https://picsum.photos/2300/2300",
    "https://picsum.photos/2400/2400",
    "https://picsum.photos/1900/1900",
    "https://picsum.photos/1800/1800",
    "https://picsum.photos/1700/1700",
    "https://picsum.photos/1600/1600",
    "https://picsum.photos/1500/1500",
    "https://picsum.photos/1400/1400",
  ];

  const cardImg1 = [
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/2100/2100",
    "https://picsum.photos/2200/2200",
    "https://picsum.photos/2300/2300",
    "https://picsum.photos/2400/2400",
  ];

  const cardImg2 = [
    "https://picsum.photos/2500/2500",
    "https://picsum.photos/2600/2600",
    "https://picsum.photos/2700/2700",
    "https://picsum.photos/2800/2800",
    "https://picsum.photos/2900/2900",
    "https://picsum.photos/3000/3000",
  ];

  const cardImg3 = [
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/3100/3100",
    "https://picsum.photos/3200/3200",
  ];

  const [images, setImages] = useState(cardImg);
  const [selectedCard, setSelectedCard] = useState(0);

  const handleSetImages = (selectedImages, index) => {
    if (images !== selectedImages) {
      setImages(selectedImages);
      setSelectedCard(index);
    }
  };

  const [textRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
    delay: 1000
  });

  return (
    <section id="portfolio" className=" text-slate-600 bg-gradient-to-b from-zinc-950 via-black to-neutral-950 pt-8">
      <div className="relative max-w-[1600px] p-4 mx-auto md:p-8">
        <div ref={textRef} className='w-8/12 mx-auto py-12 relative'>
          <motion.h1
            initial={{ x: 0, y: 0 }}
            animate={inView ? { x: 8, y: -10, transition: { duration: 0.5, ease: "easeIn" } } : { x: 0, y: 0 }}
            className='absolute inset-0 z-[1] text-center text-4xl lg:text-7xl font-bold font-DM  text-white'>
            Portfolio
          </motion.h1>
          <h1 className='blur-sm absolute inset-0 z-[0] text-center text-4xl lg:text-7xl font-bold font-DM  text-neutral-600'>
            Portfolio
          </h1>
        </div>
        <div className="relative mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-lg text-3xl font-bold md:text-5xl font-DM">
            We have a solution for{" "}
            <span className="text-slate-300 font-DM"> every business.</span>
          </h2>
        </div>
        <div className="relative mb-4 grid grid-cols-12 gap-4 z-20">
          <div
            className={`col-span-12 md:col-span-4`}
            onClick={() => handleSetImages(cardImg, 0)}
          >
            <BounceCard className={`${selectedCard === 0 ? "from-violet-400 to-indigo-400" : ""}`}>
              <CardTitle>Responsive website </CardTitle>
              <div className={` ${selectedCard === 0 ? "bg-gradient-to-t from-[#0a0a1a] to-[#0a0a0a]" : "bg-gradient-to-br from-violet-400 to-indigo-400"}  absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-all duration-[500ms] ease-in-out group-hover:translate-y-4 group-hover:rotate-[2deg]`}>
                <img src={responsiveWebsite} alt="" loading="lazy" width="100%" height="100%" className="w-full h-auto object-cover rounded-lg" />
              </div>
            </BounceCard>
          </div>
          <div
            className={`col-span-12 md:col-span-8`}
            onClick={() => handleSetImages(cardImg1, 1)}
          >
            <BounceCard className={`${selectedCard === 1 ? "from-amber-400 to-orange-400" : ""}`}>
              <CardTitle>Custom software</CardTitle>
              <div className={` ${selectedCard === 1 ? "bg-gradient-to-t from-[#0a0a1a] to-[#0a0a0a]" : "bg-gradient-to-br from-amber-400 to-orange-400"}  absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-all duration-[500ms] ease-in-out group-hover:translate-y-4 group-hover:rotate-[2deg]`}>
                <img src={customSoftware} alt="" loading="lazy" width="100%" height="100%" className="w-full h-auto object-cover rounded-lg" />
              </div>
            </BounceCard>
          </div>
        </div>
        <div className='flex h-auto w-full relative z-20'>
          <AnimatePresence>
            {images && (
              <motion.div
                key="carousel"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className=' w-full relative'
              >
                <Carousel3d images={images} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative grid grid-cols-12 gap-4 z-20">
          <div
            className="col-span-12 md:col-span-6"
            onClick={() => handleSetImages(cardImg2, 2)}
          >
            <BounceCard className={`${selectedCard === 2 ? "from-green-400 to-emerald-400" : ""}`}>
              <CardTitle>Logo & branding</CardTitle>
              <div className={`${selectedCard === 2 ? "bg-gradient-to-t from-[#0a0a1a] to-[#0a0a0a]" : "bg-gradient-to-tr from-green-400 to-emerald-400"}  absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-all duration-[500ms] ease-in-out group-hover:translate-y-4 group-hover:rotate-[2deg]`}>
                <span className="block text-center font-semibold text-emerald-50">
                  FEATURE DEMO HERE
                </span>
              </div>
            </BounceCard>
          </div>
          <div
            className={`col-span-12 md:col-span-6`}
            onClick={() => handleSetImages(cardImg3, 3)}
          >
            <BounceCard className={`${selectedCard === 3 ? "from-pink-400 to-red-400" : ""}`}>
              <CardTitle>UI / UX designs</CardTitle>
              <div className={`${selectedCard === 3 ? "bg-gradient-to-t from-[#0a0a1a] to-[#0a0a0a]" : "bg-gradient-to-tr from-pink-400 to-red-400"}  absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-all duration-[500ms] ease-in-out group-hover:translate-y-4 group-hover:rotate-[2deg]`}>
                <span className="block text-center font-semibold text-red-50">
                  FEATURE DEMO HERE
                </span>
              </div>
            </BounceCard>
          </div>
        </div>
      </div>
      <div className="absolute blur-3xl size-[600px] left-[-15%] top-[22%] bg-blue-600/10 rounded-full z-[0]"></div>
      <div className="absolute size-36 blur-3xl left-[80%] top-[85%] bg-gradient-to-r from-sky-600 to-blue-600 rounded-full z-[0]"></div>
    </section>
  );
};

export default BouncyCards;

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-t from-[#0f0f0f] to-[#0a0a0a] p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="font-Poppins mx-auto text-center text-2xl lg:text-3xl font-semibold text-slate-200">{children}</h3>
  );
};
