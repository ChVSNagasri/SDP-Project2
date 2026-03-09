import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import AdminHome from './AdminHome'
import AddFaculty from './AddFaculty'
import AddStudent from './AddStudent'
import ManageEvents from './ManageEvents'
import './adminnav.css'
import Notfound from '../Notfound'
export default function AdminNav() 
{
    const navigate = useNavigate()

  return (
    <div className="nav-container">

        <nav className="naver">
              <button><Link to="/naver">🏠Home</Link></button>
              <button><Link to="/naver/addstudents">🎓Add Student's</Link></button>
              <button><Link to="/naver/addfaculty">👩‍🏫Add Faculty's</Link></button>
              <button><Link to="/naver/manageevents">📅Events</Link></button>
              <button onClick={() => navigate("/")}>🔒Logout</button>
        </nav>

        <Routes>
            <Route index element={<AdminHome/>}/>
            <Route path="addstudents" element={<AddStudent/>}/>
            <Route path="addfaculty" element={<AddFaculty/>}/>
            <Route path="manageevents" element={<ManageEvents/>}/>          
             <Route path="*" element={<Notfound/>}/>
        </Routes>

    </div>
  )
}