import {useState, useEffect} from 'react'
import { getAll } from '../services/index.js'
import { useQuery } from '@tanstack/react-query'
const CitySelector = (props) => {
  console.log(props)
  const [optionz, setOptions] = useState({})
  const [country, setCountry] = useState([
    {
      country:"Ethiopia",
      city:"Addis Ababa"
    },
    {
      country:"Ghana",
      city:"Accra"
    },
    {
      country:"Morocco",
      city:"Cassablaca"
    },
    {
      country:"South Africa",
      city:"Johanessburg"
    },
    {
       country:"Rwanda",
       city:"Kigali"
    },
    {
      country:"Nigeria",
      city:"Lagos"
   },
   {
    country:"Kenya",
    city:"Nairobi"
  }
    
   
  ])
  
  const find = (e) =>{
    e.preventDefault()
    props.func({...props.value ,title:e.target.value})
  }
  return (
    
    <select name="" id="" style={{width:"80%"}} onChange={find}>
        { 
            (
              country?.map((item,index) =>{
                return (
                    <option key={index} value={item.name} >{item.city},{item.country}</option>
                )
            }))
        }
    </select>
   
  )
}

export default CitySelector