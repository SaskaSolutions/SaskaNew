import React from "react";
import { motion } from "framer-motion";
import customSoftware from '../assets/BouncyCard/CustomSoftware.png'
import responsiveWebsite from '../assets/BouncyCard/ResponsiveWeb.png'

const BouncyCards = () => {
  return (
    <section className="text-slate-600 bg-gradient-to-b from-zinc-950 via-black to-gray-950 pt-8">
      <div className="max-w-[1600px] p-4 mx-auto md:p-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-lg text-4xl font-bold md:text-5xl font-DM">
            We have a solution for{" "}
            <span className="text-slate-300 font-DM"> every business.</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-Poppins whitespace-nowrap bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-10 py-3 rounded-full font-medium text-lg mt-4 text-white shadow-xl transform transition-transform hover:scale-110"
          >
            See All
          </motion.button>
        </div>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Responsive website </CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <img src={responsiveWebsite} alt="" loading="lazy" width="100%" height="100%" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Custom software</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <img src={customSoftware} alt="" loading="lazy" width="100%" height="100%" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </BounceCard>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-6">
            <CardTitle>Logo & branding</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-emerald-50">
                FEATURE DEMO HERE
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-6">
            <CardTitle>UI / UX designs</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-red-50">
                FEATURE DEMO HERE
              </span>
            </div>
          </BounceCard>
        </div>
      </div>
    </section>
  );
};

export default BouncyCards;

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-t from-[#0a0a1a] to-[#0a0a0a] p-8 ${className}`}
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