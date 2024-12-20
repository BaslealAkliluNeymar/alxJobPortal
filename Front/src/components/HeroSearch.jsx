import React, { useState,useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import CitySelector from './CitySelector';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js'


const HeroSearch = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const [position, setPosition] = useState(['Data Analyst', 'Data Scientist','Software Engineer',
    'Front-end Developer','Back-end Developer','Saleforce Adminsitrator',
    'AWS Solutions Architect','Virtual Assistant','Financial Analyst'
  ])
  const [value, setValue] = useState({
    title: '',
    location: ''
  });

  const [showDropdown, setShowDropdown] = useState(false);
  // const [filled, setFilled] = useState(false)

  const [searchResult, setSearchResult] = useState([])

  const options = {
    includeScore:true
  }

  const fuse = new Fuse(position , options)
  

  useEffect(() =>{
    const found = fuse.search(value.title, options)
    setSearchResult(found)

    if(found.length > 0){
      setShowDropdown(true)
    }
    else{
      setShowDropdown(false)
    }
  },[value.title])
 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/browse', { state: value });
  };

  const handleTitleChange = (e) => {
    setValue(
      { ...value,title:e.target.value }
    );
  };


  return (
    <div className="absolute w-[80%] z-10 bottom-[9.5rem]">
      <form
        onSubmit={handleSubmit}
        className="hero-form flex gap-4 bg-white shadow-lg rounded-lg overflow-hidden w-[70%] p-3 mx-auto"
      >
        <div className="flex items-center gap-2 border-r border-slate-300 p-3 flex-1">
          <Search className="text-slate-500" />
          {
            searchResult <= 0 ? (
              <input
                type="text"
                className="outline-none w-full text-slate-700"
                placeholder="Job title or keyword"
                value={value.title}
                onChange={handleTitleChange}
              />
            ):(
                <div className='flex flex-col'>
                  <input
                    type="text"
                    className="outline-none w-full text-slate-700 relative"
                    placeholder="Job title or keyword"
                    value={value.title}
                    onChange={handleTitleChange}
                  />
                  <div className='flex flex-col h-auto gap-2 w-96 absolute top-20 left-52 bg-white'>
                    {
                     showDropdown && searchResult.map((item, index) =>{
                          return (
                              <div 
                                  key={index} value={item.item} 
                                  style={{
                                    // display: value.title ? 'none' :'flex'
                                  }}
                                  className='rounded-l-lg text-left shadow-lg cursor-pointer 
                                              h-10 w-full border-2 p-2 border-slate-200
                                            hover:bg-green-400 hover:text-white' 
                                  onClick={() => {
                                    setValue({...value, title:item.item}) 
                                    setShowDropdown(false)
                                }}
                              >
                                    {item.item}
                                </div>)
                        })
                    }  
                  </div>
              </div>
            )
          }
          

        </div>
        <div className="flex items-center gap-2 p-3 flex-1">
          <MapPin className="text-slate-500" />
          <CitySelector func={setValue} value={value} />
        </div>
        <button className="bg-secondary text-white font-bold p-3 rounded-md w-56 hover:bg-secondary-dark transition-colors">
          Search Talent
        </button>
      </form>
    </div>
  );
};

export default HeroSearch;
