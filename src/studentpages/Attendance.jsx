import React, { useState } from "react";
import "./attendance.css";

export default function Attendance() {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [showAttendance, setShowAttendance] = useState(false);

  const handleSearch = () => {
    if (!year || !semester) {
      alert("Please select both Academic Year and Semester");
      return;
    }
    setShowAttendance(true);
  };

  return (
    <div className="attendance-container">

      {!showAttendance && (
        <div className="form-box">

          <h1>Attendance Register</h1>
          <hr />

          <h5>Enter Academic Year</h5>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select your Academic Year</option>
            <option value="2025-2026">2025-2026</option>
            <option value="2024-2025">2024-2025</option>
            <option value="2023-2024">2023-2024</option>
          </select>

          <h5>Enter Registered Sem</h5>
          <select value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option value="">Reg Sem</option>
            <option value="Odd">Odd</option>
            <option value="Even">Even</option>
            <option value="Summer">Summer</option>
          </select>

          <br /><br />
          <button onClick={handleSearch}>Search</button>

        </div>
      )}

      {showAttendance && (
        <>
          <h2 style={{color:'#5b7cfa'}}>
            Attendance for {year} - {semester} Semester
          </h2>

          <div className="table-wrapper">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Component</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>25SC1204E</td>
                  <td>Data Structure and Algorithms</td>
                  <td>Lab</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>25SC1204E</td>
                  <td>Data Structure and Algorithms</td>
                  <td>Skill</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>25SC1204E</td>
                  <td>Data Structure and Algorithms</td>
                  <td>Practical</td>
                  <td>90%</td>
                </tr>
                <tr>
                  <td>25SC1204E</td>
                  <td>Data Structure and Algorithms</td>
                  <td>Lecture</td>
                  <td>95%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr />

          <h2 style={{color:'#5b7cfa'}}>CodeChef Classes</h2>

          <div className="table-wrapper">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>3-1-2026</td><td>Present</td></tr>
                <tr><td>4-1-2026</td><td>Present</td></tr>
                <tr><td>11-1-2026</td><td>Present</td></tr>
                <tr><td>12-2-2026</td><td>Present</td></tr>
                <tr><td>28-1-2026</td><td style={{color:"red"}}>Absent</td></tr>
              </tbody>
            </table>
          </div>

          <br />
          <button onClick={() => setShowAttendance(false)}>Back</button>
        </>
      )}

    </div>
  );
}