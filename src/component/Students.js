// Students.js
import React, { useState, useEffect } from "react";
import StudentTableRow from "./StudentTableRow";
import StudentFormPopup from "./StudentFormPopup";
import axios from "axios";
import { getData } from "./services/services";
import { DeleteConfirmationPopup } from "./DeleteConfirmationPopup";

const Students = ({ onDelete, onUpdate, onEdit, isOpen }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getData();
    setStudents(data);
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-3xl font-semibold text-gray-700">Students</h2>
        <div className="block space-x-4 sm:flex">
          <input
            type="text"
            placeholder="Search"
            className="border  border-gray-300 rounded px-5 py-2  sm:px-12 sm:py-2"
          />
          <button
            onClick={() => {
              setIsPopupOpen(true);
            }}
            className={`bg-green-500 mt-2 w-full text-white px-12 py-2 rounded sm:w-full ${
              isOpen ? "" : "hidden"
            } md:flex`}>
            Add Student
          </button>
          <div className="block md:hidden">
            <button
              onClick={() => {
                setIsPopupOpen(true);
              }}
              className="bg-green-500 text-white px-12 py-2 rounded mt-2 ml-6">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 m-auto bg-white rounded-xl p-2 w-94 mr-0 sm:m-auto">
        <table className="w-full border-collapse border-b-2">
          <thead>
            <tr className="text-xs text-gray-500">
              <th>NAME</th>
              <th>EMAIL ID</th>
              <th className={` ${isOpen ? "" : "hidden"} md:table-cell`}>
                PHONE
              </th>
              <th className={` ${isOpen ? "" : "hidden"} md:table-cell`}>
                ENROLL NUMBER
              </th>
              <th className={` ${isOpen ? "" : "hidden"} md:table-cell`}>
                DATE OF ADMISSION
              </th>
              <th> ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {students &&
              students?.map((student) => (
                <StudentTableRow
                  key={student._id}
                  student={student}
                  setSelectedStudent={setSelectedStudent}
                  setIsPopupOpen={setIsPopupOpen}
                  onEdit={() => handleEdit(student)}
                  onDelete={() => onDelete(student._id)}
                  setStudents={setStudents}
                  fetchData={fetchData}
                />
              ))}
          </tbody>
        </table>
      </div>
      {isPopupOpen && (
        <StudentFormPopup
          fetchData={fetchData}
          student={selectedStudent}
          onClose={handleClosePopup}
          onSubmit={onUpdate}
        />
      )}
    </div>
  );
};

export default Students;
