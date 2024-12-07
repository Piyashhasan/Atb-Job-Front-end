import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Home from "../pages/Main/Home";
import SignIn from "../pages/Main/SignIn";
import SignUp from "../pages/Main/SignUp";
import NotFound from "../shared/NotFound/NotFound";
import User from "../pages/Dashboard/User";
import Employer from "../pages/Dashboard/Employer";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "../shared/ProtectedRoute/ProtectedRoute";

// --- routes configure ---
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
        element: <ProtectedRoute element={<SignIn />} isPrivate={false} />,
      },
      {
        path: "sign-up",
        element: <ProtectedRoute element={<SignUp />} isPrivate={false} />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <ProtectedRoute element={<Dashboard />} isPrivate={true} />,
      },
      {
        path: "user",
        element: <ProtectedRoute element={<User />} isPrivate={true} />,
      },
      {
        path: "employer",
        element: <ProtectedRoute element={<Employer />} isPrivate={true} />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
