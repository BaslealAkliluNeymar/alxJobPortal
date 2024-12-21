import React from 'react'


const Job = (props) => {
  const { item } = props
  
  return (
    <div 
        className="flex w-full gap-4 justify-start items-start h-auto bg-gradient-to-r from-blue-50 to-white p-6 shadow-lg rounded-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer" 
        onClick={() => handlePopOver(item)}
      >
        <div className="flex justify-center items-center h-[120px] w-[120px] bg-white border-2 border-gray-200 rounded-md">
          {item?.logo ? (
            <img src={item.logo} alt="logo" className="h-full w-full object-contain rounded-md" />
          ) : (
            <span className="text-gray-400">No Logo</span>
          )}
        </div>
      
        
        <div className="flex flex-col gap-2 justify-between flex-auto">
          
          <h1 className="font-bold font-poppins text-lg text-gray-800">{item?.position}</h1>
        
          <p className="font-epilogue text-sm text-gray-600 flex items-center gap-2">
            <span>{item?.company}</span>
            <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
            <span>{item?.location}</span>
          </p>
          
          <p className='font-bold w-full'>{item?.jobTitle}</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full shadow-inner">
              {item?.type}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
              {item?.experience}
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-sm font-medium rounded-full">
              Design
            </span>
          </div>
        </div>
      </div>
              
  )
}

export default Job