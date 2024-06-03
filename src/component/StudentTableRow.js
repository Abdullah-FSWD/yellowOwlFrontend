import React, { useState } from "react";
import edit from "../assets/edit.svg";
import deleteItem from "../assets/delete.svg";
import { formateDate } from "./services/services";
import axios from "axios";
import { DeleteConfirmationPopup } from "./DeleteConfirmationPopup";
const StudentTableRow = ({
  student,
  isOpen,
  setIsPopupOpen,
  setSelectedStudent,
  fetchData,
}) => {
  const [confirmationPopup, setConfirmationPopup] = useState(false);

  return (
    <>
      <tr className="border-b-2 text-center">
        <td className="flex justify-start gap-2.5 mt-2.5 p-2.5 ml-25%">
          <div className="bg-slate-400 w-8 h-8 rounded-full mb-1"></div>
          <div>{student.name}</div>
        </td>
        <td>{student.email}</td>
        <td className={` ${isOpen ? "" : "hidden"} md:table-cell`}>
          {student.phone}
        </td>
        <td className={` ${isOpen ? "" : "hidden"} md:table-cell`}>
          {student.enrollNo}
        </td>
        <td className={` ${isOpen ? "" : "hidden"} md:table-cell`}>
          {" "}
          {student.dateOfAddmission}
        </td>
        <td className="flex gap-2 pt-3 justify-center">
          <img
            src={edit}
            alt="edit"
            onClick={() => {
              setSelectedStudent(student);
              setIsPopupOpen(true);
            }}
          />
          <img
            onClick={() => {
              setConfirmationPopup(true);
            }}
            src={deleteItem}
            alt="delete"
          />
        </td>
      </tr>
      {confirmationPopup && (
        <DeleteConfirmationPopup
          setConfirmationPopup={setConfirmationPopup}
          fetchData={fetchData}
          id={student._id}
        />
      )}
    </>
  );
};

export default StudentTableRow;
