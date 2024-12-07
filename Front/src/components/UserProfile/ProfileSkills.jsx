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
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-500 rounded-lg"
          >
            {skill}
          </span>
        ))}

        <button
            onClick={() => setEditing(true)}
              className="text-blue-500 underline mt-2"
            >
              Edit
        </button>
      </div>
      
      {isEditing && (
        <Modal onClose={() => setEditing(false)}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a new skill"
                className="flex-1 border rounded-lg p-2"
              />
              <button
                onClick={handleAddSkill}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg"
                >
                  {skill}
                </span>
              ))}
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

export default ProfileSkills;
