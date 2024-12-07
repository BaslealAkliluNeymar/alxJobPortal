import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Job from './Job';
import { getJobs } from '../services/jobs';

const Latest = () => {
  const [jobs, setJobs] = useState([]);

  
  console.log(jobs)
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await getJobs();
        setJobs(jobsData);
      } catch (err) {
        console.log(err)
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-hero-pattern mt-2 w-full min-h-screen explore">
    <div className="container flex flex-col justify-between items-center mt-2 latest-m">
      <div className="flex gap-1 mt-10 latest">
        <h1 className="font-poppins font-semibold text-heroSize explore">Latest Jobs</h1>
        <span className="text-secondary font-poppins font-semibold text-heroSize explore">Open</span>
      </div>
      <div className="flex justify-center items-center gap-2">
        <p className="text-secondary font-poppins text-[14px] explore first-letter:">Show all jobs</p>
        <ArrowRightIcon  className='hover:translate-x-1 hover:delay-700 text-green-400'/>
      </div>
    </div>
    <div className="container grid grid-cols-2 gap-2 w-full py-2 border-2 border-red-50-">
      {jobs.length > 0 ? (
        jobs.filter((item) => item.experience === "Entry").map((item) => <Job item={item} key={item.id || item.title}  />)
      ) : (
        <div className='flex gap-2 justify-center items-center w-full h-96'>
          <p>Loading jobs</p>
          <div className="loader"></div>
        </div>
      )}
    </div>
  </section>
  );
};

export default Latest;
