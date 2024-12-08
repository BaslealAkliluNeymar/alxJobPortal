import React, { useState } from "react";
import Modal from "../UI/Modal";

const ProfileWorkHistory = ({ workHistory, setUser }) => {
  const [isEditing, setEditing] = useState(false);
  const [history, setHistory] = useState(workHistory);

  const handleSave = () => {
    setUser((prev) => ({ ...prev, workHistory: history }));
    setEditing(false);
  };

  const addNewEntry = () => {
    setHistory((prev) => [
      ...prev,
      { position: "", placeofWork: "", duration: "", summary: "", technologies: [] },
    ]);
  };

  const updateEntry = (index, field, value) => {
    const updatedHistory = [...history];
    updatedHistory[index][field] = value;
    setHistory(updatedHistory);
  };

  return (
    <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="font-bold text-2xl mb-6 text-gray-800">Work History</h2>
      {workHistory.map((work, index) => (
        <div
          key={index}
          className="mb-4 p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-bold text-gray-700">{work.position}</h3>
          <p className="text-sm text-gray-600">{work.placeofWork}</p>
          <p className="text-sm text-gray-500 italic">{work.duration}</p>
          <p className="text-sm text-gray-700 mt-2">{work.summary}</p>
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
            <h3 className="text-lg font-bold mb-4 text-gray-800">Edit Work History</h3>
            {history.map((entry, index) => (
              <div
                key={index}
                className="border-b pb-4 mb-6 bg-white shadow-sm p-4 rounded-lg"
              >
                <input
                  type="text"
                  placeholder="Position"
                  value={entry.position}
                  onChange={(e) => updateEntry(index, "position", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Place of Work"
                  value={entry.placeofWork}
                  onChange={(e) => updateEntry(index, "placeofWork", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Duration"
                  value={entry.duration}
                  onChange={(e) => updateEntry(index, "duration", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  placeholder="Summary"
                  value={entry.summary}
                  onChange={(e) => updateEntry(index, "summary", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
            <button
              onClick={addNewEntry}
              className="w-full mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add New Entry
            </button>
            <button
              onClick={handleSave}
              className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfileWorkHistory;
