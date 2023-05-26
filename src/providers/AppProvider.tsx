import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../services/redux/store";
import CssBaseline from "@mui/material/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

type AppProviderProps = {
  children: React.ReactNode;
};

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
