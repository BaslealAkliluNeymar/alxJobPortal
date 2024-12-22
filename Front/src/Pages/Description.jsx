import React, { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import 'react-loading-skeleton/dist/skeleton.css'
import { talentThunk } from "../reducers/talentReducer.js";
import { talentFiltered } from "../reducers/talentReducer.js";
import SkeletonCard from "../components/SkeletonCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { skills } from '../constants/index.js'
import  {StepBack} from 'lucide-react'
import Loading from "../components/Loading.jsx";
const Description = () => {
  const dispatch = useDispatch()
  const { talent } = useSelector(
    (state) => (state.talent)
  )

  console.log(skills)

  const [talents, setTalents] = useState(talent);
  const [select, setSelect] = useState({
    role: "",
    experience: "",
    location: "",
  });
  const isMounted = useRef(false);
  const [visible, setVisible] = useState(8);
  const [filterVisible, setFilterVisible] = useState(false); // For collapsible sidebar

  useEffect(() => {
    dispatch(talentThunk())
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    dispatch(talentFiltered(select))
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
    <div className="flex justify-center items-center p-2 overflow-x-hidden bg-gray-50">
    <div className="flex gap-8 p-8 min-h-screen w-screen overflow-x-hidden">

      <div
        className={`${
          filterVisible ? "block" : "hidden"
        } w-3/12 p-6  shadow-lg rounded-lg bg-white lg:static fixed z-50 top-0 left-0 h-screen lg:h-auto lg:bg-transparent lg:z-auto transition-all duration-300`}
      >

        <div className="flex justify-between items-center mb-6 h-10">
          <button
            onClick={() => setFilterVisible(false)}
            className="text-gray-600 text-lg absolute left-[28rem]"
          >
            <StepBack size={24} />
          </button>
        </div>
        <h2 className="hidden lg:block text-xl font-semibold text-gray-700 mb-4">
          Filter Candidates
        </h2>
        <div className="flex flex-col gap-6">

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
              {
                skills.map((item,key) => {
                  return <option key={key} value={item}>{item}</option>
                })
              }
            </select>
          </div>

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

          <button className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
            Apply Filters
          </button>
        </div>
      </div>

     
      {!filterVisible && (
        <button
          onClick={() => setFilterVisible(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg fixed lg:top-46 lg:left-6 top-16 left-6 z-50"
        >
          Open Filters
        </button>
      )}

      <div className="flex flex-col justify-center container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {talent.length > 0 ? (
            talent
              .slice(0, visible)
              .map((talent, index) => <Card talent={talent} key={index} />)
          ) : (
            // <div>
            //   <Loading />

            // </div>
              Array.from({ length: 10 }).map((_, index) => (
                <SkeletonCard />
              ))
          
          )}
        </div>
        <button
            className="flex justify-center items-center gap-2 bg-gradient-to-r mx-auto from-green-400 to-green-600 text-white font-semibold mt-10 w-36 h-12 p-2 rounded-full shadow-lg hover:from-green-500 hover:to-green-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={handlePrevious}
          >
            Load More
        </button>

      </div>
  
    </div>

    </div>
  );
};

export default Description;
