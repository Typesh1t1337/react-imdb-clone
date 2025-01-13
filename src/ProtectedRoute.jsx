import {Navigate} from "react-router-dom";

export function ProtectedRoute( { children } ) {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        return <Navigate to="/account/login" />;
    }

    return (children);
}