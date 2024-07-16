import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Layout from "../layout/Layout";

const RootRoute = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]
  }
])

export default RootRoute;