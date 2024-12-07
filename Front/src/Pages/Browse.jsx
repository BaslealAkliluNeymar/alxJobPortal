import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearchJobs } from '../services/search'
import Card from '../components/Card'
import SkeletonCard from '../components/SkeletonCard'



const Browse = () => {
  const locate = useLocation()
  const [talents, setTalents] = useState([]);
  const { path,location,search ,pathname} = locate.state || {}
  const [visible ,setVisible] = useState(8)
  console.log(locate.state)


  
  const [data, setData] = useState([])
  useEffect(() =>{
    const fetchData = async() =>{
      const found = await getSearchJobs(locate.state)
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