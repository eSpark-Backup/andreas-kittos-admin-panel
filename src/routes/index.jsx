import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from '../layout'
import {
    Dashboard,
    Catagories,
    Customers,
    Reports,
    Settings,
    SignIn,
    Orders,
    NotFound
} from '../pages';
import CustomerDetails from '../pages/customerDetails';
import AddProduct from '../pages/addProduct';
import ProductDetails from '../pages/productDetails';

const Routes = () => {
    return useRoutes([
        {
            path: "/", element: <MainLayout />,
            children: [

                { path: "/dashboard", element: <Dashboard /> },
                { path: "/", element: <Dashboard /> },
                { path: "/catagories", element: <Catagories /> },
                { path: "/customers", element: <Customers /> },
                { path: "/customer/:id", element: <CustomerDetails /> },
                { path: "/orders", element: <Orders /> },
                { path: "/reports", element: <Reports /> },
                { path: "/settings", element: <Settings /> },
                { path: "/addProduct", element: <AddProduct /> },
                { path: "/productDetails/:id/:status", element: <ProductDetails /> },
            ]
        },
        { path: "404", element: <NotFound/> },
        { path: "/sign-in", element: <SignIn /> },
        {
            path: "*",
            element: <Navigate to="/404" />,
        },
    ])

}

export default Routes