import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/auth/Signin";
import { Signup } from "../pages/auth/Signup";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Signin />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};
