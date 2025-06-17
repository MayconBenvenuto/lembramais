import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import "./index.css";
import App from "./App";

// Configuração condicional do Convex
const convexUrl = import.meta.env.VITE_CONVEX_URL;
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

createRoot(document.getElementById("root")!).render(
  convex ? (
    <ConvexAuthProvider client={convex}>
      <App />
    </ConvexAuthProvider>
  ) : (
    <App />
  )
);
