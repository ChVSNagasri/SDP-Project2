import React, { useState, useEffect } from "react";
import "./hostlemanagement.css";

const HostelManagement = () => {

  const defaultRoom = {
    hostelName: "Lotus Hostel",
    roomNumber: "124",
    roommates: ["Jahnavi", "Mokthika"],
    occupancy: 3,
    amenities: [
      "Wi-Fi",
      "Mess",
      "Laundry",
      "Common Room",
      "AC",
      "Oven",
      "Fridge"
    ],
    notices: [
      "Water supply will be off tomorrow 9 AM - 12 PM",
      "Mess menu updated for this week"
    ]
  };

  const [studentRoom, setStudentRoom] = useState(null);

  useEffect(() => {
    const storedRoom = localStorage.getItem("hostelRoom");

    if (storedRoom) {
      setStudentRoom(JSON.parse(storedRoom));
    } else {
      localStorage.setItem("hostelRoom", JSON.stringify(defaultRoom));
      setStudentRoom(defaultRoom);
    }
  }, []);

  if (!studentRoom) return null;

  return (
    <div className="hostel-container">
      <h1 className="title">Hostel Details</h1>

      <table className="hostel-table">
        <tbody>
          <tr>
            <td className="label">Hostel Name</td>
            <td>{studentRoom.hostelName}</td>
          </tr>
          <tr>
            <td className="label">Room Number</td>
            <td>{studentRoom.roomNumber}</td>
          </tr>
          <tr>
            <td className="label">Roommates</td>
            <td>{studentRoom.roommates.join(", ")}</td>
          </tr>
          <tr>
            <td className="label">Occupancy</td>
            <td>{studentRoom.occupancy} per room</td>
          </tr>
        </tbody>
      </table>

      <div className="section">
        <h2>Amenities</h2>
        <div className="amenities">
          {studentRoom.amenities.map((a, i) => (
            <span key={i} className="amenity">
              {a}
            </span>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Notices</h2>
        <ul className="notices">
          {studentRoom.notices.map((notice, i) => (
            <li key={i}>{notice}</li>
          ))}
        </ul>
      </div>

      <div className="buttons">
        <button className="btn-primary">Request Room Change</button>
        <button className="btn-secondary">Submit Complaint</button>
      </div>
    </div>
  );
};

export default HostelManagement;