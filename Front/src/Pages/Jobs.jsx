import React,{useState, useEffect} from 'react'
import Card from '../components/Card'
import { useLocation } from 'react-router-dom'
import { getJobs, setToken } from '../services/jobs'
import Job from '../components/Job'
import Button from '../components/Button'
import PopOver from '../components/PopOver'
import { ListFilter } from 'lucide-react'

const Jobs = () => {
    const locate = useLocation()
    const [jobs, setJobs] = useState([]);
    const [pop,setPop] =  useState(false)
    const [popData,setpopData] = useState({})
    const [search,setSearch] = useState('')
    // const {path,location,search ,pathname} = locate.state || {}
  
    // console.log(locate.state)
  
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
    console.log(jobs)
    return (
      <div className='min-h-screen relative container'>
        <div className='flex justify-end items-center gap-2 mt-10 w-full'>
            <input type="text" className='outline-none border-2 border-slate-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 w-3/5 flex-auto' placeholder='Search jobs' onChange={handleChange}/>
            <ListFilter className='text-green-400 hover:text-green-500 text-4xl' />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full mt-10 aspect-square p-2">
          
           {jobs.length > 0 ? (
            jobs.filter((item) => item.jobTitle.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
              console.log(item)
              return (
                <div className='flex gap-4 justify-start items-start h-[150px] w-full bg-white p-6 shadow-md' onClick={() => handlePopOver(item)} >
                  <div className='flex flex-col justify-center items-center h-full border-2 border-slate-200 flex-1'>
                      <img src={item.logo} alt="logo" />
                  </div>
                  <div className='flex flex-col gap-[0.15rem] justify-between h-full flex-auto'>
                      <h1 className='font-bold font-poppins'>{item.position}</h1>
                      <p className='font-epilogue flex justify-start gap-[0.25rem] text-[#515B6F] items-center'>Nomad <span className='bg-[#515B6F] h-1 w-1 rounded-full flex justify-center items-center'></span>{item.location}</p>
                      <div className='flex gap-2'>
                          <Button name={item.type} />
                          <Button name="Marketing" />
                          <Button name="Design" />
                      </div>
                  </div>
                </div>
               
              );
            })
         
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No Jobs found.
            </p>
          )}

          {
            pop && <PopOver PopOver={pop} setPop={setPop} item={popData} />
          }
         </div>       
         
    </div>
    )
}

export default Jobs