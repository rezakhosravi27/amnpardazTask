import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppSelector } from "./services/redux/hooks";
import AppRoutes from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return <AppRoutes />;
}

export default App;
