// App.js
import React, { useState, useEffect } from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Students from "./component/Students";

const App = () => {
  const [students, setStudents] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});

  // Fetch students data from API
  useEffect(() => {
    // Fetch data from API and set students state
    const getData = async () => {
      const res = await fetch(
        "https://yellowowlbackend-obv0.onrender.com/students"
      );
      const data = await res.json();
      console.log(data);
      setStudents(data);
    };
    getData();
  }, []);

  // Function to delete student
  const deleteStudent = async (id) => {
    // Call API to delete student with id
  };

  // Function to update student
  const updateStudent = async (id, updatedStudentData) => {
    // Call API to update student with id and updatedStudentData
  };

  // Function to open popup for editing student
  const openPopup = (student) => {
    setSelectedStudent(student);
    setPopupOpen(true);
  };

  // Function to close popup
  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full bg-gray-300">
        <Navbar />
        <Students
          students={students}
          onDelete={deleteStudent}
          onUpdate={updateStudent}
          onEdit={openPopup}
        />
      </div>
    </div>
  );
};

export default App;
