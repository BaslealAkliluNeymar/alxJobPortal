import React, { useState } from "react";
import Modal from "../UI/Modal";

const ProfileSummary = ({ summary, setUser }) => {
  const [isEditing, setEditing] = useState(false);
  const [newSummary, setNewSummary] = useState(summary);

  const handleSave = () => {
    setUser((prev) => ({ ...prev, summary: newSummary }));
    setEditing(false);
  };
  console.log(summary)

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg">
      {/* Section Header */}
      <h2 className="font-bold text-2xl text-gray-800 mb-4">Summary</h2>

      {/* Summary Content */}
      <p className="text-gray-700 leading-relaxed">
        {summary || "No summary provided yet. Click edit to add one."}
      </p>

      {/* Edit Button */}
      <button
        onClick={() => setEditing(true)}
        className="mt-4 px-5 py-2 text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-md shadow-md transition"
      >
        Edit Summary
      </button>

      {/* Modal for Editing Summary */}
      {isEditing && (
        <Modal onClose={() => setEditing(false)}>
          <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Edit Summary</h3>
            <textarea
              value={newSummary}
              onChange={(e) => setNewSummary(e.target.value)}
              rows={6}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 resize-none outline-none"
              placeholder="Write a brief summary about yourself..."
            />
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md shadow-sm transition"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfileSummary;
