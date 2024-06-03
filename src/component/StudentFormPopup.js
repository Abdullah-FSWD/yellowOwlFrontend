
import React, { useState } from "react";
import axios from "axios";
import { getData } from "./services/services";

const StudentFormPopup = ({ onClose, onSubmit, student, fetchData }) => {
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = async (id) => {
    try {
      await axios.put(
        `https://yellowowlbackend-obv0.onrender.com/students/${id}`,
        formData
      );
      fetchData();
      onClose();
    } catch (error) {}
  };

  const addStudent = async () => {
    try {
      const response = await axios.post(
        "https://yellowowlbackend-obv0.onrender.com/students/addStudent",
        formData
      );
      fetchData();
      onClose();
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      {student ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-20 rounded-lg">
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                name="enrollNo"
                value={formData.enrollNo}
                onChange={handleChange}
                placeholder="Enroll Number"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="date"
                name="dateOfAddmission"
                value={formData.dateOfAddmission}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2"
              />
              <div>
                <button
                  onClick={() => handleEdit(formData._id)}
                  // disabled={!formData.isDirty}
                  className="bg-green-500 text-white px-4 py-2 rounded w-full mt-2">
                  Submit
                </button>

                <br />

                <button
                  onClick={onClose}
                  className="bg-orange-500 text-white px-4 py-2 rounded mr-2 w-full mt-2">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-20 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Student</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="number"
                name="phone"
                onChange={handleChange}
                placeholder="Mobile Number"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email ID"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="number"
                name="enrollNo"
                onChange={handleChange}
                placeholder="Enroll Number"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="date"
                name="dateOfAddmission"
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2"
              />
              <div>
                <button
                  onClick={addStudent}
                  className="bg-green-500 text-white px-4 py-2 rounded w-full mt-2">
                  Submit
                </button>

                <br />

                <button
                  onClick={onClose}
                  className="bg-orange-500 text-white px-4 py-2 rounded mr-2 w-full mt-2">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentFormPopup;
