import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode  from "jwt-decode";
import { setHeaderToken } from "../services/apiService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getCurrentUserFromLocal();
    setUser(userData);
  }, []);

  const loginSaveUser = async (data) => {
    const { token } = data.localStorage.setItem(
      "userToken",
      JSON.stringify(token)
    );
    setUser(jwtDecode(token));
    setHeaderToken();
  };

  function getCurrentUserFromLocal() {
    try {
      const token = localStorage.getItem("userToken");
      const savedUser = jwtDecode(token);
      return savedUser;
    } catch (err) {
      return null;
    }
  }
  const logout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
    navigate("/");
    setHeaderToken();
  };

  const value = {
    user,
    loginSaveUser,
    getCurrentUserFromLocal,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
