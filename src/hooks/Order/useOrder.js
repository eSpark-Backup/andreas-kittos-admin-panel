import { useEffect, useState } from "react";
import { useGetAllOrdersQuery } from "../../services/orders";

const useOrders = ()=>{
    const [totalItems, setTotalItems] = useState(0);
    const [page, setPage] = useState(1);
    const [orders, setOrders] = useState([]);
    const { data: ordersData, isLoading: isOrdersLoading } = useGetAllOrdersQuery(page);

    useEffect(() => {
        if (ordersData) {
            const totalItems = ordersData?.meta?.totalItems;
            setTotalItems(totalItems);
            setOrders(ordersData?.items);
        }
    }, [ordersData]);

    return {
        ordersData,
        totalItems,
        isOrdersLoading,
        setPage,
        page,
    };
}

export default useOrders;
