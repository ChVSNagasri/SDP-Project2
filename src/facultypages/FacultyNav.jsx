import React, { useState } from 'react'
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import { Typography } from '@mui/material'

import FacultyHome from './FacultyHome'
import FacultyTimetable from './FacultyTimetable'
import MarksAllotment from './MarksAllotment'
import AttendanceRegister from './AttendanceRegister'
import './facultynav.css'
import Notfound from '../Notfound'

export default function FacultyNav() 
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

      <nav className="navers">
        <button><Link to="/navers">🏠Home</Link></button>
        <button><Link to="/navers/facultytimetables">📅Timetable</Link></button>
        <button><Link to="/navers/marksallotments">📊Reward Marks</Link></button>
        <button><Link to="/navers/attendanceregisters">✅Register</Link></button>
        <button onClick={handleLogout}>🔒Logout</button>
      </nav>

      <div className="content">

        {showMsg && (
          <div style={{
            width: "320px",
            margin: "20px auto",
            padding: "15px",
            backgroundColor: "#b3eea5",
            border: "2px solid #36d924",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            animation: "fadeIn 0.5s ease-in-out"
          }}>
            <Typography variant="h6" style={{ color: "#3f6b51", fontWeight: "bold" }}>
              You have been logged out!
            </Typography>
          </div>
        )}

        <Routes>
          <Route index element={<FacultyHome/>}/>
          <Route path="facultytimetables" element={<FacultyTimetable/>}/>
          <Route path="marksallotments" element={<MarksAllotment/>}/>
          <Route path="attendanceregisters" element={<AttendanceRegister/>}/>
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