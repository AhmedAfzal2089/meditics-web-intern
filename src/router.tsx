import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Services from "./pages/services/Services";

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
    element: <Services />,
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
