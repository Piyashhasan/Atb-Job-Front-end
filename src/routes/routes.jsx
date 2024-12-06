import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Home from "../pages/Main/Home";
import SignIn from "../pages/Main/SignIn";
import SignUp from "../pages/Main/SignUp";
import NotFound from "../shared/NotFound/NotFound";
import User from "../pages/Dashboard/User";
import Employer from "../pages/Dashboard/Employer";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "user",
        element: <User />,
      },
      {
        path: "employer",
        element: <Employer />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
