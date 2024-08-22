import React from 'react';
import { motion } from 'framer-motion';



const WorkStages = () => {
    return (
        <div className="container max-w-[1600px] pt-6 mx-auto text-slate-600 bg-gradient-to-b to-neutral-950 from-gray-950">
            <div className='px-4 py-8'>
                <h2 className="max-w-lg text-4xl font-bold md:text-5xl font-DM mb-4">
                    Here is how{" "}
                    <span className="text-slate-300 font-DM">we do it.</span>
                </h2>
                <div className='p-2 rounded-lg flex flex-col'>
                    <div className='flex flex-row py-2 justify-between'>
                        <h3 className='text-xl text-nowrap lg:text-3xl w-auto text-slate-200 font-Poppins font-medium text-center'>1. RESEARCH</h3>
                        <div className='w-full rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                    </div>
                    <div className='flex flex-row py-2 justify-between'>
                        <div className='w-2/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                        <h3 className='text-xl text-nowrap lg:text-3xl w-auto text-slate-200 font-Poppins font-medium text-center'>2. INFORMATION ARCHITECTURE</h3>
                        <div className='w-6/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                    </div>
                    <div className='flex flex-row py-2 justify-between'>
                        <div className='w-3/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                        <h3 className='text-xl text-nowrap lg:text-3xl auto text-slate-200 font-Poppins font-medium text-center'>3. USER FLOW</h3>
                        <div className='w-4/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                        <h3 className='text-xl text-nowrap lg:text-3xl w-auto text-slate-200 font-Poppins font-medium text-center'>4. UX/UI DESIGN</h3>
                        <div className='w-1/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                    </div>
                    <div className='flex flex-row py-2 justify-between'>
                        <div className='w-6/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                        <h3 className='text-xl text-nowrap lg:text-3xl w-auto text-slate-200 font-Poppins font-medium text-center'>5. USABILITY TESTING</h3>
                        <div className='w-3/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                    </div>
                    <div className='flex flex-row py-2 justify-between'>
                        <div className='w-1/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                        <h3 className='text-xl text-nowrap lg:text-3xl w-auto text-slate-200 font-Poppins font-medium text-center'>6. DEVELOPMENT</h3>
                        <div className='w-2/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                        <h3 className='text-xl text-nowrap lg:text-3xl w-auto text-slate-200 font-Poppins font-medium text-center'>7. QA</h3>
                        <div className='w-6/12 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkStages;
