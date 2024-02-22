import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill } from 'react-icons/bs'
import { FaUserGroup } from "react-icons/fa6";
import { reportImg, suitImg } from '../assets';
import styled from '@emotion/styled';

export const sidebarTabs = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icons: "Dashboard"
    },
    {
        name: "Products",
        href: "/products",
        icons: "Categories"
    },
    {
        name: "Customers",
        href: "/customers",
        icons: "Users"
    },
    {
        name: "Orders",
        href: "/orders",
        icons: "Order"
    },
    // {
    //     name: "Reports",
    //     href: "/reports",
    //     icons: <BsMenuButtonWideFill className='icon' />
    // },
    {
        name: "Settings",
        href: "/settings",
        icons: "setting"
    },
]

export const chartData = [
    {
        name: 'Jan',
        revenue: 10000,
        orders: 3000,
    },
    {
        name: 'Feb',
        revenue: 20000,
        orders: 4500,
    },
    {
        name: 'Mar',
        revenue: 30000,
        orders: 11000,
    },
    {
        name: 'Apr',
        revenue: 40000,
        orders: 13500,
    },
    {
        name: 'May',
        revenue: 50000,
        orders: 16000,
    },
    {
        name: 'Jun',
        revenue: 60000,
        orders: 17000,
    },
    {
        name: 'Jul',
        revenue: 70000,
        orders: 19600,
    },
    {
        name: 'Aug',
        revenue: 80000,
        orders: 22050,
    },
    {
        name: 'Sep',
        revenue: 90000,
        orders: 26300,
    },
    {
        name: 'Oct',
        revenue: 100000,
        orders: 29800,
    },
    {
        name: 'Nov',
        revenue: 110000,
        orders: 30060,
    },
    {
        name: 'Dec',
        revenue: 120000,
        orders: 32000,
    },

];

export const cardsData = [

    {
        title: "PRODUCTS",
        icon: "Bell",
        value: 160
    },
    {
        title: "CATEGORIES",
        icon: "Categories",
        value: 3
    },
    {
        title: "CUSTOMERS",
        icon: "Users",
        value: 33
    },
    {
        title: "ORDERS",
        icon: "Box",
        value: 300,
        description: "Recent Orders:",
        descriptionVal: "120"
    },
]

export const LoginInputs = [
    {
        label: "Email",
        placeholder: "Enter email",
        type: "email"
    }, {
        label: "Password",
        placeholder: "Enter password",
        type: "password"
    }
]


export const ordersTableData = [
    {
        id: 1,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Pending",
        total: "€100",
    },
    {
        id: 2,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Processing",
        total: "€100",
    },
    {
        id: 3,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Completed",
        total: "€100",
    },
    {
        id: 4,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Cancelled",
        total: "€100",
    },
    {
        id: 5,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Rejected",
        total: "€100",
    },
    {
        id: 6,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Failed",
        total: "€100",
    },
    {
        id: 7,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "On-hold",
        total: "€100",
    },
    {
        id: 8,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Pending",
        total: "€100",
    },
    {
        id: 9,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Refunded",
        total: "€100",
    },
    {
        id: 10,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Refunded",
        total: "€100",
    },
]

export const ordersTabs = [
    "All", "Pending", "Processing", "On-hold", "Completed", "Cancelled", "Refunded", "Failed"
]
export const personalInfoInutsData = [
    {
        label: "First name:",
        placeholder: "John",
    },
    {
        label: "Last name:",
        placeholder: "Doe",
    },
    {
        label: "Full name:",
        placeholder: "John Doe",
    },
    {
        label: "Email:",
        placeholder: "Johndoe123@gmail.com",
    },
    {
        label: "Phone:",
        placeholder: "0123456789",
    },
]

export const customerTabs = [
    "All", "Active", "Inactive"
]


