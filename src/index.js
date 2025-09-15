import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // 必要に応じて作る

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
