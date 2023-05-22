import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppSelector } from "./services/redux/hooks";
import { store } from "./services/redux/store";
import { Provider } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  return;
  <Provider store={store}>
    
  </Provider>;
}

export default App;
