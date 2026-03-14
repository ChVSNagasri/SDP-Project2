import {Routes,Route,Link, useNavigate} from 'react-router-dom'
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

  const navigate=useNavigate()
  return (
    <div className="main-container">

      <nav className="nav">
        <button><Link to="/nav">🏠Home</Link></button>
        <button><Link to="/nav/profile">👤Profile</Link></button>
        <button><Link to="/nav/hostle">🏨Hostel</Link></button>
        <button><Link to="/nav/attendance">✅Attendance</Link></button>
        <button><Link to="/nav/course">📚Courses</Link></button>
        <button><Link to="/nav/assignment">📝Assignment</Link></button>
        <button><Link to="/nav/cgpa">🎓CGPA</Link></button>
        <button><Link to="/nav/timetable">📅Timetable</Link></button>
        <button onClick={()=>navigate("/")}>🔒Logout</button>
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

    </div>
  )
}