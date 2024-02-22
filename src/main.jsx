import React from "react";
import { createRoot } from "react-dom/client";
import { JournalApp } from "./JournalApp";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>
);