import { useState } from 'react'
import { Header, Sidebar } from "../components"
import { Navigate, Outlet } from 'react-router-dom'

const MainLayout = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const token = localStorage.getItem('token')

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }


    if (!token) {
        return <Navigate to="/sign-in" />
    }

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Outlet />
        </div>
    )
}

export default MainLayout