import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/Auth";

const PrivateRouteBarber: React.FC = () => {
  const { barber } = useAuth();

  return !barber ? <Navigate to="/providers" /> : <Outlet />;
};

export default PrivateRouteBarber;
