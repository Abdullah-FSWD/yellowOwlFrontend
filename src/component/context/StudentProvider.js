import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
      }}>
      {children}
    </StudentContext.Provider>
  );
};
