import { Navigate } from "react-router-dom";
const ProtectedAdmin = ({ role, children }) => {
  if (role!=='admin') {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedAdmin;