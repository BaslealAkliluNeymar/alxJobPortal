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
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Work History</h2>
      {workHistory.map((work, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg shadow">
          <h3 className="text-lg font-bold">{work.position}</h3>
          <p>{work.placeofWork}</p>
          <p>{work.duration}</p>
          <p>{work.summary}</p>
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
            {history.map((entry, index) => (
              <div key={index} className="border-b pb-4 mb-4">
                <input
                  type="text"
                  placeholder="Position"
                  value={entry.position}
                  onChange={(e) => updateEntry(index, "position", e.target.value)}
                  className="w-full border rounded-lg p-2 mb-2"
                />
                <input
                  type="text"
                  placeholder="Place of Work"
                  value={entry.placeofWork}
                  onChange={(e) => updateEntry(index, "placeofWork", e.target.value)}
                  className="w-full border rounded-lg p-2 mb-2"
                />
                <input
                  type="text"
                  placeholder="Duration"
                  value={entry.duration}
                  onChange={(e) => updateEntry(index, "duration", e.target.value)}
                  className="w-full border rounded-lg p-2 mb-2"
                />
                <textarea
                  placeholder="Summary"
                  value={entry.summary}
                  onChange={(e) => updateEntry(index, "summary", e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
              </div>
            ))}
            <button
              onClick={addNewEntry}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Add Entry
            </button>
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

export default ProfileWorkHistory;
