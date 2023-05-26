import { useAppSelector } from "./services/redux/hooks";
import AppRoutes from "./routes";
import Signin from "./pages/auth/signin/Signin";
import { AppProvider } from "./providers/AppProvider";

function App() {
  const isLoggedIn = useAppSelector((state) => state.users.isLoggedIn);
  if (!isLoggedIn) return <Signin />;
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
