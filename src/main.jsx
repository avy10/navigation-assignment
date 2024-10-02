// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppNav from "./components/test/AppNav.jsx";
import AppNavMUI from "./components/test/AppNavMUI.jsx";
// import './index.css'

// createRoot(document.getElementById("root")).render(<App />);
// createRoot(document.getElementById("root")).render(<AppNav />);
createRoot(document.getElementById("root")).render(<AppNavMUI />);
