import { Navigate } from "react-router-dom";

export type ProtectedProps = {
  element: React.FC;
  isAuthenticated: boolean;
};

export const ProtectedRoute = ({
  element: Component,
  isAuthenticated,
  ...rest
}: ProtectedProps) => {
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};