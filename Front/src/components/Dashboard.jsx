import React,{useState,useEffect} from "react";
import { Analytics } from "../services/jobs";
import DashboardVis from "./DashboardVis";


const Dashboard = () => {
  const [stats,setStats] = useState([
    { title: "Total Users", value:  0, icon: "👤", bgColor: "bg-blue-100", textColor: "text-blue-500" },
    { title: "Jobs Posted", value:  0, icon: "📄", bgColor: "bg-green-100", textColor: "text-green-500" },
    { title: "Pending Talents", value: 0, icon: "🌟", bgColor: "bg-yellow-100", textColor: "text-yellow-500" },
    {title : "Rejected Talents", value: 0, icon: "🌟", bgColor: "bg-red-100", textColor: "text-red-500"},
    {title : "Approved Talents", value: 0, icon: "🌟", bgColor: "bg-green-100", textColor: "text-green-500"},
  ])


  useEffect(() =>{
    const fetchAdminJobs = async () =>{
      // const token = localStorage.getItem('token')
      // setToken(token)
      const data = await Analytics()
        
      setStats(prevStat => 
          (prevStat.map(stat => {
            if (stat.title === 'Total Users')  return {...stat, value: data.totalStudents || 0} 
            if (stat.title === 'Jobs Posted')  return {...stat, value: data.totalJobs || 0} 
            if (stat.title === 'Pending Talents')  return {...stat, value: data.totalPending || 0}
            if (stat.title === 'Rejected Talents')  return {...stat, value: data.totalRejected || 0}
            if (stat.title === 'Approved Talents')  return {...stat, value: data.totalApproved || 0}
          })
      )
  )}

    fetchAdminJobs()
  },[])




  return (
    <section className="p-6 bg-gray-50 flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>

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

      {/* Recent Activities Section
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
      </div> */}
      <DashboardVis data={stats} />


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
