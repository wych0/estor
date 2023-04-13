import { Navigate } from "react-router-dom";
const ProtectedComplete = ({ placedOrder, children }) => {
  if (!placedOrder) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};
export default ProtectedComplete;