import React,{useState, useEffect} from 'react'
import Card from '../components/Card'
import { useLocation } from 'react-router-dom'
import { getJobs, setToken } from '../services/search'

const Jobs = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-10 aspect-square">
           {talents.length > 0 ? (
            talents.map((talent, index) => <Card talent={talent} key={index} className="aspect-video h-16 w-full" />)
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No Jobs found.
            </p>
          )}
         </div>       
    </div>
    )
}

export default Jobs