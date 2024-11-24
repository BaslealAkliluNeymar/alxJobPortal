import React, { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import { getAll, setToken, getFiltered } from "../services/talents.js";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import SkeletonCard from "../components/SkeletonCard.jsx";

const Description = () => {
  const [talents, setTalents] = useState([]);
  const [select, setSelect] = useState({
    role: "",
    experience: "",
    location: "",
  });
  const isMounted = useRef(false);
  const [visible, setVisible] = useState(8);
  const [filterVisible, setFilterVisible] = useState(false); // For collapsible sidebar

  useEffect(() => {
    const fetchTalent = async () => {
      const token = localStorage.getItem("token");
      setToken(token);
      const allData = await getAll();
      setTalents(allData);
    };
    fetchTalent();
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const fetchFilteredData = async () => {
      const token = localStorage.getItem("token");
      setToken(token);
      const filteredData = await getFiltered(select);
      setTalents(filteredData);
    };

    fetchFilteredData(select);
  }, [select]);

  const handlePrevious = () => {
    setVisible((prev) => prev + 2);
  };

  const handleRoleChange = (e) => {
    setSelect(() => {
      return {
        ...select,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 overflow-x-hidden bg-gray-50">
    <div className="flex gap-8 p-8 min-h-screen w-screen overflow-x-hidden">

      <div
        className={`${
          filterVisible ? "block" : "hidden lg:block"
        } w-3/12 p-6 shadow-lg rounded-lg bg-white lg:static fixed z-50 top-0 left-0 h-screen lg:h-auto lg:bg-transparent lg:z-auto transition-all duration-300`}
      >
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-xl font-semibold text-gray-700">Filters</h2>
          <button
            onClick={() => setFilterVisible(false)}
            className="text-gray-600 text-lg"
          >
            ✕
          </button>
        </div>
        <h2 className="hidden lg:block text-xl font-semibold text-gray-700 mb-4">
          Filter Candidates
        </h2>
        <div className="flex flex-col gap-6">
          {/* Role Selector */}
          <div className="flex flex-col">
            <label className="text-gray-600 mb-2 font-medium">Role</label>
            <select
              className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
              value={select.role}
              onChange={handleRoleChange}
              name="role"
            >
              <option value="" disabled>
                Select a Role
              </option>
              <option value="Front-End Developer">Front-End Developer</option>
              <option value="Back-End Developer">Back-End Developer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Product Designer">Product Designer</option>
            </select>
          </div>

          {/* Experience Input */}
          <div className="flex flex-col">
            <label className="text-gray-600 mb-2 font-medium">
              Years of Experience
            </label>
            <input
              type="number"
              placeholder="Enter experience"
              className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
              value={select.experience}
              onChange={handleRoleChange}
              name="experience"
            />
          </div>

          {/* Location Selector */}
          <div className="flex flex-col">
            <label className="text-gray-600 mb-2 font-medium">Location</label>
            <select
              className="h-12 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
              value={select.location}
              onChange={handleRoleChange}
              name="location"
            >
              <option value="" disabled>
                Select a Location
              </option>
              {[
                "Kigali",
                "Addis Ababa",
                "Accra",
                "Casablanca",
                "Cairo",
                "Lagos",
                "Nairobi",
                "Johannesberg",
              ].map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Apply Button */}
          <button className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Filter Toggle Button (For mobile) */}
      {!filterVisible && (
        <button
          onClick={() => setFilterVisible(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg lg:hidden fixed top-6 left-6 z-50"
        >
          Open Filters
        </button>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {talents.length > 0 ? (
          talents
            .slice(0, visible)
            .map((talent, index) => <Card talent={talent} key={index} />)
        ) : (
          
            Array.from({ length: 10 }).map((_, index) => (
              <SkeletonCard />
            ))
         
        )}
      </div>
    </div>
      <button
        className="flex justify-center font-extrabold leading-3 space-x-1 items-center gap-2 bg-blue-300 mt-10 w-36 h-12 p-2 rounded-3xl"
        onClick={handlePrevious}
      >
        Load More
      </button>
    </div>
  );
};

export default Description;
