import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from '../layout'
import {
    Dashboard,
    Products,
    Catagories,
    Customers,
    Inventory,
    Reports,
    Settings
} from '../pages';

const Routes = () => {
    return useRoutes([
        { path: "/sign-in", element: <Dashboard />, },
        {
            path: "/", element: <MainLayout />,
            children: [
                { path: "dashboard", element: <Dashboard /> },
                { path: "/products", element: <Products /> },
                { path: "/catagories", element: <Catagories /> },
                { path: "/customers", element: <Customers /> },
                { path: "/inventory", element: <Inventory /> },
                { path: "/reports", element: <Reports /> },
                { path: "/settings", element: <Settings /> },
            ]
        },
        { path: "404", element: <div>not found</div> },
        {
            path: "*",
            element: <Navigate to="/404" />,
        },
    ])

}

export default Routes