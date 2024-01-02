import { BsCart3 } from 'react-icons/bs'
import { sidebarTabs } from '../../constant'
import { Link } from 'react-router-dom'



function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' /> SHOP
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                {sidebarTabs.map((tab, index) => {
                    return (
                        <li key={index} className='sidebar-list-item'>
                            <Link to={tab.href}>
                                {tab.icons} {tab.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar