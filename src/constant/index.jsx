import {BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill} from 'react-icons/bs'
import { FaUserGroup } from "react-icons/fa6";
import { reportImg, suitImg } from '../assets';

export const sidebarTabs = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icons: "Dashboard"
    },
    {
        name: "Categories",
        href: "/catagories",
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
        icon: <BsFillBellFill className='card_icon' />,
        value: 160
    },
    {
        title: "CATEGORIES",
        icon: <BsFillGrid3X3GapFill className='card_icon' />,
        value: 3
    },
    {
        title: "CUSTOMERS",
        icon: <FaUserGroup className='card_icon' />,
        value: 33
    },
    {
        title: "ORDERS",
        icon: <BsFillArchiveFill className='card_icon' />,
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
        productName: "Belt Combination / Leather...",
        category: "Laundry",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 2,
        productName: "Belt textile",
        category: "Ironing",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 3,
        productName: "Corset",
        category: "Laundry",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 4,
        productName: "Gloves leather / suede",
        category: "Ironing",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 5,
        productName: "Gloves mix material textile...",
        category: "Laundry",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 6,
        productName: "T-Shirt",
        category: "Ironing",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 7,
        productName: "T-Shirt",
        category: "Laundry",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 8,
        productName: "T-Shirt",
        category: "Ironing",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 9,
        productName: "T-Shirt",
        category: "Laundry",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 10,
        productName: "T-Shirt",
        category: "Ironing",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 11,
        productName: "T-Shirt",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 12,
        productName: "T-Shirt",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 13,
        productName: "T-Shirt",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 14,
        productName: "T-Shirt",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 15,
        productName: "T-Shirt",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "€100",
    },
    {
        id: 16,
        productName: "T-Shirt",
        category: "Dry cleaning",
        totalOrders: 21,
        price: "$100",
    },

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
    { title: 'Personal info', id: 1 },
    { title: 'Change password', id: 2 },
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