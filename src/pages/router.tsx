import { createBrowserRouter } from "react-router-dom";
import Layout from "../compoonents/Layout";
import DashboardPage from "./dashboard";
import HomePage from "./home-page";
import LoginPage from "./login";

export const privateRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'dashboard',
                element: <DashboardPage />
            },
        ],
    },
])

export const publicRouter = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    },


])