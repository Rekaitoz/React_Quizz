import { Navigate, Outlet } from "react-router-dom";

const ProtectedLogin = ({ token, redirectPath = "/login", children }) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedLogin;
