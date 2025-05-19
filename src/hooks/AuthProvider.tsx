import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import type { CreateContextprops, User } from "./Hook.types";
import { localStorageGetItem } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
export const AuthProvider = ({ children }: CreateContextprops) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const data = localStorageGetItem("loggedInUser");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);
  const login = () => {};
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ login, logout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
