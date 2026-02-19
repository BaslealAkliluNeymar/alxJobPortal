import React, { useEffect, useState, useRef } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Job from './Job';
import { jobAsyncThunk } from '../reducers/jobReducer';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
const Latest = () => {
  const dispatch = useDispatch()
  const myRef = useRef()
  const [size, setSize] = useState()
  const navigate = useNavigate()
  const jobz = useSelector((state) => (state.job.jobs))
  const [layout, setLayout] = useState(6)
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        dispatch(jobAsyncThunk());
      } catch (err) {
        console.log(err)
      }
    };
    fetchJobs();
  }, []);


  console.log(size)
  useEffect(() => {
    const updateSize = () => {
      setTimeout(() => {
        if (myRef.current) {
          setSize(myRef.current.getBoundingClientRect().height)
        }
      }, 0)
    }

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const handleNavigate = () => {
    navigate('/jobs')
  }

  return (
    <section className="bg-hero-pattern mt-2 w-full min-h-screen explore">
      <div className="container flex flex-col justify-between items-center mt-2 latest-m">
        <div className="flex gap-2 mt-10 latest p-4 text-3xl md:text-5xl md:font-extrabold md:p-2">
          <h1 className="font-poppins font-semibold">Latest Jobs</h1>
          <span className="text-secondary font-poppins font-semibold">Open</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link to='/jobs' className="flex gap-2 items-center">
            <p className="text-secondary font-poppins text-[14px] explore first-letter:">Show all jobs</p>
          </Link>
          <ArrowRightIcon className='hover:translate-x-1 hover:delay-700 text-green-400' />
        </div>
      </div>
      <div className="container md:grid md:grid-cols-2 md:gap-2 flex flex-col w-full gap-2 py-2 md:min-h-fit border-4 p-2 shadow-md 
    rounded-md md:"
        style={{
          height: 'auto'
        }} ref={myRef}>
        {jobz.length > 0 ? (
          jobz
            .slice(0, 8)
            .map(
              (item) =>
                (<Job item={item} key={item.id || item.title} lead={handleNavigate} />)
            )
        ) : (
          <div className='flex gap-2 md:col-span-2 justify-center items-center w-full h-96'>
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
};

export default Latest;
