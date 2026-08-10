
export const columns = () => {
    const mainCatID = localStorage.getItem("catID")
    return(
        mainCatID == "d523cb0d-f7b7-47df-8ed9-5b5d79dd1c7c" ?  [
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