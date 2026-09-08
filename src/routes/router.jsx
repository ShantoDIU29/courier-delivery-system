import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Coverage from "../Pages/Coverage/Coverage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
    ],
  },
]);
