import React, { useRef, useState } from "react";
import Modal from "../UI/Modal";

const ProfileHeader = ({ user, setUser }) => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const [isEditing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    position: user.position,
    location: user.location,
  });

  const handleClick = () => inputRef.current.click();

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setUser((prev) => ({
        ...prev,
        image: URL.createObjectURL(uploadedFile),
      }));
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

  return (
    <div className="flex items-center gap-8 p-6 shadow-lg bg-slate-50 rounded-lg mb-5">
      {/* Profile Image Section */}
      <div
        onClick={handleClick}
        className="relative w-44 h-44 rounded-full bg-gray-100 hover:shadow-lg cursor-pointer overflow-hidden flex items-center justify-center"
      >
        <img
          src={file ? URL.createObjectURL(file) : user.profileImage || "/default-avatar.png"}
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={inputRef}
          onChange={handleFileUpload}
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white text-sm opacity-0 hover:opacity-100 transition-opacity">
          Click to Upload
        </div>
      </div>

      {/* Profile Details */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-700">{user.name}</h1>
        <p className="text-lg text-gray-500">{user.position}</p>
        <p className="text-sm text-gray-400">{user.location}</p>
        <button
          onClick={() => setEditing(true)}
          className="mt-4 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md transition-all"
        >
          Edit Profile
        </button>
      </div>

      {/* Modal for Editing */}
      {isEditing && (
        <Modal onClose={() => setEditing(false)}>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Edit Profile</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Your Position"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition-all"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfileHeader;
