import { Navigate } from "react-router-dom"

export const ProtectedComplete = ({ placedOrder, children }) => {
    if (!placedOrder) {
        return <Navigate to="/" replace />
    }
    return children
};
