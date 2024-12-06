import React, { useState,useEffect } from "react";
import { getUserJobs, saveJob } from "../services/jobs";
import Job from "./Job";
import Button from "./Button";

const Jobz = () => {
  const [modal, setModal] = useState(false);
  const [jobs, setJobs] = useState();
  const [jobModal, setJobModal] = useState(false);
  const [data, setData] = useState({
    jobTitle: "",
    company: "",
    experience: "Junior", 
    type: "Fully Remote", 
    location: "",
    description: [],
    responsibilities: [],
    qualifications: [],
    logo: "", 
    students: [], 
  });

  useEffect(() => {
    const fetchJobs = async () => {
      // const token = localStorage.getItem('token')
      // setToken(token)
      const found = await getUserJobs()
      setJobs(found)
    };  
    fetchJobs();
  },[])



  const handleJobModal = () => {
    setJobModal(true)
  }
  const handleJobModalClose = () => {
    setJobModal(false)
  }
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleArrayChange = (e, fieldName) => {
    setData({
      ...data,
      [fieldName]: e.target.value.split("\n"), // Split input into an array of strings
    });
  };

  const handleSave = async () => {
    console.log("Saving job:", data);
    const token  = localStorage.getItem('token')
    setToken(token)
    const response = await saveJob(data);
    console.log(response);
    setModal(false);
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between p-2">
        <h1 className="text-2xl font-bold">Jobs</h1>
        <button
          onClick={() => setModal(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Create Job
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {modal && (
          <div className="flex h-auto z-50 w-3/5 flex-col gap-6 items-center m-auto border border-gray-300 bg-white rounded-xl shadow-2xl p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-1/2">
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-6 w-full">
              <div className="flex flex-wrap gap-2 w-full">

                <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
                  <label className="text-gray-700 font-medium mb-1">Job Title</label>
                  <input
                    name="jobTitle"
                    value={data.jobTitle}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter job title"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
                  <label className="text-gray-700 font-medium mb-1">Company</label>
                  <input
                    name="company"
                    value={data.company}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter company name"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
                  <label className="text-gray-700 font-medium mb-1">Experience</label>
                  <select
                    name="experience"
                    value={data.experience}
                    onChange={handleChange}
                    className="border border-gray-300  p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <option value="Entry">Entry</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                  </select>
                </div>
                
                <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
                  <label className="text-gray-700 font-medium mb-1">Type</label>
                  <select
                    name="type"
                    value={data.type}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <option value="Fully Remote">Fully Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-Site">On-Site</option>
                  </select>
                </div>
                {/* Location */}
                <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
                  <label className="text-gray-700 font-medium mb-1">Location</label>
                  <input
                    name="location"
                    value={data.location}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter location"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                {/* Description */}
                <div className="flex flex-col w-full">
                  <label className="text-gray-700 font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    onChange={(e) => handleArrayChange(e, "description")}
                    placeholder="Enter descriptions (one per line)..."
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>
                {/* Responsibilities */}
                <div className="flex flex-col w-full">
                  <label className="text-gray-700 font-medium mb-1">Responsibilities</label>
                  <textarea
                    name="responsibilities"
                    onChange={(e) => handleArrayChange(e, "responsibilities")}
                    placeholder="Enter responsibilities (one per line)..."
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>
                {/* Qualifications */}
                <div className="flex flex-col w-full">
                  <label className="text-gray-700 font-medium mb-1">Qualifications</label>
                  <textarea
                    name="qualifications"
                    onChange={(e) => handleArrayChange(e, "qualifications")}
                    placeholder="Enter qualifications (one per line)..."
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg"
                onClick={handleSave}
              >
                Save Changes
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>


      <div className="analytics flex flex-wrap gap-4 p-4 w-full">
        {
          jobs?.jobsPosted?.map((items,index) =>{
            console.log(items)
            return (
              <div
          className="border border-gray-300 rounded-xl shadow-lg cursor-pointer relative transition-transform transform hover:scale-105 hover:shadow-2xl p-4 bg-white"
          onClick={() => setJobModal(items)}
        >
          {/* Badge */}
          <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 bg-green-500 text-white text-sm font-bold rounded-full shadow-md">
            {items.students.length}
          </div>

          {/* Logo Section */}
          <div className="flex justify-center items-center h-20 w-20 mx-auto rounded-full border border-gray-200 overflow-hidden bg-gray-50">
            <img
              src={items.logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Job Info */}
          <div className="mt-4 flex flex-col items-center text-center gap-2">
            <h1 className="text-lg font-bold text-gray-800">{items.jobTitle}</h1>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              {items.company} 
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              {items.location}
            </p>

            {/* Tags */}
            <div className="flex gap-2 mt-2">
              <Button name="Business" />
              <Button name="Marketing" />
              <Button name="Design" />
            </div>
          </div>
        </div>

                 ) 
                  })
                }
                
              </div>
    </section>
  );
};

export default Jobz;
