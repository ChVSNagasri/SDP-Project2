import React, { useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'

import AdminHome from './AdminHome'
import AddFaculty from './AddFaculty'
import AddStudent from './AddStudent'
import ManageEvents from './ManageEvents'
import './adminnav.css'
import Notfound from '../Notfound'

export default function AdminNav() 
{
  const navigate = useNavigate()
  const [showMsg, setShowMsg] = useState(false)   

  const handleAPI = () => {
    navigate('/naver/manageevents');
  };

  const handleLogout = () => {
    setShowMsg(true)

    setTimeout(() => {
      navigate("/")
    }, 3000)   
  };

  return (
    <div className="nav-container">

      {showMsg && (
        <div style={{
          position: "fixed",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "320px",
          padding: "15px",
          backgroundColor: "#e6ffe6",
          border: "2px solid #33cc33",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          zIndex: 1000,
          animation: "fadeIn 0.5s ease-in-out"
        }}>
          <Typography variant="h6" style={{ color: "#006600", fontWeight: "bold" }}>
            Logged out successfully!
          </Typography>
        </div>
      )}

      <nav className="naver">
        <button><Link to="/naver">🏠Home</Link></button>
        <button><Link to="/naver/addstudents">🎓Add Student's</Link></button>
        <button><Link to="/naver/addfaculty">👩‍🏫Add Faculty's</Link></button>
        <button onClick={handleAPI}>📅Events</button>
        <button onClick={handleLogout}>🔒Logout</button>
      </nav>

      <Routes>
        <Route index element={<AdminHome/>}/>
        <Route path="addstudents" element={<AddStudent/>}/>
        <Route path="addfaculty" element={<AddFaculty/>}/>
        <Route path="manageevents" element={<ManageEvents/>}/>         
        <Route path="*" element={<Notfound/>}/>
      </Routes>

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