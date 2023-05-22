import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

const index = () => {
  return (
    <Routes>
      <Route path="*" element={<AuthRoutes />} />
      <Route path="dashboard/*" element={<DashboardRoutes />} />
    </Routes>
  );
};

export default index;
