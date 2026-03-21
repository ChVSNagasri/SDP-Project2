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
    }, 5000)
  };

  return (
    <div className="nav-container">

      <nav className="naver">
        <button><Link to="/naver">🏠Home</Link></button>
        <button><Link to="/naver/addstudents">🎓Add Student's</Link></button>
        <button><Link to="/naver/addfaculty">👩‍🏫Add Faculty's</Link></button>
        <button onClick={handleAPI}>📅Events</button>
        <button onClick={handleLogout}>🔒Logout</button>
      </nav>

      {showMsg && (
        <div style={{
          width: "320px",
          margin: "20px auto",
          padding: "15px",
          backgroundColor: "#e6f7ff",
          border: "2px solid #1890ff",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          animation: "fadeIn 0.5s ease-in-out"
        }}>
          <Typography variant="h6" style={{ color: "#0050b3", fontWeight: "bold" }}>
            Admin logged out successfully!
          </Typography>
        </div>
      )}

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