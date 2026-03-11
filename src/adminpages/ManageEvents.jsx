import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./manageevents.css";

export default function ManageEvents() {

  const navigate = useNavigate()

  const initialEvents = [
    { id: 1, name: "Samyuk", date: "2026-03-20", location: "Cricket Ground" },
    { id: 2, name: "Surabhi", date: "2026-04-10", location: "Seminar Hall" },
    { id: 3, name: "FemFlare", date: "2026-05-05", location: "peacock Hall" },
    { id: 4, name: "Hackathons", date: "2026-06-15", location: "Computer Lab" }
  ]

  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem("events");
    return stored ? JSON.parse(stored) : initialEvents;
  })

  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  }, [events])

  const addEvent = () => {

    if (!name || !date || !location) {
      alert("Fill all fields")
      return
    }

    const newEvent = {
      id: events.length + 1,
      name,
      date,
      location
    }

    setEvents([...events, newEvent])

    setName("")
    setDate("")
    setLocation("")
  }

  return (
   <div className="container">

  <div className="add-event-wrapper">
    
    <div className="event-card add-card">

      <h3>Add Event</h3>

     <input placeholder="Event Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <br/>
<input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      <br/>
<input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
      <br/>

      <button onClick={addEvent}>Add Event</button>

    </div>

  </div>

      <h2>College Events</h2>

      <div className="event-list">

        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}

        <div className="event-card">
          <h3>CTC Awarded Students</h3>
          <button type="button" onClick={() => navigate("/award")}>
            View CTC Students
          </button>
        </div>
      </div>
    </div>
  )
}