export const customerTableData = [
    {
        id: 1,
        customerName: "Carlo James",
        joinDate: "September 23,2023",
        totalOrders: 21,
        earnings: "€100",
        status: "Active",

    },
    {
        id: 2,
        customerName: "Ansolo Lazinatov",
        joinDate: "September 23,2023",
        totalOrders: 12,
        earnings: "€100",
        status: "InActive",

    },
    {
        id: 3,
        customerName: "Shatinon Mekalan",
        joinDate: "September 23,2023",
        totalOrders: 65,
        earnings: "€100",
        status: "Active",

    },
    {
        id: 4,
        customerName: "Jimmy Neutron",
        joinDate: "September 23,2023",
        totalOrders: 12,
        earnings: "€100",
        status: "InActive",

    },
    {
        id: 5,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 22,
        earnings: "€100",
        status: "Active",

    },
    {
        id: 6,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 23,
        earnings: "€100",
        status: "InActive",

    },
    {
        id: 7,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 30,
        earnings: "€100",
        status: "Active",

    },
    {
        id: 8,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 50,
        earnings: "€100",
        status: "InActive",

    },
    {
        id: 9,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 4,
        earnings: "€100",
        status: "Active",

    },
    {
        id: 10,
        customerName: "Carlo James",
        joinDate: "September 23,2023",
        totalOrders: 2,
        earnings: "€200",
        status: "Active",

    },

]

export const userData = [
    {
        title: "Name",
        description: "John Doe"
    },
    {
        title: "Email",
        description: "Johndoe@gmail.com"
    },
    {
        title: "Phone",
        description: "123456789"
    },
    {
        title: "Joined Date",
        description: "25-03-2023"
    },
]

export const customerDetailsTableData = [
    {
        id: 1,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Completed",
        total: "€100",
    },
    {
        id: 2,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Completed",
        total: "€100",
    },
    {
        id: 3,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Pending",
        total: "€100",
    },
    {
        id: 4,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "On-hold",
        total: "€100",
    },
    {
        id: 5,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Failed",
        total: "€100",
    },
    {
        id: 6,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Pending",
        total: "€100",
    },
    {
        id: 7,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Refunded",
        total: "€100",
    },
    {
        id: 8,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Cancelled",
        total: "€100",
    },
    {
        id: 9,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Processing",
        total: "€100",
    },
]

export const addProductData = [
    {
        label: "Product name:",
        placeholder: "Enter here..."
    }

]
export const columns = () => {
    return [
        { name: "Product Name", key: "productName" },
        { name: "Category", key: "category" },
        { name: "Total Orders", key: "totalOrders" },
        { name: "Price", key: "price" },
        {
            name: "", key: "action",

        },
    ];
};

