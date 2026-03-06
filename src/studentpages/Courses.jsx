import React, { useState, useEffect } from "react";
import "./courses.css";
const Courses = () => {
  const defaultCourses = [
    { code: "25sc1203E", name: "Problem Solving through Java", semester: "1", status: "Completed" },
    { code: "25MT1002E", name: "Discrete Mathematics", semester: "1", status: "Completed" },
    { code: "25Sc1204E", name: "Fundamentals of Web Development", semester: "1", status: "Completed" },
    { code: "25UC1203E", name: "Design Thinking through Innovation", semester: "1", status: "Completed" },
    { code: "25UC1002E", name: "Language Skills for Engineering", semester: "1", status: "Completed" },
    { code: "25Sc1205E", name: "Data Structures and Algorithms", semester: "2", status: "Ongoing" },
    { code: "25CS1204E", name: "Frontend Development Frameworks and UI Engineering", semester: "2", status: "Ongoing" },
    { code: "25MT1102E", name: "Mathematics for AI", semester: "2", status: "Ongoing" },
    { code: "25EC1204E", name: "Digital Design and Computer Architecture", semester: "2", status: "Ongoing" },
    { code: "25UC1204E", name: "Communication Skills for Engineers", semester: "2", status: "Ongoing" },
  ]
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const storedCourses = localStorage.getItem("courses");
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    } else {
      localStorage.setItem("courses", JSON.stringify(defaultCourses));
      setCourses(defaultCourses);
    }
  }, [])
  return (
    <div className="courses-page">
      <h1 className="page-title">My Courses</h1>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Semester</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.code}</td>
              <td>{course.name}</td>
              <td>{course.semester}</td>
              <td className={course.status === "Ongoing" ? "status-ongoing": "status-completed" } >
                {course.status}
              </td>
              <td>
                <button className="btn btn-view">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;