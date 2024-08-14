import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import BouncyCards from '../components/BouncyCards'
import WorkStages from '../components/WorkStages'
import { HoverImageLinks } from '../components/Portfolio'

const Home = () => {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <Services />
            <BouncyCards />
            <WorkStages />
            <HoverImageLinks />
        </div>
    )
}

export default Home