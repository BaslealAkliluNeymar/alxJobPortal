import React, { useState, useEffect,useRef } from 'react';
import Card from '../components/Card';
import { getAll, setToken,getFiltered} from '../services/talents.js';

const Description = () => {
  const [talents, setTalents] = useState([]);
  const [select, setSelect] = useState({
    role:'',
    experience:'',
    location:''
  })
  const isMounted = useRef(false)


  useEffect(() => {
    const fetchTalent = async () => {
      const token = localStorage.getItem('token');
      setToken(token);
      const allData = await getAll();
      setTalents(allData);
    };
    fetchTalent();
  }, []);


  console.log(talents)
  // useEffect(() =>{
  //   const fetchFilteredTalent = async () =>{
  //     const token = localStorage.getItem('token');
  //     setToken(token)
      
  //   }
  //   fetchFilteredTalent()
  // },[role, location, jobType])


  useEffect(() =>{
    if(!isMounted.current){
      isMounted.current = true
      return;
    }

    const fetchFilteredData = async () =>{
      const token = localStorage.getItem('token');
      setToken(token);
      const filteredData = await getFiltered(select)
      setTalents(filteredData)
      return filteredData
    }

    
    fetchFilteredData(select)
  },[select])


  const handleRoleChange = async (e) => {
   
    
    setSelect(() =>{
      return {
        ...select,
        [e.target.name]:e.target.value
      }
    })
  };


 
  return (
    <div className="flex gap-8 p-8 bg-gray-50 min-h-screen">
      
      
      <div className="w-3/12 p-6 shadow-md rounded-lg bg-white">
        <div className="flex flex-col gap-6">
          
          <select
            className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:outline-green-400"
            value={select.role}
            onChange={handleRoleChange}
            name="role"
          >
           
            <option value="Front-End Developer">Front-End</option>
            <option value="Back-End Developer">Back-End</option>
            <option value="Data Scientist">Data Science</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Product Designer">Product Designer</option>
            <option defaultValue=''></option>
          </select>

          <input
            type="number"
            placeholder="Years of Experience"
            className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:outline-green-400"
            value={select.experience}
            onChange={handleRoleChange}
            name="experience"
          />

          <select
            className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:outline-green-400"
            value={select.location}
            onChange={handleRoleChange}
            name="location"
          >
            {
              ['Kigali','Addis Ababa','Accra','Casablanca','Cairo','Lagos','Nairobi','Johannesberg'].map((item,index) =>{
                return (
                  <option value={item} key={index}>{item}</option>
                )
              })
            }
          </select>

          {/* <select
            className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:outline-green-400"
            value={select.jobType}
            onChange={handleRoleChange}
            name="jobType"
          >
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select> */}
        </div>
      </div>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {talents.length > 0 ? (
          talents.map((talent, index) => <Card talent={talent} key={index} />)
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No talents found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Description;
