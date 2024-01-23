
export const columns = () => {
    return [
        {
            name: "Items", key: "items", component: (item) => {
                return (
                    <>
                        <div>{item.items.name}
                        <img src={item.items.imgName}/>
                        </div>
                    </>
                )
            }
        },
        { name: "Quantity", key: "quantity" },
        { name: "Category", key: "category" },
        { name: "Price", key: "price" },
    ];
};  