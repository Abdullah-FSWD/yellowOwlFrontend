// StudentTableRow.js
import React from "react";
import edit from "../assets/edit.svg";
import deleteItem from "../assets/delete.svg";

const StudentTableRow = ({ student, isOpen }) => {
  return (
    <tr className="border-b-2 text-center">
      <td className="flex justify-center gap-2.5 mt-2.5 p-2.5">
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
        <img src={edit} alt="edit" />
        <img src={deleteItem} alt="delete" />
      </td>
    </tr>
  );
};

export default StudentTableRow;
