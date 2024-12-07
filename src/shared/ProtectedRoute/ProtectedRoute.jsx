import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isPrivate }) => {
  const token = localStorage.getItem("accessToken");

  if (isPrivate) {
    return token ? element : <Navigate to="/sign-in" />;
  } else {
    return !token ? element : <Navigate to="/dashboard" />;
  }
};

export default ProtectedRoute;
