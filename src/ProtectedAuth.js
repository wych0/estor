import { Navigate } from "react-router-dom";
const ProtectedAuth = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedAuth;