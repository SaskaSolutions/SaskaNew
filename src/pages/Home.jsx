import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import BouncyCards from '../components/BouncyCards'
import { HoverImageLinks } from '../components/Portfolio'
import FAQ from '../components/FAQ'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Design1 from '../assets/SVG/Design1.svg'
import Design2 from '../assets/SVG/Design2.svg'
import Contact from '../components/Contact.jsx'

const Home = () => {
    return (
        <div className='relative bg-black'>
            <Navbar />
            <Hero />
            <Services />
            <div className='relative z-[15] overflow-clip'>
                <div className='absolute h-full w-full -z-0 '>
                    <img src={Design1} alt="" className='w-full h-full object-cover opacity-60' />
                </div>
                <div className='z-10'>
                    <BouncyCards />
                    <HoverImageLinks />
                </div>
            </div>
            <div className='relative z-[15] overflow-clip'>
                <div className='absolute h-full w-full -z-0 '>
                    <img src={Design2} alt="" className='w-full h-full object-cover rotate-[-25deg] opacity-50' />
                </div>
                <div className='z-10'>
                    <FAQ />
                    <CallToAction />
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default Home