import React, { useState,useEffect } from "react";
import { getUserJobs, saveJob, setToken } from "../services/jobs";
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
      const token = localStorage.getItem('token')
      setToken(token)
      const found = await getUserJobs()
      setJobs(found)
    };  
    fetchJobs();
  },[])


  console.log(jobs)
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
          <div className="bg-transparent flex h-auto w-3/5 flex-col gap-6 items-center m-auto border border-gray-300 bg-white rounded-xl shadow-2xl p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-1/2">
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-6 w-full">
              <div className="flex flex-wrap gap-2 w-full">
                {/* Job Title */}
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
                {/* Company */}
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
                {/* Experience */}
                <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
                  <label className="text-gray-700 font-medium mb-1">Experience</label>
                  <select
                    name="experience"
                    value={data.experience}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
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


      <div className="analytics flex flex-wrap gap-4 p-4 w-full ">
        {
          jobs?.jobsPosted?.map((items,index) =>{
            console.log(items)
            return (
              <div className="border-2 border-slate-200 w-auto h-auto rounded-lg shadow-lg cursor-pointer relative" onClick={() => setJobModal(items)}>
                 <div className="w-6 h-6 p-4 bg-green-500 rounded-full  flex justify-center items-center right-0 bottom-[-6] absolute">{items.students.length}</div>
                 {/* <div className='flex gap-4 justify-start items-start h-[150px] w-[35%] bg-white p-6 shadow-md'> */}
                  <div className='flex justify-center items-center h-full border-2 border-slate-200 flex-1 rounded-lg p-4'>
                      <img src={items.logo} className="w-full h-full rounded-full object-contain flex justify-center items-center" alt="logo" />
                  {/* </div> */}
                  <div className='flex flex-col gap-[0.15rem] justify-between h-full flex-auto'>
                      <h1 className='font-bold font-poppins'>{items.jobTitle}</h1>
                      <p className='font-epilogue flex justify-start gap-[0.25rem] text-[#515B6F] items-center'>Nomad <span className='bg-[#515B6F] h-1 w-1 rounded-full flex justify-center items-center'></span>{items.location}</p>
                      <div className='flex gap-2'>
                          <Button name="Business" />
                          <Button name="Marketing" />
                          <Button name="Design" />
                      </div>
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
