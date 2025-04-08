// Supports weights 100-800
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/sora/index.css";
import "./styles/styles.css";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
);
