import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import "./global.css";
import App from "./App.tsx";

const VerifyEmail = lazy(() => import("./Route/verifyEmail.tsx"));
const SignUp = lazy(() => import("./Route/signUp.tsx"));
const Login = lazy(() => import("./Route/LogIn.tsx"));
const Dashboard = lazy(() => import("./Route/dashBoard.tsx"));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/Login", element: <Login /> },
  { path: "/verifyemail", element: <VerifyEmail /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

createRoot(document.getElementById("root")!).render(
  // <App />
  <RouterProvider router={router} />
);
