import React,{useState, useEffect} from 'react'
import Card from '../components/Card'
import { useLocation } from 'react-router-dom'
import { getJobs, setToken } from '../services/jobs'
import Job from '../components/Job'
import Button from '../components/Button'
import PopOver from '../components/PopOver'
import { ListFilter } from 'lucide-react'
import Error from '../components/Error'
import SkeletonJobCard from '../components/SkeletonJobCard'

const Jobs = () => {
    const locate = useLocation()
    const [jobs, setJobs] = useState([]);
    const [pop,setPop] =  useState(false)
    const [popData,setpopData] = useState({})
    const [search,setSearch] = useState('')
    const [errors , setError] = useState({})
    const [visible ,setVisible] = useState(12)
    console.log(jobs)

    console.log(errors)
    const handlePopOver = (item) =>{
      setpopData(item)
      setPop(!pop)
    }
    
    const [data, setData] = useState([])
    useEffect(() =>{
      const fetchData = async() =>{
        const token = localStorage.getItem('token')
        setToken(token)
        const found = await getJobs()
        setJobs(found)
      }
      fetchData()
    },[])

    const handleChange = (e) =>{
      setSearch(e.target.value)
    }

    const handlePrevious = () =>{
      setVisible((prev) => prev + 2)
    }

    console.log(visible)

    return (
      <div className='min-h-screen relative container'>
  
        <div className='flex justify-between items-center gap-2 mt-10 w-full'>
            <input type="text" className='outline-none  border-4 border-green-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 w-3/5 ' placeholder='Search jobs' onChange={handleChange}/>
            <ListFilter className='text-green-400 hover:text-green-500 text-8xl w-10 h-10 cursor-pointerpointer' />
        </div>
        <div className="flex flex-wrap justify-center  gap-2  mt-10 aspect-square p-2 h-auto container">
          
           {jobs.length > 0 ? (
            jobs.filter((item) => item.jobTitle.toLowerCase().includes(search.toLowerCase())).splice(0,visible).map((item, index) => {
             
              return (
                
                <div 
                className="flex gap-4 justify-start items-start h-44 w-[45%] bg-gradient-to-r from-blue-50 to-white p-6 shadow-lg rounded-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer" 
                onClick={() => handlePopOver(item)}
              >
                {/* Logo Section */}
                <div className="flex justify-center items-center h-[120px] w-[120px] bg-white border-2 border-gray-200 rounded-md">
                  {item?.logo ? (
                    <img src={item.logo} alt="logo" className="h-full w-full object-contain rounded-md" />
                  ) : (
                    <span className="text-gray-400">No Logo</span>
                  )}
                </div>
              
               
                <div className="flex flex-col gap-2 justify-between flex-auto">
                 
                  <h1 className="font-bold font-poppins text-lg text-gray-800">{item?.position}</h1>
                
                  <p className="font-epilogue text-sm text-gray-600 flex items-center gap-2">
                    <span>{item?.company}</span>
                    <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
                    <span>{item?.location}</span>
                  </p>
                 
                  <p className='font-bold w-full'>{item?.jobTitle}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {item?.type}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                      {item?.experience}
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-sm font-medium rounded-full">
                      Design
                    </span>
                  </div>
                </div>
              </div>
             
              );
            })
         
          ) : (
            Array.from({ length: 10 }).map((_, index) => (
              <SkeletonJobCard />
            ))
          )}
          <div className='flex justify-center items-center gap-2 bg-blue-300 mt-10 w-1/2 p-4 rounded-lg'>
            <button onClick={handlePrevious}>Load More</button>
          </div>
          {
            pop && <PopOver PopOver={pop} setPop={setPop} item={popData} setError={setError}/>
          }
         </div>       
         
    </div>
    )
}

export default Jobs