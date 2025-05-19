import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { lazy, Suspense } from "react";
import { CreateShift } from "../pages/Admin/CreateShift";
const StaffList = lazy(() => import("../pages/Admin/StaffList"));

export const Approutes = () => {
  const user = { role: "admin" };
  // const { user } = useAuthContext();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/stafflist"
          element={
            <ProtectedRoute
              isAuthenticated={user.role === "admin"}
              element={StaffList}
            />
          }
        />
        <Route
          path="/scheduleshift"
          element={
            <ProtectedRoute
              isAuthenticated={user.role === "admin"}
              element={CreateShift}
            />
          }
        />
      </Routes>
    </Suspense>
  );
};
