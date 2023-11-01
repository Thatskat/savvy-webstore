import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { getCurrentUserFromLocal } = useAuth();
  const location = useLocation();
  return !getCurrentUserFromLocal() ? (
    <Navigate to="/" state={{ frome: location }} replace />
  ) : (
    <Outlet />
  );
};

export default PrivateRoutes;
