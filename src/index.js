import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ResultContextProvider } from "./context/ResultContextProvider";

import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>
);
