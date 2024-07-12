import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  const user = JSON.parse(localStorage.getItem("user") ?? {});
  return user?.token ? <Outlet /> : <Navigate to="/login" />;
}
