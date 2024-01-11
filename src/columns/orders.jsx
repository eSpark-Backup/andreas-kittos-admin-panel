import { Link } from "react-router-dom";

export const columns = () => {
    return [
        { name: "Order#", key: "order" },
        { name: "Purchased date", key: "prdDate" },
        { name: "Name", key: "name" },
        { name: "Qty", key: "qty" },
        { name: "Coupon", key: "coupon"},
        { name: "Status", key: "status" },
        { name: "Total", key: "total" },
        { name: "Details", key: "details",
         component: (item) => {
            return (
                <Link 
                style={{ color: "#49ACE1" }}
                to={`/orders/${item?.id}`}>View</Link>
            )
        }
      },
    ];
};