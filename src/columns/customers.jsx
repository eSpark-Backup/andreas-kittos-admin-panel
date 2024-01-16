import { Link } from "react-router-dom";

export const columns = () => {
    return [
        { name: "Customer name", key: "customerName" },
        { name: "Join Date", key: "joinDate" },
        { name: "Total Orders", key: "totalOrders" },
        { name: "Earnings", key: "earnings" },
        { name: "Status", key: "status"},
        { name: "Details", key: "details",
         component: (item) => {
            return (
                <Link 
                style={{ color: "#49ACE1" }}
                to={`/order-details/${item?.id}`}>View</Link>
            )
        }
      },
    ];
};