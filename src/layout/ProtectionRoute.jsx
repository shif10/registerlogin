import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ProtectionRoute = ({ Component }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("protection route", token);
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  if (token) {
    return <Component />;
  }
};
