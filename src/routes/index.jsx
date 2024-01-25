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
    NotFound,
} from '../pages';
import CustomerDetails from '../pages/customerDetails';
import AddProduct from '../pages/addProduct';
import ProductDetails from '../pages/productDetails';
import OrderDetails from '../pages/order-detail';

const Routes = () => {
    return useRoutes([
        {
            path: "/", element: <MainLayout />,
            children: [
                { path: "/", element: <Dashboard /> },
                { path: "/dashboard", element: <Dashboard /> },
                { path: "/catagories", element: <Catagories /> },
                { path: "/customers", element: <Customers /> },
                { path: "/customer/:id", element: <CustomerDetails /> },
                { path: "/orders", element: <Orders /> },
                // { path: "/reports", element: <Reports /> },
                { path: "/settings", element: <Settings /> },
                { path: "/add-Product", element: <AddProduct /> },
                { path: "/product-details/:id/:status", element: <ProductDetails /> },
                { path: "/order-details/:id", element: <OrderDetails /> },
            ]
        },
        // { path: "404", element: <NotFound /> },
        { path: "/sign-in", element: <SignIn /> },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ])

}

export default Routes