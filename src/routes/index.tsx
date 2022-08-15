import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Dashboard from "../components/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="user-profile" element={<Login />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RootRoutes;
