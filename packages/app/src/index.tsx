import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SnackbarProvider } from "notistack";
import { AppContextProvider } from "./contexts/AppContext";
import { ThemeSettingsProvider } from "./providers/ThemeSettingsProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeSettingsProvider>
        <App />
      </ThemeSettingsProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
