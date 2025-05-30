import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "./utils";
import { ContextProvider } from "./context/index.jsx";
import { initialState, reducer } from "./context/reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense>
        <ContextProvider initialState={initialState} reducer={reducer}>
          <App />
        </ContextProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
