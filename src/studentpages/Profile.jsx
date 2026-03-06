import React, { useEffect, useState } from "react";
import Nag from "../images/Nag.jpeg";
import "./profile.css";

export default function Profile() {
  const profileData = {
    name: "CHINTALAPATI VENKATA SAI NAGASRI",
    uid: "2500030484",
    admissionDate: "11-06-2025",
    program: "UG",
    degree: "B-Tech CSE (PBL)",
    dob: "11-09-2008",
    bloodGroup: "O+ve",
    email: "chintalapatinagasrivs@gmail.com",
    father: "Chintalapati Vani Prasad",
    mother: "Chintalapati Mahalakshmi",
    motherTongue: "Telugu",
    caste: "OC",
  };
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
    const storedData = JSON.parse(localStorage.getItem("profileData"));
    setProfile(storedData);
  }, []);
  if (!profile) return null;
  return (
    <div className="profile-container">
      <div className="card">
        <img className="nag" src={Nag} alt="Profile" />
        <h1 className="name">{profile.name}</h1>
        <h3 className="uid">University ID: {profile.uid}</h3>
        <hr />
        <div className="info">
          <p><strong>Admission Date:</strong> {profile.admissionDate}</p>
          <p><strong>Program:</strong> {profile.program}</p>
          <p><strong>Major Degree:</strong> {profile.degree}</p>
          <p><strong>Date of Birth:</strong> {profile.dob}</p>
          <p><strong>Blood Group:</strong> {profile.bloodGroup}</p>
          <p><strong>Email:</strong> {profile.email}</p>
        </div>
        <hr />
        <div className="info">
          <p><strong>Father Name:</strong> {profile.father}</p>
          <p><strong>Mother Name:</strong> {profile.mother}</p>
          <p><strong>Mother Tongue:</strong> {profile.motherTongue}</p>
          <p><strong>Caste Category:</strong> {profile.caste}</p>
        </div>
      </div>
    </div>
  );
}