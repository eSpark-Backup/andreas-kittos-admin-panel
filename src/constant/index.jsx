import {
    BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsFillBellFill
} from 'react-icons/bs'

export const sidebarTabs = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icons: <BsGrid1X2Fill className='icon' />
    },
    {
        name: "Products",
        href: "/products",
        icons: <BsFillArchiveFill className='icon' />
    },
    {
        name: "Categories",
        href: "/catagories",
        icons: <BsFillGrid3X3GapFill className='icon' />
    },
    {
        name: "Customers",
        href: "/customers",
        icons: <BsPeopleFill className='icon' />
    },
    {
        name: "Inventory",
        href: "/inventory",
        icons: <BsListCheck className='icon' />
    },
    {
        name: "Orders",
        href: "/orders",
        icons: <BsListCheck className='icon' />
    },
    {
        name: "Reports",
        href: "/reports",
        icons: <BsMenuButtonWideFill className='icon' />
    },
    {
        name: "Setting",
        href: "/settings",
        icons: <BsFillGearFill className='icon' />
    },
]

export const chartData = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export const cardsData = [
    {
        title: "PRODUCTS",
        icon: <BsFillArchiveFill className='card_icon' />,
        value: 300
    },
    {
        title: "CATEGORIES",
        icon: <BsFillGrid3X3GapFill className='card_icon' />,
        value: 12
    },
    {
        title: "CUSTOMERS",
        icon: <BsFillGrid3X3GapFill className='card_icon' />,
        value: 33
    },
    {
        title: "ALERTS",
        icon: <BsFillBellFill className='card_icon' />,
        value: 42
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
        total: "$100",
    },
    {
        id: 2,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Processing",
        total: "$100",
    },
    {
        id: 3,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Completed",
        total: "$100",
    },
    {
        id: 4,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Cancelled",
        total: "$100",
    },
    {
        id: 5,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Rejected",
        total: "$100",
    },
    {
        id: 6,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Failed",
        total: "$100",
    },
    {
        id: 7,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "On-hold",
        total: "$100",
    },
    {
        id: 8,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Pending",
        total: "$100",
    },
    {
        id: 9,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Refunded",
        total: "$100",
    },
    {
        id: 10,
        order: "123456",
        prdDate: "September 23,2023",
        name: "Carlo James",
        qty: 2,
        coupon: "Java-10%",
        status: "Refunded",
        total: "$100",
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
    "All", "Active", "InActive"
]


export const customerTableData = [
    {
        id: 1,
        customerName: "Carlo James",
        joinDate: "September 23,2023",
        totalOrders: 21,
        earnings: "$100",
        status: "Active",

    },
    {
        id: 2,
        customerName: "Ansolo Lazinatov",
        joinDate: "September 23,2023",
        totalOrders: 12,
        earnings: "$100",
        status: "InActive",

    },
    {
        id: 3,
        customerName: "Shatinon Mekalan",
        joinDate: "September 23,2023",
        totalOrders: 65,
        earnings: "$100",
        status: "Active",

    },
    {
        id: 4,
        customerName: "Jimmy Neutron",
        joinDate: "September 23,2023",
        totalOrders: 12,
        earnings: "$100",
        status: "InActive",

    },
    {
        id: 5,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 22,
        earnings: "$100",
        status: "Active",

    },
    {
        id: 6,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 23,
        earnings: "$100",
        status: "InActive",

    },
    {
        id: 7,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 30,
        earnings: "$100",
        status: "Active",

    },
    {
        id: 8,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 50,
        earnings: "$100",
        status: "InActive",

    },
    {
        id: 9,
        customerName: "John Doe",
        joinDate: "September 23,2023",
        totalOrders: 4,
        earnings: "$100",
        status: "Active",

    },
    {
        id: 10,
        customerName: "Carlo James",
        joinDate: "September 23,2023",
        totalOrders: 2,
        earnings: "$200",
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
        total: "$100",
    },
    {
        id: 2,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Completed",
        total: "$100",
    },
    {
        id: 3,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Pending",
        total: "$100",
    },
    {
        id: 4,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "On-hold",
        total: "$100",
    },
    {
        id: 5,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Failed",
        total: "$100",
    },
    {
        id: 6,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Pending",
        total: "$100",
    },
    {
        id: 7,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Refunded",
        total: "$100",
    },
    {
        id: 8,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Cancelled",
        total: "$100",
    },
    {
        id: 9,
        order: "123456",
        prdDate: "September 23,2023",
        qty: 2,
        coupon: "Java-10%",
        status: "Processing",
        total: "$100",
    },
]

export const addProductData = [
    {
        label:"Product name:",
        placeholder:"Enter here..."
    }
]