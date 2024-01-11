import { useState } from 'react'
import { Header, Sidebar } from "../components"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
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