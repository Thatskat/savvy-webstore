import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { setHeaderToken } from "../services/apiService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(()=> {
    
  })
}
