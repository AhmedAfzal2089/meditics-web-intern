import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import ServiceDetail from "./pages/services/ServiceDetail";
import BlogMain from "./pages/blog/BlogMain";

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
    path: "/services/service-detail",
    element: <ServiceDetail />,
  },
  {
    path: "/blog",
    element: <BlogMain />,
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
