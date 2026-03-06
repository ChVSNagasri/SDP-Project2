import React, { useState, useEffect } from "react";
import OIP from "../images/Logins.jpg";
import "./home.css";

export default function Home() {

  const defaultUser = {
    id: "2500030484",
    name: "CHINTALAPATI VENKATA SAI NAGASRI",
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("studentUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      localStorage.setItem("studentUser", JSON.stringify(defaultUser));
      setUser(defaultUser);
    }
  }, []);

  if (!user) return null;

  return (
    <div>
      <div className="card">
        <img className="oip" src={OIP} alt="Profile" width={100} height={100} />
        <div className="card-body">
          <h2 style={{ color: "#493755" }}>
           Welcome! {user.id}
          </h2>
          <h2 style={{ color: "#503e5c" }}>
            {user.name}
          </h2>
        </div>
      </div>
    </div>
  );
}