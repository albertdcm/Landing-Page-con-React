import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home.jsx";
import "../styles/index.css"; // Importa estilos

const root = createRoot(document.getElementById("app"));
root.render(<Home />);