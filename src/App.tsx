import "./App.css";
import { AppProvider } from "./providers/AppProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth";
import Signin from "./pages/auth/signin/Signin";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/auth/signup/Signup";
import CreateChart from "./pages/dashboard/createChart";
import { ProtectedRoutes } from "./pages/protectedRoutes/ProtectedRoutes";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route index element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="dashboard/createChart"
              element={
                <ProtectedRoutes>
                  <CreateChart />
                </ProtectedRoutes>
              }
            />
            <Route
              path="dashboard/editChart/:id"
              element={
                <ProtectedRoutes>
                  <CreateChart />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
