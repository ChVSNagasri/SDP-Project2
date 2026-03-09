import React from 'react'
import { Link, Routes, Route, useNavigate } from "react-router-dom"
import Fee from './Fee'
import Hostle from './Hostle'
import ChildGrade from './ChildGrade'
import ChildAttendance from './ChildAttendance'
import ParentHome from './ParentHome'
import './parentnav.css'
import Notfound from '../Notfound'
export default function ParentNav() 
{
    const navigate=useNavigate()
  return (
    <div className="container">
      
      <nav className="navs">
        <button><Link to="/navs">🏠Home</Link></button>
        <button><Link to="/navs/fee">💰Fee</Link></button>
        <button><Link to="/navs/attendance">📊Attendance</Link></button>
        <button><Link to="/navs/grade">🎓Children Grade</Link></button>
        <button><Link to="/navs/hostle">🏢Hostle</Link></button>
        <button onClick={()=>navigate("/")}>🔒Logout</button>
      </nav>

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

    </div>
  )
}