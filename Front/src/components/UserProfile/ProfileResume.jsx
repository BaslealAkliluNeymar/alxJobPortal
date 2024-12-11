import React, { useRef, useState } from "react";
import { FileUser } from "lucide-react";

const ProfileResume = ({ user, setUser }) => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);

  const handleClick = () => inputRef.current.click();

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    
    if (uploadedFile) {
      setFile(uploadedFile);
      const formData = new FormData();
      formData.append("resume", uploadedFile);
      console.log(formData)
      setUser((prev) => ({ ...prev, resume: uploadedFile })); 
    }

    console.log(user)
  };

  return (
    <div className="flex flex-col items-start gap-6 p-6 bg-slate-50 rounded-lg shadow-lg">
      <h1 className="font-extrabold text-3xl text-gray-700">Resume</h1>
      <div
        onClick={handleClick}
        className="w-52 h-52 flex flex-col justify-center items-center rounded-lg bg-gradient-to-t from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 transition-all duration-200 cursor-pointer"
      >
        {file ? (
          <div className="text-center">
            <p className="text-sm text-gray-600 font-semibold truncate w-44">
              {file.name}
            </p>
            <p className="text-xs text-gray-500 mt-2">Click to change</p>
          </div>
        ) : (
          <>
            <FileUser size={44} className="text-gray-500" />
            <p className="text-gray-500 font-medium mt-2">Upload PDF</p>
          </>
        )}
        <input
          type="file"
          accept="application/pdf"
          className="hidden"
          ref={inputRef}
          onChange={handleFileUpload}
        />
      </div>
      {file && (
        <div className="text-sm text-gray-600 mt-2">
          <p>
            Uploaded:{" "}
            <span className="font-semibold">{file.name.split("/").pop()}</span>
          </p>
          <p className="text-xs text-gray-500">PDF format only</p>
        </div>
      )}
    </div>
  );
};

export default ProfileResume;
