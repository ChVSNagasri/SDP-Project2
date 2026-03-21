import React, { useState } from 'react'
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import { Typography } from '@mui/material'   // ✅ MUI added

import FacultyHome from './FacultyHome'
import FacultyTimetable from './FacultyTimetable'
import MarksAllotment from './MarksAllotment'
import AttendanceRegister from './AttendanceRegister'
import './facultynav.css'
import Notfound from '../Notfound'

export default function FacultyNav() 
{
  const navigate = useNavigate()
  const [showMsg, setShowMsg] = useState(false)   // ✅ state added

  const handleLogout = () => {
    setShowMsg(true)   // show Typography

    setTimeout(() => {
      navigate("/")
    }, 1500)
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
          <Typography variant="h6" color="error" style={{ marginBottom: '10px' }}>
            You have been logged out successfully!
          </Typography>
        )}

        <Routes>
          <Route index element={<FacultyHome/>}/>
          <Route path="facultytimetables" element={<FacultyTimetable/>}/>
          <Route path="marksallotments" element={<MarksAllotment/>}/>
          <Route path="attendanceregisters" element={<AttendanceRegister/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>

      </div>
    </div>
  )
}