export const catagoriesTableData = [
    {
        id: 1,
        productName: "Laundry-Dry-Ironing (per kilo)",
        category: "Laundry",
        totalOrders: 21,
        price: "€9.00",
    },
    {
        id: 2,
        productName: "5kg - Laundry - Dry - Ironing - 5kg",
        category: "Laundry",
        totalOrders: 21,
        price: "€45.00",
    },
    {
        id: 3,
        productName: "Laundry-Wash -Dry & Fold per Kg",
        category: "Laundry",
        totalOrders: 21,
        price: "€5.00",
    },
    {
        id: 4,
        productName: "5kg - Laundry-Wash -Dry & Fold",
        category: "Laundry",
        totalOrders: 21,
        price: "€25.00",
    },
    {
        id: 5,
        productName: "Bath Mat - Wash & Iron",
        category: "Laundry",
        totalOrders: 21,
        price: "€6.00",
    },
    {
        id: 6,
        productName: "Big Size Towel – Cleaning",
        category: "Laundry",
        totalOrders: 21,
        price: "€4.00",
    },
    {
        id: 7,
        productName: "Big Size Towel – Cleaning",
        category: "Laundry",
        totalOrders: 21,
        price: "€26.00",
    },
    {
        id: 8,
        productName: "Feather Duvet King – Cleaning",
        category: "Laundry",
        totalOrders: 21,
        price: "€3.00",
    },
    {
        id: 9,
        productName: "Medium Size Towel Cleaning",
        category: "Laundry",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 10,
        productName: "2 Piece Suit - Iron",
        category: "Ironing",
        totalOrders: 21,
        price: "€7.00",
    },
    {
        id: 11,
        productName: "Blouse/Top/Shirt/Silk TShirt/R...",
        category: "Ironing",
        totalOrders: 21,
        price: "€6.50",
    },
    {
        id: 12,
        productName: "Cardigan - Iron",
        category: "Ironing",
        totalOrders: 21,
        price: "€3.00",
    },
    {
        id: 13,
        productName: "Double Bed Sheet - Iron",
        category: "Ironing",
        totalOrders: 21,
        price: "€4.00",
    },
    {
        id: 14,
        productName: "Dress / Overalls - Iron",
        category: "Ironing",
        totalOrders: 21,
        price: "€6.00",
    },
    {
        id: 15,
        productName: "Duvet Cover Double - Iron",
        category: "Ironing",
        totalOrders: 21,
        price: "€5.00",
    },
    {
        id: 16,
        productName: "Duvet Cover King - Iron",
        category: "Ironing",
        totalOrders: 21,
        price: "€5.00",
    },
    {
        id: 17,
        productName: "Duvet Cover Single - Iron",
        category: "Ironing",
        totalOrders: 21,
        price: "€4.00",
    },
    {
        id: 18,
        productName: "Evening Dress / Overalls - Iron",
        category: "Ironing",
        totalOrders: 21,
        price: "€7.00",
    },
    {
        id: 19,
        productName: "Belt Combination / Leather...",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€18.00",
    },
    {
        id: 20,
        productName: "Belt textile",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€12.00",
    },
    {
        id: 21,
        productName: "Corset",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€12.50",
    },
    {
        id: 22,
        productName: "Gloves leather / suede",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€15.00",
    },
    {
        id: 23,
        productName: "Gloves mix material textile...",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€12.00",
    },
    {
        id: 24,
        productName: "Gloves textile",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€6.00",
    },
    {
        id: 25,
        productName: "Bra",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€6.00",
    },
    {
        id: 26,
        productName: "Bridal Veil",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€10.00",
    },
    {
        id: 27,
        productName: "Bridal Veil exclusive designer",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€35.00",
    },
    // {
    //     id: 3,
    //     productName: "Corset",
    //     category: "Laundry",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 4,
    //     productName: "Gloves leather / suede",
    //     category: "Ironing",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 5,
    //     productName: "Gloves mix material textile...",
    //     category: "Laundry",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 6,
    //     productName: "T-Shirt",
    //     category: "Ironing",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 7,
    //     productName: "T-Shirt",
    //     category: "Laundry",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 8,
    //     productName: "T-Shirt",
    //     category: "Ironing",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 9,
    //     productName: "T-Shirt",
    //     category: "Laundry",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 10,
    //     productName: "T-Shirt",
    //     category: "Ironing",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 11,
    //     productName: "T-Shirt",
    //     category: "Dry cleaning",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 12,
    //     productName: "T-Shirt",
    //     category: "Dry cleaning",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 13,
    //     productName: "T-Shirt",
    //     category: "Dry cleaning",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 14,
    //     productName: "T-Shirt",
    //     category: "Dry cleaning",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 15,
    //     productName: "T-Shirt",
    //     category: "Dry cleaning",
    //     totalOrders: 21,
    //     price: "€100",
    // },
    // {
    //     id: 16,
    //     productName: "T-Shirt",
    //     category: "Dry cleaning",
    //     totalOrders: 21,
    //     price: "$100",
    // },

]

export const cateogoryTabs = [
    { title: 'Laundry', id: 1 },
    { title: 'Ironing', id: 2 },
    { title: 'Dry Cleaning', id: 3 },

];

export const reportData = [
    {
        img: reportImg,
        title: "Sales reports",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        btnText: "Download",
    },
    {
        img: reportImg,
        title: "Order Reports",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        btnText: "Download",
    },
    {
        img: reportImg,
        title: "Inventory management reports",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        btnText: "Download",
    },
];

export const SettingsTabs = [
    { name: 'Personal info', id: 1 },
    { name: 'Change password', id: 2 },
];


export const settingsPasswordFields = [
    {
        id: 1,
        label: "Current password:",
        placeholder: "John",
        type: "password"
    },
    {
        id: 2,
        label: "New password:",
        placeholder: "John",
        type: "password"
    },
    {
        id: 3,
        label: "Confirm new password:",
        placeholder: "John",
        type: "password"
    },
]


export const ODTableData = [
    {
        id: 1,
        order: { name: "2 Piece Suit - Iron", imgName: suitImg },
        quantity: 2,
        category: "Laundry",
        price: "€7.00"
    },
    {
        id: 2,
        order: { name: "2 Piece Suit - Iron", imgName: suitImg },
        quantity: 2,
        category: "Laundry",
        price: "€7.00"
    },


]

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});