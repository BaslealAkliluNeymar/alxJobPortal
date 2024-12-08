import React, { useState } from "react";
import Modal from "../UI/Modal";

const ProfileSkills = ({ skills, setUser }) => {
  const [isEditing, setEditing] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [skillList, setSkillList] = useState(skills);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkillList((prev) => [...prev, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleSave = () => {
    setUser((prev) => ({ ...prev, skills: skillList }));
    setEditing(false);
  };

  return (
    <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="font-bold text-2xl mb-6 text-gray-800">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold shadow-md"
          >
            {skill}
          </span>
        ))}
        <button
          onClick={() => setEditing(true)}
          className="text-blue-600 underline text-sm font-medium hover:text-blue-800 transition"
        >
          Edit
        </button>
      </div>

      {isEditing && (
        <Modal onClose={() => setEditing(false)}>
          <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-lg shadow">
            <div className="flex gap-3 items-center">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a new skill"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleAddSkill}
                className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {skillList.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={handleSave}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Save
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfileSkills;
