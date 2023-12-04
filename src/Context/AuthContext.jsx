import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [totalAuth, setTotalAuth] = useState({});
 
//   const setAuthFilter =brand) => {
//     setTotalAuth(brand); (
//   };

  return (
    <AuthContext.Provider value={{ totalAuth, setTotalAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthFilter = () => {
  return useContext(AuthContext);
};

