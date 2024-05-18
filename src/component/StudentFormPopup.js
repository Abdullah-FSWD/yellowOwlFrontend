// StudentFormPopup.js
import React, { useState } from "react";

const StudentFormPopup = ({ onClose, onSubmit, student }) => {
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Student</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            placeholder="Email ID"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            name="enrollNumber"
            value={formData.enrollNumber}
            onChange={handleChange}
            placeholder="Enroll Number"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="date"
            name="addmissionDate"
            value={formData.addmissionDate}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
              Close
            </button>
            <button
              onClick={() => onSubmit(formData.id, formData)}
              disabled={!formData.isDirty}
              className="bg-blue-500 text-white px-4 py-2 rounded">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFormPopup;
