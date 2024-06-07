import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from '../layout'
import {
    Dashboard,
    Customers,
    Reports,
    Settings,
    SignIn,
    Orders,
    NotFound,
    UpdateProduct,
    ViewProduct,
    Products,
} from '../pages';
import CustomerDetails from '../pages/customerDetails';
import AddProduct from '../pages/addProduct';
import OrderDetails from '../pages/order-detail';
import StaticContentCard from '../components/cards/staticContentCard';
import AddStaticContent from '../components/forms/AddStaticContent';
import UpdateStaticContent from '../components/forms/UpdateStaticContent';
import DeleteAccount from '../pages/delete-account';

const Routes = () => {
    return useRoutes([
        {
            path: "/", element: <MainLayout />,
            children: [
                { path: "/", element: <Dashboard /> },
                { path: "/dashboard", element: <Dashboard /> },
                { path: "/products", element: <Products /> },
                { path: "/customers", element: <Customers /> },
                { path: "/customer/:id", element: <CustomerDetails /> },
                { path: "/orders", element: <Orders /> },
                // { path: "/reports", element: <Reports /> },
                { path: "/settings", element: <Settings /> },
                { path: "/add-product", element: <AddProduct /> },
                { path: "/update-product/:id", element: <UpdateProduct /> },
                { path: "/view-product/:id", element: <ViewProduct /> },
                { path: "/order-details/:id", element: <OrderDetails /> },
                { path: "/view-content/:id", element: <StaticContentCard /> },
                { path: "/add-content", element: <AddStaticContent /> },
                { path: "/update-content/:id", element: <UpdateStaticContent /> },
            ]
        },
        // { path: "404", element: <NotFound /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/delete-account", element: <DeleteAccount /> },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ])

}

export default Routes