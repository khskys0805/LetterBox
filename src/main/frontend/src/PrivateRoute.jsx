import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRoute() {
  const location = useLocation();
  return localStorage.getItem("jwt") ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location.pathname }} />
  );
}
