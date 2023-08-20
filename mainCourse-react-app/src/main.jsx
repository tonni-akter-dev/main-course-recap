import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Module54/Home.jsx";
import First from "./Module54/First.jsx";
import Friends from "./Module54/Friends.jsx";
import FriendDetails from "./Module54/FriendDetails.jsx";
import Posts from "./Module54/Posts/Posts.jsx";
import PostDetails from "./Module54/Posts/PostDetails.jsx";
import MealNavbar from "./Module54-5/MealDb-withReactRouter/MealNavbar.jsx";
import About from "./Module54-5/MealDb-withReactRouter/About.jsx";
import Conract from "./Module54-5/MealDb-withReactRouter/Conract.jsx";
import Meals from "./Module54-5/MealDb-withReactRouter/Meals.jsx";
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);
 */
// nested route
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/friends/:friendId",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/post/:postId",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <div>444444444</div>,
      },
    ],
  },
]);
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <MealNavbar />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Conract />,
      },
      {
        path: "/meals",
        element: <Meals />,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
