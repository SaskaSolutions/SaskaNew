import React from 'react';
import { motion } from 'framer-motion';



const WorkStages = () => {
    return (
        <div className="container max-w-[1600px] mx-auto px-4 py-8">
            <h2 className="max-w-lg text-4xl font-bold md:text-5xl font-DM mb-4">
                Here is how{" "}
                <span className="text-slate-400 font-DM">we do it.</span>
            </h2>
            <div className='border-2 border-slate-400 p-2 rounded-lg flex flex-col'>
                <div className='flex flex-row py-2 justify-between'>
                    <h3 className='text-xl text-nowrap lg:text-3xl w-auto font-Poppins font-medium text-center'>1. RESEARCH</h3>
                    <div className='w-full rounded-lg bg-gradient-to-r from-pink-700/70 via-fuchsia-700/70 to-indigo-700/70' />
                </div>
                <div className='flex flex-row py-2 justify-between'>
                    <div className='w-2/12 rounded-lg bg-gradient-to-r from-pink-700/70 via-fuchsia-700/70 to-indigo-700/70' />
                    <h3 className='text-xl text-nowrap lg:text-3xl w-auto font-Poppins font-medium text-center'>2. INFORMATION ARCHITECTURE</h3>
                    <div className='w-6/12 rounded-lg bg-gradient-to-r from-pink-700/70 via-fuchsia-700/70 to-indigo-700/70' />
                </div>
                <div className='flex flex-row py-2 justify-between'>
                    <div className='w-3/12 rounded-lg bg-gradient-to-r from-pink-700/70 via-fuchsia-700/70 to-indigo-700/70' />
                    <h3 className='text-xl text-nowrap lg:text-3xl auto font-Poppins font-medium text-center'>3. USER FLOW</h3>
                    <div className='w-4/12 rounded-lg bg-gradient-to-r from-pink-700/70 via-fuchsia-700/70 to-indigo-700/70' />
                    <h3 className='text-xl text-nowrap lg:text-3xl w-auto font-Poppins font-medium text-center'>4. UX/UI DESIGN</h3>
                    <div className='w-1/12 rounded-lg bg-gradient-to-r from-pink-700/70 via-fuchsia-700/70 to-indigo-700/70' />
                </div>
                <div className='flex flex-row py-2 justify-between'>
                    <div className='w-6/12 rounded-lg bg-gradient-to-r from-pink-700/70 via-fuchsia-700/70 to-indigo-700/70' />
                    <h3 className='text-xl text-nowrap lg:text-3xl w-auto font-Poppins font-medium text-center'>5. USABILITY TESTING</h3>
                    <div className='w-3/12 rounded-lg bg-gradient-to-r from-pink-700/70 via-fuchsia-700/70 to-indigo-700/70' />
                </div>
                <div className='flex flex-row py-2 justify-between'>
                    <div className='w-1/12 rounded-lg bg-gradient-to-r from-violet-600/70 via-fuchsia-600/70 to-indigo-600/70' />
                    <h3 className='text-xl text-nowrap lg:text-3xl w-auto font-Poppins font-medium text-center'>6. DEVELOPMENT</h3>
                    <div className='w-2/12 rounded-lg bg-gradient-to-r from-violet-600/70 via-fuchsia-600/70 to-indigo-600/70' />
                    <h3 className='text-xl text-nowrap lg:text-3xl w-auto font-Poppins font-medium text-center'>7. QA</h3>
                    <div className='w-6/12 rounded-lg bg-gradient-to-r from-violet-600/70 via-fuchsia-600/70 to-indigo-600/70' />
                </div>
            </div>
        </div>
    );
};

export default WorkStages;
