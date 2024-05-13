import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="269049701225-4r9mtq1ctqo97s12vg9e6h4je99p5ugg.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
