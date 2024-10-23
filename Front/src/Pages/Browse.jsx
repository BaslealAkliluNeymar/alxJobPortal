import React from 'react'
import Ads from '../components/Ads'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import Grid from '../components/Grid'
import Latest from '../components/Latest'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'


const Browse = () => {
  const locate = useLocation()

  const {title,location} = locate.state || {}

  console.log(locate)
  return (
    <div className='min-h-screen'>
        <Hero />
        <Ads />
        <Explore />
        <Grid />
        <Latest />
    </div>
  )
}

export default Browse