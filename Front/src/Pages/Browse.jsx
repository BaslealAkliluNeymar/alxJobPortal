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
import SkeletonCard from '../components/SkeletonCard'



const Browse = () => {
  const locate = useLocation()
  const [talents, setTalents] = useState([]);
  const {path,location,search ,pathname} = locate.state || {}
  const [visible ,setVisible] = useState(8)
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

  const handlePrevious = () =>{
    setVisible((prev) => prev + 2)
  }

  return (
    <div className='min-h-screen relative container flex flex-col justify-center items-center'>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-10 aspect-square">
        {talents.length > 0 ? (
          talents.slice(0,visible).map((talent, index) => <Card talent={talent} key={index} className="aspect-video h-16 w-full" />)
        ) : (
          Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard />
          ))
        )}


      </div>
      <button className='flex justify-center items-center gap-2 bg-blue-300 mt-10 w-1/2 p-4 rounded-lg' onClick={handlePrevious}>Load More</button>
  </div>
  
  )
}

export default Browse