import React,{useEffect, useState} from 'react';
import { ApplyJob  } from '../services/jobs';
import { useNavigate } from 'react-router-dom';
const PopOver = ({ PopOver, setPop, item, setError }) => {
  if (!PopOver) return null;
  const [initial,setInitial] = useState({})
  const [apply, setApply] = useState(false)
  const handleClose =  () => setPop(false);
  const navigate = useNavigate()

  const handleChange = () => {
    navigate(`/${JSON.parse(localStorage.getItem('user'))._id}/profile`)
  }
  const handleApply = async (id) =>{
    const found = localStorage.getItem('token')
    // setToken(found)

    const response = await ApplyJob(id)
    console.log(response)
    setInitial(response)
    setError(response)
    setPop(true)
    handleClose()
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[50%] lg:w-[40%] p-6 relative">

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4">
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className="h-12 w-12 object-contain rounded-md border"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">{item.jobTitle}</h2>
              <p className="text-sm text-gray-600">{item.company}</p>
            </div>
          </div>
          <button
            className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>


        <div className="mt-4 space-y-3">
          <p className="text-sm text-gray-600">
            <strong>Type:</strong> {item.type}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Location:</strong> {item.location}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Experience:</strong> {item.experience}
          </p>
        </div>


        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-800">Description</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {item.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>


        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-800">Responsibilities</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {item.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-800">Qualifications</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {item.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>

        
        <div className="mt-6 flex justify-between items-center gap-2">
      
          <button
            onClick={() => handleApply(item._id)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Apply
          </button>
          <button
            onClick={() => handleChange()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 h-10"
          >
            Edit/Change My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopOver;
