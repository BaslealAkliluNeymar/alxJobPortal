import React from "react";
import { CirclePlus, FileUser, Focus } from "lucide-react";
import Avatar from "../UI/Avatar";

const ProfileResume = () => {
  

  return (
    <div className="flex flex-col shadow-lg bg-slate-50 rounded-lg mb-5 h-[34.5rem] w-full p-4">
        <h2 className="p-6 text-3xl font-bold">Upload Resume</h2>
        <div className="flex flex-col gap-4 p-6 border-slate-200 border-2 h-3/4 w-3/4 rounded-lg border-dashed items-center justify-center m-auto">
          <CirclePlus className="text-slate-400" />
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-slate-400 text-xl font-normal align-middle">Drag & drop or click to choose files</p>
            <p className="text-slate-500 text-xl font-normal align-middle">Max file size:10MB</p>
          </div>

          <div className="w-full ">

          </div>
        </div>

   
    </div>
  );
};

export default ProfileResume;
