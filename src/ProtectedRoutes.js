import { Navigate } from "react-router-dom"

export const ProtectedAdmin = ({ role, children }) => {
    if (role!=='admin') {
        return <Navigate to="/login" replace />
    }
    return children
};

export const ProtectedAuth = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }
    return children
};

export const ProtectedComplete = ({ placedOrder, children }) => {
    if (!placedOrder) {
        return <Navigate to="/" replace />
    }
    return children
};
