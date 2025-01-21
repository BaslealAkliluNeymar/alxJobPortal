import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListFilter, Search } from 'lucide-react';
import PopOver from '../components/PopOver';
import SkeletonJobCard from '../components/SkeletonJobCard';
import { jobAsyncThunk } from '../reducers/jobReducer';
import { useLocation } from 'react-router-dom'


const Jobs = () => {
  const param = useLocation()
  const okay = param.state || {};

  console.log(okay)
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state?.job?.jobs);

  const [pop, setPop] = useState(false);
  const [popData, setPopData] = useState({});
  const [search, setSearch] = useState('');
  const [error, setError] = useState({});
  const [visible, setVisible] = useState(12);

  useEffect(() => {
    dispatch(jobAsyncThunk());
  }, [dispatch]);

  // useEffect(() =>{
  //   setSearch(title)
  // },[title])

  const handlePopOver = (item) => {
    setPopData(item);
    setPop(!pop);
  };

  const handleChange = (e) => setSearch(e.target.value);

  const handleLoadMore = () => setVisible((prev) => prev + 2);

  return (
    <div className="min-h-screen p-6 bg-gray-50 md:container mx-auto my-4 w-full md:p-4 shadow-lg">

      <div className="flex items-center gap-4 mt-8">
        <Search />
        <input
          type="text"
          className="w-full md:w-3/5 p-3 text-sm rounded-lg border-2 border-green-300 focus:ring-2 focus:ring-green-400"
          placeholder="Search jobs"
          onChange={handleChange}
          aria-label="Search jobs"
        />
        {/* <ListFilter className="text-green-400 hover:text-green-500 w-8 h-8 cursor-pointer" /> */}
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {jobs?.length > 0 ? (
          jobs
            .filter((item) => item.jobTitle.toLowerCase().includes(search.toLowerCase()))
            .slice(0, visible)
            .map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-xl cursor-pointer transition-all duration-300"
                onClick={() => handlePopOver(item)}
              >

                <div className="flex justify-center items-center h-20 w-20 bg-gray-100 border rounded-md">
                  {item?.logo ? (
                    <img src={item?.logo} alt="logo" className="h-full w-full object-contain rounded-md" />
                  ) : (
                    <span className="text-gray-400">No Logo</span>
                  )}

                </div>

                {/* Job Info */}
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="text-lg font-bold text-gray-800">{item?.position}</h2>
                  <p className="text-sm text-gray-600">
                    {item?.company} • {item?.location}
                  </p>
                  <p className="text-gray-600 font-semibold">{item?.jobTitle}</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                      {item?.type}
                    </span>
                    <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                      {item?.experience}
                    </span>
                    <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full">
                      Design
                    </span>
                  </div>
                </div>
              </div>
            ))
        ) : (
          Array.from({ length: 10 }).map((_, index) => <SkeletonJobCard key={index} />)
        )}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleLoadMore}
          className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
        >
          Load More
        </button>
      </div>

      {/* Popover */}
      {pop && <PopOver PopOver={pop} setPop={setPop} item={popData} setError={setError} />}
    </div>
  );
};

export default Jobs;
