import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from "./components/UserDetails.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Root, { action } from "./routes/root.jsx";

import Contact from "./routes/Contact.jsx";
import EditContact from "./routes/Edit.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
    action: action,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.contactId}`
          ),
      },
    ],
  },
  {
    path: "contacts/:contactId/edit",
    element: <EditContact />,
    loader: ({ params }) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${params.contactId}`),
  },

  {
    path: "/user/:userId",
    element: <UserDetails></UserDetails>,
    loader: ({ params }) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
