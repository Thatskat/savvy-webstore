import { useContext, useDebugValue } from "react";
import AuthContext from "../contexts/AuthorizationContext";

const useAuth = () => {
  const { user } = useContext(AuthContext);
  useDebugValue(user, (user) => (user?.id ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
};

export default useAuth;
