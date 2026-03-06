import React, { useState, useEffect } from "react";
import "./cgpa.css";

export default function Cgpa() {

  const defaultGrades = [
    {
      code: "25MT1002E",
      title: "Discrete Mathematics",
      grade: "O",
      points: 10,
      credits: 4,
      sem: "ODD Sem",
      year: "2025-2026",
      score: 98,
    },
    {
      code: "25SC1105E",
      title: "Problem Solving through Java",
      grade: "A+",
      points: 9,
      credits: 4.5,
      sem: "ODD Sem",
      year: "2025-2026",
      score: 89,
    },
    {
      code: "25UC1102E",
      title: "Language Skills for Engineers",
      grade: "A+",
      points: 9,
      credits: 2,
      sem: "ODD Sem",
      year: "2025-2026",
      score: 88,
    },
    {
      code: "25UC1203E",
      title: "Design Thinking through Innovation",
      grade: "A+",
      points: 9,
      credits: 2,
      sem: "ODD Sem",
      year: "2025-2026",
      score: 89,
    },
    {
      code: "25SC1104E",
      title: "Fundamentals of Web Development",
      grade: "O",
      points: 10,
      credits: 3.5,
      sem: "ODD Sem",
      year: "2025-2026",
      score: 95,
    },
  ];

  const [grades, setGrades] = useState([]);
  const [cgpa, setCgpa] = useState(0);

  useEffect(() => {
    const storedGrades = localStorage.getItem("grades");

    if (storedGrades) {
      setGrades(JSON.parse(storedGrades));
    } else {
      localStorage.setItem("grades", JSON.stringify(defaultGrades));
      setGrades(defaultGrades);
    }
  }, []);

  useEffect(() => {
    if (grades.length > 0) {
      const totalCredits = grades.reduce((sum, g) => sum + g.credits, 0);
      const weightedPoints = grades.reduce(
        (sum, g) => sum + g.points * g.credits,
        0
      );
      const calculatedCgpa = (weightedPoints / totalCredits).toFixed(2);
      setCgpa(calculatedCgpa);
    }
  }, [grades]);

  return (
    <div>
      <h1>2500030484 - Grade Evaluation</h1>
      <hr />

      <p>
        <strong>
          Registered Credits: 32 | Awarded Credits: 16 | Awaiting Credits: 16 |
          Total Credits: 151.5
        </strong>
      </p>

      <div className="cgpa">
        <h1>CGPA: {cgpa}</h1>
      </div>

      <hr />

      <table border={1}>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Grade</th>
            <th>Grade Points</th>
            <th>Credits</th>
            <th>Reg Sem</th>
            <th>Academic Year</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {grades.map((g, index) => (
            <tr key={index}>
              <td>{g.code}</td>
              <td>{g.title}</td>
              <td>{g.grade}</td>
              <td>{g.points}</td>
              <td>{g.credits}</td>
              <td>{g.sem}</td>
              <td>{g.year}</td>
              <td>{g.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}