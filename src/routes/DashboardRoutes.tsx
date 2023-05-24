import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import CreateChart from "../pages/dashboard/createChart";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="createChart" element={<CreateChart />} />
      <Route path="editChart/:id" element={<CreateChart />} />
    </Routes>
  );
};
