import React, { useState } from 'react';
import './timetable.css';

export default function Timetable() {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleSearch = () => {
    if (!year || !semester) {
      alert("Please select both Academic Year and Semester");
      return;
    }
    setShowTable(true);
  };
  return (
    <div>
      {!showTable && (
  <div className="timetable-container">

    <div className="form-box">

      <h1>Student Timetable</h1>
      <hr />

      <h5>Enter Academic Year</h5>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Select your Academic year</option>
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

      <br />
      <button id="time" onClick={handleSearch}>Search</button>

    </div>

  </div>
)}
      
      {showTable && (
        <>
          <h1>Academic Timetable for {year} - {semester}</h1>
          <hr />
          <div className="table-wrapper">
            <table border={10} bgcolor="pink">
              <tr>
                <th>WEEKDAY</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
              </tr>
              <tr>
                <td>Monday</td>
                <td>25MT1205E 
                    <pre></pre>
                    L-S-1-<pre></pre>
                    Room No:C008
                 </td>
                <td>25MT1205E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                  </td>
                <td>25SC1204E
                      <pre></pre>
                      P-S-1-<pre></pre>
                    Room No:C008
                   </td>
                <td>25SC1204E
                          <pre></pre>
                          P-S-1-<pre></pre>
                    Room No:C008
                    </td>
                <td>25CS1204E
                          <pre></pre>
                          S-S-1-<pre></pre>
                    Room No:C008
                     </td>
                <td>25CS1204E
                          <pre></pre>
                          S-S-1-<pre></pre>
                    Room No:C008
                      </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                 </td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                  </td>
                <td>25SC1204E
                      <pre></pre>
                      P-S-1-<pre></pre>
                    Room No:C008
                   </td>
                <td>25SC1204E
                          <pre></pre>
                          P-S-1-<pre></pre>
                    Room No:C008
                    </td>
                <td>25CS1204E
                          <pre></pre>
                          S-S-1-<pre></pre>
                    Room No:C008
                     </td>
                <td>25CS1204E
                          <pre></pre>
                          S-S-1-<pre></pre>
                    Room No:C008
                      </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                 </td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                  </td>
                <td>25SC1204E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                   </td>
                <td>25SC1204E
                          <pre></pre>
                          L-S-1-<pre></pre>
                    Room No:C008
                    </td>
                <td>25CS1204E
                          <pre></pre>
                          S-S-1-<pre></pre>
                    Room No:C008
                     </td>
                <td>25CS1204E
                          <pre></pre>
                          S-S-1-<pre></pre>
                    Room No:C008
                      </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                 </td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                  </td>
                <td>25SC1204E
                      <pre></pre>
                      P-S-1-<pre></pre>
                    Room No:C008
                   </td>
                <td>25SC1204E
                          <pre></pre>
                          P-S-1-<pre></pre>
                    Room No:C008
                    </td>
                <td>25CS1204E
                          <pre></pre>
                          P-S-1-<pre></pre>
                    Room No:C008
                     </td>
                <td>25CS1204E
                          <pre></pre>
                          P-S-1-<pre></pre>
                    Room No:C008
                      </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                 </td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1<pre></pre>
                    Room No:C008
                  </td>
                <td>25SC1204E
                      <pre></pre>
                      S-S-1-<pre></pre>
                    Room No:C008
                   </td>
                <td>25SC1204E
                          <pre></pre>
                          S-S-1-<pre></pre>
                    Room No:C008
                    </td>
                <td>25CS1204E
                          <pre></pre>
                          P-S-1-<pre></pre>
                    Room No:C008
                     </td>
                <td>25CS1204E
                          <pre></pre>
                          P-S-1-<pre></pre>
                    Room No:C008
                      </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                 </td>
                <td>25EC2101E
                      <pre></pre>
                      L-S-1-<pre></pre>
                    Room No:C008
                  </td>
                <td>25SC1204E
                      <pre></pre>
                      S-S-1-<pre></pre>
                    Room No:C008
                   </td>
                <td>25SC1204E
                          <pre></pre>
                          S-S-1-<pre></pre>
                    Room No:C008
                    </td>
                <td>25CS1204E
                          <pre></pre>
                          P-S-1-<pre></pre>
                    Room No:C008
                     </td>
                <td>25CS1204E
                          <pre></pre>
                          P-S-1-<pre></pre>
                    Room No:C008
                      </td>
                <td>-</td>
                <td>-</td>
              </tr>
            </table>
          </div> {/* .table-wrapper */}
          <hr />
          <h1>------- No other Timetables found --------</h1>
          <br />
          <button onClick={() => setShowTable(false)}>Back</button>
        </>
      )}
    </div>
  );
}