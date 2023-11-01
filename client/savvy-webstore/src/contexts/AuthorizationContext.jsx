import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { setHeaderToken } from "../services/apiService";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getCurrentUserFromLocal();
    setUser(userData);
  }, []);

  const loginSaveUser = async (data) => {
    const { token } = data;
    localStorage.setItem("token", token);
    setUser(jwtDecode(token));
    setHeaderToken();
  };

  function getCurrentUserFromLocal() {
    try {
      const token = localStorage.getItem("token");
      const savedUser = jwtDecode(token);
      return savedUser;
    } catch (error) {
      return null;
    }
  }
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setHeaderToken();
    navigate("/");
  };

  const value = {
    user,
    loginSaveUser,
    getCurrentUserFromLocal,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
