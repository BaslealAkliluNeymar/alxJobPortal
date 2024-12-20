import React from 'react'
import Ads from '../components/Ads'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import Grid from '../components/Grid'
import Latest from '../components/Latest'


const Home = () => {
  return (
    <div className='md:overflow-x-hidden'>
        <Hero />
        <Ads />
        <Explore />
        <Grid />
        <Latest />
    </div>
  )
}

export default Home