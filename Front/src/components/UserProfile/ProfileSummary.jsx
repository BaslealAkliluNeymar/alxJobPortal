import React, { useState } from "react";
import Modal from "../UI/Modal";

const ProfileSummary = ({ summary, setUser }) => {
  const [isEditing, setEditing] = useState(false);
  const [newSummary, setNewSummary] = useState(summary);

  const handleSave = () => {
    setUser((prev) => ({ ...prev, summary: newSummary }));
    setEditing(false);
  };

  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Summary</h2>
      <p>{summary}</p>
      <button
        onClick={() => setEditing(true)}
        className="text-blue-500 underline mt-2"
      >
        Edit
      </button>
      {isEditing && (
        <Modal onClose={() => setEditing(false)}>
          <textarea
            value={newSummary}
            onChange={(e) => setNewSummary(e.target.value)}
            className="w-full border rounded-lg p-2"
          />
          <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Save
          </button>
        </Modal>
      )}
    </div>
  );
};

export default ProfileSummary;
