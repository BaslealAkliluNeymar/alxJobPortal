import React from "react";
// import { EditButton } from '../UI/index.js'
import EditButton from "../UI/EditButton.jsx";
const ProfileEducation = ({ education, onEdit }) => {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl text-left mb-5">Education</h2>
      <div className="shadow-lg border-slate-200 border-2 p-4 rounded-lg">
        {education?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 mb-4 border-b-2 border-slate-400 pb-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl">{item.nameofDegree}</h3>
              <EditButton onClick={() => onEdit(item.id)} />
            </div>
            <p>{item.placeofEducation}</p>
            <div className="flex gap-2 items-center text-gray-600">
              <p>{item.startDate}</p>
              <span>-</span>
              <p>{item.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileEducation;
