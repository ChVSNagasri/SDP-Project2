import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Typography } from '@mui/material'

import Home from './Home'
import Profile from './Profile'
import HostelManagement from './HostelManagement'
import Attendance from './Attendance'
import Courses from './Courses'
import Assignments from './Assignments'
import Cgpa from './Cgpa'
import Timetable from './Timetable'
import './studentnav.css'
import Notfound from '../Notfound'

export default function StudentNav() 
{
  const navigate = useNavigate()
  const [showMsg, setShowMsg] = useState(false)   

  const handleLogout = () => {
    setShowMsg(true)

    setTimeout(() => {
      navigate("/")
    }, 3000) 
  }

  return (
    <div className="main-container">

      {showMsg && (
        <div style={{
          position: "fixed",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "320px",
          padding: "15px",
          backgroundColor: "#cad4fc",
          border: "2px solid #5b7cfa",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          zIndex: 1000,
          animation: "fadeIn 0.5s ease-in-out"
        }}>
          <Typography variant="h6" style={{ color: "#092389", fontWeight: "bold" }}>
            Logged out successfully!
          </Typography>
        </div>
      )}

   
      <nav className="nav">
        <button><Link to="/nav">🏠Home</Link></button>
        <button><Link to="/nav/profile">👤Profile</Link></button>
        <button><Link to="/nav/hostle">🏨Hostel</Link></button>
        <button><Link to="/nav/attendance">✅Attendance</Link></button>
        <button><Link to="/nav/course">📚Courses</Link></button>
        <button><Link to="/nav/assignment">📝Assignment</Link></button>
        <button><Link to="/nav/cgpa">🎓CGPA</Link></button>
        <button><Link to="/nav/timetable">📅Timetable</Link></button>
        <button onClick={handleLogout}>🔒Logout</button>
      </nav>

      <div className="content">
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="attendance" element={<Attendance/>}/>
          <Route path="assignment" element={<Assignments/>}/>
          <Route path="course" element={<Courses/>}/>
          <Route path="hostle" element={<HostelManagement/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="cgpa" element={<Cgpa/>}/>
          <Route path="timetable" element={<Timetable/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  )
}