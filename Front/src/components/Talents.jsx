import React, { useState, useEffect } from "react";

const Talents = () => {
  const [talents, setTalents] = useState([]);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  
  useEffect(() => {
   
    const fetchTalents = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8000/admin/talents", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTalents(data);
        
    };

    fetchTalents();
  }, []);



  const handleViewProfile = (talent) => {
    setSelectedTalent(talent);
  };

  const handleApproveTalent = (id) => {
    setTalents((prev) =>
      prev.map((talent) =>
        talent.id === id ? { ...talent, status: "Approved" } : talent
      )
    );
    setSelectedTalent(null);
  };

  const handleRejectTalent = (id) => {
    setTalents((prev) =>
      prev.map((talent) =>
        talent.id === id ? { ...talent, status: "Rejected" } : talent
      )
    );
    setSelectedTalent(null);
  };



  const filteredTalents = talents.filter(
    (talent) =>
      talent.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter ? talent.status === filter : true)
  );

  console.log(filteredTalents)  
  return (
    <section className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">Talent Management</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 flex-1 focus:ring-2 focus:ring-green-400"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
        >
          <option value="">All Statuses</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Talent List */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredTalents?.map((talent) => (

          <div
            key={talent.id}
            className="border border-gray-200 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <h2 className="text-lg font-bold mb-2">{talent.name}</h2>
            <p className="text-gray-500 mb-2">{talent.location}</p>
            <p className="text-sm font-medium text-gray-600 mb-2">
              Skills: {talent?.skills?.join(", ")}
            </p>
            <p
              className={`text-sm font-medium ${
                talent.status === "Approved"
                  ? "text-green-600"
                  : talent.status === "Rejected"
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}
            >
              Status: {talent.status}
            </p>
            <button
              onClick={() => handleViewProfile(talent)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Profile Modal */}
      {selectedTalent && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-3/4 max-w-2xl p-6">
            <h2 className="text-xl font-bold mb-4">
              {selectedTalent.name}'s Profile
            </h2>
            <p className="text-sm font-medium mb-2">
              <strong>Location:</strong> {selectedTalent.location}
            </p>
            <p className="text-sm font-medium mb-2">
              <strong>Skills:</strong> {selectedTalent.skills.join(", ")}
            </p>
            <p className="text-sm font-medium mb-4">
              <strong>Status:</strong> {selectedTalent.status}
            </p>
            <a
              href={selectedTalent.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mb-4 block"
            >
              View Resume
            </a>
            <div className="flex gap-4">
              <button
                onClick={() => handleApproveTalent(selectedTalent.id)}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                Approve
              </button>
              <button
                onClick={() => handleRejectTalent(selectedTalent.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Reject
              </button>
              <button
                onClick={() => setSelectedTalent(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Talents;
