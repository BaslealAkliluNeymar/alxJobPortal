import React, { useState } from "react";
import Modal from "../UI/Modal";

const ProfileProjects = ({ projects, setUser }) => {
  const [isEditing, setEditing] = useState(false);
  const [projectList, setProjectList] = useState(projects);

  const handleSave = () => {
    setUser((prev) => ({ ...prev, projects: projectList }));
    setEditing(false);
  };

  return (
    <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="font-bold text-2xl mb-6 text-gray-800">Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4"
        >
          <h3 className="text-lg font-bold text-gray-700">{project.nameofProject}</h3>
          <p className="text-sm text-gray-600 italic">{project.durationofProject}</p>
          <p className="text-sm text-gray-700 mt-2">{project.summary}</p>
        </div>
      ))}
      <button
        onClick={() => setEditing(true)}
        className="text-blue-600 underline mt-4 hover:text-blue-800"
      >
        Edit
      </button>

      {isEditing && (
        <Modal onClose={() => setEditing(false)}>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Edit Projects</h3>
            <div className="flex flex-col gap-4">
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Title of your project"
              />
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Duration of your project"
              />
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter the description of your project"
              />
            </div>
            <button
              onClick={handleSave}
              className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfileProjects;
