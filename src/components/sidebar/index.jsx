import { BsCart3 } from 'react-icons/bs'
import { sidebarTabs } from '../../constant'
import { Link, useLocation  } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";



function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const location = useLocation();

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <Link className='decoration-none' to={"/"}>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' /> SHOP
                </div>
                </Link>
                <span className='icon close_icon' onClick={OpenSidebar}>
                <GiHamburgerMenu />
                </span>
            </div>

            <ul className='sidebar-list'>
                {sidebarTabs.map((tab, index) => {
                    const isActive = location.pathname === tab.href;
                    return (
                        <Link to={tab.href} className='sidebar-list-links'>
                            <li key={index} className={`sidebar-list-item ${isActive ? 'sidebar-list-item-active' : ''}`}>
                                <img src={`/src/assets/icons/${tab.icons}`}/> <p>{tab.name}</p>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar