
export const columns = () => {
    const mainCatID = localStorage.getItem("catID")
    return(
        mainCatID == "90b0fc89-fa9b-4454-b739-373d4da1e57a" ?  [
            { name: "Product Name", key: "name",left:true },
            { name: "Category (main)", key: "category"},
            { name: "Category (sub)", key: "mainCategory"},
            { name: "Total Orders", key: "quantity" },
            { name: "Price (From)", key: "price1" },
            { name: "Price (To)", key: "price2" },
            { name: "", key: "action"},
        ] :  [
            { name: "Product Name", key: "name",left:true },
            { name: "Category", key: "category"},
            { name: "Total Orders", key: "quantity" },
            { name: "Price (From)", key: "price1" },
            { name: "Price (To)", key: "price2" },
            { name: "", key: "action"},
        ]
    )
};  