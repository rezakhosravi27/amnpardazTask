import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppSelector } from "./services/redux/hooks";
import AppRoutes from "./routes";
import Signin from "./pages/auth/signin/Signin";

function App() {
  const isLoggedIn = useAppSelector((state) => state.users.isLoggedIn);
  if (!isLoggedIn) return <Signin />;
  return <AppRoutes />;
}

export default App;
