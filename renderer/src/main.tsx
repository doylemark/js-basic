import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import "./index.css";

const root = document.getElementById("root");

if (!root) throw "Could not find root element to mount to";

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
