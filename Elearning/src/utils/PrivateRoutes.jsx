import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
