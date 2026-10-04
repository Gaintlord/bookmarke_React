import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import "./global.css";
import App from "./App.tsx";

const VerifyEmail = lazy(() => import("./Route/verifyEmail.tsx"));
const VerifyStatus = lazy(() => import("./Route/verifyStatus.tsx"));
const SignUp = lazy(() => import("./Route/signUp.tsx"));
const Login = lazy(() => import("./Route/LogIn.tsx"));
const Dashboard = lazy(() => import("./Route/dashBoard.tsx"));
const Bokmarke = lazy(() => import("./Route/Bokmarke.tsx"));
const NotFound = lazy(() => import("./Route/notFound.tsx"));
const PrivacyPolicy = lazy(() => import("./Route/privacyPolicy.tsx"));
const TermsOfService = lazy(() => import("./Route/termsOfService.tsx"));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/Login", element: <Login /> },
  { path: "/verifyemail", element: <VerifyEmail /> },
  { path: "/verify-status", element: <VerifyStatus /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/bokmarke", element: <Bokmarke /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <TermsOfService /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  // <App />
  <RouterProvider router={router} />,
);
