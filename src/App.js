// App.js
import React, { useState, useEffect } from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Students from "./component/Students";
import { getData } from "./component/services/services";

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});

  // Fetch students data from API

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
    <div className="flex h-screen w-110 sm:w-full">
      <Sidebar />
      <div className="flex flex-col w-full bg-gray-300 h-110">
        <Navbar />
        <Students
          onDelete={deleteStudent}
          onUpdate={updateStudent}
          onEdit={openPopup}
        />
      </div>
    </div>
  );
};

export default App;
