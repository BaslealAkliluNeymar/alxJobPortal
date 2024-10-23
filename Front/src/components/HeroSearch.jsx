import React,{ useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import CitySelector from './CitySelector'
import { useNavigate } from 'react-router-dom'
const HeroSearch = () => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  const [value, setValue] = useState({
    title:"",
    location:""
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate("/browse",{state:value})
  }

  const handleChange = (e) =>{
   setValue({...value, location:e.target.value})
  }

  return (
    <div className='h-[20px] border-slate-800 border-5 absolute w-[80%] z-10 bottom-[9.5rem]'>
        <form action="" className='hero-form flex gap-5 bg-white w-[65%] p-2 relative' onSubmit={handleSubmit}>
            <div className='flex justify-center items-center gap-2 border-b-slate-500 p-4 flex-1 w-full'>
                <Search />
                <input type="text" className='outline-none' placeholder='Job title or keyword' onChange={handleChange}/>
            </div>
            <div className='flex justify-center items-center gap-2 border-b-slate-500 p-4 flex-1'>
                <MapPin /> 
                <CitySelector func={setValue} value={value}/>
            </div>
            <button className='bg-secondary text-fontColor p-1 font-extrabold flex-1 justify-center items-center'>Search Positions</button>
        </form>
    </div>
  )
}

export default HeroSearch