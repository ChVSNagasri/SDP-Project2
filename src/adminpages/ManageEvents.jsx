import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./manageevents.css";

export default function ManageEvents() {

  const navigate = useNavigate();

  const initialEvents = [
    { id: 1, name: "Samyuk", date: "2026-03-20", location: "Auditorium" },
    { id: 2, name: "Surabhi", date: "2026-04-10", location: "Seminar Hall" },
    { id: 3, name: "FemFlare", date: "2026-05-05", location: "Main Stage" },
    { id: 4, name: "Hackathons", date: "2026-06-15", location: "Computer Lab" }
  ];

  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem("events");
    return stored ? JSON.parse(stored) : initialEvents;
  });

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = () => {

    if (!name || !date || !location) {
      alert("Fill all fields");
      return;
    }

    const newEvent = {
      id: events.length + 1,
      name,
      date,
      location
    };

    setEvents([...events, newEvent]);

    setName("");
    setDate("");
    setLocation("");
  };

  return (
    <div className="container">

      <h2>Manager - Add Event</h2>

      <div className="form">
        <input
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button onClick={addEvent}>Add Event</button>
      </div>

      <h2>College Events</h2>

      <div className="event-list">

        {events.map((event) => (
          <div className="event-card" key={event.id}>

            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>

            {event.name === "Hackathons" && (
              <button onClick={() => navigate("/award")}>
                View CTC Packages
              </button>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}