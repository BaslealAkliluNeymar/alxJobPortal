import React,{useState, useEffect} from 'react'
import HeroSearch from '../components/HeroSearch.jsx'
import Card from '../components/Card'
import { getAll, getByRole, setToken } from '../services/talents.js'
 
const Description = () => {
  const [talents, setTalents] = useState([])
  const [val ,setVal] = useState("")

  useEffect(() =>{
    const fetchTalent = async ()  =>{
      const token = localStorage.getItem('token')
      setToken(token)
      const allData = await getAll()
      console.log(allData)
      setTalents(allData)
  }
  fetchTalent()
},[])

console.log(talents)
const handleChange = async (e) =>{
  e.preventDefault()
  console.log(e.target.value)
  const data = await getByRole(e.target.value)
  
}

console.log(val)
  return (
    <div className='flex m-4'>
      <div className="w-3/12 flex items-center flex-wrap justify-center m-4 shadow-lg">
        <div className='flex flex-col justify-center items-center order-2 shadow-xl p-2  h-full w-full'>
          <select name="" id="" className='h-12 w-full p-2' onChange={handleChange}>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Data Science">Data Science</option>
            <option value="ML-Engineer">ML-Engineer</option>
            <option value="Product Designer">Product Designer</option>
          </select>
          <input type="number" placeholder='Years of Experience' className='p-2 h-12 w-full focus:outline-green-400'/>
          <select name="" id="" placeholder="Location" className='p-2 h-12 w-full focus:outline-green-400'>
            <option value="">Addis Ababa</option>
            <option value="">Casablanca</option>
            <option value="">Accra</option>
            <option value="">Nairobi</option>
            <option value="">Front-End</option>
          </select>
          <select name="" id="" placeholder="Availabilty" className='p-2 h-12 w-full focus:outline-green-400'>
            <option value="">Full-time</option>
            <option value="">Part-time</option>
            <option value="">Hybrid</option>
            <option value="">Remote</option>
            
          </select>

        </div>
      </div>
      <div className='flex flex-wrap justify-center m-4 shadow-md w-full'>
        {
          talents.map((item,index) =>{
            return <Card talent={item} key={index}/>
          })
        }
        
      </div>
    </div>
  )
}

export default Description