import React, { useState } from "react";
import Modal from "../UI/Modal";

const ProfileWorkHistory = ({ workHistory, setUser }) => {
  const [isEditing, setEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);

  const handleEdit = (index) => {
    setCurrentEntry(workHistory[index]);
    setEditing(true);
  };

  const handleAdd = () => {
    setCurrentEntry(null);
    setEditing(true);
  };

  const handleSave = (entry) => {
    const updatedWorkHistory = currentEntry
      ? workHistory.map((item, i) =>
          i === workHistory.indexOf(currentEntry) ? entry : item
        )
      : [...workHistory, entry];
    setUser((prev) => ({ ...prev, workHistory: updatedWorkHistory }));
    setEditing(false);
  };

  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Work History</h2>
      <button
        onClick={handleAdd}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add Work Entry
      </button>
      <div className="space-y-4">
        {workHistory.map((entry, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-start"
          >
            <div>
              <h3 className="font-bold">{entry.position}</h3>
              <p>{entry.placeofWork}</p>
              <p>
                {new Date(entry.dateFrom).toLocaleDateString()} -{" "}
                {entry.dateTo
                  ? new Date(entry.dateTo).toLocaleDateString()
                  : "Present"}
              </p>
              <p>{entry.summary}</p>
              <div className="flex gap-2 mt-2">
                {entry.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleEdit(index)}
              className="text-blue-500 underline"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      {isEditing && (
        <Modal onClose={() => setEditing(false)}>
          <WorkHistoryForm
            initialData={currentEntry}
            onSave={handleSave}
            onCancel={() => setEditing(false)}
          />
        </Modal>
      )}
    </div>
  );
};

const WorkHistoryForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    initialData || {
      position: "",
      years: "",
      placeofWork: "",
      dateFrom: "",
      dateTo: "",
      summary: "",
      technologies: [],
    }
  );
  const [techInput, setTechInput] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddTechnology = () => {
    setFormData((prev) => ({
      ...prev,
      technologies: [...prev.technologies, techInput],
    }));
    setTechInput("");
  };

  const handleRemoveTechnology = (tech) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Edit Work Entry</h2>
      <input
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        name="placeofWork"
        placeholder="Place of Work"
        value={formData.placeofWork}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        name="years"
        type="number"
        placeholder="Years"
        value={formData.years}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        name="summary"
        placeholder="Summary"
        value={formData.summary}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      ></textarea>
      <input
        name="dateFrom"
        type="date"
        value={formData.dateFrom}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        name="dateTo"
        type="date"
        value={formData.dateTo}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <div className="flex items-center gap-2 mb-2">
        <input
          placeholder="Technology"
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddTechnology}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {formData.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-gray-200 rounded-full text-sm flex items-center gap-2"
          >
            {tech}
            <button
              onClick={() => handleRemoveTechnology(tech)}
              className="text-red-500"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
          Cancel
        </button>
        <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileWorkHistory;
