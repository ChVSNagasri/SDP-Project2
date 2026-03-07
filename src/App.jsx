import Login from "./login/Login"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import StudentNav from "./studentpages/StudentNav"
import ParentNav from "./parentpages/ParentNav"
import AdminNav from "./adminpages/AdminNav"
import FacultyNav from "./facultypages/FacultyNav"
import Awarders from "./adminpages/Awarders"
function App() {
 

  return (
    <div>
   
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/nav/*" element={<StudentNav/>} />
        <Route path="/navs/*" element={<ParentNav/>}/>
        <Route path="/naver/*" element={<AdminNav/>}/>
        <Route path="/navers/*" element={<FacultyNav/>}/>
        <Route path="award" element={<Awarders/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
