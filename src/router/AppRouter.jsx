import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthRouter, AuthRoutes } from "../auth/routes";
import { JournalRouter, JournalRoutes } from "../journal/routes";

const routesConfig = createBrowserRouter([
  {
    path: "/auth/*",
    element: <AuthRouter />,
    children: AuthRoutes
  },
  {
    path: "/",
    element: <JournalRouter />,
    children: JournalRoutes,
  },
  {
    path: "/*",
    element: <Navigate to={"/"} />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />;
};