import React, { useState } from "react";
import Modal from "../UI/Modal";

const ProfileProjects = ({ projects = [], setUser }) => {
  const [isEditing, setEditing] = useState(false);
  const [projectList, setProjectList] = useState(projects);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);

  const handleAddProject = () => {
    setProjectList([
      ...projectList,
      {
        nameofProject: "",
        durationofProject: "",
        summary: "",
        dateFrom: "",
        dateTo: "",
        technologies: [],
      },
    ]);
  };

  const handleRemoveProject = (index) => {
    setProjectList(projectList.filter((_, i) => i !== index));
  };

  const handleChangeProject = (index, field, value) => {
    setProjectList((prev) =>
      prev.map((project, i) =>
        i === index ? { ...project, [field]: value } : project
      )
    );
  };

  const handleAddTechnology = (index, technology) => {
    setProjectList((prev) =>
      prev.map((project, i) =>
        i === index
          ? { ...project, technologies: [...project.technologies, technology] }
          : project
      )
    );
  };

  const handleRemoveTechnology = (index, techIndex) => {
    setProjectList((prev) =>
      prev.map((project, i) =>
        i === index
          ? {
              ...project,
              technologies: project.technologies.filter((_, j) => j !== techIndex),
            }
          : project
      )
    );
  };

  const handleSave = () => {
    setUser((prev) => ({ ...prev, projects: projectList }));
    setEditing(false);
  };

  return (
    <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="font-bold text-2xl mb-6 text-gray-800">Projects</h2>

      {projectList.map((project, index) => (
        <div
          key={index}
          className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4"
        >
          <h3 className="text-lg font-bold text-gray-700">{project.nameofProject || "Untitled Project"}</h3>
          <p className="text-sm text-gray-600 italic">{project.durationofProject}</p>
          <p className="text-sm text-gray-700 mt-2">{project.summary}</p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Technologies:</strong>{" "}
            {project.technologies.length > 0
              ? project.technologies.join(", ")
              : "None"}
          </p>
          <button
            onClick={() => {
              setEditing(true);
              setCurrentProjectIndex(index);
            }}
            className="text-blue-600 underline mt-4 hover:text-blue-800"
          >
            Edit
          </button>
          <button
            onClick={() => handleRemoveProject(index)}
            className="text-red-600 underline mt-4 hover:text-red-800 ml-4"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={handleAddProject}
        className="text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
      >
        Add Project
      </button>

      {isEditing && (
        <Modal onClose={() => setEditing(false)}>
          {currentProjectIndex !== null && (
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-gray-800">
                Edit Project
              </h3>
              <div className="flex flex-col gap-4">
                <input
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="text"
                  placeholder="Project Title"
                  value={projectList[currentProjectIndex].nameofProject}
                  onChange={(e) =>
                    handleChangeProject(currentProjectIndex, "nameofProject", e.target.value)
                  }
                />
                <input
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="number"
                  placeholder="Project Duration"
                  value={projectList[currentProjectIndex].durationofProject}
                  onChange={(e) =>
                    handleChangeProject(currentProjectIndex, "durationofProject", Number(e.target.value))
                  }
                />
                <input
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="date"
                  placeholder="Date From"
                  value={projectList[currentProjectIndex].dateFrom}
                  onChange={(e) =>
                    handleChangeProject(currentProjectIndex, "dateFrom", e.target.value)
                  }
                />
                <input
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="date"
                  placeholder="Date To"
                  value={projectList[currentProjectIndex].dateTo}
                  onChange={(e) =>
                    handleChangeProject(currentProjectIndex, "dateTo", e.target.value)
                  }
                />
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Project Summary"
                  value={projectList[currentProjectIndex].summary}
                  onChange={(e) =>
                    handleChangeProject(currentProjectIndex, "summary", e.target.value)
                  }
                />
                <div>
                  <h4 className="font-bold text-gray-700">Technologies</h4>
                  {projectList[currentProjectIndex].technologies.map(
                    (tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-2 mt-2">
                        <span className="text-gray-800">{tech}</span>
                        <button
                          onClick={() => handleRemoveTechnology(currentProjectIndex, techIndex)}
                          className="text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    )
                  )}
                  <div className="flex gap-2 mt-4">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2"
                      placeholder="Add Technology"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTechnology(currentProjectIndex, e.target.value);
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={handleSave}
                className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save Changes
              </button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default ProfileProjects;
