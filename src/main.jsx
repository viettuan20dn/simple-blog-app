import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Protected from "./components/AuthLayout";
import Signup from "./pages/Signup";
import AllPosts from "./pages/AllPosts";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";

import "./index.css";
import About from "./pages/About";
import MyBlogs from "./pages/MyBlogs";
import MyProfile from "./pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: "all-posts",
        element: (
          <Protected authentication>
            <AllPosts />
          </Protected>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "my-profile",
        element: (
          <Protected authentication>
            <MyProfile />,
          </Protected>
        ),
      },
      {
        path: "my-blogs",
        element: (
          <Protected authentication>
            <MyBlogs />,
          </Protected>
        ),
      },
      {
        path: "add-post",
        element: (
          <Protected authentication>
            <AddPost />
          </Protected>
        ),
      },
      {
        path: "edit-post/:slug",
        element: (
          <Protected authentication>
            <EditPost />
          </Protected>
        ),
      },
      {
        path: "post/:slug",
        element: (
          <Protected authentication>
            <Post />
          </Protected>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
