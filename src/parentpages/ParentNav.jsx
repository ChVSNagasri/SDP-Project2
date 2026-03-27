import React, { useState } from 'react'
import { Link, Routes, Route, useNavigate } from "react-router-dom"
import { Typography } from '@mui/material'

import Fee from './Fee'
import Hostle from './Hostle'
import ChildGrade from './ChildGrade'
import ChildAttendance from './ChildAttendance'
import ParentHome from './ParentHome'
import './parentnav.css'
import Notfound from '../Notfound'

export default function ParentNav() 
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
    <div className="container">
      
      <nav className="navs">
        <button><Link to="/navs">🏠Home</Link></button>
        <button><Link to="/navs/fee">💰Fee</Link></button>
        <button><Link to="/navs/attendance">📊Attendance</Link></button>
        <button><Link to="/navs/grade">🎓Children Grade</Link></button>
        <button><Link to="/navs/hostle">🏢Hostle</Link></button>
        <button onClick={handleLogout}>🔒Logout</button>
      </nav>

    
      {showMsg && (
        <div style={{
          width: "320px",
          margin: "20px auto",
          padding: "15px",
          backgroundColor: "#cad4fc",
          border: "2px solid #5b7cfa",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          animation: "fadeIn 0.5s ease-in-out"
        }}>
          <Typography variant="h6" style={{ color: "#092389", fontWeight: "bold" }}>
            Logged out successfully!
          </Typography>
        </div>
      )}

      <div className="main-content">
        <Routes>
          <Route index element={<ParentHome/>}/>
          <Route path="fee" element={<Fee/>}/>
          <Route path="attendance" element={<ChildAttendance/>}/>
          <Route path="hostle" element={<Hostle/>}/>
          <Route path="grade" element={<ChildGrade/>}/>
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