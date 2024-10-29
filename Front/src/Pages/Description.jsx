import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getAll, getByRole, setToken } from '../services/talents.js';

const Description = () => {
  const [talents, setTalents] = useState([]);
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  // Fetch all talents on component mount
  useEffect(() => {
    const fetchTalent = async () => {
      const token = localStorage.getItem('token');
      setToken(token);
      const allData = await getAll();
      setTalents(allData);
    };
    fetchTalent();
  }, []);

  useEffect(() =>{
    const fetchFilteredTalent = async () =>{
      setToken(token)
      
    }
    fetchFilteredTalent()
  },[role, location, jobType])

  // Handle filtering by role
  const handleRoleChange = async (e) => {
    setRole(e.target.value);
    const data = await getByRole(e.target.value);
    setTalents(data);
  };

  // Rendered Component
  return (
    <div className="flex gap-8 p-8 bg-gray-50 min-h-screen">
      
      {/* Sidebar Filters */}
      <div className="w-3/12 p-6 shadow-md rounded-lg bg-white">
        <div className="flex flex-col gap-6">
          
          <select
            className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:outline-green-400"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="">Select Role</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Data Science">Data Science</option>
            <option value="ML-Engineer">ML-Engineer</option>
            <option value="Product Designer">Product Designer</option>
          </select>

          <input
            type="number"
            placeholder="Years of Experience"
            className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:outline-green-400"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <select
            className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:outline-green-400"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="Addis Ababa">Addis Ababa</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Accra">Accra</option>
            <option value="Nairobi">Nairobi</option>
          </select>

          <select
            className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:outline-green-400"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
      </div>

      {/* Talent Cards Grid */}
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
