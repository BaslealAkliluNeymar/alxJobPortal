import React, { useState,useEffect, useContext } from 'react'
import Ads from '../components/Ads'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import Grid from '../components/Grid'
import Latest from '../components/Latest'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import HeroSearch from '../components/HeroSearch'
import { getJobs, setToken } from '../services/search'
import Card from '../components/Card'



const Browse = () => {
  const locate = useLocation()
  const [talents, setTalents] = useState([]);
  const {path,location,search ,pathname} = locate.state || {}

  console.log(locate.state)


  
  const [data, setData] = useState([])
  useEffect(() =>{
    const fetchData = async() =>{
      const token = localStorage.getItem('token')
      setToken(token)
      const found = await getJobs(locate.state)
      setTalents(found)
    }
    fetchData()
  },[locate.state])
  return (
    <div className='min-h-screen relative container'>
      {/* <HeroSearch className='sticky top-0 z-10' /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-10 aspect-square">
        {talents.length > 0 ? (
          talents.map((talent, index) => <Card talent={talent} key={index} className="aspect-video h-16 w-full" />)
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No talents found.
          </p>
        )}
      </div>
  </div>
  
  )
}

export default Browse