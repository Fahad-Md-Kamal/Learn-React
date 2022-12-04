import { createBrowserRouter } from "react-router-dom";
import HomePage from ".";
import Layout from "../../compoonents/Layout";
import DashboardPage from "../dashboard";

export const router = createBrowserRouter([
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