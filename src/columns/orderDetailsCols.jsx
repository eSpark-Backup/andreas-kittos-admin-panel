

export const columns = () => {
    return [
        {
            name: "Items", key: "items", 
            component: (item) => {
                return (
                    <div
                        style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", minWidth:"200px" }}
                    >
                        <div
                            style={{
                                borderRadius: "50%",
                                overflow: "hidden",
                                backgroundColor: "#263043",
                                display: "flex",
                                alignItems: "center",
                                padding: "5px",
                            }}>
                            <img src={item?.order?.imgName} alt="" width={30} height={30} />
                        </div>
                        <div>
                            {item?.order?.name}
                        </div>
                    </div>
                )
            },
        },
        { name: "Quantity", key: "quantity" },
        { name: "Category", key: "category" },
        { name: "Price", key: "price" },
    ];
};  