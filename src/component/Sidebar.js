// Sidebar.js
import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-gradient-to-r from-blue-700 to-purple-700 p-4 flex flex-col w-1/5   ${
        isOpen ? "" : "hidden"
      } lg:flex`}>
      <div className="flex  gap-6 items-center">
        <div className="bg-white p-3 w-16 h-16 rounded-full mb-4"></div>
        <div style={{ marginTop: "-28px" }}>
          <h5 className="text-white">Yellow Owl</h5>
          <p className="text-white text-xs text-center">admin</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
