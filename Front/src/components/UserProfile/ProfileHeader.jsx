import React, { useRef, useState } from "react";
import Modal from "../UI/Modal";
import { skills } from '../../constants/index.js'
import axios from 'axios'
import Avatar from "../UI/Avatar.jsx";
import { Focus } from "lucide-react";
const ProfileHeader = ({ user, setUser }) => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const [isEditing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name,
    position: user?.position,
    location: user?.location,
  });

  const handleClick = () => inputRef.current.click();

  const handleFileUpload =  (e) => {
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile)
    try {
      const from_data = new FormData()
      from_data.append('file',uploadedFile)

     axios.post('http://localhost:8000/upload',from_data)
     .then(res => {
          setFile(uploadedFile)
          setUser((prev) => ({
            ...prev,
            image: res.data.url,
          }))
    })
    }
    catch(err){
      console.log(err)
    }
 
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    setUser((prev) => ({ ...prev, ...formData }));
    setEditing(false);
  };


  const handleUpload = () =>{
    console.log('Foreground')
  }
  return (
    <div className="flex flex-col shadow-lg bg-slate-50 rounded-lg mb-5 h-[34.5rem] w-full">
      <div className="w-full bg-slate-200 h-72 rounded-tr-lg rounded-tl-lg flex-3 inset-3 border-spacing-16">
        <Focus className="float-right m-12 w-10 h-10" onClick={handleUpload}/>
      </div>

      <div className="w-full flex-1 relative gap-4">
          <Avatar className="w-44 h-44 rounded-full absolute left-10 bottom-44 shadow-md border-white border-[5px]"/>
          <div className="absolute bottom-16 left-10 flex flex-col justify-between items-start gap-2">
            <p className="text-4xl font-bold leading-4 pb-4">Eyoel Mekonnen</p>
            <p className="text-slate-500 text-xl">Lead Backend Developer @ Google</p>
            <p className="text-slate-500">San Francisco, USA</p>
          </div>

          <div className="hidden md:hidden sm:hidden lg:float-right lg:flex pr-12 pt-14 gap-8">
            <div className="bg-green-100 w-10 h-[8rem] sm:w-60 sm:h-[8rem] shadow-md leading-2 rounded-md flex flex-col justify-center items-start p-4 gap-2">
                <p className="text-3xl font-bold text-green-800">351</p>
                <p className="text-xl font-bold">Completed Sessions</p>
            </div>

            <div className= "bg-blue-100 w-60 h-[8rem] shadow-md leading-2 rounded-md flex flex-col justify-center items-start p-4 gap-2">
              <p className="text-3xl font-bold text-blue-800">2+</p>
              <p className="text-xl font-bold">Years Experience</p>
            </div>
          </div>
      </div>
     
    </div>
  );
};

export default ProfileHeader;
