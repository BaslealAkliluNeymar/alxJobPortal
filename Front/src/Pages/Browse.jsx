import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSearchJobs } from "../services/search";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";

const Browse = () => {
  const locate = useLocation();
  const [talents, setTalents] = useState([]);
  const { path, location, search, pathname } = locate.state || {};
  const [visible, setVisible] = useState(8);


  useEffect(() => {
    const fetchData = async () => {
      const found = await getSearchJobs(locate.state);
      setTalents(found);
    };
    fetchData();
  }, [locate.state]);

  const handlePrevious = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center px-4">
        Browse Jobs
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4">
        {talents.length > 0 ? (
          talents.slice(0, visible).map((talent, index) => (
            <Card
              talent={talent}
              key={index}
              className="aspect-video h-16 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          ))
        ) : (
          Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
        )}
      </div>

      {/* Load More Button */}
      {talents.length > visible && (
        <button
          className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:shadow-lg active:scale-95 transition-all duration-200"
          onClick={handlePrevious}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Browse;
