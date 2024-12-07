import React, { useState } from "react";
// import Modal from "../UI/Modal";
import Modal from "../UI/Modal";
const ProfileProjects = ({ projects, setUser }) => {
  const [isEditing, setEditing] = useState(false);
  const [projectList, setProjectList] = useState(projects);

  const handleSave = () => {
    setUser((prev) => ({ ...prev, projects: projectList }));
    setEditing(false);
  };

  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="p-4 border rounded-lg shadow mb-4">
          <h3 className="text-lg font-bold">{project.nameofProject}</h3>
          <p>{project.durationofProject}</p>
          <p>{project.summary}</p>
        </div>
      ))}
      <button
        onClick={() => setEditing(true)}
        className="text-blue-500 underline mt-2"
      >
        Edit
      </button>
      {isEditing && (
        <Modal onClose={() => setEditing(false)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <input className="outline-green-300 border-green-500 p-2" type="text" placeholder="Title of your project" />
              <input className="outline-green-300 border-green-500 p-2" type="text" placeholder="Title of your project" />
              <input className="outline-green-300 border-green-500 p-2" type="text" placeholder="Enter the description of your project" />
            </div>
            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
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
