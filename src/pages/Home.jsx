import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import BouncyCards from '../components/BouncyCards'
import WorkStages from '../components/WorkStages'
import { HoverImageLinks } from '../components/Portfolio'
import FAQ from '../components/FAQ'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='relative bg-black'>
            <Navbar />
            <Hero />
            <Services />
            <BouncyCards />
            {/* <WorkStages /> */}
            <HoverImageLinks />
            <FAQ />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home