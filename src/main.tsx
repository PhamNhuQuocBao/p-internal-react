import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProviders } from "./hooks/useProductContext.tsx";
import { ModalProviders } from "./hooks/useModal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProviders>
      <ProductProviders>
        <App />
      </ProductProviders>
    </ModalProviders>
  </React.StrictMode>
);
