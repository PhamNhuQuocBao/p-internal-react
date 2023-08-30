import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProviders } from "./hooks/useProductContext.tsx";
import { ModalProviders } from "./hooks/useModal.tsx";
import { IdSelectedProviders } from "./hooks/useIdSelected.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProviders>
      <IdSelectedProviders>
        <ProductProviders>
          <App />
        </ProductProviders>
      </IdSelectedProviders>
    </ModalProviders>
  </React.StrictMode>
);
