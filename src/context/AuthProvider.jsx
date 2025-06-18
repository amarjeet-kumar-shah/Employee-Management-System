import React, { createContext, useEffect, useState } from "react";
import { getlocalStorage, setlocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    {
      setlocalStorage()
      const { employee} = getlocalStorage();
      setUserData(employee);
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
