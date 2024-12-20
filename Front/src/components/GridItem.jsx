import React, { useState } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';


const GridItem = ({ items }) => {
  const { name,path, number } = items;
  const [value, setValue] = useState({
    title:name,
    location:"ALL"
  })
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/talent/search?position=${value.title}&location=`,{state:value})
  }

  return (
      <div className="griditem-sm w-[250px] h-[190px] border-[#D6DDEB] cursor-pointer border-2 p-2 hover:bg-secondary hover:rounded-lg ease-in-out hover:text-slate-50 flex flex-col gap-3 justify-center items-start pl-5" onClick={handleClick}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_54_1714)">
              <path d="M6 42.0001H14L40 16.0001C41.0609 14.9393 41.6569 13.5004 41.6569 12.0001C41.6569 10.4998 41.0609 9.06098 40 8.00012C38.9391 6.93925 37.5003 6.34326 36 6.34326C34.4997 6.34326 33.0609 6.93925 32 8.00012L6 34.0001V42.0001Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29 11L37 19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 16L14 6L6 14L16 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 16L11 19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M32 24L42 34L34 42L24 32" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M32 34L29 37" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_54_1714">
              <rect width="48" height="48" fill="white"/>
              </clipPath>
              </defs>
          </svg>

        <h1 className="font-poppins text-[1.5rem] font-bold">{name}</h1>
        <div className="flex justify-start items-center gap-1">
          <p>{number} Candidates available</p>
          <ArrowRightIcon />
        </div>
      </div>
    
  );
};

export default GridItem;
