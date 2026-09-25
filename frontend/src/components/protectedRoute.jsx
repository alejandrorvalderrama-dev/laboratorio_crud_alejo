mport { Navigate, Outlet } from ' react-router-dom' ;
import { useAuth } from
' . ./hooks/useAuth ';

export default function ProtectedRoute() {
const { isAuthenticated } = useAuth();

return isAuthenticated ? <Out1et /><Navigate to="/login" replace / >;
}