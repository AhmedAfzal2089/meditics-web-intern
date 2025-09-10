import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <About />,
  },
  {
    path: "/pages",
    element: <About />,
  },
  {
    path: "/blog",
    element: <About />,
  },
  {
    path: "/contact",
    element: <About />,
  },
]);
