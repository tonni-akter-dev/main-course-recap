import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Module50/amazon/Shop/Shop.jsx";
import HomeLayout from "./Module50/amazon/HomeLayout/HomeLayout.jsx";
import Orders from "./Module50/amazon/Orders/Orders.jsx";
import Inventory from "./Module50/amazon/Inventory/Inventory.jsx";
import Login from "./Module50/amazon/Login/Login.jsx";
import cartProductsLoader from "./Module50/Loaders/cartProductsLoader.js";
import Checkout from "./Module50/amazon/Checkout/Checkout.jsx";
/* import Home from "./Module54/Home.jsx";
import First from "./Module54/First.jsx";
import Friends from "./Module54/Friends.jsx";
import FriendDetails from "./Module54/FriendDetails.jsx";
import Posts from "./Module54/Posts/Posts.jsx";
import PostDetails from "./Module54/Posts/PostDetails.jsx";
import MealNavbar from "./Module54-5/MealDb-withReactRouter/MealNavbar.jsx";
import About from "./Module54-5/MealDb-withReactRouter/About.jsx";
import Conract from "./Module54-5/MealDb-withReactRouter/Conract.jsx";
import Meals from "./Module54-5/MealDb-withReactRouter/Meals.jsx";
import MealDetails from "./Module54-5/MealDb-withReactRouter/MealDetails.jsx"; */
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

/* const router = createBrowserRouter([
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
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
      },
      {
        path: "/meals/:mealId",
        element: <MealDetails />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
          ),
      },
    ],
  },
]); */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: cartProductsLoader,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
