import React from "react";

const ProfileHeader = ({ user, setUser }) => {
  const handleEdit = () =>{
    console.log('edit')
  }
  return (
    <div className="flex items-center gap-8 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg">
      <img src="/default-avatar.png" alt="Profile" className="w-24 h-24 rounded-full bg-gray-200"/>
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p>{user.position}</p>
        <p className="text-sm text-gray-500">{user.location}</p>
        <button
          onClick={() => handleEdit()}
          className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-lg"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
