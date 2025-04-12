import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./Router/AppRouter";
import MonumentsContextProvider from "./monument/context/MonumentsContextProvider";
import "@fontsource-variable/sora/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MonumentsContextProvider>
        <AppRouter />
      </MonumentsContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
