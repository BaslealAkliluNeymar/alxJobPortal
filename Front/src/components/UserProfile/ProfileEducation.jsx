import React from "react";
import EditButton from "../UI/EditButton.jsx";

const ProfileEducation = ({ education, onEdit }) => {
  return (
    <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="font-bold text-2xl text-gray-800 mb-6">Education</h2>
      <div className="space-y-6">
        {education?.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-gray-700">{item.nameofDegree}</h3>
              <EditButton onClick={() => onEdit(item.id)} />
            </div>
            <p className="text-sm text-gray-600">{item.placeofEducation}</p>
            <div className="flex gap-2 items-center text-sm text-gray-500 mt-1">
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
