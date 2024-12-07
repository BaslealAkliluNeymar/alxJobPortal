import React, { useState } from "react";
// import {
//     ProfileHeader,
//     ProfileProjects,
//     ProfileSkills,
//     ProfileSummary,
//     ProfileWorkHistory,
//     ProfileEducation
// } from '../components/UserProfile/index.js'

import ProfileEducation from "../components/UserProfile/ProfileEducation.jsx";
import ProfileHeader from "../components/UserProfile/ProfileHeader.jsx";
import ProfileSummary from "../components/UserProfile/ProfileSummary.jsx";
import ProfileSkills from "../components/UserProfile/ProfileSkills.jsx";
import ProfileWorkHistory from "../components/UserProfile/ProfileWorkHistory.jsx";
import ProfileProjects from "../components/UserProfile/ProfileProjects.jsx";
const ProProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    position: "Software Engineer",
    location: "Ethiopia",
    summary: "Passionate developer specializing in full-stack applications.",
    skills: ["React", "Node.js", "MongoDB"],
    workHistory: [
      {
        position: "Frontend Developer",
        placeofWork: "Tech Corp",
        duration: "2022-2023",
        summary: "Developed dynamic UI components.",
        technologies: ["React", "CSS"],
      },
    ],
    projects: [
      {
        id: 1,
        nameofProject: "Weather App",
        durationofProject: "3 months",
        summary: "Built a weather app using OpenWeather API.",
        technologies: ["React", "API Integration"],
      },
    ],
    education: [
      {
        nameofDegree: "BSc in Electrical and Computer Engineering",
        placeofEducation: "XYZ University",
        duration: "2016-2021",
      },
    ],
  });

  return (
    <section className="container mx-auto py-8">
      <ProfileHeader user={user} setUser={setUser} />
      <ProfileSummary summary={user.summary} setUser={setUser} />
      <ProfileSkills skills={user.skills} setUser={setUser} />
      <ProfileWorkHistory workHistory={user.workHistory} setUser={setUser} />
      <ProfileProjects projects={user.projects} setUser={setUser} />
      <ProfileEducation education={user.education} setUser={setUser} />
    </section>
  );
};

export default ProProfile;
