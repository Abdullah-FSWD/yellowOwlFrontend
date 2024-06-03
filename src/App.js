import React, { useState, useEffect } from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Students from "./component/Students";
import { getData } from "./component/services/services";

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});

  const openPopup = (student) => {
    setSelectedStudent(student);
    setPopupOpen(true);
  };

  return (
    <div className="flex h-screen w-110 sm:w-full">
      <Sidebar />
      <div className="flex flex-col w-full bg-gray-300 h-110">
        <Navbar />
        <Students onEdit={openPopup} />
      </div>
    </div>
  );
};

export default App;
