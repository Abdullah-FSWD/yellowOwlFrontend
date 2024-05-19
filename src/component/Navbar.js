// Navbar.js
import React from "react";
import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-4 w-4/3 flex ">
      <img
        src={menu}
        alt="Icon"
        width="20"
        height="20"
        className="mr-2 lg:hidden"
      />
      <h1 className="text-white text-xl ml-2.5">Students</h1>
    </nav>
  );
};

export default Navbar;
