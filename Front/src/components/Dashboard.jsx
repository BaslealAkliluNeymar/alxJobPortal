import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Total Users", value: 1200, icon: "👤", bgColor: "bg-blue-100", textColor: "text-blue-500" },
    { title: "Jobs Posted", value: 450, icon: "📄", bgColor: "bg-green-100", textColor: "text-green-500" },
    { title: "Pending Talents", value: 34, icon: "🌟", bgColor: "bg-yellow-100", textColor: "text-yellow-500" },
    { title: "Messages", value: 124, icon: "✉️", bgColor: "bg-purple-100", textColor: "text-purple-500" },
  ];

  const recentActivities = [
    { user: "John Doe", action: "Applied for Software Engineer role", time: "2 hours ago" },
    { user: "Jane Smith", action: "Uploaded resume", time: "4 hours ago" },
    { user: "Company ABC", action: "Posted a new job: Data Scientist", time: "1 day ago" },
    { user: "John Doe", action: "Updated profile details", time: "2 days ago" },
  ];

  return (
    <section className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Statistics Section */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md flex items-center ${stat.bgColor}`}
          >
            <span
              className={`text-3xl font-bold p-4 rounded-full mr-4 ${stat.textColor}`}
            >
              {stat.icon}
            </span>
            <div>
              <h2 className="text-lg font-semibold">{stat.title}</h2>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <ul className="divide-y divide-gray-200">
          {recentActivities.map((activity, index) => (
            <li key={index} className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-md font-semibold">{activity.user}</h3>
                <p className="text-sm text-gray-500">{activity.action}</p>
              </div>
              <p className="text-sm text-gray-400">{activity.time}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions Section */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
          Manage Users
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg">
          View Jobs
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-lg">
          Review Talents
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
