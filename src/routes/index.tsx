import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";

const index = () => {
  return (
    <Routes>
      <Route path="*" element={<AuthRoutes />} />
    </Routes>
  );
};

export default index

