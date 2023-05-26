import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../services/redux/store";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProviderProps } from "./AppProvider.types";
import "react-toastify/dist/ReactToastify.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
        <ToastContainer />
      </Provider>
    </ThemeProvider>
  );
};
