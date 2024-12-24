import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [searchResults , setSearchResults] = useState([])
  const [search , setSearch] = useState("");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={{authUser, setAuthUser , searchResults , setSearchResults , search , setSearch}}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
