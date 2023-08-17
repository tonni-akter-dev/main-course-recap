import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import UserDetails from "./components/UserDetails.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
  },
  {
    path: "/user/:userId",
    element: <UserDetails></UserDetails>,
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
