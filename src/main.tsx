// Supports weights 100-800
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/sora/index.css";
import "./styles/styles.css";
import App from "./components/App/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
